// Run:  node tools/check-content.js
// Checks the files in content/ for mistakes before you publish.
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'content');
const sandbox = { console }; sandbox.window = sandbox; vm.createContext(sandbox);
for (const f of ['grammar','questions','tests','resources','tips','wordpairs','vocab','vocab-def','progress']) {
  try { vm.runInContext(fs.readFileSync(path.join(dir, f + '.js'), 'utf8'), sandbox, { filename: f + '.js' }); }
  catch (e) { console.error('ERROR: content/' + f + '.js cannot be loaded: ' + e.message); process.exit(1); }
}
const OEL = sandbox.OEL || {};
let errors = 0, warns = 0;
const err = m => { errors++; console.error('ERROR: ' + m); };
const warn = m => { warns++; console.warn('warn:  ' + m); };
const LV = ['A1','A2','B1','B2','C1','C2'];
const arr = (n) => Array.isArray(OEL[n]) ? OEL[n] : (err('OEL.' + n + ' is missing or not a list'), []);
const str = v => typeof v === 'string' && v.trim();

arr('grammar').forEach((g, i) => { const t = 'grammar #' + (i+1) + ' (' + (g.title||'?') + ')';
  ['title','category','rule'].forEach(k => str(g[k]) || err(t + ': missing ' + k));
  Array.isArray(g.form) && g.form.length && g.form.every(str) || err(t + ': form must be a list of non-empty lines');
  (g.more === undefined || Array.isArray(g.more)) || err(t + ': more must be a list');
  (g.more || []).forEach((m, j) => { ['extension','advanced','nuance'].includes(m && m.type) || err(t + ': more #' + (j+1) + ' type must be extension, advanced or nuance'); str(m && m.text) || err(t + ': more #' + (j+1) + ' has no text'); });
  LV.includes(g.level) || err(t + ': level must be one of ' + LV.join(', '));
  Array.isArray(g.examples) && g.examples.length || warn(t + ': no examples'); });

const bank = arr('questions');
bank.forEach((q, i) => { const t = 'question #' + (i+1);
  str(q.question) || err(t + ': missing question');
  LV.includes(q.level) || err(t + ': bad level "' + q.level + '"');
  str(q.topic) || warn(t + ': missing topic');
  if (!Array.isArray(q.options) || q.options.length < 2) err(t + ': needs 2+ options');
  else { if (!q.options.includes(q.answer)) err(t + ': answer "' + q.answer + '" is not one of the options (' + q.question + ')');
    if (new Set(q.options).size !== q.options.length) err(t + ': duplicate options'); }
  str(q.explanation) || warn(t + ': no explanation'); });

const ids = new Set();
arr('tests').forEach(t => { const n = 'test "' + t.id + '"';
  if (!str(t.id)) err('a test has no id'); else if (ids.has(t.id)) err(n + ': duplicate id'); ids.add(t.id);
  str(t.title) || err(n + ': missing title');
  if (!Array.isArray(t.levels) || !t.levels.length) err(n + ': needs levels');
  else { t.levels.forEach(l => LV.includes(l) || err(n + ': bad level ' + l));
    const c = bank.filter(q => t.levels.includes(q.level)).length;
    c ? c < 8 && warn(n + ': only ' + c + ' questions in the bank for its levels') : err(n + ': no questions in the bank for its levels'); } });

arr('resources').forEach((r, i) => { const t = 'resource #' + (i+1);
  str(r.name) || err(t + ': missing name');
  /^https:\/\//.test(r.url || '') || err(t + ' (' + r.name + '): url must start with https://');
  str(r.description) || warn(t + ': no description'); });

arr('tips').forEach((g, i) => { str(g.group) || err('tips group #' + (i+1) + ': missing group');
  Array.isArray(g.tips) && g.tips.length || err('tips group "' + g.group + '": no tips'); });

arr('wordPairs').forEach((p, i) => ['pair','rule','example'].forEach(k => str(p[k]) || err('wordPairs #' + (i+1) + ': missing ' + k)));

const fs2 = require('fs');
const rows = arr('vocab'), defs = OEL.vocabDef || {}, seenId = new Set(), seenKey = new Set();
const AUDIO = ['uk_audio', 'us_audio'];
let noDef = 0, noAudio = 0;
rows.forEach((r, i) => { const t = 'vocab #' + (i+1) + ' (' + (r && r[1]) + ')';
  if (!Array.isArray(r) || r.length < 7) return err(t + ': must be [order, word, type, cefr, phonetic, uk, us]');
  Number.isInteger(r[0]) ? (seenId.has(r[0]) ? err(t + ': duplicate order number ' + r[0]) : seenId.add(r[0])) : err(t + ': order must be a whole number');
  str(r[1]) || err(t + ': missing word');
  ['A1','A2','B1','B2','C1'].includes(r[3]) || warn(t + ': unexpected cefr "' + r[3] + '"');
  str(r[2]) || warn(t + ': missing type');
  const k = r[1] + '|' + r[2]; seenKey.has(k) && warn(t + ': same word and type appears twice'); seenKey.add(k);
  str(defs[r[0]]) || noDef++;
  [[5, 0], [6, 1]].forEach(([c, d]) => { if (!str(r[c])) noAudio++;
    else { const f = path.join(__dirname, '..', 'audio', AUDIO[d], r[c]); if (fs2.existsSync(path.join(__dirname, '..', 'audio', AUDIO[d])) && fs2.readdirSync(path.join(__dirname, '..', 'audio', AUDIO[d])).length > 1 && !fs2.existsSync(f)) warn(t + ': audio file missing: audio/' + AUDIO[d] + '/' + r[c]); } }); });
Object.keys(defs).forEach(k => seenId.has(Number(k)) || warn('definition #' + k + ' has no matching word in vocab.js'));
noDef && warn(noDef + ' of ' + rows.length + ' words have no definition yet (shown as *_def; quiz needs definitions)');
noAudio && warn(noAudio + ' audio fields are empty (browser voice is used instead)');
const total = rows.length;

const P = OEL.progress;
if (!P) err('OEL.progress is missing');
else {
  ['minute','learned','reviewed','grammar','test'].forEach(k => (typeof (P.xp||{})[k] === 'number') || err('progress.xp.' + k + ' must be a number'));
  const cv = P.curve || {}; (cv.base > 0 && cv.power > 0) || err('progress.curve needs base and power above 0');
  (Number.isInteger(P.levelsPerStage) && P.levelsPerStage > 0) || err('progress.levelsPerStage must be a whole number above 0');
  const sg = P.stages || []; sg.length || err('progress.stages is empty');
  sg.forEach((s, i) => str(s.name) || err('progress stage #' + (i+1) + ': missing name'));
  const STATS = ['minutes','streak','days','learned','reviewed','grammar','tests','level'], aid = new Set();
  (P.achievements || []).forEach((x, i) => { const n = 'achievement #' + (i+1);
    str(x.id) ? (aid.has(x.id) ? err(n + ': duplicate id ' + x.id) : aid.add(x.id)) : err(n + ': missing id');
    str(x.name) || err(n + ': missing name'); STATS.includes(x.stat) || err(n + ': stat must be one of ' + STATS.join(', '));
    (typeof x.goal === 'number' && x.goal > 0) || err(n + ': goal must be a number above 0'); });
}
console.log('Checked: ' + bank.length + ' questions, ' + arr('grammar').length + ' grammar rules, ' + total + ' vocabulary entries.');
console.log(errors ? errors + ' error(s), ' + warns + ' warning(s).' : 'OK. ' + warns + ' warning(s).');
process.exit(errors ? 1 : 0);
