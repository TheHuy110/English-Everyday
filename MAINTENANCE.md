# Maintaining "Tiếng Anh mỗi ngày"

A static site (no server, no build step for the site itself). The browser loads `index.html`, `style.css`, `app.js` and the data files in `content/`. The `tools/` folder only prepares data files; it is never part of the running site.

## 1. Folder map

| Path | What it is | Edit by hand? |
|---|---|---|
| `index.html`, `style.css`, `app.js` | The site | Yes |
| `content/grammar.js`, `questions.js`, `tests.js`, `resources.js`, `tips.js`, `wordpairs.js`, `progress.js`, `settings.js`, `ipa.js` | Content and settings | Yes |
| `content/oxford.csv`, `meanings.csv`, `odd-sounds.csv` | **Sources** for generated files | Yes (these are what you edit) |
| `content/questionsA1.js` ... `questionsC2.js` | **Generated** from `questions.js` by `split-questions.js` (what the site actually loads) | No |
| `content/vocab.js`, `vocab-def.js`, `odd-sounds.js`, `manifest.js`, `stress.js`, `sound-groups.js`, `quotes.js` | **Generated** | No. Re-run the tool instead |
| `content/word-notes.csv` | Notes for you only; the site never reads it | No (generated) |
| `tools/quotes-source.txt` | Source for `quotes.js` | Yes |
| `audio/uk_audio/`, `audio/us_audio/` | Word audio, `<word>_uk.mp3` / `<word>_us.mp3` | Add files |

Golden rule: **edit the source, then run its tool. Never hand-edit a generated file**, because the next run overwrites it.

File names are case-sensitive on GitHub Pages. Keep content file names lowercase (`progress.js`, not `Progress.js`).

## 2. Publishing an update (checklist)

1. Edit sources (see section 4).
2. Run the matching build tool(s) (section 3).
3. `node tools/split-questions.js` if you changed `questions.js` (it rewrites the per-level files and the manifest). Otherwise `node tools/build-manifest.js` if you changed grammar, tests, IPA or vocab (it updates the counts on the home page).
4. `node tools/check-content.js` and fix any `ERROR` lines.
5. `node tools/bump-version.js` (raises the version by one).
6. Commit and push to the branch GitHub Pages publishes (currently `lazy-loading`).
7. Wait for the green "pages build and deployment" run in the repo's **Actions** tab, then hard refresh (Ctrl+Shift+R) and check the footer shows the new "Phiên bản N".

Test locally before pushing: from the repo folder run `python3 -m http.server 8000` and open `http://localhost:8000`. Opening `index.html` as a file will not work, because pages load their data on demand.

## 3. The tools (`tools/`)

All commands run from the repo root. Node tools need Node.js; the two `.py` tools need Python 3 and `pip install cmudict`.

### `build-vocab.js`: word list and meanings
- **Command:** `node tools/build-vocab.js`
- **Reads:** `content/oxford.csv` (word list) and `content/meanings.csv` (columns `id,meaning`; `id` is the order number from `oxford.csv`, matched by ID and never by row position).
- **Writes:** `content/vocab.js`, `content/vocab-def.js`, `content/word-notes.csv`.
- **Use when:** you change any meaning or the Oxford list. A word with no row in `meanings.csv` simply shows "(chưa có nghĩa)".
- It warns about a meaning ID that has no word.

### `build-odd-sounds.js`: "different sound" questions
- **Command:** `node tools/build-odd-sounds.js` (add `--rebalance` to also spread the correct answer evenly over A/B/C/D inside the CSV)
- **Reads:** `content/odd-sounds.csv`. **Writes:** `content/odd-sounds.js`.
- **CSV columns:** `option 0, option 1, option 2, option 3, answer, Phonetic Focus`.
  - Put the underlined letters between asterisks: `c*a*t`, `*ch*air`, `f*ir*st`.
  - `answer` is the number of the odd word, counting from 0 (0, 1, 2 or 3).
  - The last column is an optional note, e.g. `/ʌ/ vs /ɑː/ (hot)`; the Admin page and test show it to you.
- The site shuffles the option order on screen every time, so the CSV order only matters for how the Admin table looks.
- Errors are printed with the CSV line number; bad rows are skipped.

