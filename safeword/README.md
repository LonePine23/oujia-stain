# Safe Word

A daily heist game: one safe, seven tumblers, and each tumbler is a word you guess from its definition.

This README is being built in three stages, matching how the game is being built. **All three parts are complete:** the puzzle data, the game, and the optional crew stats.

---

## What's in this folder

| File or folder | What it is |
|---|---|
| `safe-word/` | **The game folder.** This is what goes on your website. |
| `safe-word/index.html` | The game itself. |
| `safe-word/words.js` | Every word the game accepts as a guess (about 25,000). |
| `safe-word/days/` | One small file per day, plus `index.js`, which lists which file belongs to which date. |
| `safe-word/days/stub-1.js` … `stub-3.js` | Three test days. **Delete these before launch** (see the checklist). |
| `build_data.py` | The script that makes everything in `safe-word/`. |
| `blocklist.txt` | Words that must never appear anywhere, not even as guesses. Edit it freely. |
| `sense_choices.txt` | Your corrections: pick which Wiktionary meaning a word uses, or stop a word being an answer. |
| `extra_words.txt` | Words you want to let in even though they're rarer than the usual limits. |
| `pilot_report.md` | The last quality pilot (30 sample words plus statistics). |
| `qa_report.md` | The report from the last full build. Read this every time you rebuild. |
| `supabase_setup.sql` | The database set-up for the optional crew stats (Part 3). It's pasted into Supabase and never goes on your website. |
| The three big data files | The sources the script reads. They are **not** part of the game and never go on your website. |



---

## Part 1 — Building the puzzle data

You only need to do this when you want new puzzles: before launch, and then about once a year.

### Step 1: One-time setup

You need to do this once per computer.

1. **Install Python.**
   - Go to https://www.python.org/downloads/ and click the big yellow **Download Python** button.
   - Open the file you downloaded and click through the installer.
   - When it finishes, a Finder window opens. Double-click **Install Certificates.command** in that window.
2. **Open Terminal.** Press ⌘ + Space, type `Terminal`, and press Return.
3. **Install the five packages the script needs.** Copy this line, paste it into Terminal, and press Return:

   ```
   python3 -m pip install numpy openpyxl wordfreq snowballstemmer orjson
   ```

   It finishes in under a minute. You may see a yellow warning about upgrading pip. You can ignore it.

### Step 2: The data files

All of these must sit **directly inside `safe-word-build`**, next to `build_data.py`, with exactly these names.

| File | Size | Where to get it |
|---|---|---|
| `kaikki.org-dictionary-English.jsonl` | about 3.3 GB | https://kaikki.org/dictionary/English/index.html → click **"Download postprocessed JSONL data for all word senses in the English dictionary"** |
| `numberbatch-en-19.08.txt.gz` | about 325 MB | https://conceptnet.s3.amazonaws.com/downloads/2019/numberbatch/numberbatch-en-19.08.txt.gz (if Safari unzips it to `.txt`, that's fine) |
| `English_Word_Prevalences.xlsx` | about 8 MB | https://osf.io/nbu9e/download |

The word frequencies (wordfreq) come inside the Python package you installed in Step 1, so there's nothing to download for them.

### Step 3: Open Terminal in the folder

1. In Terminal, type `cd` followed by a space. **Don't press Return yet.**
2. Drag the `safe-word-build` folder from Finder into the Terminal window. Its location appears after `cd`.
3. Press Return.

You need to do this every time you open a new Terminal window to run the script.

### Step 4: Run a pilot (recommended before every full build)

```
python3 build_data.py --pilot
```

This takes under a minute and writes `pilot_report.md`. Open the report in any text editor and check two things:

- **The funnel table.** This shows how many words survive each filter.
- **The 30 sample entries.** Do the definitions read well? Is the Walkie Talkie tip a fair hint?

### Step 5: Build a year of puzzles

```
python3 build_data.py --start 2027-01-01
python3 build_data.py --stub
```

- The first line builds 365 days starting from the date you give. Usually that's your launch date. For a different number of days, add `--days`, for example `--days 400`.
- The second line rebuilds the three test days. Skip it once you've deleted the stub before launch.
- Each command takes under a minute. Together they write `safe-word/words.js`, `safe-word/days/` and `qa_report.md`.

