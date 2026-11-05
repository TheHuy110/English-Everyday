// Run:  node tools/check-content.js
// Checks the files in content/ for mistakes before you publish.
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'content');
const sandbox = { console }; sandbox.window = sandbox; vm.createContext(sandbox);
for (const f of ['grammar','questions','tests','resources','tips','wordpairs','vocab']) {
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
  ['title','category','rule','form'].forEach(k => str(g[k]) || err(t + ': missing ' + k));
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

const POS = ['n','v','adj','adv','prep','conj','pron','det','num','interj','modal','be','do','have','to'];
const topics = OEL.vocabTopics || []; topics.length || err('OEL.vocabTopics missing');
let total = 0;
Object.keys(OEL.vocab || {}).forEach(lv => { const seen = new Set();
  LV.includes(lv) || err('vocab level "' + lv + '" is not a CEFR level');
  (OEL.vocab[lv] || []).forEach((r, i) => { total++; const t = 'vocab ' + lv + ' #' + (i+1) + ' (' + (r && r[0]) + ')';
    if (!Array.isArray(r)) return err(t + ': must be [word, pos, meaning, topic]');
    str(r[0]) || err(t + ': missing word'); str(r[2]) || err(t + ': missing meaning');
    POS.includes(r[1]) || warn(t + ': unknown part of speech "' + r[1] + '"');
    if (r[3] != null && !(Number.isInteger(r[3]) && r[3] >= 0 && r[3] < topics.length)) err(t + ': topic index out of range');
    const k = r[0] + '|' + r[1]; seen.has(k) ? err(t + ': duplicate word+pos in ' + lv) : seen.add(k); }); });

console.log('Checked: ' + bank.length + ' questions, ' + arr('grammar').length + ' grammar rules, ' + total + ' vocabulary entries.');
console.log(errors ? errors + ' error(s), ' + warns + ' warning(s).' : 'OK. ' + warns + ' warning(s).');
process.exit(errors ? 1 : 0);