### `build-stress.py`: "different stress" word groups
- **Command:** `python3 tools/build-stress.py`
- **Reads:** `content/vocab.js` plus the CMU dictionary. **Writes:** `content/stress.js` (words grouped as `syllables:stressed-syllable`, counted from 0).
- **Use when:** the Oxford word list changes. Words whose CMU and Oxford pronunciations disagree are left out on purpose.
- The stress questions are generated at random from these groups (3 words from one group, 1 from another).

### `build-sounds.py`: "different sound" word groups
- **Command:** `python3 tools/build-sounds.py` (add `--audit` to print sample words per group). Needs `pip install cmudict`.
- **Reads:** `content/vocab.js` plus the CMU dictionary. **Writes:** `content/sound-groups.js` (spelling -> sound -> words, the underlined letters between `*`).
- Each word is aligned letter by letter with its pronunciation using the spelling rules in `RULES` at the top of the tool. To teach it a new spelling or a new way of reading one, edit `RULES` and run it again. Words with an unclear alignment are left out.
- The "different sound" questions are generated from these groups (3 words read the spelling one way, 1 another way). About a quarter still come from the hand-made `odd-sounds.csv`.

### `build-quotes.py`: quotes for "Phiên âm sang câu"
- **Command:** `python3 tools/build-quotes.py`
- **Reads:** `tools/quotes-source.txt`, one quote per line: `author | quote | Vietnamese translation`. **Writes:** `content/quotes.js`.
- The IPA comes from CMU and is a draft: read it once and correct `quotes.js` by hand if needed (but re-running the tool overwrites hand edits).
- Difficulty is by word count: easy up to 5, medium 6 to 13, hard 14+.

### `split-questions.js`: question bank by level
- **Command:** `node tools/split-questions.js`
- **Reads:** `content/questions.js` (keep adding questions here, by hand or with your add-questions system). **Writes:** `content/questionsA1.js` ... `questionsC2.js`, then runs `build-manifest.js`.
- The site loads only the levels a page needs. Every question keeps its position number in `questions.js` (`n`), so Admin still shows which line to fix. The tool checks that the pieces together equal the original and stops if not.
- Run it after **every** change to `questions.js`; the site no longer reads `questions.js` itself.

### `build-manifest.js`: counts for the home page
- **Command:** `node tools/build-manifest.js`
- **Writes:** `content/manifest.js` (numbers of grammar rules, questions, vocab, IPA sounds, test sets). Run it after any content change, otherwise the home page shows old counts until the big files load.

### `check-content.js`: check before publishing
- **Command:** `node tools/check-content.js`
- Checks grammar rules, questions (the answer must equal one option), tests, resources, tips, word pairs, vocab, meanings, quotes and odd-sounds.
- `ERROR` = fix it. `warn` = look at it (for example a missing audio file).

### `fix-answer-spoilers.js`: answers that repeat the word next to the blank
- **Command:** `node tools/fix-answer-spoilers.js` (dry run, prints what it would change) then `node tools/fix-answer-spoilers.js --apply`.
- **Reads/writes:** `content/questions.js`. Finds questions where an option repeats the word(s) written directly before or after the blank, e.g. "They ___ getting their dog..." with "are getting", and removes the repeated word from the correct answer and from any other option that repeats it ("are getting" becomes "are").
- It leaves a question alone, and lists it, when the fix is not clean (more than one blank, an option that would become empty, two options that would become identical). The same remaining questions show in Admin, "Kiểm tra đáp án lộ từ trong câu hỏi", filter "Sát chỗ trống". Fix those by hand.

### `bump-version.js`: site version
- **Command:** `node tools/bump-version.js` (adds 1) or `node tools/bump-version.js 10` (sets 10).
- Updates the number in `index.html`: the `oel-version` meta tag, `?v=N` on every script and stylesheet, and the footer text. The same number shows on the Admin page.
- Why `?v=N`: browsers cache files for minutes. A new number makes the browser fetch fresh copies, so "I see the new version" means every file is new.

## 4. Common tasks

**Fix or add a vocab meaning.** Edit the row in `content/meanings.csv` (`id,meaning`; put quotes around meanings containing a comma), then `node tools/build-vocab.js`.