**Re-running is safe.**
- Any day before the `--start` date that already exists is kept exactly as it was, so a puzzle somebody has already played never changes.
- Words that have never been played are scheduled first, so each year carries on through the word bank instead of starting again.

**If the script says STOPPED:** a tier has fewer than 150 usable words, so the script writes nothing. Loosen `PREVALENCE_MIN`, raise `FREQ_RANK_MAX` or raise `CLARITY_MAX` (see Step 8), then rerun.

### Step 6: Next year

1. Download a fresh `kaikki.org-dictionary-English.jsonl` (Wiktionary keeps improving) and replace the old one.
2. Look up the last date in your current schedule. It's the last line of `safe-word/days/index.js`.
3. Run the build with `--start` set to the **day after** that date, then rebuild the stub if you're still using it:

   ```
   python3 build_data.py --start 2027-10-05
   ```

4. Read `qa_report.md`.

### Step 7: Fix, add or remove words

- **The definition picks the wrong meaning** (for example *bowl* → "the outer part of a salad spinner"):
  1. Open the word's Wiktionary page, such as https://en.wiktionary.org/wiki/bowl.
  2. Find the meaning you want.
  3. Add a line to `sense_choices.txt` with a few words copied from that definition, for example `bowl = round hollow part`.

  The definition still has to pass the normal rules: 4–25 words, not slang or obsolete, and it can't give the word away. If it doesn't, the script tells you and keeps its own choice.
- **A good word is missing** because no meaning was clear enough (for example *mouse*): add `mouse = rodent` to `sense_choices.txt`.
- **A word shouldn't be an answer**, but it's fine as a guess: add `word = -` to `sense_choices.txt`.
- **A word must never appear at all**, for example an offensive one: add it to `blocklist.txt`.
- **Add a rarer word:** put it in `extra_words.txt`. This only lets it past the two "is it common enough?" checks.

You can't type in your own definitions. That's deliberate: every definition comes from Wiktionary, word for word.

After any of these changes, run `--pilot` to check, then rebuild with `--start` set to a **future** date. That way days already played don't change.

### Step 8: Settings you can change

These are at the top of `build_data.py`. Open it in TextEdit and look for the `CONFIG` section.

| Setting | Now | What it does |
|---|---|---|
| `FREQ_RANK_MAX` | 25000 | Answers must be among this many most common words. Higher means more words, including rarer ones. |
| `PREVALENCE_MIN` | 0.90 | At least this share of people must know the word (from Brysbaert et al.). Lower means more words. |
| `CLARITY_MAX` | 50 | How clearly a definition must point to its word (see below). Higher means more words but vaguer definitions. |
| `FIRST_SENSE_CLARITY` | 75 | The extra leeway given to Wiktionary's first (main) meaning. |
| `WORDS_PER_TIER` | None | None uses every eligible word. A number such as 400 samples that many per tier instead. |
| `TECHNICAL_TOPICS` | (list) | Topic labels that rule a meaning out, such as maths, chemistry and linguistics. |
| `SEED` | safe-word | Change this to get a different (but repeatable) order of puzzles. |

### How the data is made

This is so you know what you're checking.

1. **Word pool.** A candidate is a single common English word that is a noun, verb, adjective or adverb, known by at least 90% of people, and not blocklisted. Grammar words (*it*, *in*, *can*, *never*) and words whose page starts with "past tense of…" are left out.
2. **Choosing the meaning ("first clear sense").**
   - The script reads the word's meanings in Wiktionary's order.
   - It skips any meaning that is obsolete, slang, technical, cut off, only makes sense next to another meaning, or is outside 4–25 words.
   - For the rest, it asks: if you searched every common word by this definition's meaning, would the answer come up in the top 50?
   - It uses the first meaning that passes. Wiktionary's own first meaning gets a little extra leeway (top 75).
   - This keeps the definition on the everyday meaning that the dial also uses: *bat* is the cricket bat, not the animal; *novel* is the book.
   - Words where no meaning passes are dropped.
