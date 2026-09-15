/* ---------------------------------------------------------------------------
   reviews.js — the whole database for The Nerve.

   Add entries with builder.html, or by hand. Newest-first is handled by the
   page (it sorts on `date`), so you can paste new entries anywhere in the array.

   Covers live in the repo at /images/nerve/<slug>.jpg (2:3 poster crop looks
   best; anything else gets centre-cropped). Leave `cover` empty and the card
   falls back to a typographic tile, so a missing image never breaks the grid.

   Fields
     slug     unique id, used for the cover filename and the deep link
     title    what it's called
     creator  author / director / showrunner / chef / studio / company / artist
     category books | film | tv | restaurants | games | theatre | music | misc
     year     release or visit year (string or number, optional)
     where    venue, suburb, platform — optional, shown next to the year
     cover    "/images/nerve/<slug>.jpg" or "" for the fallback tile
     rating   0–5 in half-star steps, or null for no number
     verdict  short custom verdict, e.g. "worth the trip" — or "" for none
     date     ISO date you logged it (YYYY-MM-DD) — this drives the feed order
     tags     array of strings, searchable
     review   the writing. One line or two thousand words; the card expands.
     link     optional external URL (booking page, publisher, your own essay)
--------------------------------------------------------------------------- */

// Set to false once you've deleted the placeholders below.
const REVIEWS_ARE_SAMPLES = true;

const REVIEWS = [
  {
    slug: "sample-book",
    title: "Sample Book Entry",
    creator: "An Author",
    category: "books",
    year: 2021,
    where: "",
    cover: "",
    rating: 4.5,
    verdict: "",
    date: "2026-09-12",
    tags: ["fiction", "placeholder"],
    review:
      "A long-form entry, to show what the expanded view does with real length.\n\nParagraph breaks survive — write with blank lines between them and they render as separate paragraphs. There is no length limit and no truncation in the modal, so a four-hundred-word piece and a single sentence can live in the same feed without either looking wrong.\n\nDelete this once you have something real to say.",
    link: ""
  },
  {
    slug: "sample-film",
    title: "Sample Film Entry",
    creator: "A Director",
    category: "film",
    year: 1998,
    where: "Cinema Nova",
    cover: "",
    rating: 3,
    verdict: "",
    date: "2026-09-10",
    tags: ["placeholder"],
    review: "A short one. Two sentences is a perfectly respectable review.",
    link: ""
  },
  {
    slug: "sample-restaurant",
    title: "Sample Restaurant Entry",
    creator: "Modern Australian",
    category: "restaurants",
    year: 2026,
    where: "Brunswick",
    cover: "",
    rating: null,
    verdict: "worth the trip",
    date: "2026-09-08",
    tags: ["placeholder", "melbourne"],
    review:
      "This one has no star rating at all — just a custom verdict, which shows as a pill where the stars would be. Use it when a number would be a lie.",
    link: ""
  },
  {
    slug: "sample-tv",
    title: "Sample Television Entry",
    creator: "A Showrunner",
    category: "tv",
    year: 2024,
    where: "Season 2",
    cover: "",
    rating: 4,
    verdict: "",
    date: "2026-09-05",
    tags: ["placeholder"],
    review: "Seasons go in the `where` field, so the title stays clean in the grid.",
    link: ""
  },
  {
    slug: "sample-game",
    title: "Sample Game Entry",
    creator: "A Studio",
    category: "games",
    year: 2019,
    where: "PC",
    cover: "",
    rating: 5,
    verdict: "",
    date: "2026-09-02",
    tags: ["placeholder", "rpg"],
    review: "Five stars, no half.",
    link: ""
  },
  {
    slug: "sample-theatre",
    title: "Sample Theatre Entry",
    creator: "A Company",
    category: "theatre",
    year: 2026,
    where: "Malthouse",
    cover: "",
    rating: 3.5,
    verdict: "",
    date: "2026-08-29",
    tags: ["placeholder", "melbourne"],
    review:
      "Live performance has no canonical cover art, so this is the category most likely to use one of your own photographs.",
    link: ""
  },
  {
    slug: "sample-album",
    title: "Sample Album Entry",
    creator: "An Artist",
    category: "music",
    year: 2017,
    where: "",
    cover: "",
    rating: null,
    verdict: "",
    date: "2026-08-24",
    tags: ["placeholder"],
    review: "No rating and no verdict — the card just shows the writing. That's allowed too.",
    link: ""
  },
  {
    slug: "sample-misc",
    title: "Sample Miscellaneous Entry",
    creator: "Unclassifiable",
    category: "misc",
    year: 2026,
    where: "",
    cover: "",
    rating: 2,
    verdict: "",
    date: "2026-08-20",
    tags: ["placeholder"],
    review: "Exhibitions, podcasts, a particularly bad train replacement bus. Anything that doesn't fit.",
    link: ""
  }
];