**Find words that were never translated.** Admin page, "Kiểm tra từ vựng", filter "Nghĩa còn từ tiếng Anh": it lists meanings that still contain the English headword, highlighted, with the ID to fix. Some hits are fine loanwords (jazz, internet).

**Add odd-sound questions.** Append rows to `content/odd-sounds.csv`, then `node tools/build-odd-sounds.js --rebalance`. Check each row in Admin, "Kiểm tra bài phát âm", tab "Khác âm" (it shows the CSV line and marks the answer).

**Add a quote.** Add a line to `tools/quotes-source.txt`, run `build-quotes.py`, review the IPA.

**Add a grammar rule or test question.** Edit `content/grammar.js` / `content/questions.js` by hand. A grammar entry has `rule`, `form` (one pattern per line), `examples`, one `wrong`/`right` pair (a true minimal pair: `wrong` must really be an error) and `more` notes. Note types: `extension` (Mở rộng), `nuance` (Sắc thái), `advanced` (Nâng cao) and `mistake` (Lỗi thường gặp, common errors of Vietnamese learners). Use `**double asterisks**` for highlights; a single asterisk is never valid. Each question links to one rule with `grammarId`; each rule needs a unique id. `check-content.js` lists exactly which fields are required. Then run `build-manifest.js`.

**Change the test sets.** `content/tests.js` (each set picks questions by level).

**Add word audio.** Put `<word>_uk.mp3` and `<word>_us.mp3` in the audio folders. Admin shows how many words lack audio; `check-content.js` warns about each missing file.

**Resources and tips.** `content/resources.js` and `content/tips.js`.

**XP, Elo, ranks, rank mode and fonts.** `content/settings.js` (see section 5). **Level names and achievements.** `content/progress.js`.

## 5. Fine-tuning settings (`content/settings.js`)

One file holds every number you tune: XP per activity and the level curve, the Elo formula and question difficulties, the six ranks and their Elo thresholds, rank-mode length, time, topic mix and wild cards, the bonus values, and the three fonts.

**Quick way:** Admin > "Tinh chỉnh và xuất mã". Change values, press "Áp dụng" to try them in your own browser (the page reloads), then "Xuất mã", "Sao chép", and paste over the whole of `content/settings.js`. Press "Bỏ chỉnh sửa trong trình duyệt" afterwards so the file is the only source again. The Elo formula (Admin "Chỉnh công thức Elo", press Áp dụng first) and the fonts (Admin "Phông chữ") have their own panels but are included in the export.

- **Rank mode ("Xếp hạng" tab):** 30 questions in 20 minutes, grammar, vocab and IPA (pick-the-odd-sound and pick-the-odd-stress) mixed by `rank.mix`. A question's difficulty is its CEFR level (vocab and IPA: the highest level among its words, `rank.ipaDefault` for words not in the list), converted with `elo.lv`. Questions are drawn within `nearSpread` Elo of the player; with chance `wild` within `wildSpread`. Elo changes after every answer; only rank mode changes Elo (the Grammar "Kiểm tra" side uses the old placement method). Elo data is saved under `oel.elo2`.
- **Bonuses (`bonus`):** quick hand (correct under `quickSec` seconds gives `quickPts`; wrong under that gives `-quickStrike`), correct streak, winning streak (needs a finished test with a net Elo gain), fast finish. Win and fast bonuses are not given if you quit or time runs out.
- **Fonts:** names must exist in the Admin font list (`FONT_LIST` in `app.js`). The Google Fonts link in `index.html` and the `--font-*` fallbacks in `style.css` still load the original three.
- **Card spacing and sizes:** the "Vocab grid" block near the end of `style.css`.

## 6. Admin mode