3. **Leak filter.**
   - If the answer (or a word sharing its root) appears once in the definition, it's replaced with `____`.
   - If it appears twice or more, that meaning is skipped.
   - Nothing is ever reworded.
4. **Dial.** Each answer's 300 nearest words come from ConceptNet Numberbatch.
5. **Walkie Talkie.**
   - The tip is the closest word on the dial that is a plain, well-known word, doesn't share the answer's root, and isn't already in the definition.
   - It's a *close* word, not always a synonym. Occasionally it's an opposite: *decrease* → increase.
6. **Tiers.** Survivors are ranked by frequency and cut into seven equal tiers. Tier 1 is the most common.
7. **Spellings.** Where Wiktionary records a regional spelling (offense/offence, minimize/minimise), both spellings count as correct.

**Current build:**
- 8,823 eligible words, about 1,260 per tier.
- By part of speech: 61% nouns, 23% adjectives, 14% verbs, 4% adverbs.
- No answer repeats for about 3½ years.
- Day files average 22 KB. `words.js` is 206 KB.

**Day-file format** (for Stage 2): `{date, tumblers: [{w, def, pos, tier, tip, near[300], alt?}]}`.

---

## Part 2 — The game

The whole game is one file, `safe-word/index.html`. It is dark-only. You start outside the Owe & Behold First National Bank, press GO to zoom inside to the vault, press Ready? and work through seven safes. Each safe has a 30-second clock, and you can guess as many words as you like before it runs out. Your closest guess sets the take. Three pieces of gear (Blueprint, Walkie Talkie, Kaleidoscope) can each be used once a day. Picking one stops the clock and covers the screen while you decide, and using it resets the clock to 30. When the job is done, the home screen shows your haul and a countdown to the next one. Text is set in IBM Plex Sans (anything you read) and IBM Plex Mono (labels, buttons and what you type), with Press Start 2P kept for big titles and numbers. All three fonts are built into the file. It has no framework and no server code of its own. It loads `words.js` and the day files with ordinary script tags, so it works both on your website and when you double-click `index.html` on your computer.

### Try it on your computer

1. Open the `safe-word` folder and double-click `index.html`. It opens in your browser.
2. To test without touching your real stats, add one of these to the end of the address in the address bar and press Return:

| Add this | What you get |
|---|---|
| `?date=stub` (or `?date=stub-2`, `?date=stub-3`) | The three test days, with a "Stub data — for testing only" banner. |
| `?date=2026-11-20` | Any scheduled day. Test days are never added to your dossier. |

Your progress is saved in the browser for each date. To replay a test day, open it in a private window.

### Settings at the top of `index.html`

Open `index.html` in TextEdit. Near the top of the `<script>` section is a block marked `CONFIG — edit these`. Change only the values between the quotation marks or the numbers.

| Setting | Now | What it does |
|---|---|---|
| `LAUNCH_DATE` | `"2026-10-05"` | The day that counts as Heist 1. **Set it to your real launch day.** |
| `SHARE_URL` | `"https://geordie.lol/safeword"` | The first line of the share text. |
| `TUMBLER_SECONDS` | `30` | Seconds per safe. Using a piece of gear resets the clock to this. |
| `SCREEN_EFFECTS` | `"on"` | Glow and scanlines. `"on"`: on to start with, and players can switch them off in Settings. `"off"`: off to start with, and players can switch them on. `"none"`: no effects at all, and the setting disappears from Settings. |
| `OUTCOMES`, `NEXT_LINES`, `TIME_UP` | | The film-noir lines shown after each safe. Edit the words freely, but keep the quotation marks. |
| `SUPABASE_URL`, `SUPABASE_ANON_KEY` | blank | Crew stats (Part 3). Leave them blank to switch crew stats off. |
| `PAY_CLICK` and `BANDS` | | Payouts and dial angles. Change them only if you're redesigning the scoring. |

**Important:** if you change `LAUNCH_DATE`, rebuild the data with `--start` set to the same date (Part 1, Step 5). That way Heist 1 is the first day with a puzzle.

### Put it on geordie.lol

