# Tiếng Anh mỗi ngày

A free, static website (Vietnamese interface) for learning English: grammar rules, A1–A2 vocabulary flashcards with spaced repetition, placement and practice tests, resources, study tips and a learning journal. No server, no sign-in. Progress is saved in the visitor's own browser.

## Files

```
index.html          page shell (header, tab bar, footer)
style.css           all styling; colours and fonts are tokens at the top of :root
app.js              site code (pages, tests, flashcards, storage)
content/
  grammar.js        grammar rules
  questions.js      question bank (placement test, practice tests, custom tests)
  tests.js          test definitions (which levels each test uses)
  resources.js      outside links
  tips.js           study tips, grouped
  wordpairs.js      commonly confused word pairs
  vocab.js          CEFR-J A1–A2 word list + topics
  _review-list.txt  62 vocabulary meanings that still need a human check
tools/check-content.js   validates content before you publish
```

To add content you only edit files in `content/`. Do not touch `app.js` for content.

## Run locally

Open `index.html` in a browser. Or run a small server: `python3 -m http.server` and visit http://localhost:8000.

After any edit to `content/`, run `node tools/check-content.js`. It reports mistakes (for example a question whose answer is not among its options).

## Adding content

**Grammar rule** (`content/grammar.js`): copy an entry and change it.
```js
{ title: "Thì hiện tại đơn (Present simple)", level: "A1", category: "Thì",
  rule: "Giải thích bằng tiếng Việt. Dùng **chữ đậm** cho từ khóa.",
  form: "chủ ngữ + động từ nguyên mẫu",
  examples: ["She walks to work.", "The train leaves at 7."],
  wrong: "He go to school.", right: "He goes to school." },
```

**Question** (`content/questions.js`): `answer` must be written exactly like one of the `options`. Level is A1–C2; `topic` is free text, and the custom test lists the topics it finds.
```js
{ level: "A2", topic: "Thì", question: "Yesterday we ___ to the market.",
  options: ["go", "goes", "went", "gone"], answer: "went",
  explanation: "Giải thích ngắn bằng tiếng Việt." },
```

**Test** (`content/tests.js`): each test takes every bank question at its levels. Ids must be unique. Placement tests (10 or 25 questions) and custom tests use the whole bank, so adding questions improves all of them.

**Resource** (`content/resources.js`): `{ name, url (https), type, description }`.

**Tips** (`content/tips.js`): add a string inside a group's `tips` list, or add a new `{ group, tips: [...] }`.

**Vocabulary** (`content/vocab.js`): entries live under `OEL.vocab.A1` / `OEL.vocab.A2` as `[word, partOfSpeech, vietnameseMeaning, topicIndex]`. `topicIndex` is the position in `OEL.vocabTopics` (0 = first) and may be left out. Part-of-speech codes: `n v adj adv prep conj pron det num interj modal be do have to`. To add a level (for example B1), add `B1: [...]` and register it where levels are listed in `app.js` (search for `'A2'`).

## Publish on GitHub Pages

1. Create a new public repository on github.com and upload everything in this folder (keep `.nojekyll`).
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. After a minute the site is live at `https://<your-username>.github.io/<repository>/`.

You can edit files directly on github.com (pencil icon on a file) and commit; the site updates after about a minute.

## How progress is saved

The journal, test scores, placement result and vocabulary list (words to learn, review dates) are stored in the browser's `localStorage`. Nothing is sent anywhere. Clearing site data or switching browser or device loses it, so the vocabulary page has **backup / restore** (copy a JSON backup, paste it later). If storage is blocked, the site still works for the current visit.

## Credits and licence notes

- Word list: **CEFR-J Vocabulary Profile v1.5**, Tono Laboratory, Tokyo University of Foreign Studies. Free for research and commercial use with citation; the credit is shown on the vocabulary page. Keep it.
- Vietnamese meanings were written for this project and **still need review**. Start with `content/_review-list.txt` (words marked uncertain), then spot-check the rest.
- Fonts (Bricolage Grotesque, Source Serif 4, IBM Plex Mono) load from Google Fonts. If they fail the site falls back to system fonts. Check that Vietnamese diacritics look right in your browser.

## Later ideas

Comments (name + text) need a small backend or a service; keep the site static until you decide. Language toggle, more levels (B1–C2), richer journal, printable flashcards, and a mistake notebook are shelved.