Hidden, local to the browser. Type the secret code into the grammar search box to switch it on; an "Admin" tab appears. It shows content statistics, grammarId checks, the vocab and IPA test row viewers, the "answer repeats a word from the question" checker (lists questions whose correct answer repeats a word right next to the blank, with the shared words highlighted and the question's number in `questions.js`; a second filter shows every shared word, mostly false alarms), the "Tinh chỉnh và xuất mã", Elo and font tools, and progress test buttons; every panel is collapsed until you open it. It stores things only in your own browser (`localStorage`), so it does not protect or change anything for other visitors, and anyone can switch it on in their own browser by editing local storage.

## 7. Hosting and troubleshooting

- **Hosting:** GitHub Pages, **Settings → Pages → Source: "Deploy from a branch"**, branch `lazy-loading`, folder `/ (root)`.
- **Update not showing:** check Actions for a green deploy, hard refresh, then look at the footer version. If the page source has no `oel-version`, the new `index.html` is not live yet.
- **No "pages build and deployment" run:** Source was switched to "GitHub Actions". Switch it back to "Deploy from a branch".
- **Deploy "Timeout reached, aborting!":** usually a GitHub-side hiccup. Re-run the failed job; if it repeats, push a small commit (for example a version bump). The Node.js 20 warning is harmless.
- **A file 404s on the live site but works locally:** check the letter case of the file name.
- **Everything on the site is public.** Anything in the repo that is served (all of `content/`, `app.js`, audio) can be read by any visitor, on any host.

## 8. Keep an eye on

- `check-content.js` currently reports two old question errors (questions #689 and #2815: the answer is not one of the options). Fix them in `content/questions.js`.
- The root-level `Progress.js` is a leftover duplicate of `content/progress.js`; the site only reads the one in `content/`. It can be deleted.

## Vocabulary size estimator (Từ vựng > Ước lượng vốn từ)
- Code: block "Ước lượng vốn từ" in `app.js` (engine `estEstimate`/`estNextBand`, session `VEST` in `oel.vest`).
- Start level = same level as the Test section (Elo if active, else latest placement, else B1); words marked "đã biết" are excluded from questions and counted as known.
- Model: Rasch + empirical per-band blend, guess correction, finite-population correction; the margin of error is inflated ×1.5 (`EST_Z`), calibrated by simulation (90% interval covers ~90%). Shown as a big card at the top of Từ vựng. Auto-stops at 30 questions, then offers +15 batches (no cap, ends when every eligible word has been asked). Reset is hidden under "Tùy chọn khác" with a confirm warning.
- Meanings are skipped as answers when parentheses are unbalanced, they contain the English word, or exceed 70 characters (`estUsable`).
- Result wording: range = estimate ±10% (rounded to 50), "mức độ chắc chắn" = chance the true value lies in that range (normal approximation on the calibrated SE). Extra batches are 30 questions (`EST_STEP`).
- Single-band tests (`VEST.bs` answers, `VEST.bh` latest result per band): random sample inside one band, Beta-Binomial with guess correction and finite-population correction (SE inflated ×1.15, simulation-checked). They accumulate across sessions without repeats. In the total result, a band uses its own test when its SE is smaller (`estCombine`, marked with *).
- Marking tested words as "đã biết" must not change the estimate: words answered in a test stay in the sample (`done`) and are counted in N, not in the known count; only words known before testing are excluded.
- Admin only: the estimator card has a simulator ("Mô phỏng người dùng tự làm bài"): set true known words per band, number of questions/runs and the learner's skip/slip/guess rates; it runs the real algorithm in memory (nothing saved) and reports bias, absolute error, and how often the true value lies inside the shown range.
- Slip handling: counts are divided by (1 − `EST_SLIP`=6%) because known words are sometimes answered wrongly; the certainty adds a leftover bias allowance (`EST_BIAS`=5% of the estimate); every band gets at least `EST_BMIN`=10 questions before the adaptive allocation. Simulator check (admin box): at 5% slip the bias is about 0–3% and the shown certainty matches the real hit rate; at 15% slip it still reads ~12% low. Learners with very few known words (≈1.000 total) are the weakest case.
- Beginners (start level A1/A2): more questions go to the low bands (`EST_QUOTA_LOW`) and each band's own answers get more weight than the smooth Rasch curve (`EST_CRED_LOW`=3). The simulator has a "Cấp xuất phát" option for this. Remaining error for learners with ~1.000 words is mostly sampling noise (about 20% at 30–60 questions); the shown certainty is calibrated to it.
- Tuned for learners with 1.000–4.000 known words (simulated over 12 profiles, two curve slopes): first phase 3 questions per band then adaptive, min 6 per band, `EST_CRED`=6. Average absolute error: ~15% at 30 questions, ~10% at 60, ~9% at 90, ~8% at 120 (worst for ~1.000–1.600 words). The allocation variants tested all gave the same result within noise; the limit is sampling error, so more questions is the only real lever.