1. Copy the whole `safe-word` folder into your website repository. This includes `index.html`, `words.js` and the `days` folder. Rename the folder to `safeword` if you want the address to be geordie.lol/safeword, to match `SHARE_URL`.
2. Commit and push, the same way you publish your other games.
3. Visit the address and check that today's safe loads.

Don't copy anything else from `safe-word-build`. The big data files, the script and the reports stay on your computer.

## Part 3 — Crew stats (optional)

After the getaway, players can see how they did against everyone else that day:

- "Better than X% of crews"
- how many crews finished and the average take
- a bar chart of everyone's hauls in $25,000 steps, with your bar marked **You**
- how many crews cracked each safe

On the street screen after the job, a single line says "Better than X% of crews". Nothing is shown until at least 10 crews have finished that day. Until then the panel says how many have finished so far.

This uses a free Supabase database. If you skip this part, the game works exactly the same and never contacts anyone.

### What gets stored

For each finished game:

- a random ID made in the player's browser
- the date
- the seven payouts (these also show which safes were cracked)
- which safe each piece of gear was used on

Nothing else is stored: no names, no guesses and no IP addresses. Rows are deleted after 14 days. Test days (`?date=…` other than today, and the stub days) are never sent.

### Set it up (about 10 minutes)

1. Go to https://supabase.com and sign in. Click **New project**.
   - **Name:** `safe-word`
   - **Database password:** click **Generate a password** and save it in your password manager. You won't need it for anything in this README.
   - **Region:** Sydney (closest to Melbourne).
   - **Plan:** Free.
   - Click **Create new project** and wait a minute or two until it says the project is ready.
2. In the left sidebar, click **SQL Editor**, then **New query** (or the **+** button).
3. Open `supabase_setup.sql` from your `safe-word-build` folder in TextEdit. Select everything (Cmd+A), copy it (Cmd+C), paste it into the Supabase editor (Cmd+V) and click **Run**.
   - It should say **Success. No rows returned.**
   - If Supabase warns about a "destructive operation", click **Run this query**. The warning is about the line that deletes results older than 14 days.
   - Running the file a second time is safe. It never deletes today's data.
4. Find your two connection values:
   - **Project URL:** click **Connect** at the top of the dashboard (or open **Project Settings → Data API**). It looks like `https://abcdefghijkl.supabase.co`.
   - **Publishable key:** open **Project Settings → API Keys** and copy the **Publishable key**. It starts with `sb_publishable_`.
5. Open `safe-word/index.html` in TextEdit and find the `CONFIG — edit these` block. Paste the two values between the quotation marks:

   ```
   const SUPABASE_URL = "https://abcdefghijkl.supabase.co";
   const SUPABASE_ANON_KEY = "sb_publishable_xxxxxxxxxxxx";
   ```

   Save the file.
6. Test it. Open `index.html` **without** a `?date=` on the end and play today's job through to the getaway.
   - The crew panel should say "1 crew has finished today's job".
   - In Supabase, click **Table Editor → safeword_results**. Your game should be there as one row.
7. Publish the updated `index.html` to geordie.lol as usual.

### Is it safe to put the key in the game?

Yes. The publishable key is meant to be public, and anyone can see it in the page. What protects the data is the set-up in `supabase_setup.sql`:

- **The table is locked.** Row level security is on, there are no policies, and the public roles have no permissions. Nobody can read, change or delete rows through the API.
- **Only two functions are open:**
  - `safeword_submit_result` accepts one result per player per day. It rejects anything impossible: payouts that aren't real payout amounts, the wrong number of safes, gear on a safe that doesn't exist, or a date more than a day away from today.
  - `safeword_get_stats` only ever returns totals, never single results.
- **There are hard limits:** 100,000 results a day at most, and everything older than 14 days is deleted automatically.

People can still send fake results. That's true of every game that stores self-reported scores, and the Credits screen says so.

Supabase's **Advisors → Security Advisor** may list "RLS Enabled No Policy" for `safeword_results`. That's expected: it's how the table is locked.

### Good to know

