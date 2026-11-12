// Run:  node tools/fix-answer-spoilers.js           (dry run: only prints what it would change)
//       node tools/fix-answer-spoilers.js --apply   (rewrites content/questions.js)
// Finds questions where an answer option repeats the word(s) written right next to the blank, e.g.
//   "They ___ getting their dog to the vet."   options: will / are getting / is / isn't   ->   "are getting" becomes "are".
// Only a word directly before or directly after the blank counts (the same rule the Admin checker uses).
// The repeated word(s) are removed from the correct answer AND from every other option that repeats them.
// A question is left alone (and listed) when the fix would not be clean: more than one blank, an option that would become empty,
// two options that would become identical, or a line in questions.js that is not in the usual one-line format.
const fs = require('fs'), path = require('path'), vm = require('vm');
const file = path.join(__dirname, '..', 'content', 'questions.js');
const src = fs.readFileSync(file, 'utf8');
const sb = {}; sb.window = sb; vm.createContext(sb); vm.runInContext(src, sb);
const Q = sb.OEL.questions;

const norm = w => w.toLowerCase().replace(/[’‘]/g, "'").replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, '');
const words = s => String(s).split(/\s+/).map(w => ({ raw: w, n: norm(w) })).filter(w => w.n);
const BLANK = /_{2,}/g;

// How many words at the start / end of 'opt' repeat the words right after / before the blank.
function overlap(opt, before, after) {
  const ow = words(opt);
  let suf = 0, pre = 0;
  for (let k = Math.min(ow.length, after.length); k >= 1; k--) {
    if (ow.slice(ow.length - k).every((w, i) => w.n === after[i].n)) { suf = k; break; }
  }
  for (let k = Math.min(ow.length, before.length); k >= 1; k--) {
    if (ow.slice(0, k).every((w, i) => w.n === before[before.length - k + i].n)) { pre = k; break; }
  }
  return { ow, pre, suf };
}
function strip(opt, before, after) {
  const o = overlap(opt, before, after);
  if (!o.pre && !o.suf) return { text: opt, changed: false };
  const keep = o.ow.slice(o.pre, o.ow.length - o.suf).map(w => w.raw);
  return { text: keep.join(' '), changed: true, empty: keep.length === 0 };
}

const lines = src.split('\n');
const qLine = []; lines.forEach((l, i) => { if (/^  \{ level: /.test(l)) qLine.push(i); });
if (qLine.length !== Q.length) { console.error('ERROR: found ' + qLine.length + ' question lines but ' + Q.length + ' questions; the file format changed.'); process.exit(1); }

const ser = a => '[' + a.map(x => JSON.stringify(x)).join(', ') + ']';
const fixed = [], skipped = [];
Q.forEach((q, i) => {
  const n = i + 1, text = String(q.question), blanks = text.match(BLANK) || [];
  if (!Array.isArray(q.options) || typeof q.answer !== 'string' || blanks.length !== 1) return;
  const parts = text.split(BLANK), before = words(parts[0]), after = words(parts[1]);
  const spoiled = overlap(q.answer, before, after);
  if (!spoiled.pre && !spoiled.suf) return;           // answer is clean: nothing to do (distractors alone are not a bug)
  const res = q.options.map(o => strip(String(o), before, after));
  const why = res.some(r => r.empty) ? 'an option would become empty' : '';
  const newOpts = res.map(r => r.text);
  if (why) { skipped.push({ n, q: text, a: q.answer, why }); return; }
  if (new Set(newOpts.map(norm)).size !== newOpts.length) { skipped.push({ n, q: text, a: q.answer, why: 'two options would become identical' }); return; }
  const newAns = strip(q.answer, before, after).text;
  if (!newOpts.includes(newAns)) { skipped.push({ n, q: text, a: q.answer, why: 'answer no longer matches an option' }); return; }
  const line = lines[qLine[i]], oldO = 'options: ' + ser(q.options), oldA = 'answer: ' + JSON.stringify(q.answer);
  if (line.split(oldO).length !== 2 || line.split(oldA).length !== 2) { skipped.push({ n, q: text, a: q.answer, why: 'line is not in the usual format' }); return; }
  fixed.push({ n, q: text, from: q.options.join(' / ') + '  [' + q.answer + ']', to: newOpts.join(' / ') + '  [' + newAns + ']' });
  lines[qLine[i]] = line.replace(oldO, 'options: ' + ser(newOpts)).replace(oldA, 'answer: ' + JSON.stringify(newAns));
});

const by = {}; skipped.forEach(s => by[s.why] = (by[s.why] || 0) + 1);
console.log('Fixable: ' + fixed.length + ' | left for you: ' + skipped.length + ' ' + JSON.stringify(by));
fixed.slice(0, 12).forEach(f => console.log('  #' + f.n + ' ' + f.q + '\n     ' + f.from + '\n  -> ' + f.to));
if (skipped.length) { console.log('Left alone:'); skipped.forEach(s => console.log('  #' + s.n + ' (' + s.why + ') ' + s.q + '  [' + s.a + ']')); }
if (process.argv.includes('--apply')) { fs.writeFileSync(file, lines.join('\n')); console.log('content/questions.js updated: ' + fixed.length + ' question(s).'); }
else console.log('Dry run only. Add --apply to write the changes.');
