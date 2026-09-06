/* ===========================================================================
   YUMMERS — service worker
   ---------------------------------------------------------------------------
   A service worker is a script the browser keeps running in the background,
   separate from the page. Its job here is small and deliberate:

     • cache the app's own files (index.html, the manifest, the icons) so
       Yummers opens instantly and still opens with no connection
     • NEVER cache anything from Supabase — your recipes and login must always
       be fetched live, or you'd see stale data and broken logins

   HOW TO UPDATE THE APP AFTER YOU EDIT index.html
   Change CACHE_VERSION below (v1 → v2). That makes the browser throw away the
   old cache and fetch everything fresh. If you forget, you may keep seeing the
   old version even after uploading a new one.
   =========================================================================== */

const CACHE_VERSION = 'yummers-v4';

// The "app shell": the files that make up the app itself, as opposed to your
// data. Paths are relative, so this works from any folder on your site.
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

/* --- install: pre-download the shell into the cache ----------------------- */
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    // addAll fails entirely if any single file 404s, which would be annoying
    // while you haven't added your icons yet — so add them one at a time and
    // shrug off the failures.
    await Promise.all(SHELL.map(url =>
      cache.add(url).catch(err => console.warn('[sw] could not cache', url, err))
    ));
    self.skipWaiting();          // activate the new worker straight away
  })());
});

/* --- activate: delete caches from older versions -------------------------- */
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(n => n.startsWith('yummers-') && n !== CACHE_VERSION)
      .map(n => caches.delete(n)));
    await self.clients.claim();  // take control of already-open tabs
  })());
});

/* --- fetch: decide how each request is handled ---------------------------- */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only ever touch plain GET requests.
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Hands off anything to do with Supabase — data, auth, image downloads.
  // Signed image URLs expire, so caching them would just serve broken links.
  if (url.hostname.endsWith('.supabase.co') || url.hostname.endsWith('.supabase.in')) return;

  // The page itself: try the network first so you get updates promptly, and
  // fall back to the cached copy when offline.
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE_VERSION);
        cache.put('./index.html', fresh.clone());
        return fresh;
      } catch {
        return (await caches.match('./index.html')) ||
               new Response('<h1>Yummers is offline</h1><p>Reconnect and try again.</p>',
                            { headers: { 'Content-Type': 'text/html' } });
      }
    })());
    return;
  }

  // Everything else that belongs to the app (icons, manifest, the Supabase
  // library from the CDN): serve from cache if we have it, otherwise fetch and
  // keep a copy for next time.
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      // Only cache successful, complete responses.
      if (fresh && fresh.status === 200 && fresh.type !== 'opaque') {
        const cache = await caches.open(CACHE_VERSION);
        cache.put(req, fresh.clone());
      }
      return fresh;
    } catch (err) {
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});