- **Free projects pause** after a week with no visitors. While players visit daily, it stays awake. If it ever pauses, the game still works, and the crew panel just says it couldn't reach the crew. Click **Restore** on the project in the Supabase dashboard to wake it.
- **Switching crew stats off:** empty the two values in `index.html` (leave the quotation marks: `""`).
- **If the crew panel always says "Couldn't reach the crew":** check that the URL has no typos and starts with `https://`. If it's still failing, try the older key instead. In **Project Settings → API Keys**, open the **Legacy API keys** tab, copy the `anon` key (a long string starting with `eyJ`) and paste it in place of the publishable key. The game handles either kind.

---

## Credits and licences

The game's credits panel will carry these lines.

- **Wiktionary** (https://en.wiktionary.org): definitions. © Wiktionary contributors, licensed CC BY-SA 4.0. Target words have been blanked from some definitions.
- **Wiktextract**: Tatu Ylonen, *Wiktextract: Wiktionary as Machine-Readable Structured Data*, LREC 2022. Data via **kaikki.org** (https://kaikki.org).
- **ConceptNet Numberbatch 19.08**: the dial and the Walkie Talkie. "This data contains semantic vectors from ConceptNet Numberbatch, by Luminoso Technologies, Inc." CC BY-SA 4.0. Speer, Chin & Havasi (2017), *ConceptNet 5.5*, AAAI.
- **wordfreq** by Robyn Speer: word frequencies. CC BY-SA 4.0. Includes data from SUBTLEX and Google Books Ngrams.
- **Word prevalence**: Brysbaert, Mandera, McCormick & Keuleers (2019), *Word prevalence norms for 62,000 English lemmas*, Behavior Research Methods 51, 467–479. Used at build time only.
- **Safe Word's puzzle data** (`safe-word/days/` and `words.js`) is released under CC BY-SA 4.0, because it contains Wiktionary and Numberbatch material. The game code itself is not affected by this licence.

(Leipzig Corpora and Open English WordNet were both tried during Stage 1 and are no longer used, so they are not credited.)

---

## Before-launch checklist

**Data (from Stage 1):**

- [ ] Read the licence shown on the OSF page for the prevalence data (https://osf.io/g4xrt/). I couldn't confirm it.
- [ ] Check that the credits panel carries every line under "Credits and licences" above.
- [ ] Read `qa_report.md`: the 20 random entries, the funnel and the leak-filter examples.
- [ ] Skim a few weeks of definitions for odd meaning choices, and fix them in `sense_choices.txt`.
- [ ] Check that the Walkie Talkie tips feel fair.
- [ ] Review `blocklist.txt`, including the "distressing topics" section.
- [ ] Rebuild with `--start` set to your real launch date.
- [ ] **Delete the stub data:** remove `stub-1.js`, `stub-2.js` and `stub-3.js` from `safe-word/days/`. After that, `?date=stub` shows a "No safe today" message, which is what you want. Nothing in `index.html` needs changing. If you rebuild later, don't run `--stub`.

**Game (from Stage 2):**

- [ ] Set `LAUNCH_DATE` to your launch day, and rebuild the data from the same date.
- [ ] Check that `SHARE_URL` matches the address you publish to.
- [ ] Play a full day on your phone (360px wide or more): the definition reads without zooming, every button is easy to tap, and nothing scrolls sideways.
- [ ] Try it with your phone's "reduce motion" setting on: no zoom, rain or spinning, but every result still shows.
- [ ] Try it with VoiceOver on: results, the clock warnings and the final haul are all read out.
- [ ] Refresh mid-safe: the clock carries on from where it was, with no extra time. Refresh while a gear card is open: the clock is still stopped.
- [ ] Finish a day and refresh: it goes back to the street, showing your haul and the countdown.
- [ ] Decide whether to keep the glow and scanlines (`SCREEN_EFFECTS`), and whether players should be able to switch them.
- [ ] Share: the copied text is exactly the three lines.
- [ ] Crew stats (if you're using them): `supabase_setup.sql` has been run, the URL and key are in `index.html`, and a real day's game shows up in **Table Editor → safeword_results**.

Items for the database and community stats will be added in Stage 3.
