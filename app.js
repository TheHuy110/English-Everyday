/* Tiếng Anh mỗi ngày - site code. Content lives in content/*.js */
(function () {
  'use strict';
  var OEL = window.OEL = window.OEL || {};
  var MAN = OEL.manifest || {};   /* item counts (content/manifest.js) so the home page can show totals before the big files load */

  /* ---------- Lưu trữ (theo từng người dùng, không bắt buộc) ---------- */
  var LS = {
    mem: {},
    get: function (k, d) {
      try { var v = localStorage.getItem(k); if (v !== null) return JSON.parse(v); } catch (e) {}
      return Object.prototype.hasOwnProperty.call(this.mem, k) ? this.mem[k] : d;
    },
    set: function (k, v) {
      this.mem[k] = v;
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
    }
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<mark>$1</mark>'); }
  function list(x) { return Array.isArray(x) ? x : []; }
  function str(x) { return typeof x === 'string' ? x.trim() : ''; }
  function warn(kind, item) {
    if (window.console) console.warn('Tiếng Anh mỗi ngày: bỏ qua một mục ' + kind + ' vì thiếu hoặc sai trường dữ liệu.', item);
  }

  var LEVELS = [
    { id: 'A1', name: 'Mới bắt đầu', d: 'Hiểu và dùng các cụm từ quen thuộc hằng ngày.' },
    { id: 'A2', name: 'Sơ cấp', d: 'Giao tiếp đơn giản về những chủ đề quen thuộc.' },
    { id: 'B1', name: 'Trung cấp', d: 'Xử lý hầu hết tình huống khi đi du lịch, kể về kế hoạch và trải nghiệm.' },
    { id: 'B2', name: 'Trung cấp cao', d: 'Hiểu văn bản phức tạp và trò chuyện khá trôi chảy.' },
    { id: 'C1', name: 'Cao cấp', d: 'Dùng ngôn ngữ linh hoạt cho học tập, công việc và đời sống.' },
    { id: 'C2', name: 'Thành thạo', d: 'Hiểu gần như mọi thứ và diễn đạt được sắc thái tinh tế.' }
  ];

  /* ---------- Làm sạch dữ liệu nội dung ---------- */
  function idOf(v) { return v === undefined || v === null ? '' : String(v).trim(); }
  var MORE_TYPES = { extension: 'Mở rộng', nuance: 'Sắc thái', advanced: 'Nâng cao', mistake: 'Lỗi thường gặp' };
  var GRAMMAR = [], GBYID = Object.create(null), GDUP = [];
  function initGrammar() {
    GRAMMAR = list(OEL.grammar).map(function (g) {
      g = g || {};
      return { t: str(g.title), lv: str(g.level).toUpperCase(), topic: str(g.topic) || str(g.category), gid: idOf(g.grammarId), rule: str(g.rule),
        form: (Array.isArray(g.form) ? g.form : [g.form]).map(str).filter(Boolean),
        more: list(g.more).map(function (m) { m = m || {}; return { type: MORE_TYPES[str(m.type)] ? str(m.type) : 'extension', text: str(m.text) }; }).filter(function (m) { return m.text; }),
        ex: list(g.examples).map(String), no: str(g.wrong), yes: str(g.right) };
    }).filter(function (g) { var ok = g.t && g.lv && g.rule; if (!ok) warn('ngữ pháp', g); return ok; });

    GBYID = Object.create(null); GDUP = [];
    GRAMMAR.forEach(function (g) {
      if (!g.gid) return;
      if (GBYID[g.gid]) { GDUP.push(g.gid); warn('ngữ pháp (grammarId bị trùng: ' + g.gid + ')', g); } else GBYID[g.gid] = g;
    });
  }
  var BANK = [], LINKS = Object.create(null);   /* LINKS: grammarId -> number of questions pointing at it */
  var QSETS = [];
  function initBank() {
    BANK = list(OEL.questions).map(function (q, qi) {
      q = q || {};
      var o = list(q.options).map(String), a = o.indexOf(String(q.answer));
      var ok = q.question && o.length >= 2 && a > -1 && str(q.level);
      if (!ok) { warn('câu hỏi (đáp án phải trùng đúng một lựa chọn)', q); return null; }
      return { lv: str(q.level).toUpperCase(), topic: str(q.topic), q: String(q.question), o: o, a: a, why: str(q.explanation), gid: idOf(q.grammarId), n: qi + 1 };   /* n = position in content/questions.js (same number check-content.js prints) */
    }).filter(Boolean);
    LINKS = Object.create(null);
    BANK.forEach(function (q) { if (q.gid) LINKS[q.gid] = (LINKS[q.gid] || 0) + 1; });
    initQsets();
  }
  var ODDS = [];   /* questions for the test "which underlined part sounds different" (content/odd-sounds.js) */
  function initOddSounds() {
    ODDS = list(OEL.oddSounds).map(function (q, qi) {
      q = q || {};
      var o = list(q.options).map(String), a = parseInt(q.answer, 10);
      var ok = o.length === 4 && a >= 0 && a < 4 && o.every(function (x) { return x.split('*').length > 2 && x.split('*').length % 2 === 1; });
      if (!ok) { warn('câu hỏi khác âm (cần 4 từ có phần gạch chân giữa hai dấu *, và đáp án từ 0 đến 3)', q); return null; }
      return { o: o, a: a, row: parseInt(q.row, 10) || qi + 2, note: str(q.note) };   /* row = line in content/odd-sounds.csv */
    }).filter(Boolean);
  }
  var QUOTES = [];
  function initQuotes() {
    QUOTES = list(OEL.quotes).map(function (q, qi) { q = q || {}; return { t: str(q.text), a: str(q.author), ipa: str(q.ipa), vi: str(q.vi), n: qi + 1 }; })   /* n = position in content/quotes.js */
     
      .filter(function (q) { var ok = q.t && q.ipa; if (!ok) warn('câu trích dẫn (cần text và ipa)', q); return ok; });
  }
  var IPA_CFG = {}, IPA = [], IPAQ = {};
  function initIpa() {
    IPA_CFG = (OEL.ipa && OEL.ipa.audio) || {};
    IPAQ = OEL.ipaQuick || {};
    IPA = list(OEL.ipa && OEL.ipa.sounds).map(function (s) {
      s = s || {};
      return { id: str(s.id), sym: str(s.symbol), type: str(s.type) || 'consonant', group: str(s.group), voice: str(s.voice), tip: str(s.tip), bad: str(s.mistake),
        ex: list(s.examples).map(function (e) { e = e || {}; return { w: str(e.word), ipa: str(e.ipa) }; }).filter(function (e) { return e.w; }),
        pairs: list(s.pairs).map(function (p) { p = p || {}; return { a: str(p.a), ai: str(p.aIpa), b: str(p.b), bi: str(p.bIpa) }; }).filter(function (p) { return p.a && p.b; }) };
    }).filter(function (s) { var ok = s.id && s.sym; if (!ok) warn('âm IPA (cần id và symbol)', s); return ok; });
  }
  function initQsets() {
    var seenSets = {};
    QSETS = list(OEL.tests).map(function (s) {
      s = s || {};
      var lvs = list(s.levels).map(function (l) { return String(l).toUpperCase(); });
      return { id: str(s.id), title: str(s.title), lvs: lvs, lv: lvs.length > 1 ? lvs[0] + ' đến ' + lvs[lvs.length - 1] : (lvs[0] || ''),
        blurb: str(s.blurb), qs: BANK.filter(function (q) { return lvs.indexOf(q.lv) > -1; }) };
    }).filter(function (s) {
      var ok = s.id && s.title && s.qs.length && !seenSets[s.id];
      if (!ok) warn('bài kiểm tra (cần id riêng, tên và có câu hỏi thuộc cấp độ đã chọn)', s); else seenSets[s.id] = true;
      return ok;
    });
  }

  var RESOURCES = list(OEL.resources).map(function (r) {
    r = r || {};
    return { n: str(r.name), u: str(r.url), ty: str(r.type) || 'Khác', d: str(r.description) };
  }).filter(function (r) { var ok = r.n && /^https?:\/\//i.test(r.u); if (!ok) warn('tài nguyên (url phải bắt đầu bằng https://)', r); return ok; });
  var RTYPES = ['Tất cả'];
  RESOURCES.forEach(function (r) { if (RTYPES.indexOf(r.ty) < 0) RTYPES.push(r.ty); });

  var TIPS = list(OEL.tips).map(function (g) {
    g = g || {};
    return { g: str(g.group), l: list(g.tips).map(String).filter(Boolean) };
  }).filter(function (g) { var ok = g.g && g.l.length; if (!ok) warn('nhóm mẹo', g); return ok; });
  var TIPS_FLAT = [];
  TIPS.forEach(function (g) { g.l.forEach(function (t) { TIPS_FLAT.push({ g: g.g, t: t }); }); });

  var CONFUSED = list(OEL.wordPairs).map(function (p) {
    p = p || {};
    return [str(p.pair), str(p.rule), str(p.example)];
  }).filter(function (p) { return p[0] && p[1]; });

  /* ---------- Tải nội dung theo nhu cầu ---------- */
  /* Four big content files are not in index.html. Each page asks for the groups it needs; a group is downloaded once, then parsed once. */
  var GROUPS = {
    grammar: { files: ['content/grammar.js'], init: initGrammar },
    bank: { files: ['content/questions.js'], init: initBank },
    vocab: { files: ['content/vocab.js', 'content/vocab-def.js'], init: initVocab },
    ipa: { files: ['content/ipa.js'], init: initIpa },
    quotes: { files: ['content/quotes.js'], init: initQuotes },
    stress: { files: ['content/stress.js'], init: function () {} },
    oddsounds: { files: ['content/odd-sounds.js'], init: initOddSounds },
    sounds: { files: ['content/sound-groups.js'], init: function () {} }
  };
  var loaded = Object.create(null), pending = Object.create(null);
  var APP_V = (document.querySelector('meta[name="oel-version"]') || {}).content || '';   /* site version, set in index.html (node tools/bump-version.js) */
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script');
      el.src = APP_V ? src + '?v=' + APP_V : src;   /* new version = new URL = no stale cached copy */
      el.onload = function () { resolve(); };
      el.onerror = function () { if (el.parentNode) el.parentNode.removeChild(el); reject(new Error(src)); };
      document.head.appendChild(el);
    });
  }
  function ensure(names) {
    return Promise.all(names.map(function (n) {
      if (loaded[n]) return null;
      if (!pending[n]) {
        pending[n] = Promise.all(GROUPS[n].files.map(loadScript)).then(function () {
          GROUPS[n].init(); loaded[n] = true; delete pending[n];
        }, function (e) { delete pending[n]; throw e; });   /* a failed download can be retried */
      }
      return pending[n];
    }));
  }
  /* Totals for the home page and journal: the real numbers once a group is loaded, otherwise the manifest. */
  function nGrammar() { return loaded.grammar ? GRAMMAR.length : (MAN.grammar || 0); }
  function nGrammarAt(lv) { return loaded.grammar ? GRAMMAR.filter(function (g) { return g.lv === lv; }).length : ((MAN.grammarByLevel || {})[lv] || 0); }
  function nQuestions() { return loaded.bank ? BANK.length : (MAN.questions || 0); }
  function nVocab() { return loaded.vocab ? VOCAB.length : (MAN.vocab || 0); }
  function nIpa() { return loaded.ipa ? IPA.length : (MAN.ipa || 0); }
  function nSets() { return loaded.bank ? QSETS.length : (MAN.sets || 0); }

  /* ---------- Trạng thái ---------- */
  var ALL = 'Tất cả';
  var gQuery = '', gLevel = ALL, gTopic = ALL, rType = ALL;
  var quiz = null;
  var cLevels = [], cTopics = [], cLen = 10;
  var journal = LS.get('oel.journal', []);
  if (!Array.isArray(journal)) journal = [];
  /* Test statistics: per practice set (best of today, running average) and overall average. */
  var stats = LS.get('oel.stats', {});
  if (!stats || typeof stats !== 'object') stats = {};
  if (!stats.sets || typeof stats.sets !== 'object') stats.sets = {};
  if (!stats.all || typeof stats.all !== 'object') stats.all = { sum: 0, cnt: 0 };
  function setStat(id) { return Object.prototype.hasOwnProperty.call(stats.sets, id) ? stats.sets[id] : null; }
  function s10(score, total) { return total ? num1(score / total * 10) : '0'; }   /* every score is shown out of 10 */
  function avg10(sum, cnt) { return cnt ? num1(sum / cnt * 10) : '0'; }
  function recordResult() {
    var total = quiz.kind === 'placement' ? quiz.qs.length : quiz.total, frac = total ? quiz.score / total : 0;
    stats.all.sum = (+stats.all.sum || 0) + frac; stats.all.cnt = (+stats.all.cnt || 0) + 1;
    if (quiz.kind === 'set') {
      var s = setStat(quiz.setId) || (stats.sets[quiz.setId] = { day: '', bs: 0, bn: 0, sum: 0, cnt: 0 });
      if (s.day !== today()) { s.day = today(); s.bs = 0; s.bn = 0; }
      if (!s.bn || frac > s.bs / s.bn) { s.bs = quiz.score; s.bn = total; }
      s.sum = (+s.sum || 0) + frac; s.cnt = (+s.cnt || 0) + 1;
    }
    LS.set('oel.stats', stats);
  }
  /* Placement history: every finished placement test, kept for "highest" and "latest" results and averages per test length. */
  var PLHIST = (function () {
    var h = LS.get('oel.placehist', []);
    return (Array.isArray(h) ? h : []).filter(function (x) { return x && typeof x.level === 'string' && x.total > 0 && x.score >= 0 && typeof x.date === 'string'; }).slice(-200);
  })();
  function savePl() { LS.set('oel.placehist', PLHIST.slice(-200)); }
  function lvIdx(l) { for (var i = 0; i < LEVELS.length; i++) if (LEVELS[i].id === l) return i; return -1; }
  function plKind(h) { return h.total <= 10 ? 'quick' : 'long'; }
  function plBest() {
    var best = null;
    PLHIST.forEach(function (h) {
      if (!best || lvIdx(h.level) > lvIdx(best.level) || (lvIdx(h.level) === lvIdx(best.level) && h.score / h.total >= best.score / best.total)) best = h;
    });
    return best;
  }
  function num1(x) { return String(Math.round(x * 10) / 10); }
  function plLine(label, h) {
    return '<p style="margin:0">' + label + ': <mark>' + esc(h.level) + '</mark> <span class="muted">(ước lượng, ' + esc(niceDate(h.date)) + ' · ' + s10(h.score, h.total) + '/10, ' + (plKind(h) === 'quick' ? 'KT nhanh' : 'KT dài') + ')</span></p>';
  }
  function plSummary() {
    if (!PLHIST.length) return '';
    var rows = ['quick', 'long'].map(function (k) {
      var items = PLHIST.filter(function (h) { return plKind(h) === k; });
      if (!items.length) return '';
      var avg = 0, li = 0;
      items.forEach(function (h) { avg += h.score / h.total; li = Math.max(li, lvIdx(h.level)); });
      avg /= items.length;
      return '<tr><td>' + (k === 'quick' ? 'Kiểm tra nhanh' : 'Kiểm tra dài') + '</td><td>' + items.length + '</td><td>' + num1(avg * 10) + ' / 10' + '</td><td>' + esc(LEVELS[li].id) + '</td></tr>';
    }).join('');
    return '<div class="stack" style="gap:0.4rem">' + plLine('Kết quả cao nhất', plBest()) + plLine('Kết quả gần nhất', PLHIST[PLHIST.length - 1]) + '</div>' +
      '<div class="table-wrap"><table style="min-width:0"><thead><tr><th>Chi tiết</th><th>Số bài</th><th>Điểm trung bình</th><th>Trình độ ước lượng cao nhất</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
  }
  /* ---------- Elo (thử nghiệm) ----------
     Mỗi cấp CEFR có một độ khó cố định. Mỗi câu trả lời cập nhật điểm Elo của người học, và Elo quyết định cấp độ xếp loại.
     Có tính xác suất đoán mò (câu trắc nghiệm): kỳ vọng thắng không bao giờ thấp hơn 1 / số lựa chọn.
     Điểm Elo luôn được lưu nhưng chỉ chủ trang (admin) nhìn thấy. Admin có thể chuyển về cách xếp cấp cũ ở trang Admin. */
  var ECFG_DEF = { start: 1000, min: 400, max: 2800, scale: 500, k0: 200, k1: 400, tau: 16, margin: 100, guess: 1, firstOld: 1, seed: 1,   /* fixed numbers under test; "Về mặc định" in Admin returns to these */
    lv: { A1: 900, A2: 1200, B1: 1400, B2: 1800, C1: 2200, C2: 2600 } };
  var ECFG = (function () {
    var c = JSON.parse(JSON.stringify(ECFG_DEF)), v = LS.get('oel.eloCfg', null);
    if (v && typeof v === 'object') {
      ['start', 'min', 'max', 'scale', 'k0', 'k1', 'tau', 'margin'].forEach(function (k) { if (typeof v[k] === 'number' && isFinite(v[k])) c[k] = v[k]; });
      ['guess', 'firstOld', 'seed'].forEach(function (k) { if (v[k] === 0 || v[k] === 1) c[k] = v[k]; });
      if (v.lv && typeof v.lv === 'object') Object.keys(c.lv).forEach(function (l) { if (typeof v.lv[l] === 'number' && isFinite(v.lv[l])) c.lv[l] = v.lv[l]; });
    }
    if (!(c.scale > 0)) c.scale = ECFG_DEF.scale;
    if (!(c.tau > 0)) c.tau = ECFG_DEF.tau;
    return c;
  })();
  var LEVEL_ELO = ECFG.lv;
    var ELO = (function () {
    var e = LS.get('oel.elo', null);
    if (!e || typeof e !== 'object' || !(e.r >= ECFG.min && e.r <= ECFG.max)) e = { r: ECFG.start, n: 0, h: [] };
    e.n = e.n > 0 ? Math.floor(e.n) : 0;
    e.h = (Array.isArray(e.h) ? e.h : []).filter(function (x) { return x && x.r > 0; }).slice(-300);
    return e;
  })();
  function saveElo() { ELO.h = ELO.h.slice(-300); LS.set('oel.elo', ELO); }
  var eloMode = LS.get('oel.eloMode', 'elo') === 'old' ? 'old' : 'elo';
  /* K giảm dần: K0 + K1 ở câu đầu tiên, tiến về K0 sau vài chục câu. */
  function eloK() { return ECFG.k0 + ECFG.k1 * Math.exp(-ELO.n / ECFG.tau); }
  function eloUpdate(q, right) {
    var d = LEVEL_ELO[q.lv]; if (!d) return;
    var g = ECFG.guess ? 1 / Math.max(2, (q.o || []).length) : 0, p = g + (1 - g) / (1 + Math.pow(10, (d - ELO.r) / ECFG.scale));
    ELO.r = Math.max(ECFG.min, Math.min(ECFG.max, ELO.r + eloK() * ((right ? 1 : 0) - p)));
    ELO.n++; ELO.h.push({ d: today(), r: Math.round(ELO.r * 10) / 10, q: q.lv, ok: right ? 1 : 0 });
    saveElo();
  }
  /* Cấp độ ứng với một điểm Elo: cấp cao nhất mà ngưỡng dưới (độ khó của cấp trừ 100) không vượt quá điểm. */
  function eloBand(r, lvs) {
    var est = lvs[0];
    lvs.forEach(function (l) { if (LEVEL_ELO[l] && r >= LEVEL_ELO[l] - ECFG.margin) est = l; });
    return est;
  }
  var delId = null, exportText = null, jOpen = false;

  var view = document.getElementById('view');
  var ROUTES = ['home', 'grammar', 'vocab', 'ipa', 'tests', 'resources', 'tips', 'journal'];

  /* ---------- Hàm trợ giúp ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  function fmt(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return fmt(new Date()); }
  function parseDay(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0); }
  function niceDate(s) {
    try { return parseDay(s).toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' }); }
    catch (e) { return s; }
  }
  function dayOfYear() {
    var n = new Date(), s = new Date(n.getFullYear(), 0, 0);
    return Math.floor((n - s) / 86400000);
  }
  function streak() {
    var days = {};
    journal.forEach(function (e) { days[e.date] = true; });
    Object.keys(activity.days).forEach(function (k) { if (dayActive(activity.days[k])) days[k] = true; });
    var d = new Date(); d.setHours(12, 0, 0, 0);
    if (!days[fmt(d)]) d.setDate(d.getDate() - 1);
    var n = 0;
    while (days[fmt(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function wordBank() {
    var seen = {}, out = [];
    journal.forEach(function (e) {
      (e.words || []).forEach(function (w) {
        var k = w.toLowerCase();
        if (!seen[k]) { seen[k] = true; out.push(w); }
      });
    });
    return out;
  }
  function head(title, lead) {
    return '<section class="sec-head"><h1>' + title + '</h1><p class="lead">' + lead + '</p></section>';
  }


  /* ---------- Theo dõi tiến độ tự động (thời gian, từ, ngữ pháp, XP, cấp độ, huy hiệu) ---------- */
  /* Rules and level names come from content/progress.js. Nothing is sent anywhere; it is saved in this browser only. */
  var PROG = OEL.progress || {};
  var XPR = { minute: 1, learned: 3, reviewed: 1, grammar: 2, test: 5 };
  Object.keys(XPR).forEach(function (k) { if (PROG.xp && typeof PROG.xp[k] === 'number' && PROG.xp[k] >= 0) XPR[k] = PROG.xp[k]; });
  var IDLE = typeof PROG.idleSeconds === 'number' && PROG.idleSeconds > 0 ? PROG.idleSeconds : 60;
  /* Levels are computed: XP from level k to k+1 = base * k ^ power. Stages (names and pictures) cover several levels each. */
  var CURVE = { base: 10, power: 1.8 };
  if (PROG.curve && +PROG.curve.base > 0) CURVE.base = +PROG.curve.base;
  if (PROG.curve && +PROG.curve.power > 0) CURVE.power = +PROG.curve.power;
  var PER_STAGE = Math.max(1, Math.floor(+PROG.levelsPerStage) || 1);
  var STAGES = list(PROG.stages).filter(function (s) { return s && str(s.name); }).map(function (s) { return { name: str(s.name), img: str(s.img) }; });
  if (!STAGES.length) {   /* progress.js missing or in the old format: use built-in defaults (10 stages x 2 levels) */
    STAGES = ['Hạt giống', 'Mầm non', 'Cây con', 'Cây non', 'Cây nhỏ', 'Cây trưởng thành', 'Cây lớn', 'Cây cao', 'Cây cổ thụ', 'Đại thụ'].map(function (n) { return { name: n, img: '' }; });
    if (!PROG.levelsPerStage) PER_STAGE = 2;
  }
  var PLEVELS = [], cumXp = 0;
  for (var lv = 1; lv <= STAGES.length * PER_STAGE; lv++) {
    var stg = STAGES[Math.floor((lv - 1) / PER_STAGE)];
    PLEVELS.push({ name: stg.name, img: stg.img, xp: cumXp });
    cumXp += Math.round(CURVE.base * Math.pow(lv, CURVE.power));
  }
  var ACHS = list(PROG.achievements).filter(function (x) { return x && str(x.id) && str(x.name) && str(x.stat) && typeof x.goal === 'number'; });

  function cleanActivity(raw) {
    var out = { days: Object.create(null), learned: Object.create(null), grammar: Object.create(null), ach: Object.create(null), bonus: 0 };
    if (!raw || typeof raw !== 'object') return out;
    if (isFinite(+raw.bonus)) out.bonus = Math.round(+raw.bonus);
    function num(v) { v = +v; return isFinite(v) && v > 0 ? Math.floor(v) : 0; }
    if (raw.days && typeof raw.days === 'object') Object.keys(raw.days).forEach(function (k) {
      var r = raw.days[k];
      if (/^\d{4}-\d{2}-\d{2}$/.test(k) && r && typeof r === 'object') out.days[k] = { s: num(r.s), l: num(r.l), r: num(r.r), g: num(r.g), t: num(r.t) };
    });
    ['learned', 'grammar'].forEach(function (f) {
      if (raw[f] && typeof raw[f] === 'object') Object.keys(raw[f]).forEach(function (k) { if (raw[f][k]) out[f][k] = 1; });
    });
    if (raw.ach && typeof raw.ach === 'object') Object.keys(raw.ach).forEach(function (k) { if (typeof raw.ach[k] === 'string') out.ach[k] = raw.ach[k].slice(0, 10); });
    return out;
  }
  var activity = cleanActivity(LS.get('oel.activity', {}));
  function saveActivity() { LS.set('oel.activity', activity); }
  function dayActive(r) { return !!r && (r.s >= 60 || r.l > 0 || r.r > 0 || r.g > 0 || r.t > 0); }
  function dayRec(d) { return activity.days[d] || (activity.days[d] = { s: 0, l: 0, r: 0, g: 0, t: 0 }); }

  function pStats() {
    var tot = { s: 0, r: 0, t: 0 }, active = 0;
    Object.keys(activity.days).forEach(function (k) {
      var r = activity.days[k]; tot.s += r.s; tot.r += r.r; tot.t += r.t; if (dayActive(r)) active++;
    });
    var td = activity.days[today()] || { s: 0, l: 0, r: 0, g: 0, t: 0 };
    var st = { minutes: Math.floor(tot.s / 60), streak: streak(), days: active, learned: Object.keys(activity.learned).length,
      reviewed: tot.r, grammar: Object.keys(activity.grammar).length, tests: tot.t, today: td };
    st.xp = st.minutes * XPR.minute + st.learned * XPR.learned + st.reviewed * XPR.reviewed + st.grammar * XPR.grammar + st.tests * XPR.test;
    st.xp = Math.max(0, st.xp + (activity.bonus || 0));
    st.level = levelOf(st.xp) + 1;
    return st;
  }
  function levelOf(xp) { var n = 0; PLEVELS.forEach(function (l, i) { if (xp >= l.xp) n = i; }); return n; }
  function toast(msg) {
    try {
      var el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); el.textContent = msg;
      document.body.appendChild(el); setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 5000);
    } catch (e) {}
  }
  function checkAchievements() {
    var st = pStats(), changed = false;
    ACHS.forEach(function (x) {
      if (!activity.ach[x.id] && st[x.stat] >= x.goal) { activity.ach[x.id] = today(); changed = true; toast('Huy hiệu mới: ' + x.name); }
    });
    return changed;
  }
  var lastLevel = levelOf(pStats().xp);
  function afterChange() {
    checkAchievements(); saveActivity();
    var lv = levelOf(pStats().xp);
    if (lv > lastLevel) toast('Lên cấp ' + (lv + 1) + ': ' + PLEVELS[lv].name);
    lastLevel = lv;
  }
  var Act = {
    learn: function (id) { if (!activity.learned[id]) { activity.learned[id] = 1; dayRec(today()).l++; afterChange(); } },
    review: function () { dayRec(today()).r++; afterChange(); },
    test: function () { dayRec(today()).t++; afterChange(); },
    grammar: function (title) { if (title && !activity.grammar[title]) { activity.grammar[title] = 1; dayRec(today()).g++; afterChange(); } }
  };
  /* Time on the site: counts only while the tab is visible and the visitor was active in the last IDLE seconds. */
  var lastInput = Date.now(), TICK = 5;
  ['pointerdown', 'keydown', 'scroll', 'touchstart', 'mousemove'].forEach(function (n) {
    window.addEventListener(n, function () { lastInput = Date.now(); }, { passive: true });
  });
  setInterval(function () {
    if (document.hidden || Date.now() - lastInput > IDLE * 1000) return;
    dayRec(today()).s += TICK; afterChange();
  }, TICK * 1000);


  /* ---------- Quản trị (ẩn): gõ mã bí mật vào ô tìm kiếm ở trang Ngữ pháp ---------- */
  /* Only a convenience for the site owner: it changes data stored in this browser, nothing else. The code is stored as hashes. */
  var ADMIN = LS.get('oel.admin', 0) === 1, admConfirm = '';
  function hashA(s) { var h = 0x811c9dc5, i; for (i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h; }
  function hashB(s) { var h = 5381, i; for (i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0; return h; }
  function isAdminCode(s) { s = String(s).trim(); return s.length === 6 && hashA(s) === 1538674554 && hashB(s) === 2340756696; }
  function syncAdminTab() {
    var nav = document.getElementById('tabs'), el = document.getElementById('tab-admin');
    if (!nav) return;
    if (!el) { el = document.createElement('a'); el.id = 'tab-admin'; el.href = '#admin'; el.setAttribute('data-r', 'admin'); el.textContent = 'Admin'; nav.appendChild(el); }
    el.hidden = !ADMIN;
  }
  function enableAdmin() {
    ADMIN = true; LS.set('oel.admin', 1); gQuery = ''; syncAdminTab(); toast('Đã bật chế độ quản trị');
    if (location.hash === '#admin') render(); else location.hash = '#admin';
  }
  function admQInfo(q) {
    if (!ADMIN) return '';
    var g = q.gid ? GBYID[q.gid] : null;
    return '<p class="adm-note">' + (!q.gid ? '⚠ Câu hỏi chưa có grammarId' : g ? 'grammarId ' + esc(q.gid) + ' → ' + esc(g.t) + ' ✓' : '⚠ grammarId ' + esc(q.gid) + ' không khớp quy tắc nào') + '</p>';
  }
  function admBtn(action, label, n, cls) {
    return '<button type="button" class="btn ' + (cls || 'ghost') + ' small" data-action="' + action + '"' + (n !== undefined ? ' data-n="' + n + '"' : '') + '>' + esc(label) + '</button>';
  }
  function admDanger(action, label) {
    var on = admConfirm === action;
    return '<button type="button" class="btn danger small" data-action="' + action + '">' + (on ? 'Bấm lần nữa để xác nhận: ' : '') + esc(label) + '</button>';
  }
  /* Vocabulary admin: words and meanings are matched by ID (the order number in oxford.csv / meanings.csv), never by row position. */
  var admV = { q: '', f: 'all', limit: 50 };
  /* Untranslated leftovers such as "cheap" -> "Một cách cheap": the meaning still contains the English headword as a whole word. */
  function engHit(w) {
    if (!hasDef(w) || !w.w) return null;
    try { return new RegExp('(^|[^\\p{L}])(' + w.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![\\p{L}])', 'iu').exec(w.vi); } catch (e) { return null; }
  }
  function admViHtml(w) {
    if (!hasDef(w)) return '<span class="muted">—</span>';
    var m = admV.f === 'eng' ? engHit(w) : null;
    if (!m) return esc(w.vi);
    var at = m.index + m[1].length;
    return esc(w.vi.slice(0, at)) + '<mark>' + esc(m[2]) + '</mark>' + esc(w.vi.slice(at + m[2].length));
  }
  function admVRows() {
    var q = admV.q.trim().toLowerCase(), rows = [];
    if (admV.f === 'orphan') {
      Object.keys(VDEF).forEach(function (k) { if (!VORD[k]) rows.push({ o: Number(k), orphan: true, vi: String(VDEF[k]) }); });
    } else {
      VOCAB.forEach(function (w) {
        if (admV.f === 'nomean' && hasDef(w)) return;
        if (admV.f === 'noaudio' && w.uk && w.us) return;
        if (admV.f === 'eng' && !engHit(w)) return;
        rows.push(w);
      });
    }
    rows.sort(function (a, b) { return a.o - b.o; });
    if (q) rows = rows.filter(function (w) { return String(w.o) === q || (w.w || '').toLowerCase().indexOf(q) > -1 || (w.vi || '').toLowerCase().indexOf(q) > -1; });
    return rows;
  }
  function renderAdmVList() {
    var el = document.getElementById('adm-vlist'), cnt = document.getElementById('adm-vcount');
    if (!el) return;
    var rows = admVRows(), shown = rows.slice(0, admV.limit);
    cnt.textContent = rows.length + ' dòng' + (rows.length > shown.length ? ', đang hiện ' + shown.length : '');
    if (!rows.length) { el.innerHTML = '<div class="empty">Không có dòng nào phù hợp.</div>'; return; }
    el.innerHTML = '<div class="table-wrap"><table style="min-width:0"><thead><tr><th>ID</th><th>Từ</th><th>Loại</th><th>Cấp</th><th>Phiên âm</th><th>Nghĩa</th><th>Anh</th><th>Mỹ</th></tr></thead><tbody>' +
      shown.map(function (w) {
        if (w.orphan) return '<tr><td>' + w.o + '</td><td colspan="4"><span class="adm-note">⚠ không có từ nào mang ID này</span></td><td>' + esc(w.vi) + '</td><td></td><td></td></tr>';
        return '<tr><td>' + w.o + '</td><td>' + esc(w.w) + '</td><td>' + esc(w.pos) + '</td><td>' + esc(w.lv) + '</td><td>' + esc(w.ph) + '</td><td>' + admViHtml(w) +
          '</td><td>' + (w.uk ? '✓' : '—') + '</td><td>' + (w.us ? '✓' : '—') + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      (rows.length > shown.length ? '<div style="margin-top:0.8rem">' + admBtn('adm-v-more', 'Xem thêm 50 dòng') + '</div>' : '');
  }
  /* Questions whose correct answer repeats a word that is already in the question text (the answer is partly given away),
     e.g. "They ___ getting their dog to the vet." with the answer "are getting". Only a word right before or right after the blank
     is a real hit ('adj'); 'all' also lists words that merely appear somewhere else in the question (mostly false alarms). */
  var admS = { f: 'adj', q: '', limit: 50 };
  function spoilNorm(w) { return String(w).toLowerCase().replace(/[’‘]/g, "'").replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, ''); }
  function spoilWords(t) { return String(t).split(/\s+/).map(spoilNorm).filter(Boolean); }
  function spoilHits() {
    var out = [];
    BANK.forEach(function (q) {
      var ans = q.o[q.a], aw = spoilWords(ans), adj = [], parts = String(q.q).split(/_{2,}/), k;
      if (parts.length === 2) {   /* exactly one blank */
        var before = spoilWords(parts[0]), after = spoilWords(parts[1]);
        for (k = Math.min(aw.length, after.length); k >= 1; k--) { if (aw.slice(aw.length - k).join(' ') === after.slice(0, k).join(' ')) { adj = adj.concat(aw.slice(aw.length - k)); break; } }
        for (k = Math.min(aw.length, before.length); k >= 1; k--) { if (aw.slice(0, k).join(' ') === before.slice(before.length - k).join(' ')) { adj = adj.concat(aw.slice(0, k)); break; } }
      }
      var qs = {}, seen = {}, any = [];
      spoilWords(q.q).forEach(function (w) { qs[w] = 1; });
      aw.forEach(function (w) { if (qs[w] && !seen[w]) { seen[w] = 1; any.push(w); } });
      if (any.length) out.push({ q: q, ans: ans, hits: adj.length ? adj.filter(function (w, i) { return adj.indexOf(w) === i; }) : any, adj: adj.length > 0 });
    });
    return out;
  }
  function hlShared(text, words) {   /* escape text and mark the whole words that are in 'words' */
    var set = {}, re = /[A-Za-z0-9]+(?:['’][A-Za-z]+)*/g, out = '', last = 0, m;
    words.forEach(function (w) { set[w] = 1; });
    text = String(text);
    while ((m = re.exec(text))) {
      out += esc(text.slice(last, m.index));
      out += set[m[0].toLowerCase().replace(/[’‘]/g, "'")] ? '<mark>' + esc(m[0]) + '</mark>' : esc(m[0]);
      last = m.index + m[0].length;
    }
    return out + esc(text.slice(last));
  }
  function admSRows() {
    var q = admS.q.trim().toLowerCase();
    return spoilHits().filter(function (r) {
      if (admS.f === 'adj' && !r.adj) return false;
      if (!q) return true;
      return String(r.q.n) === q || (r.q.q + ' ' + r.ans + ' ' + r.q.gid + ' ' + r.q.topic).toLowerCase().indexOf(q) > -1;
    });
  }
  function renderAdmSList() {
    var el = document.getElementById('adm-slist'), cnt = document.getElementById('adm-scount');
    if (!el) return;
    var rows = admSRows(), shown = rows.slice(0, admS.limit);
    cnt.textContent = rows.length + ' câu' + (rows.length > shown.length ? ', đang hiện ' + shown.length : '');
    if (!rows.length) { el.innerHTML = '<div class="empty">Không có câu nào phù hợp.</div>'; return; }
    el.innerHTML = '<div class="table-wrap"><table style="min-width:0"><thead><tr><th>#</th><th>Cấp</th><th>Câu hỏi</th><th>Đáp án đúng</th><th>Từ trùng</th><th>Các lựa chọn</th><th>grammarId</th></tr></thead><tbody>' +
      shown.map(function (r) {
        var q = r.q, opts = q.o.map(function (o, i) { return i === q.a ? '<b>' + hlShared(o, r.hits) + '</b>' : esc(o); }).join(' · ');
        return '<tr><td>' + q.n + '</td><td>' + esc(q.lv) + '</td><td>' + hlShared(q.q, r.hits) + '</td><td>' + hlShared(r.ans, r.hits) + '</td><td>' + esc(r.hits.join(', ')) + '</td><td>' + opts + '</td><td>' + esc(q.gid || '—') + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      (rows.length > shown.length ? '<div style="margin-top:0.8rem">' + admBtn('adm-s-more', 'Xem thêm 50 câu') + '</div>' : '');
  }
  function admSpoilPanel() {
    var all = spoilHits(), adjN = all.filter(function (r) { return r.adj; }).length;
    var fl = [['adj', 'Sát chỗ trống (' + adjN + ')'], ['all', 'Mọi từ trùng (' + all.length + ')']].map(function (f) { return chipBtn('adm-s-f', f[0], f[1], admS.f === f[0]); }).join('');
    return '<section class="panel stack" style="gap:0.8rem"><h2>Kiểm tra đáp án lộ từ trong câu hỏi</h2>' +
      '<p class="muted">Đáp án đúng không nên lặp từ đã nằm ngay cạnh chỗ trống (ví dụ “They ___ getting their dog…” mà đáp án là “are getting”). “Sát chỗ trống” chỉ tính từ đứng ngay trước hoặc ngay sau chỗ trống, đây là lỗi thật; “Mọi từ trùng” còn hiện cả từ trùng ở chỗ khác trong câu, phần lớn là báo nhầm. Từ trùng được tô vàng. Số # là vị trí câu trong content/questions.js. Các câu đơn giản có thể sửa hàng loạt bằng <code>node tools/fix-answer-spoilers.js --apply</code>; những câu còn lại cần xem từng câu (ví dụ các câu to + động từ mà một lựa chọn chỉ là động từ).</p>' +
      '<div class="chips" role="group" aria-label="Lọc câu trùng từ">' + fl + '</div>' +
      '<div><label for="adm-s-search">Tìm theo số câu, chữ, grammarId hoặc chủ đề</label><input id="adm-s-search" type="search" autocomplete="off" value="' + esc(admS.q) + '"></div>' +
      '<p class="muted" id="adm-scount" aria-live="polite"></p><div id="adm-slist"></div></section>';
  }
  /* IPA tests admin: these tests have no IDs, so each question is shown as the row it comes from
     (line in odd-sounds.csv, position in quotes.js, "syllables:stressed syllable" group in stress.js). */
  var admI = { q: '', f: 'sound', limit: 50 };
  function admIRows() {
    var q = admI.q.trim().toLowerCase(), rows = [];
    if (admI.f === 'quotes') {
      return QUOTES.filter(function (x) { return !q || String(x.n) === q || (x.t + ' ' + x.a + ' ' + x.ipa + ' ' + x.vi).toLowerCase().indexOf(q) > -1; });
    }
    if (admI.f === 'stress') {
      var st = OEL.stress || {};
      Object.keys(st).sort().forEach(function (k) {
        var ws = list(st[k]).map(String);
        if (!q) rows.push({ k: k, words: ws, all: ws.length });
        else { var hit = ws.filter(function (w) { return w.toLowerCase().indexOf(q) > -1; }); if (hit.length) rows.push({ k: k, words: hit, all: ws.length, hit: true }); }
      });
      return rows;
    }
    return ODDS.filter(function (x) { return !q || String(x.row) === q || (x.o.join(' ').replace(/\*/g, '') + ' ' + x.note).toLowerCase().indexOf(q) > -1; });
  }
  function renderAdmIList() {
    var el = document.getElementById('adm-ilist'), cnt = document.getElementById('adm-icount');
    if (!el) return;
    var rows = admIRows(), shown = admI.f === 'stress' ? rows : rows.slice(0, admI.limit), body, headRow;
    cnt.textContent = rows.length + (admI.f === 'stress' ? ' nhóm' : ' dòng') + (rows.length > shown.length ? ', đang hiện ' + shown.length : '');
    if (!rows.length) { el.innerHTML = '<div class="empty">Không có dòng nào phù hợp.</div>'; return; }
    if (admI.f === 'quotes') {
      headRow = '<th>#</th><th>Câu</th><th>Tác giả</th><th>Phiên âm</th><th>Nghĩa</th>';
      body = shown.map(function (x) { return '<tr><td>' + x.n + '</td><td>' + esc(x.t) + '</td><td>' + esc(x.a) + '</td><td>' + esc(x.ipa) + '</td><td>' + esc(x.vi) + '</td></tr>'; }).join('');
    } else if (admI.f === 'stress') {
      headRow = '<th>Nhóm</th><th>Số âm tiết</th><th>Nhấn âm tiết</th><th>Số từ</th><th>Từ</th>';
      body = shown.map(function (x) {
        var p = x.k.split(':'), ws = x.hit ? x.words : x.words.slice(0, 12);
        return '<tr><td>' + esc(x.k) + '</td><td>' + esc(p[0]) + '</td><td>' + ((+p[1]) + 1) + '</td><td>' + x.all + '</td><td>' + esc(ws.join(', ')) + (!x.hit && x.words.length > 12 ? '…' : '') + '</td></tr>';
      }).join('');
    } else {
      headRow = '<th>Dòng CSV</th><th>A</th><th>B</th><th>C</th><th>D</th><th>Ghi chú</th>';
      body = shown.map(function (x) {
        return '<tr><td>' + x.row + '</td>' + x.o.map(function (o, i) { return '<td' + (i === x.a ? ' class="adm-ok"' : '') + '>' + markedWord(o).html + (i === x.a ? ' ✓' : '') + '</td>'; }).join('') + '<td>' + esc(x.note) + '</td></tr>';
      }).join('');
    }
    el.innerHTML = '<div class="table-wrap"><table style="min-width:0"><thead><tr>' + headRow + '</tr></thead><tbody>' + body + '</tbody></table></div>' +
      (rows.length > shown.length ? '<div style="margin-top:0.8rem">' + admBtn('adm-i-more', 'Xem thêm 50 dòng') + '</div>' : '');
  }
  function admIpaPanel() {
    var fl = [['sound', 'Khác âm (' + ODDS.length + ')'], ['quotes', 'Câu trích dẫn (' + QUOTES.length + ')'], ['stress', 'Trọng âm (' + Object.keys(OEL.stress || {}).length + ' nhóm)']]
      .map(function (f) { return chipBtn('adm-i-f', f[0], f[1], admI.f === f[0]); }).join('');
    return '<section class="panel stack" style="gap:0.8rem"><h2>Kiểm tra bài phát âm</h2>' +
      '<p class="muted">Các bài phát âm không dùng ID, nên mỗi câu hỏi được hiện theo dòng nó nằm trong tệp nguồn. “Khác âm”: dòng trong content/odd-sounds.csv (đáp án đánh dấu ✓). “Câu trích dẫn”: số thứ tự trong content/quotes.js. “Trọng âm”: bài ghép ngẫu nhiên từ các nhóm “số âm tiết:vị trí âm tiết nhấn” trong content/stress.js, gõ một từ để biết nó nằm ở nhóm nào. Bài “Phiên âm sang từ” lấy từ danh sách từ vựng (xem theo ID ở mục từ vựng). Khi bạn làm bài ở chế độ admin, nguồn của câu đang làm cũng hiện ngay dưới đề.</p>' +
      '<div class="chips" role="group" aria-label="Chọn bài phát âm">' + fl + '</div>' +
      '<div><label for="adm-i-search">Tìm theo số dòng, từ hoặc ghi chú</label><input id="adm-i-search" type="search" autocomplete="off" value="' + esc(admI.q) + '"></div>' +
      '<p class="muted" id="adm-icount" aria-live="polite"></p><div id="adm-ilist"></div></section>';
  }
  function admEloPanel() {
    var h = ELO.h.slice(-100), pts = '', ok = ELO.h.filter(function (x) { return x.ok; }).length;
    if (h.length > 1) {
      var lo = Math.min.apply(null, h.map(function (x) { return x.r; })), hi = Math.max.apply(null, h.map(function (x) { return x.r; }));
      pts = h.map(function (x, i) { return (i / (h.length - 1) * 300).toFixed(1) + ',' + (56 - (x.r - lo) / (hi - lo || 1) * 52).toFixed(1); }).join(' ');
    }
    var lv = Object.keys(LEVEL_ELO).map(function (l) { return '<span class="tag">' + l + ': ' + LEVEL_ELO[l] + '</span>'; }).join(' ');
    return '<section class="panel stack" style="gap:0.8rem"><h2>Elo (thử nghiệm)</h2>' +
      '<p>Điểm hiện tại: <strong>' + Math.round(ELO.r) + '</strong> · cấp theo Elo: <strong>' + esc(eloBand(ELO.r, bankLevels())) + '</strong> · câu đã tính: <strong>' + ELO.n + '</strong> · đã qua bài đầu tiên: <strong>' + (ELO.s ? 'rồi' : 'chưa (bài sau dùng cách cũ rồi gieo Elo)') + '</strong> (đúng ' + ok + '/' + ELO.h.length + ' trong ' + ELO.h.length + ' câu gần nhất) · K = ' + Math.round(eloK()) + '</p>' +
      '<p class="muted">Độ khó mỗi cấp: ' + lv + '. Điểm bắt đầu ' + ECFG.start + '. Chỉ admin thấy điểm này. Mọi câu trả lời trong mọi bài đều được tính.</p>' +
      (pts ? '<svg viewBox="0 0 300 60" width="100%" height="60" role="img" aria-label="Biểu đồ Elo ' + h.length + ' câu gần nhất" preserveAspectRatio="none" style="max-width:30rem"><polyline fill="none" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke" points="' + pts + '"/></svg>' : '') +
      '<p>Cách xếp cấp đang dùng: <strong>' + (eloMode === 'elo' ? 'Elo' : 'cách cũ (cấp có tỉ lệ đúng cao nhất)') + '</strong></p>' +
      '<div class="row">' + admBtn('adm-elo-mode', eloMode === 'elo' ? 'Chuyển về cách cũ' : 'Chuyển sang Elo') + admDanger('adm-reset-elo', 'Đặt lại Elo') + '</div></section>';
  }
  function admEloCfgPanel() {
    function num(k, label, desc, step) { return '<label class="elo-f"><span><b>' + label + '</b> <code>' + k + '</code></span><input type="number" step="' + (step || 1) + '" id="ec-' + k + '" value="' + ECFG[k] + '"><small class="muted">' + desc + '</small></label>'; }
    function chk(k, label, desc) { return '<label class="elo-f"><span><b>' + label + '</b> <code>' + k + '</code></span><input type="checkbox" id="ec-' + k + '"' + (ECFG[k] ? ' checked' : '') + '><small class="muted">' + desc + '</small></label>'; }
    var lvF = Object.keys(ECFG.lv).map(function (l) { return '<label class="elo-f"><span><b>Độ khó ' + l + '</b> <code>D(' + l + ')</code></span><input type="number" step="10" id="ec-lv-' + l + '" value="' + ECFG.lv[l] + '"></label>'; }).join('');
    return '<section class="panel stack" style="gap:0.8rem"><h2>Chỉnh công thức Elo</h2>' +
      '<p class="muted">Sửa các ô rồi bấm Áp dụng. Thay đổi có hiệu lực ngay cho các câu trả lời tiếp theo và được lưu trong trình duyệt này. Khi ưng ý, hãy báo để cố định vào mã nguồn.</p>' +
      '<pre class="elo-eq">Xác suất đúng kỳ vọng:  p = g + (1 − g) / (1 + 10^((D − R) / S))\n' +
      'Xác suất đoán mò:       g = 1 / số lựa chọn   (g = 0 nếu tắt đoán mò)\n' +
      'Hệ số K (giảm dần):     K = K0 + K1 · e^(−n / τ)\n' +
      'Cập nhật sau mỗi câu:   R mới = R + K · (kết quả − p)      kết quả = 1 nếu đúng, 0 nếu sai\n' +
      'Xếp cấp:                cấp cao nhất có  R ≥ D(cấp) − biên</pre>' +
      '<div class="table-wrap"><table style="min-width:0"><thead><tr><th>Ký hiệu</th><th>Ý nghĩa</th></tr></thead><tbody>' +
      '<tr><td><code>R</code></td><td>Điểm Elo hiện tại của người học.</td></tr>' +
      '<tr><td><code>D</code></td><td>Độ khó của câu hỏi, lấy theo cấp CEFR của câu (xem các ô Độ khó bên dưới).</td></tr>' +
      '<tr><td><code>S</code></td><td>Độ dốc: chênh lệch D − R bằng S thì xác suất đúng của người học còn khoảng 9%/91% (không tính đoán mò). S nhỏ thì đường cong dốc hơn.</td></tr>' +
      '<tr><td><code>g</code></td><td>Xác suất đoán mò, là mức sàn của p.</td></tr>' +
      '<tr><td><code>n</code></td><td>Số câu đã tính từ lúc bắt đầu (hoặc từ lần đặt lại).</td></tr>' +
      '<tr><td><code>K</code></td><td>Bước thay đổi điểm. Câu đầu K = K0 + K1, càng nhiều câu K càng tiến gần K0.</td></tr>' +
      '<tr><td><code>τ</code></td><td>Tốc độ K giảm: sau τ câu thì phần K1 còn khoảng 37%.</td></tr>' +
      '<tr><td><code>biên</code></td><td>Cho phép lên cấp sớm hơn một chút: R chỉ cần đạt D − biên.</td></tr></tbody></table></div>' +
      '<div class="elo-grid">' + num('start', 'Điểm bắt đầu', 'R ban đầu của người mới.', 10) + num('scale', 'Độ dốc', 'S trong công thức.', 10) +
      num('k0', 'K thấp nhất', 'K0: bước nhỏ nhất khi đã làm nhiều câu.', 1) + num('k1', 'K thêm ở đầu', 'K1: phần cộng thêm ở những câu đầu.', 1) +
      num('tau', 'Tốc độ giảm K', 'τ: số câu để phần K1 giảm còn ~37%.', 1) + num('margin', 'Biên xếp cấp', 'Trừ vào ngưỡng của mỗi cấp.', 10) +
      num('min', 'Điểm tối thiểu', 'R không xuống dưới mức này.', 50) + num('max', 'Điểm tối đa', 'R không vượt mức này.', 50) + lvF + '</div>' +
      '<div class="elo-grid">' + chk('guess', 'Tính đoán mò', 'Bật thì g = 1 / số lựa chọn.') +
      chk('firstOld', 'Lần đầu dùng cách cũ', 'Lần Tự kiểm tra trình độ đầu tiên xếp cấp bằng cách cũ.') +
      chk('seed', 'Gieo Elo sau lần đầu', 'Sau lần đầu, đặt R bằng D của cấp vừa xếp.') + '</div>' +
      '<div class="stack" style="gap:0.6rem"><h3 style="margin:0">Máy tính thử</h3><p class="muted" style="margin:0">Kết quả tự cập nhật khi bạn sửa bất kỳ ô nào ở trên hoặc ở dưới (chưa cần bấm Áp dụng). Cho biết một câu trả lời sẽ đổi điểm bao nhiêu.</p><div class="elo-grid">' +
      '<label class="elo-f"><span><b>Điểm hiện tại</b> <code>R</code></span><input type="number" id="ecc-r" value="' + Math.round(ELO.r) + '"></label>' +
      '<label class="elo-f"><span><b>Số câu đã làm</b> <code>n</code></span><input type="number" id="ecc-n" value="' + ELO.n + '"></label>' +
      '<label class="elo-f"><span><b>Cấp của câu hỏi</b></span><select id="ecc-lv">' + Object.keys(ECFG.lv).map(function (l) { return '<option' + (l === 'C1' ? ' selected' : '') + '>' + l + '</option>'; }).join('') + '</select></label>' +
      '<label class="elo-f"><span><b>Số lựa chọn</b></span><input type="number" id="ecc-o" value="4"></label>' +
      '<label class="elo-f"><span><b>Kết quả</b></span><select id="ecc-ok"><option value="1">Đúng</option><option value="0">Sai</option></select></label></div>' +
      '<pre class="elo-eq" id="ecc-out"></pre></div>' +
      '<div class="row">' + admBtn('adm-elo-save', 'Áp dụng', undefined, '') + admBtn('adm-elo-defaults', 'Về mặc định') + '</div></section>';
  }
  function eloCalcOut() {
      var fv = function (id, d) { var e = document.getElementById(id), v = e ? parseFloat(e.value) : NaN; return isFinite(v) ? v : d; };
      var cR = fv('ecc-r', ELO.r), cN = Math.max(0, fv('ecc-n', 0)), cO = Math.max(2, fv('ecc-o', 4)), cLv = (document.getElementById('ecc-lv') || {}).value, cOk = fv('ecc-ok', 1);
      var cS = fv('ec-scale', ECFG.scale) || ECFG.scale, cTau = fv('ec-tau', ECFG.tau) || ECFG.tau, cD = fv('ec-lv-' + cLv, ECFG.lv[cLv]);
      var cG = (document.getElementById('ec-guess') ? document.getElementById('ec-guess').checked : ECFG.guess) ? 1 / cO : 0;
      var cK = fv('ec-k0', ECFG.k0) + fv('ec-k1', ECFG.k1) * Math.exp(-cN / cTau), cP = cG + (1 - cG) / (1 + Math.pow(10, (cD - cR) / cS)), cNew = cR + cK * (cOk - cP);
      var out = document.getElementById('ecc-out');
      if (out) out.textContent = 'D (độ khó câu ' + cLv + ') = ' + cD + '\ng = ' + cG.toFixed(3) + '\np = ' + cG.toFixed(3) + ' + (1 − ' + cG.toFixed(3) + ') / (1 + 10^((' + cD + ' − ' + Math.round(cR) + ') / ' + cS + ')) = ' + cP.toFixed(4) +
        '\nK = ' + cK.toFixed(1) + '\nthay đổi = K × (' + cOk + ' − p) = ' + (cK * (cOk - cP) >= 0 ? '+' : '') + (cK * (cOk - cP)).toFixed(1) + '\nR mới = ' + Math.round(cNew);
  }
  function admVocabPanel() {
    var withDef = VOCAB.filter(hasDef).length, mIds = Object.keys(VDEF), orphan = mIds.filter(function (k) { return !VORD[k]; });
    var noUk = VOCAB.filter(function (w) { return !w.uk; }).length, noUs = VOCAB.filter(function (w) { return !w.us; }).length;
    function ids(a, n) { return a.length ? ' (' + esc(a.slice(0, n).join(', ')) + (a.length > n ? '…' : '') + ')' : ''; }
    var fl = [['all', 'Tất cả'], ['nomean', 'Chưa có nghĩa'], ['noaudio', 'Thiếu âm thanh'], ['eng', 'Nghĩa còn từ tiếng Anh (' + VOCAB.filter(engHit).length + ')'], ['orphan', 'ID nghĩa không có từ']].map(function (f) { return chipBtn('adm-v-f', f[0], f[1], admV.f === f[0]); }).join('');
    return '<section class="panel stack" style="gap:0.8rem"><h2>Kiểm tra từ vựng (theo ID)</h2>' +
      '<p>Từ: <strong>' + VOCAB.length + '</strong> · ID nghĩa: <strong>' + mIds.length + '</strong> · từ đã có nghĩa: <strong>' + withDef + '</strong> · chưa có nghĩa: <strong>' + (VOCAB.length - withDef) + '</strong></p>' +
      '<p>ID nghĩa không có từ tương ứng: <strong>' + orphan.length + '</strong>' + ids(orphan, 12) + '</p>' +
      '<p>ID từ bị trùng: <strong>' + VDUP.length + '</strong>' + ids(VDUP, 12) + ' · dòng từ bị bỏ qua: <strong>' + VSKIP + '</strong></p>' +
      '<p>Thiếu tệp âm thanh Anh: <strong>' + noUk + '</strong> · Mỹ: <strong>' + noUs + '</strong></p>' +
      '<div class="chips" role="group" aria-label="Lọc bảng từ vựng">' + fl + '</div>' +
      '<div><label for="adm-v-search">Tìm theo ID, từ hoặc nghĩa</label><input id="adm-v-search" type="search" autocomplete="off" value="' + esc(admV.q) + '"></div>' +
      '<p class="muted" id="adm-vcount" aria-live="polite"></p><div id="adm-vlist"></div></section>';
  }
  function viewAdmin() {
    var ps = pStats(), lvRows = '', i;
    var byLv = {}, byTopic = {};
    BANK.forEach(function (q) { byLv[q.lv] = (byLv[q.lv] || 0) + 1; byTopic[q.topic || '(không có)'] = (byTopic[q.topic || '(không có)'] || 0) + 1; });
    var gLv = {}; GRAMMAR.forEach(function (g) { gLv[g.lv] = (gLv[g.lv] || 0) + 1; });
    function kv(o) { return Object.keys(o).sort().map(function (k) { return '<span class="tag">' + esc(k) + ': ' + o[k] + '</span>'; }).join(' '); }
    var noIdQ = BANK.filter(function (q) { return !q.gid; }).length;
    var orphan = BANK.filter(function (q) { return q.gid && !GBYID[q.gid]; });
    var noIdG = GRAMMAR.filter(function (g) { return !g.gid; });
    var noQ = GRAMMAR.filter(function (g) { return g.gid && !LINKS[g.gid]; });
    var okQ = BANK.length - noIdQ - orphan.length;
    function short(s) { s = String(s); return s.length > 70 ? s.slice(0, 70) + '…' : s; }
    var rows = GRAMMAR.map(function (g) {
      return '<tr><td>' + esc(g.gid || '—') + '</td><td>' + esc(g.t) + '</td><td>' + esc(g.lv) + '</td><td>' + esc(g.topic) + '</td><td>' + (g.gid ? (LINKS[g.gid] || 0) : '—') + '</td></tr>';
    }).join('');
    var orphanHtml = orphan.length ? '<div class="table-wrap"><table style="min-width:0"><thead><tr><th>grammarId</th><th>Câu hỏi</th></tr></thead><tbody>' +
      orphan.slice(0, 60).map(function (q) { return '<tr><td>' + esc(q.gid) + '</td><td>' + esc(short(q.q)) + '</td></tr>'; }).join('') + '</tbody></table></div>' + (orphan.length > 60 ? '<p class="muted">… và ' + (orphan.length - 60) + ' câu nữa.</p>' : '') : '';
    var vocabInfo = VLEVELS.map(function (l) { return '<span class="tag">' + esc(l) + ': ' + levelWords(l).length + ' từ</span>'; }).join(' ');
    var setInfo = QSETS.map(function (s) { return '<span class="tag">' + esc(s.id) + ' (' + esc(s.lv) + '): ' + s.qs.length + ' câu</span>'; }).join(' ');
    return head('Quản trị', 'Chế độ ẩn dành cho chủ trang. Mọi thay đổi chỉ nằm trong trình duyệt này.') + '<div class="stack" style="gap:1.5rem">' +
      '<section class="panel stack" style="gap:0.8rem"><h2>Nội dung</h2>' +
      '<p>Phiên bản trang: <strong>' + esc(APP_V || '?') + '</strong> (đang chạy)</p>' +
      '<p>Ngữ pháp: <strong>' + GRAMMAR.length + '</strong> quy tắc ' + kv(gLv) + '</p>' +
      '<p>Câu hỏi: <strong>' + BANK.length + '</strong> ' + kv(byLv) + '</p><p>Chủ đề câu hỏi: ' + kv(byTopic) + '</p>' +
      '<p>Từ vựng: ' + vocabInfo + '</p><p>Bài luyện: ' + setInfo + '</p></section>' +
      '<section class="panel stack" style="gap:0.8rem"><h2>Kiểm tra grammarId</h2>' +
      '<p>Câu hỏi khớp quy tắc: <strong>' + okQ + '</strong> · chưa có grammarId: <strong>' + noIdQ + '</strong> · grammarId không khớp: <strong>' + orphan.length + '</strong></p>' +
      '<p>Quy tắc chưa có grammarId: <strong>' + noIdG.length + '</strong>' + (noIdG.length ? ' (' + esc(noIdG.slice(0, 8).map(function (g) { return g.t; }).join('; ')) + (noIdG.length > 8 ? '…' : '') + ')' : '') + '</p>' +
      '<p>grammarId bị trùng: <strong>' + GDUP.length + '</strong>' + (GDUP.length ? ' (' + esc(GDUP.join(', ')) + ')' : '') + '</p>' +
      '<p>Quy tắc chưa có câu hỏi nào: <strong>' + noQ.length + '</strong>' + (noQ.length ? ' (' + esc(noQ.slice(0, 12).map(function (g) { return g.gid; }).join(', ')) + (noQ.length > 12 ? '…' : '') + ')' : '') + '</p>' +
      orphanHtml + '<details><summary style="cursor:pointer;font-weight:600">Bảng quy tắc ngữ pháp (' + GRAMMAR.length + ')</summary><div class="table-wrap"><table style="min-width:0"><thead><tr><th>ID</th><th>Quy tắc</th><th>Cấp</th><th>Chủ đề</th><th>Số câu hỏi</th></tr></thead><tbody>' + rows + '</tbody></table></div></details></section>' +
      admFontPanel() + admEloPanel() + admEloCfgPanel() + admVocabPanel() + admSpoilPanel() + admIpaPanel() +
      '<section class="panel stack" style="gap:0.8rem"><h2>Tiến độ (thử nghiệm)</h2>' +
      '<p>XP hiện tại: <strong>' + ps.xp + '</strong> (đã cộng thêm ' + (activity.bonus || 0) + ') · Cấp <strong>' + ps.level + '</strong> / ' + PLEVELS.length + ' · chuỗi ' + ps.streak + ' ngày</p>' +
      '<div class="row">' + [10, 100, 1000].map(function (n) { return admBtn('adm-xp', '+' + n + ' XP', n); }).join('') + admBtn('adm-xp', '-100 XP', -100) + '</div>' +
      '<div class="row"><label for="adm-level" style="margin:0">Đặt cấp</label><input id="adm-level" type="number" min="1" max="' + PLEVELS.length + '" value="' + ps.level + '" style="width:5rem">' + admBtn('adm-level', 'Đặt') + '</div>' +
      '<div class="row"><label for="adm-streak" style="margin:0">Chuỗi ngày</label><input id="adm-streak" type="number" min="1" max="400" value="7" style="width:5rem">' + admBtn('adm-streak', 'Tạo chuỗi') + '</div>' +
      '<div class="row">' + admBtn('adm-min', '+10 phút', 10) + admBtn('adm-words', '+10 từ', 10) + admBtn('adm-rev', '+10 lần ôn', 10) + admBtn('adm-gram', '+5 ngữ pháp', 5) + admBtn('adm-test', '+1 bài kiểm tra', 1) + '</div>' +
      '<div class="row">' + admBtn('adm-ach-all', 'Mở hết huy hiệu') + admBtn('adm-ach-none', 'Khóa hết huy hiệu') + '</div>' +
      '<div class="row">' + admDanger('adm-reset-progress', 'Xóa tiến độ và XP') + admDanger('adm-reset-tests', 'Xóa điểm bài kiểm tra') + admDanger('adm-reset-vocab', 'Xóa danh sách từ') + admDanger('adm-reset-all', 'Xóa tất cả dữ liệu') + '</div></section>' +
      '<div><button type="button" class="btn ghost" data-action="adm-exit">Thoát chế độ quản trị</button></div></div>';
  }
  /* ---------- Phông chữ (chọn thử trong trang Quản trị, lưu trong trình duyệt này) ---------- */
  /* c = kiểu chữ dự phòng (sans, serif, hand, mono); w = các độ đậm xin từ Google Fonts; d = phông đang dùng sẵn trong index.html. */
  var FONT_LIST = [
    { n: 'Nunito', c: 'sans', w: '400;600;700', t: 'Tròn, ấm, dễ đọc' },
    { n: 'Quicksand', c: 'sans', w: '400;600;700', t: 'Tròn, nhẹ, vui' },
    { n: 'Baloo 2', c: 'sans', w: '400;600;700', t: 'Tròn đậm, thân thiện' },
    { n: 'Be Vietnam Pro', c: 'sans', w: '400;600;700', t: 'Thiết kế cho tiếng Việt' },
    { n: 'Lexend', c: 'sans', w: '400;500;700', t: 'Cũ (tiêu đề)' },
    { n: 'Mulish', c: 'sans', w: '400;600;700', t: 'Sạch, mềm' },
    { n: 'Varela Round', c: 'sans', w: '400', t: 'Tròn, gọn' },
    { n: 'M PLUS Rounded 1c', c: 'sans', w: '400;700', t: 'Nét bo tròn' },
    { n: 'Comfortaa', c: 'sans', w: '400;700', t: 'Hình học tròn, vui mắt' },
    { n: 'Fredoka', c: 'sans', w: '400;500;600;700', t: 'Cũ (nội dung)' },
    { n: 'Plus Jakarta Sans', c: 'sans', w: '400;600;700', t: 'Hiện đại, dịu' },
    { n: 'Josefin Sans', c: 'sans', w: '400;600', t: 'Thanh, hình học' },
    { n: 'Patrick Hand', c: 'hand', w: '400', t: 'Chữ viết tay' },
    { n: 'Itim', c: 'hand', w: '400', t: 'Hiện tại (nhãn nhỏ)', d: 1 },
    { n: 'Lora', c: 'serif', w: '400;600;700', t: 'Có chân, ấm' },
    { n: 'Literata', c: 'serif', w: '400;600;700', t: 'Có chân, dễ đọc lâu' },
    { n: 'Merriweather', c: 'serif', w: '400;700', t: 'Có chân, rộng, rõ' },
    { n: 'Crimson Pro', c: 'serif', w: '400;600', t: 'Có chân, thanh lịch' },
    { n: 'Newsreader', c: 'serif', w: '400;500;600;700', t: 'Hiện tại (tiêu đề)', d: 1 },
    { n: 'Bitter', c: 'serif', w: '400;500;600;700', t: 'Hiện tại (nội dung)', d: 1 },
    { n: 'Bricolage Grotesque', c: 'sans', w: '500;700', t: 'Cũ (tiêu đề)' },
    { n: 'Source Serif 4', c: 'serif', w: '400;600', t: 'Cũ (nội dung)' },
    { n: 'IBM Plex Mono', c: 'mono', w: '400;500', t: 'Cũ (nhãn nhỏ)' }
  ];
  var FONT_BY = Object.create(null);
  FONT_LIST.forEach(function (f) { FONT_BY[f.n] = f; });
  var FONT_ROLES = [['display', 'Tiêu đề, tab, nút'], ['body', 'Nội dung'], ['mono', 'Nhãn nhỏ, thẻ, dạng ngữ pháp, IPA']];
  var FONT_DEF = { display: 'Newsreader', body: 'Bitter', mono: 'Itim' };
  var FONTSEL = LS.get('oel.fonts', {});
  if (!FONTSEL || typeof FONTSEL !== 'object' || Array.isArray(FONTSEL)) FONTSEL = {};
  function fontCss(name) {
    var f = FONT_BY[name], fb = !f ? 'sans-serif' : f.c === 'serif' ? "Georgia, 'Times New Roman', serif" : f.c === 'mono' ? "ui-monospace, Menlo, Consolas, monospace" :
      f.c === 'hand' ? "'Segoe Print', 'Comic Sans MS', cursive" : "'Segoe UI', system-ui, sans-serif";
    return "'" + name + "', " + fb;
  }
  function loadFont(name) {
    var f = FONT_BY[name];
    if (!f || f.d) return;
    var id = 'font-' + name.replace(/\W+/g, '-');
    if (document.getElementById(id)) return;
    var l = document.createElement('link');
    l.id = id; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=' + name.replace(/ /g, '+') + ':wght@' + f.w + '&display=swap';
    document.head.appendChild(l);
  }
  function applyFonts() {
    var root = document.documentElement.style;
    FONT_ROLES.forEach(function (r) {
      var n = FONTSEL[r[0]];
      if (n && FONT_BY[n]) { loadFont(n); root.setProperty('--font-' + r[0], fontCss(n)); }
      else root.removeProperty('--font-' + r[0]);
    });
  }
  function admFontPanel() {
    FONT_LIST.forEach(function (f) { loadFont(f.n); });
    var cur = FONT_ROLES.map(function (r) {
      return '<span class="tag">' + esc(r[1].split(',')[0]) + ': ' + esc(FONTSEL[r[0]] || FONT_DEF[r[0]] + ' (mặc định)') + '</span>';
    }).join(' ');
    var cards = FONT_LIST.map(function (f) {
      var btns = FONT_ROLES.map(function (r) {
        var on = (FONTSEL[r[0]] || FONT_DEF[r[0]]) === f.n;
        return '<button type="button" class="chip" data-action="adm-font" data-role="' + r[0] + '" data-f="' + esc(f.n) + '" aria-pressed="' + on + '">' + esc(r[1].split(',')[0]) + '</button>';
      }).join('');
      return '<div class="fcard"><div style="font-family:' + esc(fontCss(f.n)) + '"><p class="fname">' + esc(f.n) + ' <span class="muted fnote">' + esc(f.t) + '</span></p>' +
        '<p class="fh">Học tiếng Anh mỗi ngày</p><p class="fb">Ăn quả nhớ kẻ trồng cây. Ơ kìa, những ngôi sao sáng nhất.</p>' +
        '<p class="fm">/ˈpɹɛfɹəbli/ · A1 B2 · Aa 0123</p></div><div class="chips" role="group" aria-label="Dùng ' + esc(f.n) + ' cho">' + btns + '</div></div>';
    }).join('');
    return '<section class="panel stack" style="gap:0.8rem"><h2>Phông chữ</h2>' +
      '<p class="muted">Chọn một phông cho từng vai trò, trang đổi ngay. Lựa chọn chỉ lưu trong trình duyệt này; khi đã chọn xong, hãy báo để cố định vào style.css. Nếu chữ có dấu tiếng Việt trong thẻ nào bị đổi sang phông khác, phông đó chưa hỗ trợ tiếng Việt đầy đủ.</p>' +
      '<p>' + cur + '</p><div class="row"><button type="button" class="btn ghost small" data-action="adm-font-reset">Về phông mặc định</button></div>' +
      '<div class="fgrid">' + cards + '</div></section>';
  }
  function adminAction(a, t) {
    var n = parseInt(t.getAttribute('data-n'), 10), sy = window.scrollY, d = today();
    if (a.indexOf('adm-reset') === 0 && admConfirm !== a) { admConfirm = a; render(); window.scrollTo(0, sy); return; }
    admConfirm = '';
    if (a === 'adm-font') {
      var fr = t.getAttribute('data-role'), fn = t.getAttribute('data-f');
      if (FONT_DEF[fr] && FONT_BY[fn]) { if (fn === FONT_DEF[fr]) delete FONTSEL[fr]; else FONTSEL[fr] = fn; LS.set('oel.fonts', FONTSEL); applyFonts(); render(); window.scrollTo(0, sy); }
      return;
    }
    if (a === 'adm-font-reset') { FONTSEL = {}; LS.set('oel.fonts', FONTSEL); applyFonts(); render(); window.scrollTo(0, sy); return; }
    if (a === 'adm-v-f') { admV.f = t.getAttribute('data-v'); admV.limit = 50; render(); window.scrollTo(0, sy); return; }
    if (a === 'adm-v-more') { admV.limit += 50; renderAdmVList(); return; }
    if (a === 'adm-i-f') { admI.f = t.getAttribute('data-v'); admI.limit = 50; render(); window.scrollTo(0, sy); return; }
    if (a === 'adm-i-more') { admI.limit += 50; renderAdmIList(); return; }
    if (a === 'adm-s-f') { admS.f = t.getAttribute('data-v'); admS.limit = 50; render(); window.scrollTo(0, sy); return; }
    if (a === 'adm-s-more') { admS.limit += 50; renderAdmSList(); return; }
    if (a === 'adm-elo-calc') { eloCalcOut(); return; }
    function input(id) { var e = document.getElementById(id); return e ? parseInt(e.value, 10) : NaN; }
    if (a === 'adm-exit') { ADMIN = false; LS.set('oel.admin', 0); syncAdminTab(); location.hash = '#home'; return; }
    else if (a === 'adm-xp') activity.bonus = (activity.bonus || 0) + n;
    else if (a === 'adm-level') {
      var L = Math.max(1, Math.min(PLEVELS.length, input('adm-level') || 1)), raw = pStats().xp - (activity.bonus || 0);
      activity.bonus = PLEVELS[L - 1].xp - raw;
    }
    else if (a === 'adm-streak') {
      var k = Math.max(1, Math.min(400, input('adm-streak') || 1)), dt = new Date(); dt.setHours(12, 0, 0, 0);
      for (var i = 0; i < k; i++) { var r = dayRec(fmt(dt)); if (r.s < 60) r.s = 60; dt.setDate(dt.getDate() - 1); }
    }
    else if (a === 'adm-min') dayRec(d).s += n * 60;
    else if (a === 'adm-words') { var base = Object.keys(activity.learned).length; for (var w = 0; w < n; w++) activity.learned['admin:' + (base + w)] = 1; dayRec(d).l += n; }
    else if (a === 'adm-rev') dayRec(d).r += n;
    else if (a === 'adm-gram') { var gb = Object.keys(activity.grammar).length; for (var g = 0; g < n; g++) activity.grammar['admin:' + (gb + g)] = 1; dayRec(d).g += n; }
    else if (a === 'adm-test') dayRec(d).t += n;
    else if (a === 'adm-ach-all') ACHS.forEach(function (x) { if (!activity.ach[x.id]) activity.ach[x.id] = d; });
    else if (a === 'adm-ach-none') activity.ach = Object.create(null);
    else if (a === 'adm-reset-progress') { activity = cleanActivity({}); lastLevel = 0; }
    else if (a === 'adm-reset-tests') { stats = { sets: {}, all: { sum: 0, cnt: 0 } }; LS.set('oel.stats', stats); PLHIST = []; savePl(); ELO = { r: ECFG.start, n: 0, h: [] }; saveElo(); }
    else if (a === 'adm-elo-save') {
      var f = function (id) { var e = document.getElementById(id); return e ? parseFloat(e.value) : NaN; }, c = JSON.parse(JSON.stringify(ECFG));
      ['start', 'min', 'max', 'scale', 'k0', 'k1', 'tau', 'margin'].forEach(function (k) { var v = f('ec-' + k); if (isFinite(v)) c[k] = v; });
      Object.keys(c.lv).forEach(function (l) { var v = f('ec-lv-' + l); if (isFinite(v)) c.lv[l] = v; });
      ['guess', 'firstOld', 'seed'].forEach(function (k) { var e = document.getElementById('ec-' + k); if (e) c[k] = e.checked ? 1 : 0; });
      if (!(c.scale > 0)) c.scale = ECFG_DEF.scale;
      if (!(c.tau > 0)) c.tau = ECFG_DEF.tau;
      if (c.min > c.max) { var sw = c.min; c.min = c.max; c.max = sw; }
      Object.keys(c).forEach(function (k) { if (k === 'lv') Object.keys(c.lv).forEach(function (l) { ECFG.lv[l] = c.lv[l]; }); else ECFG[k] = c[k]; });
      LS.set('oel.eloCfg', ECFG); ELO.r = Math.max(ECFG.min, Math.min(ECFG.max, ELO.r)); saveElo(); toast('Đã áp dụng công thức Elo');
    }
    else if (a === 'adm-elo-defaults') {
      var dd = JSON.parse(JSON.stringify(ECFG_DEF));
      Object.keys(dd).forEach(function (k) { if (k === 'lv') Object.keys(dd.lv).forEach(function (l) { ECFG.lv[l] = dd.lv[l]; }); else ECFG[k] = dd[k]; });
      LS.set('oel.eloCfg', ECFG); toast('Đã về mặc định');
    }
    else if (a === 'adm-reset-elo') { ELO = { r: ECFG.start, n: 0, h: [] }; saveElo(); }
    else if (a === 'adm-elo-mode') { eloMode = eloMode === 'elo' ? 'old' : 'elo'; LS.set('oel.eloMode', eloMode); }
    else if (a === 'adm-reset-vocab') { vstore = cleanStore({}); saveV(); }
    else if (a === 'adm-reset-all') {
      activity = cleanActivity({}); lastLevel = 0; stats = { sets: {}, all: { sum: 0, cnt: 0 } }; LS.set('oel.stats', stats); PLHIST = []; savePl(); ELO = { r: ECFG.start, n: 0, h: [] }; saveElo();
      journal = []; LS.set('oel.journal', journal); vstore = cleanStore({}); saveV();
    }
    saveActivity(); lastLevel = levelOf(pStats().xp); checkAchievements(); saveActivity();
    render(); window.scrollTo(0, sy);
  }

  /* ---------- Trang chủ ---------- */
  function viewHome() {
    var tip = TIPS_FLAT.length ? TIPS_FLAT[dayOfYear() % TIPS_FLAT.length] : null;
    var tipPanel = '';
    if (tip) {
      var cut = tip.t.indexOf('. ');
      var first = cut > -1 ? tip.t.slice(0, cut + 1) : tip.t;
      var rest = cut > -1 ? tip.t.slice(cut + 1) : '';
      tipPanel = '<div class="panel"><p class="call">Mẹo hôm nay / ' + esc(tip.g) + '</p><p style="font-size:1.2rem"><mark>' + esc(first) + '</mark>' + esc(rest) + '</p></div>';
    }
    var steps = LEVELS.map(function (l) {
      var n = nGrammarAt(l.id);
      var ct = n ? n + ' quy tắc ngữ pháp' : 'Chỉ có tài nguyên';
      return '<button class="step" data-action="level" data-level="' + l.id + '" type="button"><b>' + l.id + '</b><span class="nm">' + l.name + '</span><span class="ds">' + l.d + '</span><span class="ct">' + ct + '</span></button>';
    }).join('');
    var shelf = [
      ['#grammar', 'Ngữ pháp', 'Giải thích dễ hiểu, ví dụ và một lỗi thường gặp cho mỗi quy tắc.', nGrammar() + ' quy tắc'],
      ['#vocab', 'Từ vựng', 'Danh sách từ Oxford theo cấp độ CEFR, có phiên âm và giọng Anh, Mỹ. Đánh dấu từ cần học và ôn theo lịch lặp lại.', nVocab() + ' từ'],
      ['#ipa', 'Phát âm', 'Bảng âm IPA tiếng Anh Mỹ: nghe âm, xem ví dụ, mẹo phát âm và các cặp âm dễ nhầm.', nIpa() + ' âm'],
      ['#tests', 'Bài kiểm tra', 'Các bài trắc nghiệm ngắn, có giải thích cho từng đáp án.', nQuestions() + ' câu hỏi'],
      ['#resources', 'Tài nguyên', 'Các trang miễn phí để luyện nghe, đọc, viết và từ vựng.', RESOURCES.length + ' trang'],
      ['#tips', 'Mẹo học', 'Thói quen cho từng kỹ năng và các cặp từ ai cũng hay nhầm.', TIPS_FLAT.length + ' mẹo'],
      ['#journal', 'Nhật ký học tập', 'Tự ghi lại thời gian học, chuỗi ngày, XP, cấp độ và huy hiệu. Chỉ mình bạn xem được.', 'Cấp ' + pStats().level]
    ].map(function (s) {
      return '<a class="card" href="' + s[0] + '"><h3>' + s[1] + '</h3><p>' + s[2] + '</p><span class="meta">' + s[3] + '</span></a>';
    }).join('');
    var bestKeys = Object.keys(stats.sets).filter(function (k) { return stats.sets[k] && stats.sets[k].cnt > 0; });
    var lastPl = PLHIST.length ? PLHIST[PLHIST.length - 1] : null;
    var plLine = lastPl && lastPl.level ? '<p style="margin-top:1rem">Trình độ ước lượng gần nhất: <mark>' + esc(lastPl.level) + '</mark></p>' : '';
    var ps = pStats();
    var progress = (journal.length || bestKeys.length || plLine || Object.keys(vstore).length || ps.xp)
      ? plLine + '<div class="stats" style="margin-top:1rem">' +
        '<div class="stat"><b>' + ps.level + '</b><span>cấp ' + esc(PLEVELS[ps.level - 1].name) + '</span></div>' +
        '<div class="stat"><b>' + ps.streak + '</b><span>ngày liên tiếp</span></div>' +
        '<div class="stat"><b>' + ps.minutes + '</b><span>phút đã học</span></div>' +
        '<div class="stat"><b>' + ps.learned + '</b><span>từ đã đánh dấu</span></div>' +
        '<div class="stat"><b>' + bestKeys.length + '/' + nSets() + '</b><span>bài đã làm</span></div>' +
        (Object.keys(vstore).length ? '<div class="stat"><b>' + (loaded.vocab ? dueList().length : '…') + '</b><span>từ cần ôn</span></div>' : '') + '</div>'
      : '<p class="muted">Chưa có gì được ghi lại. Cứ học như bình thường, trang sẽ tự ghi lại thời gian, từ vựng và ngữ pháp của bạn.</p>';
    return '<div class="stack">' +
      '<section class="hero"><p class="call">Dành cho người Việt học tiếng Anh</p><h1>Học tiếng Anh từ chữ đầu tiên đến thành thạo.</h1>' +
      '<p class="lead">Ngữ pháp, bài kiểm tra, tài nguyên đáng tin, mẹo học và nhật ký học tập riêng tư. Tất cả được giải thích bằng tiếng Việt.</p>' +
      '<div class="row"><a class="btn" href="#grammar">Xem ngữ pháp</a><a class="btn ghost" href="#tests">Làm bài kiểm tra</a></div></section>' +
      '<section><h2>Tìm trình độ của bạn</h2><p class="muted" style="margin:0.3rem 0 1.25rem">Sáu cấp độ của Khung tham chiếu chung châu Âu (CEFR). Chọn một cấp để xem ngữ pháp của cấp đó.</p><div class="ladder">' + steps + '</div></section>' +
      '<section><h2>Các mục trên kệ</h2><div class="grid" style="margin-top:1rem">' + shelf + '</div></section>' +
      '<section class="grid wide">' + tipPanel +
      '<div class="panel"><p class="call">Tiến độ của bạn</p>' + progress + '</div></section>' +
      '</div>';
  }

  /* ---------- Ngữ pháp ---------- */
  function viewGrammar() {
    var lvls = LEVELS.filter(function (l) { return GRAMMAR.some(function (g) { return g.lv === l.id; }); }).map(function (l) { return l.id; });
    var chips = [ALL].concat(lvls).map(function (l) {
      return '<button type="button" class="chip" data-action="level" data-level="' + l + '" aria-pressed="' + (gLevel === l) + '">' + l + '</button>';
    }).join('');
    var topics = [];
    GRAMMAR.forEach(function (g) { if (g.topic && topics.indexOf(g.topic) < 0) topics.push(g.topic); });
    var tchips = topics.length ? '<div><p class="lab" style="margin-bottom:0.4rem">Chủ đề</p><div class="chips" role="group" aria-label="Lọc theo chủ đề">' +
      [ALL].concat(topics).map(function (t) { return chipBtn('g-topic', t, t, gTopic === t); }).join('') + '</div></div>' : '';
    return head('Ngữ pháp', GRAMMAR.length + ' quy tắc cốt lõi từ thì hiện tại đơn đến đảo ngữ. Mỗi quy tắc có giải thích ngắn, ví dụ và một lỗi cần tránh.') +
      '<div class="tools"><div><label for="g-search">Tìm quy tắc</label><input id="g-search" type="search" placeholder="Thử: điều kiện, bị động, mạo từ" value="' + esc(gQuery) + '" autocomplete="off"></div>' +
      '<div><p class="lab" style="margin-bottom:0.4rem">Cấp độ</p><div class="chips" role="group" aria-label="Lọc theo cấp độ">' + chips + '</div></div>' + tchips + '</div>' +
      '<p class="muted" id="g-count" aria-live="polite" style="margin-bottom:0.8rem"></p><div id="g-list"></div>';
  }
  function renderGList() {
    var q = gQuery.trim().toLowerCase();
    var items = GRAMMAR.map(function (g, i) { return { g: g, i: i }; }).filter(function (o) {
      var g = o.g;
      if (gLevel !== ALL && g.lv !== gLevel) return false;
      if (gTopic !== ALL && g.topic !== gTopic) return false;
      if (!q) return true;
      return (g.t + ' ' + g.topic + ' ' + g.rule + ' ' + g.ex.join(' ') + ' ' + g.form.join(' ') + ' ' + g.more.map(function (m) { return m.text; }).join(' ')).toLowerCase().indexOf(q) > -1;
    });
    var listEl = document.getElementById('g-list'), count = document.getElementById('g-count');
    if (!listEl) return;
    count.textContent = items.length + ' quy tắc' + (gLevel !== ALL ? ' ở cấp ' + gLevel : '') + (gTopic !== ALL ? ', chủ đề ' + gTopic : '');
    if (!items.length) { listEl.innerHTML = '<div class="empty">Không có quy tắc nào phù hợp. Hãy xóa từ khóa hoặc chọn cấp độ, chủ đề khác.</div>'; return; }
    listEl.innerHTML = items.map(function (o) {
      var g = o.g;
      return '<details class="rule"><summary><h3>' + esc(g.t) + '</h3><span class="tag lvtag">' + esc(g.lv) + '</span></summary>' + ruleBody(g) + '</details>';
    }).join('');
  }
  /* Extensions, advanced uses and nuances: collapsed so beginners see only the core rule. */
  function moreHtml(g) {
    if (!g.more.length) return '';
    return '<details class="more"><summary>Tìm hiểu thêm <span class="tag">' + g.more.length + '</span></summary><ul class="more-list">' +
      g.more.map(function (m) { return '<li class="more-item t-' + m.type + '"><span class="mtag">' + esc(MORE_TYPES[m.type]) + '</span><p>' + md(m.text) + '</p></li>'; }).join('') + '</ul></details>';
  }
  function ruleBody(g) {
    return '<div class="body">' + (ADMIN ? '<p><span class="tag adm">ID ' + esc(g.gid || '—') + ' · ' + (g.gid ? (LINKS[g.gid] || 0) : 0) + ' câu hỏi</span></p>' : '') + (g.topic ? '<p><span class="tag">' + esc(g.topic) + '</span></p>' : '') + '<p>' + md(g.rule) + '</p>' + (g.form.length ? '<div class="form">' + g.form.map(function (f) { return '<div>' + esc(f) + '</div>'; }).join('') + '</div>' : '') +
      (g.ex.length ? '<ul>' + g.ex.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>' : '') +
      (g.no && g.yes ? '<div class="pair"><div><b class="no-way">Sai</b><span class="no-way">' + esc(g.no) + '</span></div>' +
      '<div><b class="yes-way">Đúng</b><span class="yes-way">' + esc(g.yes) + '</span></div></div>' : '') + moreHtml(g) + '</div>';
  }

  /* ---------- Kiểm tra ---------- */
  function shuffle(a) {
    var r = a.slice(), i, j, t;
    for (i = r.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = r[i]; r[i] = r[j]; r[j] = t; }
    return r;
  }
  function bankLevels() {
    return LEVELS.map(function (l) { return l.id; }).filter(function (id) { return BANK.some(function (q) { return q.lv === id; }); });
  }
  function bankTopics() {
    var out = [];
    BANK.forEach(function (q) { if (q.topic && out.indexOf(q.topic) < 0) out.push(q.topic); });
    return out;
  }
  function customPool() {
    return BANK.filter(function (q) {
      return (!cLevels.length || cLevels.indexOf(q.lv) > -1) && (!cTopics.length || cTopics.indexOf(q.topic) > -1);
    });
  }
  /* Shuffle the answer options each time a question is used. "Of the above" options stay last. */
  function shufQ(q) {
    var idx = q.o.map(function (_, i) { return i; }), tail = [], head = [];
    idx.forEach(function (i) { (/of the above|^both\b/i.test(q.o[i]) ? tail : head).push(i); });
    var order = shuffle(head).concat(tail);
    return { lv: q.lv, topic: q.topic, q: q.q, o: order.map(function (i) { return q.o[i]; }), a: order.indexOf(q.a), why: q.why, gid: q.gid };
  }
  function newQuiz(o) {
    o.i = 0; o.score = 0; o.picked = null; o.missed = []; o.done = false; o.tally = {}; o.elo0 = ELO.r;
    return o;
  }
  var PRACTICE_N = 20;
  /* Random questions spread evenly across topics, so every area shows up. A new set every time. */
  function pickBalanced(pool, n) {
    var groups = Object.create(null), keys = [];
    shuffle(pool).forEach(function (q) { var k = q.topic || '-'; if (!groups[k]) { groups[k] = []; keys.push(k); } groups[k].push(q); });
    keys = shuffle(keys);
    var out = [];
    while (out.length < n && keys.length) {
      keys = keys.filter(function (k) {
        if (out.length < n && groups[k].length) out.push(groups[k].pop());
        return groups[k].length > 0;
      });
    }
    return shuffle(out);
  }
  function startSet(id) {
    var s = QSETS.filter(function (x) { return x.id === id; })[0];
    if (!s) return;
    var qs = pickBalanced(s.qs, PRACTICE_N).map(shufQ);
    quiz = newQuiz({ kind: 'set', setId: s.id, title: s.title, lvLabel: s.lv, qs: qs, total: qs.length, open: {} });
  }
  function startCustom() {
    var pool = shuffle(customPool());
    if (!pool.length) return;
    var take = pool.slice(0, Math.min(cLen, pool.length)).map(shufQ);
    quiz = newQuiz({ kind: 'custom', title: 'Ôn tập theo chủ đề', lvLabel: take.length + ' câu', qs: take, total: take.length, open: {} });
  }
  /* Kiểm tra trình độ: bắt đầu ở B1, đúng thì lên một cấp, sai thì xuống một cấp. */
  function startPlacement(n) {
    var lvs = bankLevels();
    if (!lvs.length) return;
    var mid = lvs.indexOf('B1');
    quiz = newQuiz({ kind: 'placement', title: 'Tự kiểm tra trình độ', lvLabel: n + ' câu', qs: [], used: [], lvs: lvs,
      idx: mid > -1 ? mid : Math.floor(lvs.length / 2), total: n, open: {}, useElo: eloMode === 'elo' && !(ECFG.firstOld && !ELO.s) });
    /* câu hỏi luôn theo kiểu bậc thang (đúng thì khó hơn, sai thì dễ hơn). Người đã có điểm Elo bắt đầu từ cấp gần điểm đó nhất. */
    if (quiz.useElo) { var bi = 0; lvs.forEach(function (l, i) { if (Math.abs(LEVEL_ELO[l] - ELO.r) < Math.abs(LEVEL_ELO[lvs[bi]] - ELO.r)) bi = i; }); quiz.idx = bi; }
    placementNext();
  }
  function placementNext() {
    for (var d = 0; d < quiz.lvs.length; d++) {
      var tries = d === 0 ? [quiz.idx] : [quiz.idx + d, quiz.idx - d];
      for (var k = 0; k < tries.length; k++) {
        var j = tries[k];
        if (j < 0 || j >= quiz.lvs.length) continue;
        var pool = BANK.filter(function (q) { return q.lv === quiz.lvs[j] && quiz.used.indexOf(q) < 0; });
        if (pool.length) {
          var q = pool[Math.floor(Math.random() * pool.length)];
          quiz.used.push(q); quiz.qs.push(shufQ(q));
          return true;
        }
      }
    }
    return false;
  }
  /* Mức ước lượng có hai cách tính (sẽ tinh chỉnh sau):
     - Bài dài (25 câu): cấp độ cao nhất mà bạn trả lời đúng ít nhất một nửa số câu ở cấp đó.
     - Bài ngắn (10 câu): cấp độ có tỉ lệ đúng cao nhất (nếu đúng quá nửa thì lên một cấp), vì mỗi cấp chỉ có vài câu nên một câu đúng may mắn
       ở cấp cao không đủ để kết luận. Cấp chỉ có 1 câu bị bỏ qua nếu còn cấp khác có từ 2 câu trở lên.
       Nếu hai cấp bằng nhau thì chọn cấp cao hơn (trừ khi cùng bằng 0). */
  function estimateLevel() {
    var lvs = quiz.lvs, est = lvs[0];
    if (quiz.total <= 10) {
      var cands = lvs.filter(function (l) { return quiz.tally[l] && quiz.tally[l].asked >= 2; });
      if (!cands.length) cands = lvs.filter(function (l) { return quiz.tally[l]; });
      var bestRate = -1;
      cands.forEach(function (l) {
        var rate = quiz.tally[l].right / quiz.tally[l].asked;
        if (rate > bestRate || (rate === bestRate && rate > 0)) { bestRate = rate; est = l; }
      });
      /* Đúng quá nửa ở cấp tốt nhất thì được xếp lên cấp kế tiếp để thử sức. */
      if (bestRate > 0.5 && lvs.indexOf(est) < lvs.length - 1) est = lvs[lvs.indexOf(est) + 1];
      return est;
    }
    lvs.forEach(function (l) {
      var t = quiz.tally[l];
      if (t && t.asked && t.right / t.asked >= 0.5) est = l;
    });
    return est;
  }
  function finishQuiz() {
    quiz.done = true; Act.test(); recordResult();
    if (quiz.kind === 'set') {
      /* điểm được ghi ở recordResult() bên dưới */
    } else if (quiz.kind === 'placement') {
      quiz.estOld = estimateLevel(); quiz.estElo = eloBand(ELO.r, quiz.lvs);
      quiz.est = quiz.useElo ? quiz.estElo : quiz.estOld;
      /* lần kiểm tra đầu tiên dùng cách cũ, rồi gieo điểm Elo ở giữa cấp vừa xếp để Elo bắt đầu từ chỗ hợp lý */
      if (!quiz.useElo && eloMode === 'elo') { if (ECFG.seed && LEVEL_ELO[quiz.est]) ELO.r = LEVEL_ELO[quiz.est]; ELO.s = 1; saveElo(); }
      PLHIST.push({ level: quiz.est, date: today(), score: quiz.score, total: quiz.qs.length, elo: Math.round(ELO.r) }); savePl();
    }
  }

  function pickAnswer(idx) {
    var q = quiz.qs[quiz.i], right = idx === q.a;
    quiz.picked = idx; (quiz.answers = quiz.answers || {})[quiz.i] = idx;
    if (right) quiz.score++; else quiz.missed.push(quiz.i);
    var tl = quiz.tally[q.lv] || (quiz.tally[q.lv] = { asked: 0, right: 0 });
    tl.asked++; if (right) tl.right++;
    eloUpdate(q, right);
    if (quiz.kind === 'placement') quiz.idx = Math.max(0, Math.min(quiz.lvs.length - 1, quiz.lvs.indexOf(q.lv) + (right ? 1 : -1)));
  }
  function nextQuestion() {
    quiz.i++; quiz.picked = null;
    if (quiz.kind === 'placement') { if (quiz.i >= quiz.total || !placementNext()) finishQuiz(); }
    else if (quiz.i >= quiz.qs.length) finishQuiz();
  }
  /* Admin only: finish the rest of the quiz. 'random' picks any option; 'c1' answers right up to C1 and wrong above it. */
  function autoRun(mode) {
    var guard = 0, top = lvIdx('C1');
    while (quiz && !quiz.done && guard++ < 200) {
      var q = quiz.qs[quiz.i];
      if (quiz.picked === null) pickAnswer(mode === 'random' ? Math.floor(Math.random() * q.o.length) : (lvIdx(q.lv) <= top ? q.a : (q.a + 1) % q.o.length));
      nextQuestion();
    }
  }
  function chipBtn(action, val, label, pressed) {
    return '<button type="button" class="chip" data-action="' + action + '" data-v="' + esc(val) + '" aria-pressed="' + pressed + '">' + esc(label) + '</button>';
  }
  function viewTests() {
    if (quiz) return quiz.done ? viewQuizResult() : viewQuizQuestion();
    var lastTxt = plSummary();
    var pool = customPool();
    var lvChips = bankLevels().map(function (l) { return chipBtn('c-level', l, l, cLevels.indexOf(l) > -1); }).join('');
    var tpChips = bankTopics().map(function (t) { return chipBtn('c-topic', t, t + (ADMIN ? ' (' + BANK.filter(function (q) { return q.topic === t; }).length + ')' : ''), cTopics.indexOf(t) > -1); }).join('');
    var lenChips = [10, 25].map(function (n) { return chipBtn('c-len', n, n === 10 ? 'Nhanh: 10 câu' : 'Dài: 25 câu', cLen === n); }).join('');
    var note = !pool.length ? 'Không có câu hỏi nào phù hợp. Hãy bỏ bớt một bộ lọc.'
      : pool.length < cLen ? 'Ít câu phù hợp nên bài sẽ ngắn hơn.' : '';
    if (ADMIN) note += ' [admin] ' + pool.length + ' câu phù hợp.';
    var cards = QSETS.map(function (s) {
      var b = setStat(s.id), todayBest = b && b.day === today() && b.bn ? 'Điểm cao nhất hôm nay: ' + s10(b.bs, b.bn) + '/10' : 'Hôm nay chưa làm';
      return '<div class="card"><span class="call">' + esc(s.lv) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.blurb) + '</p>' +
        '<span class="meta">' + todayBest + (ADMIN ? ' · [admin] ' + s.qs.length + ' câu' : '') + (b && b.cnt ? ' · Trung bình: ' + avg10(b.sum, b.cnt) + '/10' : '') + '</span>' +
        '<div style="margin-top:0.6rem"><button class="btn" type="button" data-action="start" data-set="' + esc(s.id) + '">Bắt đầu</button></div></div>';
    }).join('');
    return head('Bài kiểm tra', 'Tự kiểm tra trình độ, ôn tập theo chủ đề, hoặc luyện theo cấp độ. Sau mỗi câu bạn sẽ thấy lời giải thích.') +
      '<div class="stack">' +
      '<section class="panel stack placement" style="gap:1rem"><div><h2>Tự kiểm tra trình độ</h2></div>' +
      '<p class="muted">Độ khó tự điều chỉnh theo năng lực, càng làm tốt càng khó hơn. Kết quả chỉ là mức ước lượng, không phải chứng chỉ. Bài kiểm tra nhanh sẽ kém chính xác hơn.</p>' + lastTxt +
      '<div class="row"><button class="btn" type="button" data-action="start-placement" data-n="10">Kiểm tra nhanh: 10 câu</button>' +
      '<button class="btn ghost" type="button" data-action="start-placement" data-n="25">Kiểm tra dài: 25 câu</button></div></section>' +
      '<section class="panel stack" style="gap:1rem"><div><h2>Ôn tập theo chủ đề</h2></div>' +
      '<p class="muted">Chọn cấp độ và chủ đề. Không chọn gì nghĩa là lấy tất cả.</p>' +
      '<div><p class="lab" style="margin-bottom:0.4rem">Cấp độ</p><div class="chips" role="group" aria-label="Cấp độ">' + lvChips + '</div></div>' +
      '<div><p class="lab" style="margin-bottom:0.4rem">Chủ đề</p><div class="chips" role="group" aria-label="Chủ đề">' + tpChips + '</div></div>' +
      '<div><p class="lab" style="margin-bottom:0.4rem">Độ dài</p><div class="chips" role="group" aria-label="Độ dài">' + lenChips + '</div></div>' +
      '<div class="row"><button class="btn" type="button" data-action="start-custom"' + (pool.length ? '' : ' disabled') + '>Bắt đầu bài kiểm tra</button>' +
      '<span class="muted" role="status">' + note + '</span></div></section>' +
      '<section><h2 style="margin-bottom:1rem">Bài luyện theo cấp độ</h2><div class="grid wide">' + cards + '</div></section>' +
      '</div>';
  }
  function viewQuizQuestion() {
    var q = quiz.qs[quiz.i], answered = quiz.picked !== null;
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var opts = q.o.map(function (o, i) {
      var cls = 'opt';
      if (answered) { if (i === q.a) cls += ' right'; else if (i === quiz.picked) cls += ' wrong'; }
      return '<button type="button" class="' + cls + '" data-action="pick" data-i="' + i + '"' + (answered ? ' disabled' : '') + '><i>' + letters[i] + '</i><span>' + esc(o) + '</span>' + (ADMIN && !answered && i === q.a ? '<b class="adm-ok">✓ đúng</b>' : '') + '</button>';
    }).join('');
    var fb = '';
    if (answered) {
      var ok = quiz.picked === q.a;
      fb = '<div class="feedback" aria-live="polite"><strong>' + (ok ? 'Chính xác.' : 'Chưa đúng. Đáp án là ' + esc(q.o[q.a]) + '.') + '</strong><span>' + esc(q.why) + '</span>' +
        '<div style="margin-top:0.5rem"><button class="btn" type="button" data-action="next">' + (quiz.i === quiz.total - 1 ? 'Xem kết quả' : 'Câu tiếp theo') + '</button></div></div>';
    }
    return '<div class="quiz"><div class="row" style="justify-content:space-between"><p class="call" style="margin:0">' + esc(quiz.title) + ' / ' + esc(quiz.lvLabel) + '</p><button class="btn ghost small" type="button" data-action="quit">Thoát</button></div>' +
      '<div><p class="muted" style="font-size:0.9rem;margin-bottom:0.4rem">Câu ' + (quiz.i + 1) + ' / ' + quiz.total + '</p><div class="bar"><i style="width:' + (quiz.i / quiz.total * 100) + '%"></i></div></div>' +
      '<p class="qtext">' + esc(q.q) + '</p>' + admQInfo(q) + '<div class="opts">' + opts + '</div>' + fb +
      (ADMIN ? '<div class="row"><span class="tag adm">admin</span>' + admBtn('auto-random', 'Tự động làm: ngẫu nhiên') + admBtn('auto-c1', 'Tự động làm: nhắm C1') + '</div>' : '') + '</div>';
  }
  function admEloLine() {
    if (!ADMIN) return '';
    var d = ELO.r - (quiz.elo0 === undefined ? ELO.r : quiz.elo0);
    return '<p class="adm-note">[admin] Elo: ' + Math.round(ELO.r) + ' (' + (d >= 0 ? '+' : '') + Math.round(d) + ' trong bài này)' +
      (quiz.kind === 'placement' ? ' · xếp theo Elo: ' + esc(quiz.estElo) + ' · xếp theo cách cũ: ' + esc(quiz.estOld) + ' · đang dùng: ' + (quiz.useElo ? 'Elo' : 'cách cũ' + (eloMode === 'elo' ? ' (lần đầu)' : '')) : '') + '</p>';
  }
  function viewQuizResult() {
    var n = quiz.qs.length, pct = n ? quiz.score / n : 0;
    /* After a test: wrong questions are listed right away with the user's answer, the correct one and the explanation.
       Right questions sit behind a button. Every item has a grammar-rule button. */
    function item(i, wrong) {
      var q = quiz.qs[i], g = q.gid ? GBYID[q.gid] : null, open = !!(quiz.open && quiz.open[i]), mine = quiz.answers ? quiz.answers[i] : undefined;
      return '<div class="miss"><span><span class="tag lvtag" style="justify-self:start">' + esc(q.lv) + '</span></span><strong style="font-family:var(--font-display)">' + esc(q.q) + '</strong>' + admQInfo(q) +
        (wrong && mine !== undefined ? '<span>Bạn chọn: <span class="no-way">' + esc(q.o[mine]) + '</span></span>' : '') +
        '<span>Đáp án: <mark>' + esc(q.o[q.a]) + '</mark></span><span class="muted">' + esc(q.why) + '</span>' +
        (g ? '<div><button class="btn ghost small" type="button" data-action="q-rule" data-v="' + i + '" aria-expanded="' + open + '">' + (open ? 'Ẩn quy tắc' : 'Xem quy tắc') + '</button></div>' +
          (open ? '<div class="rule ruleview"><div class="rv-head"><h3>' + esc(g.t) + '</h3><span class="tag lvtag">' + esc(g.lv) + '</span></div>' + ruleBody(g) + '</div>' : '') : '') + '</div>';
    }
    var miss = quiz.missed.map(function (i) { return item(i, true); }).join('');
    var rightIdx = [];
    quiz.qs.forEach(function (q, i) { if (quiz.answers && quiz.answers[i] === q.a) rightIdx.push(i); });
    var rightHtml = rightIdx.length
      ? '<div><button class="btn ghost" type="button" data-action="q-show-right" aria-expanded="' + !!quiz.showRight + '">' + (quiz.showRight ? 'Ẩn các câu làm đúng' : 'Xem lại ' + rightIdx.length + ' câu làm đúng') + '</button></div>' +
        (quiz.showRight ? '<div>' + rightIdx.map(function (i) { return item(i, false); }).join('') + '</div>' : '') : '';
    var top, extra = '', msg, retry, nextBtn = '';
    if (quiz.kind === 'placement') {
      var rows = quiz.lvs.filter(function (l) { return quiz.tally[l]; }).map(function (l) {
        var t = quiz.tally[l];
        return '<tr><td>' + esc(l) + '</td><td>' + t.right + ' / ' + t.asked + '</td></tr>';
      }).join('');
      top = '<p class="muted" style="margin:0">Trình độ ước lượng</p><div class="score">' + esc(quiz.est) + '</div><p class="muted">Điểm: ' + s10(quiz.score, n) + ' / 10 (' + quiz.score + ' / ' + n + ' câu đúng)</p>';
      msg = 'Hãy bắt đầu từ ngữ pháp ở cấp ' + quiz.est + ' và luyện thêm ở cấp đó.';
      extra = '<div class="table-wrap"><table style="min-width:0"><thead><tr><th>Cấp độ</th><th>Đúng / Đã hỏi</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '<p class="muted">Đây là kết quả ước lượng dựa trên ' + n + ' câu. ' + (quiz.useElo
          ? 'Trình độ được tính từ độ khó của từng câu bạn trả lời đúng hay sai: đúng câu khó được cộng nhiều hơn, sai câu dễ bị trừ nhiều hơn. Bài dài (25 câu) cho kết quả chính xác hơn bài nhanh. Bạn vẫn nên tham khảo qua các cấp độ thấp hơn mà mình làm chưa tốt. Mục tiêu là không làm sai các bài tập dưới trình độ của mình.'
          : (quiz.total <= 10
          ? 'Bạn được xếp vào trình độ cao hơn cấp bạn làm tốt nhất một bậc (khi bạn đúng quá nửa số câu ở cấp đó) để thử sức với cấp độ cao hơn, nhưng bạn vẫn nên tham khảo qua các cấp độ thấp hơn mà mình làm chưa tốt. Mục tiêu là không làm sai các bài tập dưới trình độ của mình. Làm bài dài (25 câu) sẽ chính xác hơn.'
          : 'Bài dài lấy cấp độ cao nhất mà bạn trả lời đúng từ một nửa số câu trở lên, nên chính xác hơn bài nhanh. Bạn vẫn nên tham khảo qua các cấp độ thấp hơn mà mình làm chưa tốt. Mục tiêu là không làm sai các bài tập dưới trình độ của mình.')) + '</p>';
      nextBtn = '<button class="btn" type="button" data-action="level" data-level="' + esc(quiz.est) + '">Xem ngữ pháp cấp ' + esc(quiz.est) + '</button>';
      retry = '<button class="btn ghost" type="button" data-action="start-placement" data-n="' + quiz.total + '">Làm lại</button>';
    } else {
      msg = pct >= 0.85 ? 'Kết quả rất tốt. Hãy thử bài ở cấp độ cao hơn.' : pct >= 0.6 ? 'Tiến bộ tốt. Hãy xem lại các câu bên dưới rồi làm lại.' : 'Cố lên. Đọc lại ngữ pháp cho những câu bạn làm sai rồi thử lại.';
      top = '<div class="score">' + s10(quiz.score, n) + ' / 10</div><p class="muted">' + quiz.score + ' / ' + n + ' câu đúng</p>';
      if (quiz.kind === 'set') { var sb = setStat(quiz.setId); extra = '<p class="muted">Điểm cao nhất hôm nay: ' + s10(sb.bs, sb.bn) + '/10. Điểm trung bình của bài này: ' + avg10(sb.sum, sb.cnt) + '/10. Mỗi lần làm lại bạn sẽ nhận một bộ câu hỏi mới.</p>'; }
      nextBtn = '<a class="btn" href="#grammar">Ôn lại ngữ pháp</a>';
      retry = quiz.kind === 'set'
        ? '<button class="btn ghost" type="button" data-action="start" data-set="' + esc(quiz.setId) + '">Làm lại</button>'
        : '<button class="btn ghost" type="button" data-action="start-custom">Tạo bài mới</button>';
    }
    return '<div class="quiz"><p class="call">' + esc(quiz.title) + ' / ' + esc(quiz.lvLabel) + '</p>' + top + admEloLine() + '<p class="lead">' + msg + '</p>' + extra +
      '<div class="row">' + nextBtn + retry + '<button class="btn ghost" type="button" data-action="quit">Tất cả bài kiểm tra</button></div>' +
      (miss ? '<div><h2 style="margin-bottom:0.5rem">Các câu làm sai (' + quiz.missed.length + ')</h2>' + miss + '</div>' : '<p><mark>Điểm tuyệt đối. Không có câu nào làm sai.</mark></p>') +
      rightHtml + '</div>';
  }

  /* ---------- Tài nguyên ---------- */
  function viewResources() {
    var chips = RTYPES.map(function (t) {
      return '<button type="button" class="chip" data-action="rtype" data-type="' + esc(t) + '" aria-pressed="' + (rType === t) + '">' + esc(t) + '</button>';
    }).join('');
    var items = RESOURCES.filter(function (r) { return rType === ALL || r.ty === rType; });
    var cards = items.map(function (r) {
      var host = r.u.replace(/^https?:\/\/(www\.)?/, '');
      return '<a class="card" href="' + esc(r.u) + '" target="_blank" rel="noopener noreferrer"><span class="row" style="justify-content:space-between;flex-wrap:nowrap"><h3>' + esc(r.n) + '</h3><span class="tag">' + esc(r.ty) + '</span></span><p>' + esc(r.d) + '</p><span class="dom">' + esc(host) + '</span></a>';
    }).join('');
    return head('Tài nguyên', 'Các trang miễn phí được chọn vì dạy rõ ràng. Lọc theo kỹ năng bạn muốn luyện. Liên kết mở trong tab mới.') +
      '<div class="chips" role="group" aria-label="Lọc theo kỹ năng" style="margin-bottom:1.25rem">' + chips + '</div>' +
      (items.length ? '<div class="grid res">' + cards + '</div>' : '<div class="empty">Chưa có tài nguyên nào cho kỹ năng này.</div>');
  }

  /* ---------- Mẹo học ---------- */
  function viewTips() {
    var groups = TIPS.map(function (g) {
      return '<div class="panel"><h3>' + esc(g.g) + '</h3><ul class="tip-list">' + g.l.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
    var rows = CONFUSED.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('');
    return head('Mẹo học', 'Những thói quen nhỏ cho từng kỹ năng, và các cặp từ làm khó cả người học lẫn người bản xứ.') +
      '<div class="stack"><div class="grid wide">' + groups + '</div>' +
      '<section><h2 style="margin-bottom:0.3rem">Các cặp từ dễ nhầm</h2><p class="muted" style="margin-bottom:1rem">Hãy kiểm tra những cặp này trước khi gửi email hoặc nộp bài viết.</p>' +
      '<div class="table-wrap"><table><thead><tr><th>Cặp từ</th><th>Quy tắc</th><th>Ví dụ</th></tr></thead><tbody>' + rows + '</tbody></table></div></section></div>';
  }

  /* ---------- Từ vựng ---------- */
  var INTERVALS = [1, 3, 7]; /* số ngày chờ trước lần ôn tiếp theo; sau lần nhớ thứ 4 từ được tính là đã thuộc */
  var POS_VI = { noun: 'danh từ', verb: 'động từ', adjective: 'tính từ', adverb: 'trạng từ', preposition: 'giới từ', conjunction: 'liên từ', pronoun: 'đại từ',
    determiner: 'hạn định từ', number: 'số từ', exclamation: 'thán từ', 'modal verb': 'động từ khuyết thiếu', 'auxiliary verb': 'trợ động từ',
    'linking verb': 'động từ nối', 'indefinite article': 'mạo từ không xác định', 'definite article': 'mạo từ xác định', 'infinitive marker': 'to + động từ' };

  /* Danh sách từ Oxford: mỗi hàng [số thứ tự, từ, loại từ, cấp CEFR, phiên âm Mỹ, tệp âm thanh Anh, tệp âm thanh Mỹ]. Định nghĩa nằm riêng trong OEL.vocabDef (theo số thứ tự). */
  var VDEF = {}, VREADY = false;   /* VREADY: vocabulary files are loaded and parsed */
  var VOCAB = [], VBY = Object.create(null), VLEVELS = [], VORD = Object.create(null), VDUP = [], VSKIP = 0;
  function initVocab() {
    VDEF = OEL.vocabDef && typeof OEL.vocabDef === 'object' ? OEL.vocabDef : {};
    VOCAB = []; VBY = Object.create(null); VLEVELS = []; VORD = Object.create(null); VDUP = []; VSKIP = 0;
    list(OEL.vocab).forEach(function (r) {
      var lv = Array.isArray(r) ? str(r[3]).toUpperCase() : '';
      if (!Array.isArray(r) || !str(r[1]) || !LEVELS.some(function (l) { return l.id === lv; })) { VSKIP++; warn('từ vựng', r); return; }
      if (VORD[r[0]]) VDUP.push(r[0]); else VORD[r[0]] = 1;
      var id = String(r[1]) + '|' + String(r[2] || '');
      if (VBY[id]) id += '|' + r[0];
      if (VBY[id]) { warn('từ vựng bị trùng', r); return; }
      var def = str(VDEF[r[0]]);
      var w = { id: id, o: r[0], w: String(r[1]), pos: String(r[2] || ''), lv: lv, ph: str(r[4]), uk: str(r[5]), us: str(r[6]), vi: def, tp: -1 };
      w.r = Math.random(); VBY[id] = w; VOCAB.push(w);
    });
    LEVELS.forEach(function (l) { if (VOCAB.some(function (w) { return w.lv === l.id; })) VLEVELS.push(l.id); });
    VREADY = true;
    vstore = cleanStore(vstore);   /* the saved list could not be checked against the word list until now */
  }
  function hasDef(w) { return !!w && !!w.vi; }
  function viText(w) { return hasDef(w) ? w.vi : '(chưa có nghĩa)'; }

  /* Âm thanh nằm trong audio/uk_audio/ và audio/us_audio/. Thiếu tệp thì đọc bằng giọng của trình duyệt (nếu có). */
  var audioEl = null;
  function playVocabAudio(kind, file, word) {
    var lang = kind === 'uk' ? 'en-GB' : 'en-US';
    if (!file) { speak(word, lang); return; }
    try {
      if (audioEl) audioEl.pause();
      var a = new window.Audio('audio/' + kind + '_audio/' + encodeURIComponent(file));
      audioEl = a;
      a.addEventListener('error', function () { speak(word, lang); });
      var pr = a.play(); if (pr && pr.catch) pr.catch(function () {});
    } catch (e) { speak(word, lang); }
  }

  var CAN_SPEAK = (function () {
    try { return 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function'; } catch (e) { return false; }
  })();
  function speak(text, lang) {
    try {
      var u = new window.SpeechSynthesisUtterance(String(text).split('/')[0]);
      u.lang = lang || 'en-US'; u.rate = 0.9;
      window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* Danh sách học được lưu theo từng từ: s = số lần nhớ liên tiếp (0 đến 3), d = ngày ôn tiếp theo, k = 1 nếu đã thuộc/đã biết. */
  function cleanStore(o) {
    var out = Object.create(null), n = 0;
    if (!o || typeof o !== 'object' || Array.isArray(o)) return out;
    Object.keys(o).forEach(function (id) {
      var e = o[id];
      if (n >= 20000 || !e || typeof e !== 'object') return;
      var s = parseInt(e.s, 10), k = e.k ? 1 : 0, d = typeof e.d === 'string' ? e.d : '';
      if (!(s >= 0 && s <= INTERVALS.length)) s = 0;
      if (d && !/^\d{4}-\d{2}-\d{2}$/.test(d)) d = '';
      if (!k && !d) d = today();
      var r = { s: s, d: d, k: k };
      if (id.slice(0, 2) === 'u:') {
        var w = typeof e.w === 'string' ? e.w.trim().slice(0, 80) : '', vi = typeof e.vi === 'string' ? e.vi.trim().slice(0, 200) : '';
        if (!w || !vi) return;
        r.w = w; r.vi = vi;
      } else if (VREADY && !VBY[id]) { return; }   /* before the word list is loaded, keep every saved id */
      out[id.slice(0, 200)] = r; n++;
    });
    return out;
  }
  var vstore = cleanStore(LS.get('oel.vocab2', {}));
  function saveV() { LS.set('oel.vocab2', vstore); }

  var vSub = 'review', vLevel = '', vQuery = '', vLimit = 40, vMsg = '';   /* the vocabulary tab opens on review */
  var vBrowse = null, vReview = null, vType = null, mFilter = 'all', vExport = null, vPending = null;

  function addDays(s, n) { var d = parseDay(s); d.setDate(d.getDate() + n); return fmt(d); }
  function niceShort(s) { var p = String(s).split('-'); return p.length === 3 ? p[2] + '/' + p[1] : s; }
  function entryWord(id) {
    if (VBY[id]) return VBY[id];
    var e = vstore[id];
    if (e && e.w) return { id: id, w: e.w, pos: '', vi: e.vi || '', tp: -1, lv: 'Từ riêng', custom: true };
    return null;
  }
  function storeIds() { return Object.keys(vstore).filter(function (id) { return !!entryWord(id); }); }
  function dueList() {
    var t = today();
    return storeIds().filter(function (id) { var e = vstore[id]; return !e.k && e.d && e.d <= t; })
      .sort(function (a, b) { var x = vstore[a], y = vstore[b]; return x.d < y.d ? -1 : x.d > y.d ? 1 : x.s - y.s; });
  }
  function levelWords(lv) { return VOCAB.filter(function (w) { return !lv || w.lv === lv; }); }
  function levelLabel() { return vLevel || 'Tất cả'; }
  function vFiltered() {
    var q = vQuery.trim().toLowerCase();
    return VOCAB.filter(function (w) {
      if (vLevel && w.lv !== vLevel) return false;
      if (!q) return true;
      return w.w.toLowerCase().indexOf(q) > -1 || (hasDef(w) && w.vi.toLowerCase().indexOf(q) > -1);
    });
  }
  function refocusKey(id) {
    var els = view.querySelectorAll('[data-key]');
    for (var i = 0; i < els.length; i++) if (els[i].getAttribute('data-key') === id) { els[i].focus(); return; }
  }
  /* Nút nghe: Anh và Mỹ nếu có tệp âm thanh; từ riêng của người dùng thì đọc bằng giọng trình duyệt. */
  function audioBtns(w, cls) {
    cls = cls || 'btn ghost small';
    if (w.uk || w.us) {
      return [['uk', w.uk, 'Anh'], ['us', w.us, 'Mỹ']].map(function (k) {
        return k[1] ? '<button type="button" class="' + cls + '" data-action="play" data-k="' + k[0] + '" data-f="' + esc(k[1]) + '" data-w="' + esc(w.w) + '" aria-label="Nghe giọng ' + k[2] + ': ' + esc(w.w) + '">' + k[0].toUpperCase() + '</button>' : '';
      }).join('');
    }
    return CAN_SPEAK ? '<button type="button" class="' + cls + '" data-action="speak" data-w="' + esc(w.w) + '" aria-label="Nghe phát âm ' + esc(w.w) + '">Nghe</button>' : '';
  }
  function speakBtn(w) { return audioBtns(w); }
  function posTag(w) { return w.pos ? '<span class="tag">' + esc(POS_VI[w.pos] || w.pos) + '</span> ' : ''; }

  /* --- Phiên duyệt thẻ: chọn từ nào cần học --- */
  function startBrowse() {
    var pool = vFiltered().filter(function (w) { return !vstore[w.id]; });
    var take = shuffle(pool);
    if (!take.length) { vMsg = 'Không còn từ chưa đánh dấu trong bộ lọc này.'; return; }
    vBrowse = { queue: take.map(function (w) { return w.id; }), i: 0, shown: false, added: 0, known: 0, skipped: 0, done: false };
  }
  /* --- Phiên ôn tập: từ đến hạn ôn hôm nay --- */
  function startReview() {
    var ids = dueList();
    if (!ids.length) return;
    var q = ids.slice(0, 20);
    vReview = { queue: q, i: 0, shown: false, right: 0, wrong: 0, left: ids.length - q.length, done: false, picked: null, choice: null };
    prepReview();
  }
  /* Chấm điểm một lần trả lời (cập nhật lịch ôn) nhưng chưa chuyển sang thẻ kế tiếp. */
  function gradeReview(ok) {
    var id = vReview.queue[vReview.i], e = vstore[id];
    if (e) {
      if (ok) {
        vReview.right++; Act.review();
        if (e.s >= INTERVALS.length) { e.k = 1; e.d = ''; }
        else { e.d = addDays(today(), INTERVALS[e.s]); e.s++; }
      } else {
        vReview.wrong++; e.s = 0; e.d = today(); vReview.queue.push(id); /* gặp lại ở cuối buổi ôn */
      }
      saveV();
    }
  }
  function nextReview() {
    vReview.i++;
    if (vReview.i >= vReview.queue.length) vReview.done = true; else prepReview();
  }
  function answerReview(ok) { gradeReview(ok); nextReview(); }  /* cách tự đánh giá, chỉ dùng khi từ chưa có nghĩa */

  /* Câu trắc nghiệm 4 lựa chọn: nghĩa đúng + 3 nghĩa gây nhiễu (ưu tiên cùng loại từ và cùng cấp độ, không trùng nghĩa). */
  var DEF_POOL = null;
  function buildChoices(id) {
    var w = entryWord(id);
    if (!hasDef(w)) return null;
    if (!DEF_POOL) DEF_POOL = VOCAB.filter(hasDef);
    var norm = function (t) { return t.trim().toLowerCase(); }, seen = {}, tiers = [[], [], []], texts = [];
    seen[norm(w.vi)] = 1;
    shuffle(DEF_POOL).forEach(function (x) {
      if (x.id === w.id || x.w === w.w) return;
      tiers[x.pos === w.pos && x.lv === w.lv ? 0 : x.pos === w.pos ? 1 : 2].push(x);
    });
    tiers[0].concat(tiers[1], tiers[2]).some(function (x) {
      var k = norm(x.vi);
      if (!seen[k]) { seen[k] = 1; texts.push(x.vi); }
      return texts.length >= 3;
    });
    if (texts.length < 3) return null;
    var opts = shuffle([w.vi].concat(texts));
    return { opts: opts, a: opts.indexOf(w.vi) };
  }
  function prepReview() {
    vReview.picked = null; vReview.shown = false;
    vReview.choice = buildChoices(vReview.queue[vReview.i]);
  }
  /* ---------- Kiểm tra gõ từ: hiện nghĩa tiếng Việt, người học gõ từ tiếng Anh ---------- */
  var TQ_MAX_HINTS = 4, TQ_FREE_HINTS = 1, TQ_SIZE = 10, TQ_TRIES = 2;   /* the first hint is free; from the second one the word goes back to review */
  function tqTarget(w) { return String(w.w).split('/')[0].replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim(); }
  function tqIsLetter(ch) { return !/[\s\-'’.,!?;:]/.test(ch); }
  function tqNorm(t) { return String(t).toLowerCase().replace(/[\s\-'’.,!?;:]/g, ''); }
  function tqSlots(target) { return target.split('').map(function (ch) { return { ch: ch, l: tqIsLetter(ch), rev: false }; }); }
  function tqFree(c) { return c.slots.filter(function (x) { return x.l && !x.rev; }); }
  function startTyping() {
    var ws = storeIds().map(entryWord).filter(function (w) { return hasDef(w) && tqNorm(tqTarget(w)); });
    if (!ws.length) { vMsg = 'Cần ít nhất một từ có nghĩa trong danh sách học để làm bài gõ từ.'; vType = null; return; }
    var t = today(), due = shuffle(ws.filter(function (w) { var e = vstore[w.id]; return !e.k && e.d && e.d <= t; })), rest = shuffle(ws.filter(function (w) { return due.indexOf(w) < 0; }));
    var q = due.concat(rest).slice(0, TQ_SIZE).map(function (w) { return w.id; });
    vType = { queue: q, i: 0, right: 0, hinted: 0, wrong: 0, done: false, counted: false, cur: null };
    prepType();
  }
  function prepType() {
    var id = vType.queue[vType.i], w = entryWord(id), target = tqTarget(w), ok = {};
    ok[tqNorm(target)] = 1;
    VOCAB.forEach(function (x) { if (x.vi && x.vi === w.vi) ok[tqNorm(tqTarget(x))] = 1; });   /* another word with the same Vietnamese meaning is also accepted */
    vType.cur = { id: id, target: target, slots: tqSlots(target), ok: ok, hints: 0, tries: 0, typed: '', msg: '', result: '' };
  }
  function tqReset(id) { var e = vstore[id]; if (e) { e.s = 0; e.d = today(); e.k = 0; saveV(); } }
  function tqSquares(c) {
    var f = 0, show = c.result !== '';
    return c.slots.map(function (x) {
      if (x.ch === ' ') return '<span class="sq-gap"></span>';
      if (!x.l) return '<span class="sq-sep">' + esc(x.ch) + '</span>';
      if (show) return '<span class="sq ' + (c.result === 'wrong' ? 'miss' : 'ok') + '">' + esc(x.ch) + '</span>';
      if (x.rev) return '<span class="sq rev">' + esc(x.ch) + '</span>';
      var ch = c.typed.charAt(f), cur = f === c.typed.length;
      f++;
      return '<span class="sq' + (ch ? ' fill' : '') + (cur ? ' cur' : '') + '">' + esc(ch) + '</span>';
    }).join('');
  }
  function tqHint(kind) {
    var c = vType.cur, free = c.slots.map(function (x, i) { return x.l && !x.rev ? i : -1; }).filter(function (i) { return i > -1; });
    if (free.length < 2 || c.hints >= TQ_MAX_HINTS) return;
    var pick = kind === 'rand' ? free[Math.floor(Math.random() * free.length)] : free[0];
    c.slots[pick].rev = true; c.hints++;
    c.typed = c.typed.slice(0, tqFree(c).length);
  }
  function tqFinish(result) {
    var c = vType.cur, e = vstore[c.id];
    c.result = result;
    if (result === 'right') {
      vType.right++; Act.review();
      if (e && !e.k && e.d && e.d <= today()) {   /* a word that was due moves to its next review step, like in the multiple-choice review */
        if (e.s >= INTERVALS.length) { e.k = 1; e.d = ''; } else { e.d = addDays(today(), INTERVALS[e.s]); e.s++; }
        saveV();
      }
    } else {
      if (result === 'hinted') vType.hinted++; else vType.wrong++;
      tqReset(c.id);   /* hints or a miss mean the word has to be reviewed again */
    }
  }
  function tqSubmit() {
    var c = vType && vType.cur;
    if (!c || c.result) return;
    var f = tqFree(c), typed = c.typed.replace(/[^\S]/g, '');
    if (typed.length < f.length) { c.msg = 'Hãy điền đủ ' + f.length + ' chữ cái còn lại.'; render(); return; }
    var k = 0, full = c.slots.map(function (x) { return !x.l ? x.ch : x.rev ? x.ch : typed.charAt(k++); }).join('');
    if (c.ok[tqNorm(full)]) { c.msg = ''; tqFinish(c.hints > TQ_FREE_HINTS ? 'hinted' : 'right'); }
    else { c.tries++; if (c.tries >= TQ_TRIES) { c.msg = ''; tqFinish('wrong'); } else c.msg = 'Chưa đúng. Thử lại, bạn còn ' + (TQ_TRIES - c.tries) + ' lần.'; }
    render();
  }
  function viewTypeCard() {
    var c = vType.cur, w = entryWord(c.id), top = sessionTop('Gõ từ', vType.i, vType.queue.length, 'tq-exit'), free = tqFree(c).length;
    var head = '<div class="row" style="justify-content:center">' + posTag(w) + (w.lv && !w.custom ? '<span class="tag">' + esc(w.lv) + '</span>' : '') + '</div><p class="mean">' + esc(viText(w)) + '</p>';
    if (c.result) {
      var title = c.result === 'right' ? (c.hints ? 'Chính xác (đã dùng 1 gợi ý miễn phí).' : 'Chính xác.') : c.result === 'hinted' ? 'Đúng, nhưng bạn đã dùng ' + c.hints + ' gợi ý.' : 'Chưa đúng.';
      return '<div class="quiz">' + top + '<div class="vcard">' + head + '<div class="sqs">' + tqSquares(c) + '</div></div>' +
        '<div class="feedback" aria-live="polite"><strong>' + title + '</strong><span>Đáp án: <b>' + esc(c.target) + '</b></span>' +
        (c.result === 'right' ? '' : '<span class="muted">Từ này đã được đưa về lịch ôn hôm nay.</span>') +
        '<div class="row">' + audioBtns(w) + '</div><div style="margin-top:0.4rem"><button class="btn" type="button" data-action="tq-next">Tiếp</button></div></div></div>';
    }
    var canHint = c.hints < TQ_MAX_HINTS && free > 1, costly = c.hints >= TQ_FREE_HINTS + 1;
    var note = costly ? '<p class="tq-note bad" role="status">Bạn đã dùng ' + c.hints + ' gợi ý: từ này sẽ phải ôn lại.</p>'
      : '<p class="tq-note">Gợi ý đầu tiên miễn phí. Từ gợi ý thứ 2 trở đi, từ này sẽ phải ôn lại.</p>';
    return '<div class="quiz">' + top + '<form id="tqform" class="stack" style="gap:0.9rem" novalidate>' +
      '<div class="vcard">' + head + '<div class="sqwrap"><div class="sqs" id="tq-sq" aria-hidden="true">' + tqSquares(c) + '</div>' +
      '<input id="tq-in" type="text" maxlength="' + free + '" value="' + esc(c.typed) + '" aria-label="Gõ từ tiếng Anh, còn ' + free + ' chữ cái" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>' +
      '<p class="muted" style="margin:0;font-size:0.9rem">Bấm vào các ô rồi gõ thẳng ' + free + ' chữ cái còn lại</p></div>' +
      '<div class="row"><button type="button" class="btn ghost small" data-action="tq-hint" data-k="next"' + (canHint ? '' : ' disabled') + '>Mở 1 chữ cái</button>' +
      '<button type="button" class="btn ghost small" data-action="tq-hint" data-k="rand"' + (canHint ? '' : ' disabled') + '>Mở chữ cái ngẫu nhiên</button>' +
      '<span class="muted" style="font-size:0.9rem">Gợi ý: ' + c.hints + '/' + TQ_MAX_HINTS + '</span></div>' + note +
      (c.msg ? '<p role="status" style="margin:0;color:var(--bad)">' + esc(c.msg) + '</p>' : '') +
      '<div class="row"><button class="btn" type="submit">Kiểm tra</button><button class="btn ghost" type="button" data-action="tq-giveup">Mình chưa biết</button></div></form></div>';
  }
  function viewTypeDone() {
    return '<div class="quiz"><p class="call">Gõ từ</p><h1 style="font-size:2rem">Xong bài gõ từ</h1>' +
      '<div class="stats"><div class="stat"><b>' + vType.right + '</b><span>đúng</span></div><div class="stat"><b>' + vType.hinted + '</b><span>đúng, dùng nhiều gợi ý</span></div><div class="stat"><b>' + vType.wrong + '</b><span>chưa đúng</span></div></div>' +
      ((vType.hinted + vType.wrong) ? '<p class="muted">' + (vType.hinted + vType.wrong) + ' từ đã được đưa về lịch ôn hôm nay.</p>' : '') +
      '<div class="row"><button class="btn" type="button" data-action="tq-start">Làm bài mới</button><button class="btn ghost" type="button" data-action="tq-exit">Về mục ôn tập</button></div></div>';
  }

  function cardHtml(w, shown) {
    return '<div class="vcard">' + (ADMIN && w.o !== undefined ? '<span class="vid">ID ' + w.o + '</span>' : '') + (w.lv && !w.custom ? '<span class="vband" title="Cấp độ CEFR">' + esc(w.lv) + '</span>' : '') + '<span class="big">' + esc(w.w) + '</span>' + (w.ph ? '<span class="vph">' + esc(w.ph) + '</span>' : '') +
      '<div class="row" style="justify-content:center">' + posTag(w) + speakBtn(w) + '</div>' +
      (shown === 'quiz' ? '' : shown ? '<p class="mean">' + esc(viText(w)) + '</p>' : '<button class="btn ghost" type="button" data-action="card-show">Hiện nghĩa</button>') + '</div>';
  }
  function sessionTop(title, i, total, exitAction) {
    return '<div class="row" style="justify-content:space-between"><p class="call" style="margin:0">' + esc(title) + '</p><button class="btn ghost small" type="button" data-action="' + exitAction + '">Thoát</button></div>' +
      '<div><p class="muted" style="font-size:0.9rem;margin-bottom:0.4rem">Thẻ ' + (i + 1) + ' / ' + total + (total - i - 1 > 0 ? ' (còn ' + (total - i - 1) + ')' : '') + '</p><div class="bar"><i style="width:' + (i / total * 100) + '%"></i></div></div>';
  }
  function viewBrowseCard() {
    var w = entryWord(vBrowse.queue[vBrowse.i]);
    return '<div class="quiz">' + sessionTop('Duyệt thẻ / ' + levelLabel(), vBrowse.i, vBrowse.queue.length, 'b-exit') + cardHtml(w, true) +
      '<div class="bcards"><button class="btn ghost" type="button" data-action="b-know">Đã biết</button><button class="btn" type="button" data-action="b-learn">Cần học</button>' +
      '<button class="btn ghost" type="button" data-action="b-skip">Bỏ qua</button></div>' +
      '<p class="muted" style="font-size:0.9rem">“Cần học” đưa từ vào lịch ôn. “Đã biết” không ôn lại. “Bỏ qua” để từ ở lại trong bộ từ. Bạn có thể dừng bất cứ lúc nào bằng nút Thoát.</p></div>';
  }
  function viewBrowseDone() {
    return '<div class="quiz"><p class="call">Duyệt thẻ / ' + esc(levelLabel()) + '</p><h1 style="font-size:2rem">Đã duyệt hết thẻ</h1>' +
      '<div class="stats"><div class="stat"><b>' + vBrowse.added + '</b><span>cần học</span></div><div class="stat"><b>' + vBrowse.known + '</b><span>đã biết</span></div><div class="stat"><b>' + vBrowse.skipped + '</b><span>bỏ qua</span></div></div>' +
      '<div class="row"><button class="btn" type="button" data-action="v-browse">Duyệt lại từ chưa đánh dấu</button><button class="btn ghost" type="button" data-action="m-open">Từ của tôi</button><button class="btn ghost" type="button" data-action="b-exit">Xong</button></div></div>';
  }
  function viewReviewCard() {
    var w = entryWord(vReview.queue[vReview.i]), ch = vReview.choice, top = sessionTop('Ôn tập', vReview.i, vReview.queue.length, 'r-exit');
    if (!ch) {  /* chưa đủ nghĩa để ra câu trắc nghiệm: dùng cách tự đánh giá */
      return '<div class="quiz">' + top + cardHtml(w, vReview.shown) +
        (vReview.shown ? '<div class="row"><button class="btn" type="button" data-action="r-yes">Đã nhớ</button><button class="btn ghost" type="button" data-action="r-no">Chưa nhớ</button></div>' +
          '<p class="muted" style="font-size:0.9rem">Từ chưa nhớ sẽ xuất hiện lại ở cuối buổi ôn này.</p>' :
          '<p class="muted" style="font-size:0.9rem">Từ này chưa có nghĩa để ra câu trắc nghiệm. Hãy thử nhớ nghĩa trước, rồi bấm “Hiện nghĩa” để kiểm tra.</p>') + '</div>';
    }
    var p = vReview.picked, answered = p !== null, letters = ['A', 'B', 'C', 'D'];
    var opts = ch.opts.map(function (o, i) {
      var cls = 'opt';
      if (answered) { if (i === ch.a) cls += ' right'; else if (i === p) cls += ' wrong'; }
      return '<button type="button" class="' + cls + '" data-action="r-pick" data-i="' + i + '"' + (answered ? ' disabled' : '') + '><i>' + letters[i] + '</i><span>' + esc(o) + '</span></button>';
    }).join('');
    var fb = answered
      ? '<div class="feedback" aria-live="polite"><strong>' + (p === ch.a ? 'Chính xác.' : 'Chưa đúng.') + '</strong><span>' + esc(w.w) + ': ' + esc(ch.opts[ch.a]) + '</span>' +
        (p === ch.a ? '' : '<span class="muted">Từ này sẽ xuất hiện lại ở cuối buổi ôn.</span>') +
        '<div style="margin-top:0.5rem"><button class="btn" type="button" data-action="r-next">Tiếp</button></div></div>'
      : '<div><button class="btn ghost" type="button" data-action="r-pick" data-i="-1">Mình chưa biết</button></div>';
    return '<div class="quiz">' + top + cardHtml(w, 'quiz') + '<p class="muted" style="margin:0">Chọn nghĩa đúng của từ này.</p><div class="opts">' + opts + '</div>' + fb + '</div>';
  }
  function viewReviewDone() {
    var left = dueList().length;
    return '<div class="quiz"><p class="call">Ôn tập</p><h1 style="font-size:2rem">Xong buổi ôn</h1>' +
      '<div class="stats"><div class="stat"><b>' + vReview.right + '</b><span>lần đúng</span></div><div class="stat"><b>' + vReview.wrong + '</b><span>lần sai</span></div><div class="stat"><b>' + left + '</b><span>từ còn cần ôn</span></div></div>' +
      '<p class="muted">Từ bạn trả lời đúng sẽ quay lại sau 1, 3 rồi 7 ngày. Sau lần đúng thứ tư, từ được tính là đã thuộc.</p>' +
      '<div class="row">' + (left ? '<button class="btn" type="button" data-action="r-start">Ôn tiếp</button>' : '') + '<button class="btn ghost" type="button" data-action="m-open">Từ của tôi</button><button class="btn ghost" type="button" data-action="r-exit">Xong</button></div></div>';
  }

  /* Square card: click anywhere on the card to mark / unmark the word. The speaker button is separate. */
  function vmSize(t) { var n = String(t).length; return n <= 14 ? 'vm-1' : n <= 28 ? 'vm-2' : n <= 48 ? 'vm-3' : 'vm-4'; }
  function vsq(w) {
    var e = vstore[w.id], cls = 'vsq' + (e ? (e.k ? ' known' : ' learning') : ''), key = 'data-key="' + esc(w.id) + '" data-id="' + esc(w.id) + '"';
    var status = e ? (e.k ? 'Đã biết' : 'Đang học') : 'Bấm để học';
    return '<div class="' + cls + '"><button type="button" class="vsq-main" data-action="v-toggle" ' + key + ' aria-pressed="' + (e ? 'true' : 'false') + '" title="' + esc(viText(w)) + '">' +
      '<span class="vw">' + esc(w.w) + '</span>' + (w.ph ? '<span class="vph">' + esc(w.ph) + '</span>' : '') + (w.pos ? '<span class="vpos">' + esc(POS_VI[w.pos] || w.pos) + '</span>' : '') +
      '<span class="vm ' + vmSize(viText(w)) + '">' + esc(viText(w)) + '</span><span class="vlv">' + esc(w.lv) + '</span>' + (ADMIN && w.o !== undefined ? '<span class="vid">ID ' + w.o + '</span>' : '') + '<span class="vst">' + status + '</span></button>' +
      '<span class="vsq-say-row">' + audioBtns(w, 'vsq-say') + '</span></div>';
  }
  function renderVList() {
    var listEl = document.getElementById('v-list'), cnt = document.getElementById('v-count');
    if (!listEl) return;
    var items = vFiltered().sort(vQuery.trim() ? function (x, y) { return x.o - y.o; } : function (x, y) { return x.r - y.r; }), shown = items.slice(0, vLimit);
    cnt.textContent = items.length + ' từ' + (items.length > shown.length ? ', đang hiện ' + shown.length : '');
    if (!items.length) { listEl.innerHTML = '<div class="empty">Không có từ nào phù hợp. Hãy thử từ khóa khác.</div>'; return; }
    listEl.innerHTML = '<div class="vgrid">' + shown.map(vsq).join('') + '</div>' +
      (items.length > shown.length ? '<div style="margin-top:1rem"><button class="btn ghost" type="button" data-action="v-more">Xem thêm 40 từ</button></div>' : '');
  }
  function viewDecks() {
    if (!VLEVELS.length) return '<div class="empty">Chưa có bộ từ nào.</div>';
    var lvChips = chipBtn('v-level', '', 'Tất cả (' + VOCAB.length + ' từ)', vLevel === '') + VLEVELS.map(function (l) { return chipBtn('v-level', l, l + ' (' + levelWords(l).length + ' từ)', vLevel === l); }).join('');
    var ws = levelWords(vLevel), learning = 0, known = 0;
    ws.forEach(function (w) {
      var e = vstore[w.id];
      if (e) { if (e.k) known++; else learning++; }
    });
    return '<div class="stack" style="gap:1.5rem">' +
      '<div class="chips" role="group" aria-label="Chọn bộ từ">' + lvChips + '</div>' +
      '<div class="panel"><div class="stats"><div class="stat"><b>' + learning + '</b><span>đang học</span></div><div class="stat"><b>' + known + '</b><span>đã biết</span></div><div class="stat"><b>' + (ws.length - learning - known) + '</b><span>chưa đánh dấu</span></div></div>' +
      '<div class="row" style="margin-top:1rem"><button class="btn" type="button" data-action="v-browse">Duyệt thẻ</button><button class="btn ghost" type="button" data-action="v-batch">Thêm nhanh 20 từ mới</button></div>' +
      '<p class="muted" style="margin-top:0.6rem;font-size:0.95rem">Duyệt thẻ cho bạn xem từng từ trên một thẻ lớn rồi chọn “Đã biết”, “Cần học” hoặc “Bỏ qua”. Bên dưới, bấm vào một thẻ vuông để đánh dấu hoặc bỏ đánh dấu từ cần học. Thêm nhanh đưa 20 từ ngẫu nhiên vào danh sách học. Cả hai chỉ lấy từ chưa đánh dấu trong cấp độ đang chọn.</p></div>' +
      '<div><label for="v-search">Tìm từ hoặc nghĩa</label><input id="v-search" type="search" placeholder="Ví dụ: apple, quả táo" value="' + esc(vQuery) + '" autocomplete="off"></div>' +
      '<p class="muted" id="v-count" aria-live="polite"></p><div id="v-list"></div></div>';
  }
  function viewReviewHome(due) {
    var ids = storeIds();
    if (!ids.length) return '<div class="panel stack" style="gap:0.8rem"><h2>Chưa có từ nào để ôn</h2><p class="muted">Chọn vài từ để học trước, rồi quay lại đây để ôn.</p>' +
      '<div class="row"><button class="btn" type="button" data-action="v-sub" data-v="decks">Chọn từ để học</button></div></div>';
    var typable = ids.map(entryWord).filter(hasDef).length;
    var next = ids.map(function (id) { return vstore[id]; }).filter(function (e) { return !e.k && e.d; }).map(function (e) { return e.d; }).sort()[0];
    var mcq = due
      ? '<div class="panel stack" style="gap:1rem"><div><p class="call">Ôn hôm nay</p><h2>' + due + ' từ cần ôn</h2></div>' +
        '<p class="muted">Mỗi buổi ôn tối đa 20 từ, mỗi từ là một câu trắc nghiệm 4 lựa chọn. Trả lời đúng thì từ quay lại sau 1, 3 rồi 7 ngày. Trả lời sai thì từ trở lại từ đầu.</p>' +
        '<div class="row"><button class="btn" type="button" data-action="r-start">Bắt đầu ôn</button></div></div>'
      : '<div class="panel"><h2>Hôm nay không có từ cần ôn</h2><p class="muted" style="margin-top:0.5rem">' +
        (next ? 'Lần ôn kế tiếp: ngày ' + esc(niceShort(next)) + '.' : 'Tất cả từ trong danh sách đã thuộc. Hãy thêm từ mới ở “Bộ từ”.') + '</p></div>';
    var typing = '<div class="panel stack" style="gap:1rem"><div><p class="call">Kiểm tra gõ từ</p><h2>Gõ từ tiếng Anh theo nghĩa</h2></div>' +
      '<p class="muted">Bạn thấy nghĩa tiếng Việt và các ô chữ, rồi gõ từ tiếng Anh. Có ' + TQ_MAX_HINTS + ' gợi ý mỗi từ (mở 1 chữ cái hoặc mở chữ cái ngẫu nhiên). Gợi ý đầu tiên miễn phí; từ gợi ý thứ 2 trở đi, từ đó sẽ phải ôn lại.</p>' +
      (typable ? '<div class="row"><button class="btn' + (due ? ' ghost' : '') + '" type="button" data-action="tq-start">Bắt đầu gõ từ</button><span class="muted">' + Math.min(TQ_SIZE, typable) + ' từ mỗi lượt, từ đến hạn ôn được ưu tiên</span></div>'
        : '<p class="muted">Danh sách của bạn chưa có từ nào có nghĩa tiếng Việt.</p>') + '</div>';
    return '<div class="stack" style="gap:1.25rem">' + mcq + typing + '</div>';
  }
  function statusText(e) { return e.k ? 'Đã thuộc' : (e.d <= today() ? 'Cần ôn hôm nay' : 'Ôn lại ngày ' + niceShort(e.d)); }
  function mrow(id) {
    var w = entryWord(id), e = vstore[id], key = 'data-key="' + esc(id) + '" data-id="' + esc(id) + '"';
    var due = !e.k && e.d <= today();
    var acts = (e.k ? '<button type="button" class="btn ghost small" data-action="m-relearn" ' + key + '>Học lại</button>' : '') +
      '<button type="button" class="btn ghost small" data-action="m-remove" ' + key + '>' + (w.custom ? 'Xóa' : 'Bỏ khỏi danh sách') + '</button>';
    return '<li class="vrow"><div><span class="vw">' + esc(w.w) + '</span> ' + posTag(w) + (w.custom ? '<span class="tag">Từ riêng</span> ' : '') +
      '<span class="tag' + (due ? ' on' : '') + '">' + esc(statusText(e)) + '</span></div><div class="vact">' + speakBtn(w) + acts + '</div><div class="vvi">' + esc(viText(w)) + '</div></li>';
  }
  function viewMine() {
    var ids = storeIds(), t = today(), counts = { all: ids.length, due: 0, learning: 0, known: 0 };
    ids.forEach(function (id) { var e = vstore[id]; if (e.k) counts.known++; else { counts.learning++; if (e.d <= t) counts.due++; } });
    var filters = [['all', 'Tất cả'], ['due', 'Cần ôn hôm nay'], ['learning', 'Đang học'], ['known', 'Đã thuộc']].map(function (f) {
      return chipBtn('m-filter', f[0], f[1] + ' (' + counts[f[0]] + ')', mFilter === f[0]);
    }).join('');
    var shown = ids.filter(function (id) {
      var e = vstore[id];
      return mFilter === 'all' || (mFilter === 'known' && e.k) || (mFilter === 'learning' && !e.k) || (mFilter === 'due' && !e.k && e.d <= t);
    }).sort(function (a, b) { return entryWord(a).w.toLowerCase() < entryWord(b).w.toLowerCase() ? -1 : 1; });
    var listHtml = shown.length ? '<ul class="vlist">' + shown.map(mrow).join('') + '</ul>'
      : '<div class="empty">' + (ids.length ? 'Không có từ nào trong mục này.' : 'Danh sách trống. Vào “Bộ từ” để chọn những từ bạn muốn học, hoặc thêm từ riêng bên dưới.') + '</div>';
    var pending = vPending
      ? '<div class="feedback"><strong>Tìm thấy ' + vPending.n + ' từ trong bản sao lưu.</strong><span>Khôi phục sẽ thay thế toàn bộ danh sách hiện tại (' + ids.length + ' từ).</span>' +
        '<div class="row" style="margin-top:0.5rem"><button class="btn" type="button" data-action="m-restore-yes">Khôi phục</button><button class="btn ghost" type="button" data-action="m-restore-no">Hủy</button></div></div>' : '';
    return '<div class="stack" style="gap:1.5rem"><div class="chips" role="group" aria-label="Lọc từ của tôi">' + filters + '</div>' + listHtml +
      '<form id="vform" class="panel jform" novalidate><div class="full"><h3>Thêm từ riêng</h3></div>' +
      '<div><label for="v-word">Từ tiếng Anh</label><input id="v-word" type="text" autocomplete="off" placeholder="Ví dụ: break the ice"></div>' +
      '<div><label for="v-vi">Nghĩa tiếng Việt</label><input id="v-vi" type="text" autocomplete="off" placeholder="Ví dụ: phá vỡ sự ngượng ngùng"></div>' +
      '<div class="full row"><button class="btn" type="submit">Thêm vào danh sách học</button></div></form>' +
      '<section class="panel stack" style="gap:0.8rem"><h3>Sao lưu và khôi phục</h3>' +
      '<p class="muted">Danh sách học được lưu trong trình duyệt này. Hãy sao lưu để không mất khi xóa dữ liệu trình duyệt hoặc đổi thiết bị.</p>' +
      '<div class="row"><button class="btn ghost" type="button" data-action="m-export">Sao chép bản sao lưu</button></div>' +
      (vExport !== null ? '<div><label for="v-export">Chọn tất cả và sao chép đoạn văn bản này</label><textarea id="v-export" class="export" readonly>' + esc(vExport) + '</textarea></div>' : '') +
      '<div><label for="v-restore">Dán bản sao lưu để khôi phục</label><textarea id="v-restore" class="export" placeholder="Dán nội dung đã sao lưu vào đây"></textarea></div>' +
      '<div class="row"><button class="btn ghost" type="button" data-action="m-restore">Khôi phục</button></div>' + pending + '</section></div>';
  }
  function viewVocab() {
    if (vBrowse) return vBrowse.done ? viewBrowseDone() : viewBrowseCard();
    if (vReview) return vReview.done ? viewReviewDone() : viewReviewCard();
    if (vType) return vType.done ? viewTypeDone() : viewTypeCard();
    var due = dueList().length, mine = storeIds().length;
    var subs = [['review', 'Ôn tập (' + due + ')'], ['mine', 'Từ của tôi (' + mine + ')'], ['decks', 'Bộ từ']].map(function (s) {
      return '<button type="button" class="subtab" data-action="v-sub" data-v="' + s[0] + '" aria-pressed="' + (vSub === s[0]) + '">' + esc(s[1]) + '</button>';
    }).join('');
    var body = vSub === 'review' ? viewReviewHome(due) : vSub === 'mine' ? viewMine() : viewDecks();
    return head('Từ vựng', 'Học từ theo danh sách Oxford. Đánh dấu từ cần học rồi ôn lại đúng lúc: sau 1 ngày, 3 ngày, 7 ngày.') +
      '<div class="subtabs" role="group" aria-label="Các phần của mục từ vựng">' + subs + '</div>' +
      (vMsg ? '<p class="panel" role="status" style="margin-bottom:1rem">' + esc(vMsg) + '</p>' : '') + body +
      '<p class="muted" style="margin-top:2rem;font-size:0.9rem">Danh sách từ, phiên âm và âm thanh theo Oxford Learner’s Dictionaries. Phần giải nghĩa do Tiếng Anh mỗi ngày biên soạn và đang được bổ sung.</p>';
  }
  function addCustomWord() {
    var w = document.getElementById('v-word').value.trim(), vi = document.getElementById('v-vi').value.trim();
    if (!w || !vi) { vMsg = 'Hãy nhập cả từ tiếng Anh và nghĩa tiếng Việt.'; render(); return; }
    var id = 'u:' + w.toLowerCase().slice(0, 80);
    if (vstore[id]) { vMsg = 'Từ này đã có trong danh sách riêng của bạn.'; render(); return; }
    vstore[id] = { s: 0, d: today(), k: 0, w: w.slice(0, 80), vi: vi.slice(0, 200) }; Act.learn(id);
    saveV(); vMsg = 'Đã thêm “' + w + '” vào danh sách học.'; render();
  }

  /* ---------- Phát âm (bảng IPA) ---------- */
  var ipaSel = '', ipaFilter = 'all';
  function ipaFile(kind, name) {
    var base = kind === 's' ? IPA_CFG.sounds : IPA_CFG.words;
    return base ? base + name + '.' + (IPA_CFG.ext || 'mp3') : '';
  }
  function wordSlug(w) { return String(w).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function playFile(src, word) {
    var fallback = function () { if (word) speak(word); };
    if (!src) { fallback(); return; }
    try {
      var au = new Audio(src); au.onerror = fallback;
      var p = au.play(); if (p && p.catch) p.catch(fallback);
    } catch (e) { fallback(); }
  }
  /* Âm thanh từ ví dụ lấy từ thư viện audio của tab Từ vựng: ưu tiên tên tệp trong danh sách từ, nếu không có thì đoán theo <từ>_uk.mp3 / <từ>_us.mp3 (thiếu tệp thì đọc bằng giọng trình duyệt). */
  var VWORD = null;
  function vAudioFile(word, kind) {
    if (!VWORD) { VWORD = Object.create(null); VOCAB.forEach(function (v) { var k = v.w.toLowerCase(); if (!VWORD[k]) VWORD[k] = {}; if (v.uk && !VWORD[k].uk) VWORD[k].uk = v.uk; if (v.us && !VWORD[k].us) VWORD[k].us = v.us; }); }
    var e = VWORD[String(word).toLowerCase()];
    return (e && e[kind]) || (String(word).toLowerCase().replace(/[^a-z0-9'-]+/g, '') + '_' + kind + '.mp3');
  }
  function ipaWordBtn(w) {
    return ['uk', 'us'].map(function (k) {
      return '<button type="button" class="btn ghost small" data-action="play" data-k="' + k + '" data-f="' + esc(vAudioFile(w, k)) + '" data-w="' + esc(w) + '" aria-label="Nghe giọng ' + (k === 'uk' ? 'Anh' : 'Mỹ') + ': ' + esc(w) + '">' + k.toUpperCase() + '</button>';
    }).join(' ');
  }
  function ipaDetail() {
    var s = IPA.filter(function (x) { return x.id === ipaSel; })[0];
    return s ? ipaDetailFor(s, false) : ipaDetailFor(null, false);
  }
  function ipaDetailFor(s, inPop) {
    if (!s) return '<section class="panel ipa-detail" id="ipa-detail"><p class="muted">Bấm vào một âm bên dưới để nghe, xem ví dụ và mẹo phát âm.</p></section>';
    var kind = { vowel: 'Nguyên âm', diphthong: 'Nguyên âm đôi', consonant: 'Phụ âm' }[s.type] || '';
    var label = [kind, s.type === 'consonant' ? s.group : '', s.voice].filter(Boolean).join(' · ');
    var soundBtn = IPA_CFG.sounds ? '<button type="button" class="btn small" data-action="ipa-play" data-src="' + esc(ipaFile('s', s.id)) + '" data-w="">Nghe âm /' + esc(s.sym) + '/</button>' : '';
    var words = s.ex.map(function (e) {
      return '<li><b>' + esc(e.w) + '</b> <span class="muted ipa-t">/' + esc(e.ipa) + '/</span> ' + ipaWordBtn(e.w) + '</li>';
    }).join('');
    var pairs = s.pairs.map(function (p) {
      return '<li><b>' + esc(p.a) + '</b> <span class="muted ipa-t">/' + esc(p.ai) + '/</span> ' + ipaWordBtn(p.a) + ' <span class="muted">≠</span> <b>' + esc(p.b) + '</b> <span class="muted ipa-t">/' + esc(p.bi) + '/</span> ' + ipaWordBtn(p.b) + '</li>';
    }).join('');
    return '<section class="panel ipa-detail stack"' + (inPop ? '' : ' id="ipa-detail"') + ' style="gap:1rem"><div class="ipa-head"><span class="ipa-big">/' + esc(s.sym) + '/</span><div class="stack" style="gap:0.5rem"><p class="call" style="margin:0">' + esc(label) + '</p>' + soundBtn + '</div></div>' +
      (words ? '<div><p class="lab">Ví dụ</p><ul class="ipa-list">' + words + '</ul></div>' : '') +
      (s.tip ? '<div><p class="lab">Cách phát âm</p><p>' + esc(s.tip) + '</p></div>' : '') +
      (s.bad ? '<div><p class="lab">Lỗi thường gặp của người Việt</p><p>' + esc(s.bad) + '</p></div>' : '') +
      (pairs ? '<div><p class="lab">Cặp từ dễ nhầm</p><ul class="ipa-list">' + pairs + '</ul></div>' : '') + '</section>';
  }
  /* Bảng âm xếp theo biểu đồ: phụ âm vô thanh / hữu thanh đứng thành cặp (p-b, t-d, k-g...). Id lấy từ content/ipa.js. */
  var IPA_CHART = {
    vowels: [['i', 'ih', 'uh', 'u'], ['eh', 'schwa', 'er', 'aw'], ['ae', 'uh2', 'ah']],
    dip: [['ei', 'ai'], ['oi', 'au'], ['ou']],
    cons: [[['p', 'b'], ['t', 'd'], ['ch', 'j'], ['k', 'g']], [['f', 'v'], ['th', 'dh'], ['s', 'z'], ['sh', 'zh']], [['m', 'n', 'ng', 'y'], ['l', 'r', 'w', 'h']]]
  };
  var IPA_SHORT = ['ih', 'uh', 'eh', 'schwa', 'ae', 'uh2'];
  var ipaRef = 'us';
  function ipaTile(s) {
    var cls = s.type === 'consonant' ? (s.voice === 'Vô thanh' ? 'unv' : 'vcd') : s.type === 'diphthong' ? 'dip' : IPA_SHORT.indexOf(s.id) > -1 ? 'sho' : 'lon';
    return '<button type="button" class="ipa-tile ' + cls + '" data-action="ipa-pick" data-v="' + esc(s.id) + '" aria-pressed="' + (ipaSel === s.id) + '"><b>' + esc(s.sym) + '</b><span>' + esc(s.ex[0] ? s.ex[0].w : '') + '</span></button>';
  }
  function ipaQuickHtml() {
    var q = IPAQ[ipaRef]; if (!q) return '';
    function bold(t) {
      return t.split(', ').map(function (wd) {
        var plain = wd.replace(/\*\*/g, '');
        return '<button type="button" class="ipa-w" data-action="play" data-k="' + ipaRef + '" data-f="' + esc(vAudioFile(plain, ipaRef)) + '" data-w="' + esc(plain) + '" aria-label="Nghe: ' + esc(plain) + '">' +
          esc(wd).split('**').map(function (x, i) { return i % 2 ? '<b>' + x + '</b>' : x; }).join('') + '</button>';
      }).join(', ');
    }
    function tbl(h, rows) { return '<div class="table-wrap"><table style="min-width:0"><thead><tr><th colspan="2">' + h + '</th></tr></thead><tbody>' + rows.map(function (r) { return '<tr><td class="ipa-sym">' + esc(r[0]) + '</td><td>' + bold(r[1]) + '</td></tr>'; }).join('') + '</tbody></table></div>'; }
    var chips = ['us', 'uk'].filter(function (k) { return IPAQ[k]; }).map(function (k) { return chipBtn('ipa-ref', k, IPAQ[k].title, ipaRef === k); }).join('');
    return '<section class="stack" style="gap:0.8rem"><h3 style="margin:0">Bảng tra nhanh</h3><div class="chips" role="group" aria-label="Chọn giọng">' + chips + '</div>' +
      '<div class="ipa-ref">' + tbl('Nguyên âm' + (ipaRef === 'uk' ? ' và nguyên âm đôi' : ' và nguyên âm đôi'), q.vowels) + tbl('Phụ âm', q.consonants) + '</div></section>';
  }
  /* ---------- Luyện phát âm: chọn từ khác trọng âm, phiên âm sang từ, phiên âm sang câu ---------- */
  var ipaSub = 'chart', ipaQ = null, ipaLv = '', ipaSd = 'easy', ipaMsg = '';
  var IP_N = 10, IP_SENT_N = 5, IP_TRIES = 2;
  var LV_IDS = LEVELS.map(function (l) { return l.id; });
  var SENT_TIERS = [['easy', 'Dễ', 'đến 5 từ'], ['medium', 'Vừa', '6 đến 13 từ'], ['hard', 'Khó', '14 từ trở lên']];
  function quoteWords(t) { return String(t).trim().split(/\s+/).length; }
  function quoteTier(t) { var n = quoteWords(t); return n <= 5 ? 'easy' : n <= 13 ? 'medium' : 'hard'; }
  var IPX = null;   /* words with a phonetic spelling, plus which spellings share one pronunciation; built once the word list is loaded */
  function ipaIndex() {
    if (IPX) return IPX;
    var seen = {}, homo = Object.create(null), all = [];
    VOCAB.forEach(function (w) {
      var ph = w.ph; if (!ph || /\s/.test(ph) || !/^[A-Za-z]+$/.test(w.w)) return;
      (homo[ph] = homo[ph] || {})[w.w.toLowerCase()] = 1;
      if (seen[ph]) return; seen[ph] = 1;
      all.push({ w: w, ph: ph, lvi: LV_IDS.indexOf(w.lv) });
    });
    IPX = { all: all, homo: homo };
    return IPX;
  }
  function ipaPool() { var max = ipaLv ? LV_IDS.indexOf(ipaLv) : 99; return ipaIndex().all.filter(function (e) { return e.lvi <= max; }); }
  /* Stress groups from content/stress.js: key "n:p" = n syllables, main stress on syllable p (0 = first). */
  var SX = null;
  function stressIndex() {
    if (SX) return SX;
    var first = Object.create(null);
    VOCAB.forEach(function (w) { var k = w.w.toLowerCase(); if (!first[k]) first[k] = w; });
    SX = {};
    Object.keys(OEL.stress || {}).forEach(function (k) {
      SX[k] = list(OEL.stress[k]).map(function (word) { var w = first[word]; return w ? { w: w, ph: w.ph, lvi: LV_IDS.indexOf(w.lv) } : null; }).filter(Boolean);
    });
    return SX;
  }
  function related(a, b) { var x = a.w.w.toLowerCase(), y = b.w.w.toLowerCase(); return x.indexOf(y) === 0 || y.indexOf(x) === 0 || x.slice(0, 4) === y.slice(0, 4); }
  function pickDistinct(arr, n, others) {
    var out = [];
    shuffle(arr).some(function (e) {
      if (others.concat(out).some(function (o) { return related(e, o); })) return false;
      out.push(e); return out.length >= n;
    });
    return out.length >= n ? out : null;
  }
  function stressDots(n, p) {
    var d = '', i;
    for (i = 0; i < n; i++) d += '<i class="d' + (i === p ? ' on' : '') + '"></i>';
    return '<span class="dots" role="img" aria-label="Trọng âm ở âm tiết thứ ' + (p + 1) + ' trong ' + n + ' âm tiết">' + d + '</span>';
  }
  /* "c*a*t" -> { plain: 'cat', html: 'c<u>a</u>t' }: the letters between asterisks are underlined. */
  function markedWord(t) {
    var parts = String(t).split('*');
    return { plain: parts.join(''), html: parts.map(function (x, i) { return i % 2 ? '<u>' + esc(x) + '</u>' : esc(x); }).join('') };
  }
  var WMAP = null;
  function wordEntry(plain) {
    if (!WMAP) { WMAP = Object.create(null); VOCAB.forEach(function (w) { var k = w.w.toLowerCase(); if (!WMAP[k] && w.ph) WMAP[k] = w; }); }
    return WMAP[String(plain).toLowerCase()] || null;
  }
  function ipIsPick() { return ipaQ && (ipaQ.mode === 'odd' || ipaQ.mode === 'sound' || ipaQ.mode === 'stress'); }
  /* Sound groups from content/sound-groups.js (tools/build-sounds.py): spelling -> sound label -> words with the spelling marked, e.g. { ea: { "iː": ["t*ea*"], "e": ["br*ea*d"] } }. */
  var SG = null, NEAR_SOUNDS = [['ɑː', 'ɔː'], ['ɑːr', 'ɔːr']];
  function soundIndex() {
    if (SG) return SG;
    var first = Object.create(null);
    VOCAB.forEach(function (w) { var k = w.w.toLowerCase(); if (!first[k]) first[k] = w; });
    SG = {};
    var src = OEL.soundGroups || {};
    Object.keys(src).forEach(function (g) {
      SG[g] = {};
      Object.keys(src[g]).forEach(function (lab) {
        SG[g][lab] = list(src[g][lab]).map(function (m) { var mw = markedWord(m), w = first[mw.plain]; return w ? { w: w, ph: w.ph, lvi: LV_IDS.indexOf(w.lv), m: m } : null; }).filter(Boolean);
      });
    });
    return SG;
  }
  /* A sound label such as "aɪ" or "ɑːr" -> the sound panels of the Bảng âm tab (several panels when the label is a combination, e.g. ɑː + r). */
  var SND_IDS = { 'iː': 'i', 'ɪ': 'ih', 'e': 'eh', 'æ': 'ae', 'ɑː': 'ah', 'ɔː': 'aw', 'ʊ': 'uh', 'uː': 'u', 'ʌ': 'uh2', 'ɜːr': 'er', 'eɪ': 'ei', 'aɪ': 'ai', 'ɔɪ': 'oi', 'aʊ': 'au', 'oʊ': 'ou',
    'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'ɡ': 'g', 'f': 'f', 'v': 'v', 'θ': 'th', 'ð': 'dh', 's': 's', 'z': 'z', 'ʃ': 'sh', 'ʒ': 'zh', 'h': 'h', 'tʃ': 'ch', 'dʒ': 'j', 'm': 'm', 'n': 'n', 'ŋ': 'ng', 'l': 'l', 'r': 'r', 'w': 'w', 'j': 'y' };
  var SND_TOK = Object.keys(SND_IDS).sort(function (a, b) { return b.length - a.length; });
  function soundParts(label) {
    var out = [], i = 0, k;
    while (i < label.length) {
      var tok = SND_TOK.filter(function (t) { return label.substr(i, t.length) === t; })[0];
      if (!tok) { i++; continue; }
      k = SND_IDS[tok]; if (out.indexOf(k) < 0) out.push(k);
      i += tok.length;
    }
    return IPA.filter(function (x) { return out.indexOf(x.id) > -1; }).sort(function (a, b) { return out.indexOf(a.id) - out.indexOf(b.id); });
  }
  var ipaPop = '';
  function soundLink(label) {
    return soundParts(label).length ? '<button type="button" class="snd-link" data-action="ip-snd" data-l="' + esc(label) + '" aria-haspopup="dialog">/' + esc(label) + '/</button>' : '/' + esc(label) + '/';
  }
  function soundPopup() {
    var parts = ipaPop ? soundParts(ipaPop) : [];
    if (!parts.length) return '';
    return '<div class="modal" role="dialog" aria-modal="true" aria-label="Thông tin về âm /' + esc(ipaPop) + '/"><div class="modal-bg" data-action="ip-snd-close"></div><div class="modal-box"><div class="row" style="justify-content:flex-end"><button type="button" class="btn ghost small" id="snd-close" data-action="ip-snd-close">Đóng</button></div>' +
      parts.map(function (x) { return ipaDetailFor(x, true); }).join('') + '</div></div>';
  }
  function nearSound(a, b) { return NEAR_SOUNDS.some(function (p) { return (p[0] === a && p[1] === b) || (p[0] === b && p[1] === a); }); }
  /* One question: four words with the same spelling underlined; three read it the same way, one reads it differently. */
  function genSound() {
    var ix = soundIndex(), max = ipaLv ? LV_IDS.indexOf(ipaLv) : 99, gs = Object.keys(ix), tries;
    for (tries = 0; tries < 80 && gs.length; tries++) {
      var g = gs[Math.floor(Math.random() * gs.length)], by = {}, labs = [];
      Object.keys(ix[g]).forEach(function (l) { var arr = ix[g][l].filter(function (e) { return e.lvi <= max; }); if (arr.length) { by[l] = arr; labs.push(l); } });
      var mains = labs.filter(function (l) { return by[l].length >= 3; });
      if (!mains.length || labs.length < 2) continue;
      var lm = mains[Math.floor(Math.random() * mains.length)], three = pickDistinct(by[lm], 3, []);
      if (!three) continue;
      var others = labs.filter(function (l) { return l !== lm && !nearSound(l, lm); });
      if (!others.length) continue;
      var lo = others[Math.floor(Math.random() * others.length)], odd = pickDistinct(by[lo], 1, three);
      if (!odd) continue;
      var opts = shuffle(three.concat(odd)).map(function (x) { var mw = markedWord(x.m); return { plain: mw.plain, html: mw.html }; });
      return { sound: true, gen: true, g: g, lm: lm, lo: lo, opts: opts, a: opts.map(function (o) { return o.plain; }).indexOf(markedWord(odd[0].m).plain), picked: null };
    }
    return null;
  }
  /* One question: four words with the same number of syllables; three share the stressed syllable, one does not. */
  function genStress() {
    var ix = stressIndex(), max = ipaLv ? LV_IDS.indexOf(ipaLv) : 99, tries;
    for (tries = 0; tries < 80; tries++) {
      var r = Math.random(), n = r < 0.55 ? 2 : r < 0.9 ? 3 : 4, byP = {}, ps = [];
      Object.keys(ix).forEach(function (k) {
        var pr = k.split(':'); if (+pr[0] !== n) return;
        var arr = ix[k].filter(function (e) { return e.lvi <= max; });
        if (arr.length) { byP[pr[1]] = arr; ps.push(pr[1]); }
      });
      var targets = ps.filter(function (x) { return byP[x].length >= 3; });
      if (!targets.length || ps.length < 2) continue;
      var tp = targets[Math.floor(Math.random() * targets.length)], three = pickDistinct(byP[tp], 3, []);
      if (!three) continue;
      var others = ps.filter(function (x) { return x !== tp; }), op = others[Math.floor(Math.random() * others.length)], odd = pickDistinct(byP[op], 1, three);
      if (!odd) continue;
      var opts = shuffle(three.concat(odd));
      return { n: n, p: +tp, po: +op, opts: opts, a: opts.indexOf(odd[0]), picked: null };
    }
    return null;
  }
  function startIpaSession(mode) {
    ipaMsg = '';
    var qs = [], n = mode === 'sent' ? IP_SENT_N : IP_N, i, seen = {};
    function soundQ(q) {   /* the position of the odd word is shuffled every time, whatever order the CSV row has */
      var order = shuffle([0, 1, 2, 3]);
      return { sound: true, row: q.row, note: q.note, opts: order.map(function (i) { return markedWord(q.o[i]); }), a: order.indexOf(q.a), picked: null };
    }
    var hasGen = Object.keys(OEL.soundGroups || {}).length > 0, hasStress = Object.keys(OEL.stress || {}).length > 0, seenS = {};
    function genUnique(fn) {   /* a question whose words have not appeared yet in this test */
      var q = fn();
      if (!q) return null;
      var ws = q.opts.map(function (e) { return e.plain || e.w.w; });
      if (ws.some(function (w) { return seen[w] || seenS[w]; })) return null;
      ws.forEach(function (w) { seenS[w] = 1; });
      return q;
    }
    var soundPool = shuffle(ODDS), sp = 0;
    function nextSound() {   /* mostly generated questions, sometimes a hand-made one from odd-sounds.csv */
      if (hasGen && (sp >= soundPool.length || Math.random() < 0.75)) return genUnique(genSound);
      return sp < soundPool.length ? soundQ(soundPool[sp++]) : null;
    }
    function nextStress() {
      var q = hasStress ? genStress() : null;
      if (q && q.opts.some(function (e) { return seen[e.w.w] || seenS[e.w.w]; })) return null;
      if (q) q.opts.forEach(function (e) { seen[e.w.w] = 1; });
      return q;
    }
    if (mode === 'odd') {   /* one mixed test: each question is randomly "different stress" or "different sound" */
      for (i = 0; i < n * 8 && qs.length < n; i++) {
        var q = (Math.random() < 0.5 || !hasStress) ? nextSound() : nextStress();
        if (q) qs.push(q);
      }
    } else if (mode === 'stress') {
      for (i = 0; i < n * 8 && qs.length < n; i++) { var qt = nextStress(); if (qt) qs.push(qt); }
    } else if (mode === 'sound') {
      for (i = 0; i < n * 8 && qs.length < n; i++) { var qd = nextSound(); if (qd) qs.push(qd); }
    } else if (mode === 'word') {
      shuffle(ipaPool().filter(function (e) { return e.w.w.length >= 3; })).slice(0, n).forEach(function (e) { qs.push({ e: e, tries: 0, typed: '', msg: '', result: '' }); });
    } else {
      shuffle(QUOTES.filter(function (q) { return quoteTier(q.t) === ipaSd; })).slice(0, n).forEach(function (q) { qs.push({ q: q, tries: 0, typed: '', msg: '', result: '', diff: null }); });
    }
    if (!qs.length) { ipaMsg = mode === 'sent' ? 'Chưa có câu nào ở mức này.' : 'Không đủ từ để tạo bài ở cấp độ này. Hãy chọn cấp độ cao hơn.'; return; }
    ipaQ = { mode: mode, qs: qs, i: 0, score: 0, done: false, counted: false };
  }
  function ipNormWord(t) { return String(t).toLowerCase().replace(/[^a-z]/g, ''); }
  function ipNormSent(t) { return String(t).toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/(^|\s)'+|'+(?=\s|$)/g, '$1').replace(/\s+/g, ' ').trim(); }
  function ipFinish(q, result) {
    q.result = result; q.msg = '';
    if (result === 'right') ipaQ.score++;
  }
  function ipSubmit() {
    var q = ipaQ && ipaQ.qs[ipaQ.i];
    if (!q || q.result || ipIsPick()) return;
    var el = document.getElementById('ip-in'), typed = el ? el.value : q.typed;
    q.typed = typed;
    if (!ipNormSent(typed)) { q.msg = 'Hãy gõ câu trả lời của bạn.'; render(); return; }
    var ok;
    if (ipaQ.mode === 'word') ok = !!ipaIndex().homo[q.e.ph][ipNormWord(typed)];
    else { ok = ipNormSent(typed) === ipNormSent(q.q.t); if (!ok) { var ta = ipNormSent(typed).split(' '), tb = ipNormSent(q.q.t).split(' '); q.diff = ta.map(function (w, i) { return { w: w, ok: w === tb[i] }; }); } }
    if (ok) ipFinish(q, 'right');
    else { q.tries++; if (q.tries >= IP_TRIES) ipFinish(q, 'wrong'); else q.msg = 'Chưa đúng. Thử lại, bạn còn ' + (IP_TRIES - q.tries) + ' lần.'; }
    render();
  }
  var ORD_VI = ['nhất', 'hai', 'ba', 'tư'];
  /* Personal notes: one row of tickable dots per word (one dot per syllable), so the learner does not have to remember which syllable they heard as stressed. Not graded, kept only for the current question. */
  function noteDots(c, i) {
    var cur = c.notes && c.notes[i] != null ? c.notes[i] : -1, d = '', k;
    for (k = 0; k < c.n; k++) d += '<button type="button" class="nd" data-action="ip-note" data-i="' + i + '" data-s="' + k + '" aria-pressed="' + (k === cur) + '" aria-label="Ghi chú: từ ' + 'ABCD'.charAt(i) + ', nhấn âm tiết thứ ' + (k + 1) + '"></button>';
    return '<span class="notedots" role="group" aria-label="Ghi chú của bạn cho từ ' + 'ABCD'.charAt(i) + '">' + d + '</span>';
  }
  function viewIpaOdd(c) {
    var answered = c.picked !== null, letters = ['A', 'B', 'C', 'D'];
    var opts = c.opts.map(function (e, i) {
      var cls = 'opt' + (answered ? (i === c.a ? ' right' : i === c.picked ? ' wrong' : '') : '');
      return '<div class="optrow"><button type="button" class="' + cls + '" data-action="ip-pick" data-i="' + i + '"' + (answered ? ' disabled' : '') + '><i>' + letters[i] + '</i><span>' + esc(e.w.w) + '</span></button>' + noteDots(c, i) + '</div>';
    }).join('');
    var fb = '';
    if (answered) {
      var odd = c.opts[c.a], ok = c.picked === c.a;
      var rows = c.opts.map(function (e, i) {
        var pp = i === c.a ? c.po : c.p;
        return '<li class="ipa-row-w"><b' + (i === c.a ? ' class="oddw"' : '') + '>' + esc(e.w.w) + '</b>' + stressDots(c.n, pp) + '<span class="muted ipa-t">' + esc(e.ph) + '</span><span class="au">' + audioBtns(e.w) + '</span></li>';
      }).join('');
      fb = '<div class="feedback" aria-live="polite"><strong>' + (ok ? 'Chính xác.' : 'Chưa đúng.') + '</strong>' +
        '<span>Ba từ còn lại nhấn âm tiết thứ ' + ORD_VI[c.p] + '; “' + esc(odd.w.w) + '” nhấn âm tiết thứ ' + ORD_VI[c.po] + '. Chấm đặc là âm tiết được nhấn.</span><ul class="ipa-grid c4">' + rows + '</ul>' +
        '<div style="margin-top:0.5rem"><button class="btn" type="button" data-action="ip-next">Tiếp</button></div></div>';
    }
    return '<div class="quiz">' + sessionTop('Chọn từ khác trọng âm', ipaQ.i, ipaQ.qs.length, 'ip-exit') +
      '<p style="font-size:1.15rem;margin:0">Chọn từ có <b>trọng âm</b> rơi vào âm tiết khác với ba từ còn lại.</p><p class="muted" style="margin:0">Cả bốn từ đều có ' + c.n + ' âm tiết.</p>' +
      (ADMIN ? '<p class="adm-note">[admin] Ba từ thuộc nhóm ' + c.n + ':' + c.p + ', từ khác thuộc nhóm ' + c.n + ':' + c.po + ' (content/stress.js, dạng số âm tiết:vị trí âm tiết nhấn tính từ 0)</p>' : '') +
      '<p class="note-head" aria-hidden="true">Ghi chú của bạn</p><div class="opts">' + opts + '</div>' + fb + '</div>';
  }
  function viewIpaSound(c) {
    var answered = c.picked !== null, letters = ['A', 'B', 'C', 'D'];
    var opts = c.opts.map(function (e, i) {
      var cls = 'opt' + (answered ? (i === c.a ? ' right' : i === c.picked ? ' wrong' : '') : '');
      return '<button type="button" class="' + cls + '" data-action="ip-pick" data-i="' + i + '"' + (answered ? ' disabled' : '') + '><i>' + letters[i] + '</i><span>' + e.html + '</span></button>';
    }).join('');
    var fb = '';
    if (answered) {
      var ok = c.picked === c.a, odd = c.opts[c.a];
      var rows = c.opts.map(function (e, i) {
        var w = wordEntry(e.plain);
        return '<li class="ipa-row-w"><b' + (i === c.a ? ' class="oddw"' : '') + '>' + e.html + '</b><span class="muted ipa-t">' + (w ? esc(w.ph) : '') + '</span><span class="au">' +
          (w ? audioBtns(w) : (CAN_SPEAK ? '<button type="button" class="btn ghost small" data-action="speak" data-w="' + esc(e.plain) + '">Nghe</button>' : '')) + '</span></li>';
      }).join('');
      fb = '<div class="feedback" aria-live="polite"><strong>' + (ok ? 'Chính xác.' : 'Chưa đúng.') + '</strong><span>' + (c.gen ? 'Ba từ còn lại đọc “' + esc(c.g) + '” là ' + soundLink(c.lm) + '; từ khác biệt là “' + odd.html + '”, đọc là ' + soundLink(c.lo) + '. Bấm vào âm để xem cách phát âm.' : 'Từ khác biệt là “' + odd.html + '”: phần gạch chân của nó phát âm khác với ba từ còn lại.') + '</span>' +
        '<ul class="ipa-grid c3">' + rows + '</ul><div style="margin-top:0.5rem"><button class="btn" type="button" data-action="ip-next">Tiếp</button></div></div>';
    }
    return '<div class="quiz">' + sessionTop('Chọn từ khác âm', ipaQ.i, ipaQ.qs.length, 'ip-exit') +
      '<p style="font-size:1.15rem;margin:0">Chọn từ có phần <u>gạch chân</u> phát âm khác với ba từ còn lại.</p>' +
      (ADMIN ? '<p class="adm-note">[admin] ' + (c.gen ? 'Nhóm “' + esc(c.g) + '”: ba từ /' + esc(c.lm) + '/, từ khác /' + esc(c.lo) + '/ (content/sound-groups.js)' : 'Dòng ' + c.row + ' trong content/odd-sounds.csv' + (c.note ? ' · ' + esc(c.note) : '')) + '</p>' : '') + '<div class="opts">' + opts + '</div>' + fb + soundPopup() + '</div>';
  }
  function viewIpaType(q) {
    var word = ipaQ.mode === 'word', top = sessionTop(word ? 'Phiên âm sang từ' : 'Phiên âm sang câu', ipaQ.i, ipaQ.qs.length, 'ip-exit');
    var ipa = word ? '/' + esc(q.e.ph.replace(/^\/|\/$/g, '')) + '/' : '/' + esc(q.q.ipa) + '/';
    var prompt = '<div class="vcard" style="min-height:0;padding:1.5rem 1.25rem"><p class="muted" style="margin:0">' + (word ? 'Gõ từ tiếng Anh có phiên âm này' : 'Gõ câu tiếng Anh có phiên âm này (' + quoteWords(q.q.t) + ' từ)') + '</p><p class="ipa-prompt' + (word ? '' : ' sent') + '">' + ipa + '</p></div>';
    var body;
    if (q.result) {
      var ok = q.result === 'right', ans = word ? q.e.w.w : q.q.t;
      var diff = !ok && q.diff ? '<p style="margin:0">Bạn gõ: ' + q.diff.map(function (d) { return '<span class="' + (d.ok ? 'yes-way' : 'no-way') + '">' + esc(d.w) + '</span>'; }).join(' ') + '</p>' : '';
      var more = word ? '<span>' + esc(q.e.w.w) + ' ' + posTag(q.e.w) + '— ' + esc(viText(q.e.w)) + '</span><div class="row">' + audioBtns(q.e.w) + '</div>'
        : (q.q.vi ? '<p class="trans"><span class="lab">Nghĩa tiếng Việt</span>' + esc(q.q.vi) + '</p>' : '') + '<span class="muted">' + esc(q.q.a) + '</span>' +
          (CAN_SPEAK ? '<div class="row"><button type="button" class="btn ghost small" data-action="speak" data-w="' + esc(q.q.t) + '">Nghe cả câu</button></div>' : '');
      body = '<div class="feedback" aria-live="polite"><strong>' + (ok ? 'Chính xác.' : 'Chưa đúng.') + '</strong><span>Đáp án: <b>' + esc(ans) + '</b></span>' + diff + more +
        '<div style="margin-top:0.5rem"><button class="btn" type="button" data-action="ip-next">Tiếp</button></div></div>';
    } else {
      body = '<form id="ipform" class="stack" style="gap:0.7rem" novalidate><label for="ip-in">' + (word ? 'Từ tiếng Anh' : 'Câu tiếng Anh') + '</label>' +
        (word ? '<input id="ip-in" type="text" value="' + esc(q.typed) + '" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">'
          : '<textarea id="ip-in" rows="3" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' + esc(q.typed) + '</textarea>') +
        (q.msg ? '<p role="status" style="margin:0;color:var(--bad)">' + esc(q.msg) + '</p>' : '') +
        '<div class="row"><button class="btn" type="submit">Kiểm tra</button><button class="btn ghost" type="button" data-action="ip-giveup">Mình chưa biết</button></div></form>';
    }
    var admNote = ADMIN ? '<p class="adm-note">[admin] ' + (word ? 'Từ vựng ID ' + q.e.w.o : 'Câu số ' + q.q.n + ' trong content/quotes.js') + '</p>' : '';
    return '<div class="quiz">' + top + admNote + prompt + body + '</div>';
  }
  function viewIpaDone() {
    var n = ipaQ.qs.length;
    return '<div class="quiz"><p class="call">Luyện phát âm</p><h1 style="font-size:2rem">Xong bài</h1>' +
      '<div class="stats"><div class="stat"><b>' + ipaQ.score + '/' + n + '</b><span>câu đúng</span></div><div class="stat"><b>' + s10(ipaQ.score, n) + '/10</b><span>điểm</span></div></div>' +
      '<div class="row"><button class="btn" type="button" data-action="ip-start" data-m="' + ipaQ.mode + '">Làm bài mới</button><button class="btn ghost" type="button" data-action="ip-exit">Về mục luyện tập</button></div></div>';
  }
  function viewIpaSession() {
    if (ipaQ.done) return viewIpaDone();
    var q = ipaQ.qs[ipaQ.i];
    return ipIsPick() ? (q.sound ? viewIpaSound(q) : viewIpaOdd(q)) : viewIpaType(q);
  }
  function viewIpaPractice() {
    var lv = [['', 'Tất cả']].concat(VLEVELS.map(function (l) { return [l, 'Đến ' + l]; })).map(function (c) { return chipBtn('ip-lv', c[0], c[1], ipaLv === c[0]); }).join('');
    var tiers = SENT_TIERS.map(function (t) { return chipBtn('ip-sd', t[0], t[1] + ' (' + t[2] + ')', ipaSd === t[0]); }).join('');
    function card(title, call, text, extra, m, label) {
      return '<div class="panel stack" style="gap:0.9rem"><div><p class="call">' + call + '</p><h2>' + title + '</h2></div><p class="muted">' + text + '</p>' + extra +
        '<div class="row"><button class="btn" type="button" data-action="ip-start" data-m="' + m + '">' + label + '</button></div></div>';
    }
    return '<div class="stack" style="gap:1.25rem">' + (ipaMsg ? '<p class="panel" role="status">' + esc(ipaMsg) + '</p>' : '') +
      '<div><p class="lab" style="margin-bottom:0.4rem">Cấp độ từ (cho Bài 1 và Bài 2)</p><div class="chips" role="group" aria-label="Cấp độ từ">' + lv + '</div></div>' +
      '<div class="panel stack" style="gap:0.9rem"><div><p class="call">Bài 1</p><h2>Chọn từ khác</h2></div>' +
        '<p class="muted">Bốn từ, ba từ giống nhau và một từ khác. Mỗi bài trộn hai kiểu câu: “khác trọng âm” (cả bốn từ cùng số âm tiết, ba từ nhấn cùng một âm tiết) và “khác âm” (chọn từ có phần gạch chân phát âm khác với ba từ còn lại).</p>' +
        '<div class="row"><button class="btn" type="button" data-action="ip-start" data-m="odd">Trộn cả hai (' + IP_N + ' câu)</button><button class="btn ghost" type="button" data-action="ip-start" data-m="stress">Chỉ khác trọng âm</button><button class="btn ghost" type="button" data-action="ip-start" data-m="sound">Chỉ khác âm</button></div></div>' +
      card('Phiên âm sang từ', 'Bài 2', 'Bạn thấy phiên âm của một từ và gõ từ tiếng Anh đó. Các từ đồng âm đều được chấp nhận.', '', 'word', 'Bắt đầu (' + IP_N + ' từ)') +
      card('Phiên âm sang câu', 'Bài 3', 'Bạn thấy phiên âm của một câu trích dẫn nổi tiếng và gõ cả câu. Đáp án có kèm nghĩa tiếng Việt.',
        '<div><p class="lab" style="margin-bottom:0.4rem">Độ dài câu</p><div class="chips" role="group" aria-label="Độ dài câu">' + tiers + '</div></div>', 'sent', 'Bắt đầu (' + IP_SENT_N + ' câu)') + '</div>';
  }
  function viewIpa() {
    if (!IPA.length) return head('Phát âm', 'Bảng âm IPA tiếng Anh.') + '<div class="empty">Chưa có dữ liệu âm nào.</div>';
    if (ipaQ) return viewIpaSession();
    var subs = '<div class="subtabs" role="group" aria-label="Các phần của mục phát âm">' + [['chart', 'Bảng âm'], ['practice', 'Luyện tập']].map(function (x) {
      return '<button type="button" class="subtab" data-action="ipa-sub" data-v="' + x[0] + '" aria-pressed="' + (ipaSub === x[0]) + '">' + x[1] + '</button>';
    }).join('') + '</div>';
    if (ipaSub === 'practice') return head('Phát âm', 'Luyện nghe phiên âm: chọn từ khác âm, đọc phiên âm rồi gõ lại từ hoặc cả câu.') + subs + viewIpaPractice();
    var by = {}, used = {};
    IPA.forEach(function (s) { by[s.id] = s; });
    function t(id) { if (!id) return '<span class="ipa-gap"></span>'; if (!by[id]) return ''; used[id] = 1; return ipaTile(by[id]); }
    var vow = IPA_CHART.vowels.map(function (r) { return '<div class="ipa-row">' + r.map(t).join('') + '</div>'; }).join('');
    var dip = IPA_CHART.dip.map(function (r) { return '<div class="ipa-row">' + r.map(t).join('') + '</div>'; }).join('');
    var cons = IPA_CHART.cons.map(function (r) { return '<div class="ipa-row">' + r.map(function (pr) { return '<div class="ipa-pair">' + pr.map(t).join('') + '</div>'; }).join('') + '</div>'; }).join('');
    var rest = IPA.filter(function (s) { return !used[s.id]; });
    var restHtml = rest.length ? '<section><h3 style="margin-bottom:0.6rem">Âm khác</h3><div class="ipa-row">' + rest.map(ipaTile).join('') + '</div></section>' : '';
    var legend = '<div class="ipa-legend"><span class="sho">Ngắn</span><span class="lon">Dài</span><span class="dip">Nguyên âm đôi</span><span class="unv">Vô thanh</span><span class="vcd">Hữu thanh</span></div>';
    return head('Phát âm', 'Bảng âm IPA tiếng Anh Mỹ. Bấm vào một âm để nghe, xem ví dụ, mẹo phát âm và các cặp từ dễ nhầm. Các phụ âm vô thanh và hữu thanh đứng cạnh nhau thành cặp (p-b, t-d, k-g...).') + subs +
      '<div class="stack" style="gap:1.25rem">' + ipaDetail() + legend +
      '<section><h3 style="margin-bottom:0.6rem">Nguyên âm</h3><div class="ipa-vwrap"><div class="ipa-chart">' + vow + '</div><div class="ipa-chart">' + dip + '</div></div></section>' +
      '<section><h3 style="margin-bottom:0.6rem">Phụ âm</h3><div class="ipa-chart">' + cons + '</div></section>' + restHtml + ipaQuickHtml() +
      '<p class="muted" style="font-size:0.9rem">Phần giải thích đang được rà soát. Âm /ɚ/ trong ví dụ là /ɝ/ ở âm tiết không nhấn.</p></div>';
  }

  /* ---------- Nhật ký ---------- */
  function entryHtml(e) {
    var words = (e.words || []).map(function (w) { return '<span class="word">' + esc(w) + '</span>'; }).join('');
    var del = delId === e.id
      ? '<span class="row"><span class="muted">Xóa mục này?</span><button class="btn danger small" type="button" data-action="del-yes" data-id="' + esc(e.id) + '">Xóa</button><button class="btn ghost small" type="button" data-action="del-no">Giữ lại</button></span>'
      : '<button class="btn ghost small" type="button" data-action="del" data-id="' + esc(e.id) + '">Xóa</button>';
    return '<article class="panel entry"><header><h3>' + esc(niceDate(e.date)) + '</h3><span class="muted" style="font-size:0.9rem">' + (+e.minutes || 0) + ' phút / tự tin ' + (+e.conf || 3) + '/5</span></header>' +
      (e.topic ? '<p><span class="lab">Đã học:</span> ' + esc(e.topic) + '</p>' : '') +
      (words ? '<div class="words" aria-label="Từ mới">' + words + '</div>' : '') +
      (e.mistake ? '<p><span class="lab">Cần nhớ:</span> ' + esc(e.mistake) + '</p>' : '') +
      '<div>' + del + '</div></article>';
  }
  function viewJournal() {
    var sorted = journal.slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : (a.id < b.id ? 1 : -1); });
    var entries = sorted.length
      ? sorted.map(entryHtml).join('')
      : '<article class="panel entry example"><header><h3>Mục ví dụ</h3><span class="tag">Ví dụ, không được lưu</span></header><p><span class="lab">Đã học:</span> Thì hiện tại hoàn thành, 20 phút nghe BBC Learning English.</p><div class="words"><span class="word">rehearse</span><span class="word">on schedule</span><span class="word">figure out</span></div><p><span class="lab">Cần nhớ:</span> Nói “I saw him yesterday”, không nói “I have seen him yesterday”.</p></article>';
    var bank = wordBank();
    return head('Nhật ký học tập', 'Trang tự ghi lại thời gian học, chuỗi ngày, từ vựng và ngữ pháp của bạn. Dữ liệu chỉ được lưu trong trình duyệt này.') +
      '<div class="stack" style="gap:1.5rem">' + levelPanel() + progressStats() + weekChart() + achievementsHtml() + xpRules() +
      '<details class="panel jbook"' + (jOpen ? ' open' : '') + '><summary><h2>Sổ tay: tự ghi chú</h2></summary><div class="stack" style="gap:1.25rem;margin-top:1rem">' +
      '<form id="jform" class="jform" novalidate>' +
      '<div><label for="j-date">Ngày</label><input id="j-date" type="date" value="' + today() + '"></div>' +
      '<div><label for="j-min">Số phút đã học</label><input id="j-min" type="number" min="0" max="600" step="5" value="20"></div>' +
      '<div class="full"><label for="j-topic">Hôm nay bạn đã học gì?</label><input id="j-topic" type="text" placeholder="Ví dụ: quá khứ đơn, một tập podcast, 10 thẻ từ vựng"></div>' +
      '<div class="full"><label for="j-words">Từ mới (cách nhau bằng dấu phẩy)</label><input id="j-words" type="text" placeholder="Ví dụ: reluctant, take for granted, break the ice"></div>' +
      '<div class="full"><label for="j-mistake">Một lỗi cần nhớ</label><textarea id="j-mistake" placeholder="Viết cả cách sai và cách đúng"></textarea></div>' +
      '<div class="full"><label for="j-conf">Mức tự tin hôm nay: <output id="j-conf-out">3</output>/5</label><input id="j-conf" type="range" min="1" max="5" step="1" value="3"></div>' +
      '<div class="full row"><button class="btn" type="submit">Lưu mục nhật ký</button><span id="j-msg" class="muted" role="status"></span></div></form>' +
      (bank.length ? '<section><h3 style="margin-bottom:0.8rem">Kho từ vựng</h3><div class="words">' + bank.map(function (w) { return '<span class="word">' + esc(w) + '</span>'; }).join('') + '</div></section>' : '') +
      '<section><div class="row" style="justify-content:space-between;margin-bottom:0.8rem"><h3>Các mục ghi chú</h3>' + (journal.length ? '<button class="btn ghost small" type="button" data-action="export">Sao chép tất cả dạng văn bản</button>' : '') + '</div>' +
      (exportText !== null ? '<div style="margin-bottom:1rem"><label for="j-export">Chọn tất cả và sao chép đoạn văn bản này</label><textarea id="j-export" class="export" readonly>' + esc(exportText) + '</textarea></div>' : '') +
      '<div class="stack" style="gap:0.9rem" id="j-list">' + entries + '</div></section></div></details></div>';
  }
  /* --- Các khối của trang nhật ký --- */
  function levelPanel() {
    var st = pStats(), i = st.level - 1, cur = PLEVELS[i], next = PLEVELS[i + 1];
    var pct = next ? Math.round((st.xp - cur.xp) / (next.xp - cur.xp) * 100) : 100;
    var icon = cur.img ? '<img src="' + esc(cur.img) + '" alt="">' : '<span>' + st.level + '</span>';
    return '<section class="panel lvl"><div class="lvl-icon" aria-hidden="true">' + icon + '</div><div class="stack" style="gap:0.5rem;min-width:0">' +
      '<div><p class="call">Cấp ' + st.level + '</p><h2>' + esc(cur.name) + '</h2></div>' +
      '<p class="muted">' + st.xp + ' XP' + (next ? ' · còn ' + (next.xp - st.xp) + ' XP để lên cấp ' + (st.level + 1) + ' (' + esc(next.name) + ')' : ' · bạn đã đạt cấp cao nhất') + '</p>' +
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + pct + '%"></i></div></div></section>';
  }
  function progressStats() {
    var st = pStats(), td = st.today;
    return '<section class="grid wide"><div class="panel"><p class="call">Hôm nay</p><div class="stats" style="margin-top:0.6rem">' +
      '<div class="stat"><b>' + Math.floor(td.s / 60) + '</b><span>phút</span></div><div class="stat"><b>' + td.l + '</b><span>từ đánh dấu</span></div>' +
      '<div class="stat"><b>' + td.r + '</b><span>lần nhớ từ</span></div><div class="stat"><b>' + td.g + '</b><span>quy tắc ngữ pháp</span></div></div></div>' +
      '<div class="panel"><p class="call">Tổng cộng</p><div class="stats" style="margin-top:0.6rem">' +
      '<div class="stat"><b>' + st.streak + '</b><span>ngày liên tiếp</span></div><div class="stat"><b>' + st.minutes + '</b><span>phút</span></div>' +
      '<div class="stat"><b>' + st.days + '</b><span>ngày đã học</span></div><div class="stat"><b>' + st.learned + '</b><span>từ đã đánh dấu</span></div>' +
      '<div class="stat"><b>' + st.grammar + '/' + nGrammar() + '</b><span>quy tắc ngữ pháp</span></div><div class="stat"><b>' + st.tests + '</b><span>bài kiểm tra</span></div></div></div></section>';
  }
  function weekChart() {
    var cols = [], max = 1, d = new Date(), i;
    d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - 6);
    for (i = 0; i < 7; i++) {
      var k = fmt(d), rec = activity.days[k], m = rec ? Math.floor(rec.s / 60) : 0, lab = '';
      try { lab = d.toLocaleDateString('vi-VN', { weekday: 'short' }); } catch (e) { lab = k.slice(5); }
      cols.push({ m: m, lab: lab, on: dayActive(rec) });
      if (m > max) max = m;
      d.setDate(d.getDate() + 1);
    }
    return '<section class="panel"><p class="call">7 ngày gần nhất (phút học)</p><div class="week" role="img" aria-label="Biểu đồ số phút học mỗi ngày trong 7 ngày gần nhất">' +
      cols.map(function (c) {
        return '<div class="wcol"><span class="wn">' + c.m + '</span><i class="' + (c.on ? 'on' : '') + '" style="height:' + Math.max(4, Math.round(c.m / max * 100)) + '%"></i><span class="wl">' + esc(c.lab) + '</span></div>';
      }).join('') + '</div></section>';
  }
  function achievementsHtml() {
    if (!ACHS.length) return '';
    var st = pStats(), got = 0;
    var cards = ACHS.map(function (x) {
      var when = activity.ach[x.id], val = Math.min(st[x.stat] || 0, x.goal);
      if (when) got++;
      return '<div class="ach' + (when ? ' got' : '') + '"><b>' + esc(x.name) + '</b><span>' + esc(x.desc) + '</span>' +
        (when ? '<em>Mở khóa ' + esc(niceShort(when)) + '</em>' : '<div class="bar"><i style="width:' + Math.round(val / x.goal * 100) + '%"></i></div><em>' + val + ' / ' + x.goal + '</em>') + '</div>';
    }).join('');
    return '<section><h2 style="margin-bottom:0.8rem">Huy hiệu (' + got + '/' + ACHS.length + ')</h2><div class="achs">' + cards + '</div></section>';
  }
  function xpRules() {
    return '<p class="muted" style="font-size:0.95rem">Cách tính XP: 1 phút học = ' + XPR.minute + ' XP, 1 từ đánh dấu cần học = ' + XPR.learned + ' XP, 1 lần nhớ từ khi ôn = ' + XPR.reviewed +
      ' XP, 1 quy tắc ngữ pháp mở lần đầu = ' + XPR.grammar + ' XP, 1 bài kiểm tra hoàn thành = ' + XPR.test + ' XP. Thời gian chỉ tính khi bạn đang dùng trang.</p>';
  }
  function buildExport() {
    return journal.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; }).map(function (e) {
      return e.date + ' / ' + (+e.minutes || 0) + ' phút / tự tin ' + (+e.conf || 3) + '/5\n' +
        (e.topic ? 'Đã học: ' + e.topic + '\n' : '') +
        ((e.words || []).length ? 'Từ mới: ' + e.words.join(', ') + '\n' : '') +
        (e.mistake ? 'Cần nhớ: ' + e.mistake + '\n' : '');
    }).join('\n');
  }
  function saveEntry() {
    var date = document.getElementById('j-date').value || today();
    var topic = document.getElementById('j-topic').value.trim();
    var words = document.getElementById('j-words').value.split(',').map(function (w) { return w.trim(); }).filter(Boolean);
    var mistake = document.getElementById('j-mistake').value.trim();
    var minutes = Math.max(0, Math.min(600, parseInt(document.getElementById('j-min').value, 10) || 0));
    var conf = parseInt(document.getElementById('j-conf').value, 10) || 3;
    var msg = document.getElementById('j-msg');
    if (!topic && !words.length && !mistake) { msg.textContent = 'Hãy nhập điều bạn đã học, một từ mới hoặc một lỗi trước khi lưu.'; return; }
    journal.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), date: date, minutes: minutes, topic: topic, words: words, mistake: mistake, conf: conf });
    LS.set('oel.journal', journal);
    exportText = null;
    render();
    var m = document.getElementById('j-msg'); if (m) m.textContent = 'Đã lưu.';
  }

  /* ---------- Điều hướng ---------- */
  function current() {
    var h = location.hash.replace('#', '');
    if (h === 'admin') return ADMIN ? 'admin' : 'home';
    return ROUTES.indexOf(h) > -1 ? h : 'home';
  }
  /* Content groups a page needs before it can be drawn (see GROUPS). */
  function needs(r) {
    var all = ['grammar', 'bank', 'vocab', 'ipa'];
    if ((r === 'home' || r === 'journal') && !MAN.grammar) return all;   /* no manifest: fall back to real counts */
    if (r === 'grammar') return ADMIN ? ['grammar', 'bank'] : ['grammar'];
    if (r === 'tests') return ['bank', 'grammar'];   /* each question links to a grammar rule */
    if (r === 'vocab') return ['vocab'];
    if (r === 'ipa') return ['ipa', 'vocab'];   /* example-word audio looks up file names in the word list */
    if (r === 'admin') return ['grammar', 'bank', 'vocab', 'oddsounds', 'quotes', 'stress'];
    return [];
  }
  function markTab(r) {
    var links = document.querySelectorAll('#tabs a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-r') === r) links[i].setAttribute('aria-current', 'page');
      else links[i].removeAttribute('aria-current');
    }
  }
  function draw(r) {
    var html = r === 'home' ? viewHome() : r === 'grammar' ? viewGrammar() : r === 'vocab' ? viewVocab() : r === 'ipa' ? viewIpa() : r === 'tests' ? viewTests() :
      r === 'resources' ? viewResources() : r === 'tips' ? viewTips() : r === 'admin' ? viewAdmin() : viewJournal();
    view.innerHTML = html;
    if (r === 'grammar') renderGList();
    if (r === 'vocab' && vSub === 'decks' && !vBrowse && !vReview) renderVList();
    if (r === 'admin') { renderAdmVList(); renderAdmSList(); renderAdmIList(); eloCalcOut(); }
    if (r === 'ipa' && ipaQ && !ipaQ.done && !ipIsPick()) {
      var iq = ipaQ.qs[ipaQ.i], ifb = iq.result ? view.querySelector('[data-action="ip-next"]') : document.getElementById('ip-in');
      if (ifb) ifb.focus();
    }
    if (r === 'vocab' && vType && !vType.done && vType.cur) {   /* keep the typing box ready */
      var fb = vType.cur.result ? view.querySelector('[data-action="tq-next"]') : document.getElementById('tq-in');
      if (fb) fb.focus();
    }
  }
  var drawSeq = 0;
  function render() {
    var r = current(), seq = ++drawSeq;
    markTab(r);
    var miss = needs(r).filter(function (n) { return !loaded[n]; });
    if (!miss.length) {
      draw(r);
      /* Home shows the number of words due for review, which needs the word list: fetch it in the background and redraw. */
      if (r === 'home' && !loaded.vocab && !pending.vocab && Object.keys(vstore).length) {
        ensure(['vocab']).then(function () { if (current() === 'home') render(); }, function () {});
      }
      return;
    }
    view.innerHTML = '<p class="muted" role="status">Đang tải nội dung…</p>';
    ensure(miss).then(function () {
      if (seq === drawSeq) draw(r);   /* ignore the result if the person has moved to another page */
    }, function () {
      if (seq === drawSeq) view.innerHTML = '<div class="empty" role="alert"><p>Không tải được nội dung. Hãy kiểm tra kết nối mạng rồi thử lại.</p>' +
        '<p><button type="button" class="btn" data-action="retry">Thử lại</button></p></div>';
    });
  }

  /* Giữ tiêu điểm bàn phím trên nút vừa bấm sau khi vẽ lại trang. */
  function refocus(action, v) {
    var els = view.querySelectorAll('[data-action="' + action + '"]');
    for (var i = 0; i < els.length; i++) {
      if (els[i].getAttribute('data-v') === v) { els[i].focus(); return; }
    }
  }

  /* ---------- Sự kiện ---------- */
  /* Ghi nhận quy tắc ngữ pháp được mở, và nhớ trạng thái đóng/mở của sổ tay. */
  view.addEventListener('toggle', function (ev) {
    var d = ev.target;
    if (!d || d.tagName !== 'DETAILS') return;
    if (d.classList.contains('jbook')) jOpen = d.open;
    else if (d.classList.contains('rule') && d.open) { var h = d.querySelector('h3'); if (h) Act.grammar(h.textContent); }
  }, true);
  view.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-action]');
    if (!t) return;
    var a = t.getAttribute('data-action');
    if (/^(v|b|r|m|card)-/.test(a)) vMsg = '';
    if (a === 'retry') { render(); return; }
    if (a.indexOf('adm-') === 0) { if (ADMIN) adminAction(a, t); return; }
    if (a === 'level') {
      quiz = null;
      gLevel = t.getAttribute('data-level');
      if (current() !== 'grammar') { location.hash = '#grammar'; } else { render(); }
    } else if (a === 'start') {
      startSet(t.getAttribute('data-set')); render(); window.scrollTo(0, 0);
    } else if (a === 'start-placement') {
      startPlacement(parseInt(t.getAttribute('data-n'), 10) === 25 ? 25 : 10); render(); window.scrollTo(0, 0);
    } else if (a === 'start-custom') {
      startCustom(); render(); window.scrollTo(0, 0);
    } else if (a === 'c-level' || a === 'c-topic') {
      var arr = a === 'c-level' ? cLevels : cTopics, v = t.getAttribute('data-v'), p = arr.indexOf(v);
      if (p > -1) arr.splice(p, 1); else arr.push(v);
      render();
      refocus(a, v);
    } else if (a === 'ipa-sub') {
      ipaSub = t.getAttribute('data-v'); render(); refocus(a, ipaSub);
    } else if (a === 'ip-sd') {
      ipaSd = t.getAttribute('data-v'); render(); refocus(a, ipaSd);
    } else if (a === 'ip-lv') {
      ipaLv = t.getAttribute('data-v'); render(); refocus(a, ipaLv);
    } else if (a === 'ip-snd') {
      ipaPop = t.getAttribute('data-l') || ''; render();
      var sc = document.getElementById('snd-close'); if (sc) sc.focus();
    } else if (a === 'ip-snd-close') {
      var was = ipaPop; ipaPop = ''; render();
      var back = Array.prototype.filter.call(view.querySelectorAll('[data-action="ip-snd"]'), function (b) { return b.getAttribute('data-l') === was; })[0]; if (back) back.focus();
    } else if (a === 'ip-start') {
      ipaPop = '';
      var im = t.getAttribute('data-m'), grp = im === 'odd' ? ['stress', 'oddsounds', 'sounds'] : im === 'stress' ? ['stress'] : im === 'sent' ? ['quotes'] : im === 'sound' ? ['oddsounds', 'sounds'] : [];
      if (grp.some(function (g) { return !loaded[g]; })) {
        ensure(grp).then(function () { ipaQ = null; startIpaSession(im); render(); window.scrollTo(0, 0); }, function () { ipaMsg = 'Không tải được dữ liệu bài tập. Hãy kiểm tra kết nối mạng rồi thử lại.'; render(); });
        return;
      }
      ipaQ = null; startIpaSession(im); render(); window.scrollTo(0, 0);
    } else if (a === 'ip-exit') {
      ipaPop = ''; ipaQ = null; ipaSub = 'practice'; render(); window.scrollTo(0, 0);
    } else if (a === 'ip-note') {
      var nq0 = ipaQ && ipaQ.qs[ipaQ.i];
      if (!nq0 || !nq0.opts || nq0.sound) return;
      var wi = parseInt(t.getAttribute('data-i'), 10), si = parseInt(t.getAttribute('data-s'), 10);
      nq0.notes = nq0.notes || [null, null, null, null];
      nq0.notes[wi] = nq0.notes[wi] === si ? null : si;   /* tap again to clear */
      Array.prototype.forEach.call(t.parentNode.children, function (b, k) { b.setAttribute('aria-pressed', String(nq0.notes[wi] === k)); });
    } else if (a === 'ip-pick') {
      var oq = ipaQ && ipaQ.qs[ipaQ.i];
      if (!oq || !ipIsPick() || oq.picked !== null) return;
      oq.picked = parseInt(t.getAttribute('data-i'), 10); if (oq.picked === oq.a) ipaQ.score++;
      render(); var inb = view.querySelector('[data-action="ip-next"]'); if (inb) inb.focus();
    } else if (a === 'ip-giveup') {
      var gq = ipaQ && ipaQ.qs[ipaQ.i];
      if (gq && !gq.result && !ipIsPick()) { gq.typed = (document.getElementById('ip-in') || {}).value || ''; ipFinish(gq, 'wrong'); render(); }
    } else if (a === 'ip-next') {
      if (!ipaQ || ipaQ.done) return;
      var nq = ipaQ.qs[ipaQ.i];
      if (ipIsPick() ? nq.picked === null : !nq.result) return;
      ipaPop = ''; ipaQ.i++;
      if (ipaQ.i >= ipaQ.qs.length) { ipaQ.done = true; if (!ipaQ.counted) { ipaQ.counted = true; Act.test(); } }
      render(); window.scrollTo(0, 0);
    } else if (a === 'ipa-filter') {
      ipaFilter = t.getAttribute('data-v'); render(); refocus(a, ipaFilter);
    } else if (a === 'ipa-ref') {
      ipaRef = t.getAttribute('data-v'); render(); refocus(a, ipaRef);
    } else if (a === 'ipa-pick') {
      ipaSel = t.getAttribute('data-v'); render(); refocus(a, ipaSel);
      var dp = document.getElementById('ipa-detail'); if (dp && dp.scrollIntoView) dp.scrollIntoView({ block: 'start' });
    } else if (a === 'ipa-play') {
      playFile(t.getAttribute('data-src'), t.getAttribute('data-w'));
    } else if (a === 'q-show-right') {
      if (quiz) { quiz.showRight = !quiz.showRight; render(); }
    } else if (a === 'q-rule') {
      var qi = parseInt(t.getAttribute('data-v'), 10), qsy = window.scrollY;
      if (quiz && quiz.open) { quiz.open[qi] = !quiz.open[qi]; render(); window.scrollTo(0, qsy); refocus(a, String(qi)); }
    } else if (a === 'g-topic') {
      gTopic = t.getAttribute('data-v'); render(); refocus(a, gTopic);
    } else if (a === 'c-len') {
      cLen = parseInt(t.getAttribute('data-v'), 10) === 25 ? 25 : 10;
      render();
      refocus(a, String(cLen));
    } else if (a === 'quit') {
      quiz = null; render();
    } else if (a === 'pick') {
      if (!quiz || quiz.picked !== null) return;
      pickAnswer(parseInt(t.getAttribute('data-i'), 10));
      render();
      var nb = view.querySelector('[data-action="next"]'); if (nb) nb.focus();
    } else if (a === 'next') {
      if (!quiz) return;
      nextQuestion();
      render(); window.scrollTo(0, 0);
    } else if (a === 'auto-random' || a === 'auto-c1') {
      if (ADMIN && quiz && !quiz.done) { autoRun(a === 'auto-random' ? 'random' : 'c1'); render(); window.scrollTo(0, 0); }
    } else if (a === 'v-sub') {
      vSub = t.getAttribute('data-v'); render(); refocus(a, vSub);
    } else if (a === 'v-level') {
      vLevel = t.getAttribute('data-v'); vLimit = 40; render(); refocus(a, vLevel);
    } else if (a === 'v-more') {
      vLimit += 40; renderVList();
    } else if (a === 'v-toggle') {
      var wid = t.getAttribute('data-id'), sy = window.scrollY;
      if (vstore[wid]) delete vstore[wid]; else { vstore[wid] = { s: 0, d: today(), k: 0 }; Act.learn(wid); }
      saveV(); render(); window.scrollTo(0, sy); refocusKey(wid);
    } else if (a === 'v-batch') {
      var bpool = shuffle(vFiltered().filter(function (w) { return !vstore[w.id]; })).slice(0, 20);
      bpool.forEach(function (w) { vstore[w.id] = { s: 0, d: today(), k: 0 }; Act.learn(w.id); });
      saveV();
      vMsg = bpool.length ? 'Đã thêm ' + bpool.length + ' từ vào danh sách học. Các từ này sẽ xuất hiện ở mục “Ôn hôm nay”.' : 'Không còn từ chưa đánh dấu trong bộ lọc này.';
      render();
    } else if (a === 'v-browse') {
      vBrowse = null; startBrowse(); render(); window.scrollTo(0, 0);
    } else if (a === 'play') {
      playVocabAudio(t.getAttribute('data-k'), t.getAttribute('data-f'), t.getAttribute('data-w'));
    } else if (a === 'speak') {
      speak(t.getAttribute('data-w'));
    } else if (a === 'card-show') {
      if (vBrowse && !vBrowse.done) vBrowse.shown = true; else if (vReview && !vReview.done) vReview.shown = true;
      render();
      var yb = view.querySelector('[data-action="r-yes"]') || view.querySelector('[data-action="b-learn"]'); if (yb) yb.focus();
    } else if (a === 'b-learn' || a === 'b-know' || a === 'b-skip') {
      if (!vBrowse || vBrowse.done) return;
      var bid = vBrowse.queue[vBrowse.i];
      if (a === 'b-learn') { vstore[bid] = { s: 0, d: today(), k: 0 }; vBrowse.added++; Act.learn(bid); }
      else if (a === 'b-know') { vstore[bid] = { s: 0, d: '', k: 1 }; vBrowse.known++; }
      else vBrowse.skipped++;
      saveV(); vBrowse.i++; vBrowse.shown = false;
      if (vBrowse.i >= vBrowse.queue.length) vBrowse.done = true;
      render();
    } else if (a === 'b-exit') {
      vBrowse = null; render();
    } else if (a === 'm-open') {
      vBrowse = null; vReview = null; vType = null; vSub = 'mine'; render(); window.scrollTo(0, 0);
    } else if (a === 'r-start') {
      vReview = null; startReview(); render(); window.scrollTo(0, 0);
    } else if (a === 'r-yes' || a === 'r-no') {
      if (!vReview || vReview.done) return;
      answerReview(a === 'r-yes'); render();
    } else if (a === 'r-pick') {
      if (!vReview || vReview.done || !vReview.choice || vReview.picked !== null) return;
      var pi = parseInt(t.getAttribute('data-i'), 10);
      vReview.picked = pi; gradeReview(pi === vReview.choice.a); render();
      var nb = view.querySelector('[data-action="r-next"]'); if (nb) nb.focus();
    } else if (a === 'r-next') {
      if (!vReview || vReview.done || vReview.picked === null) return;
      nextReview(); render(); window.scrollTo(0, 0);
    } else if (a === 'r-exit') {
      vReview = null; render();
    } else if (a === 'tq-start') {
      vType = null; startTyping(); render(); window.scrollTo(0, 0);
    } else if (a === 'tq-exit') {
      vType = null; vSub = 'review'; render(); window.scrollTo(0, 0);
    } else if (a === 'tq-hint') {
      if (!vType || vType.done || vType.cur.result) return;
      tqHint(t.getAttribute('data-k')); render();
    } else if (a === 'tq-giveup') {
      if (!vType || vType.done || vType.cur.result) return;
      vType.cur.msg = ''; tqFinish('wrong'); render();
    } else if (a === 'tq-next') {
      if (!vType || vType.done || !vType.cur.result) return;
      vType.i++;
      if (vType.i >= vType.queue.length) { vType.done = true; if (!vType.counted) { vType.counted = true; Act.test(); } } else prepType();
      render(); window.scrollTo(0, 0);
    } else if (a === 'm-filter') {
      mFilter = t.getAttribute('data-v'); render(); refocus(a, mFilter);
    } else if (a === 'm-remove') {
      delete vstore[t.getAttribute('data-id')]; saveV(); render();
    } else if (a === 'm-relearn') {
      var re = vstore[t.getAttribute('data-id')];
      if (re) { re.s = 0; re.d = today(); re.k = 0; saveV(); }
      render();
    } else if (a === 'm-export') {
      var vtxt = JSON.stringify({ app: 'tieng-anh-moi-ngay', v: 1, vocab: vstore });
      var vdone = function () { vExport = null; vMsg = 'Đã sao chép bản sao lưu vào bộ nhớ tạm.'; render(); };
      var vfallback = function () {
        vExport = vtxt; render();
        var vta = document.getElementById('v-export'); if (vta) { vta.focus(); vta.select(); }
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(vtxt).then(vdone, vfallback);
        else vfallback();
      } catch (err) { vfallback(); }
    } else if (a === 'm-restore') {
      var vraw = ((document.getElementById('v-restore') || {}).value || '').trim();
      if (!vraw) { vMsg = 'Hãy dán bản sao lưu vào ô trước khi khôi phục.'; }
      else {
        try {
          var vobj = JSON.parse(vraw);
          var vdata = cleanStore(vobj && vobj.vocab ? vobj.vocab : vobj);
          var vn = Object.keys(vdata).length;
          if (!vn) vMsg = 'Không tìm thấy từ hợp lệ trong bản sao lưu này.'; else vPending = { data: vdata, n: vn };
        } catch (err2) { vMsg = 'Không đọc được bản sao lưu. Hãy dán đúng nội dung đã sao chép.'; }
      }
      render();
    } else if (a === 'm-restore-yes') {
      if (vPending) { vstore = vPending.data; saveV(); vMsg = 'Đã khôi phục ' + vPending.n + ' từ.'; vPending = null; }
      render();
    } else if (a === 'm-restore-no') {
      vPending = null; render();
    } else if (a === 'rtype') {
      rType = t.getAttribute('data-type'); render();
    } else if (a === 'del') {
      delId = t.getAttribute('data-id'); render();
    } else if (a === 'del-no') {
      delId = null; render();
    } else if (a === 'del-yes') {
      var id = t.getAttribute('data-id');
      journal = journal.filter(function (e) { return e.id !== id; });
      LS.set('oel.journal', journal); delId = null; exportText = null; render();
    } else if (a === 'export') {
      var text = buildExport();
      var done = function () { exportText = null; render(); var m = document.getElementById('j-msg'); if (m) m.textContent = 'Đã sao chép vào bộ nhớ tạm.'; };
      var fallback = function () {
        exportText = text; render();
        var ta = document.getElementById('j-export'); if (ta) { ta.focus(); ta.select(); }
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
        else fallback();
      } catch (e) { fallback(); }
    }
  });
  view.addEventListener('input', function (ev) {
    if (ev.target.id === 'g-search') {
      if (isAdminCode(ev.target.value)) { enableAdmin(); return; }
      gQuery = ev.target.value; renderGList();
    }
    else if (ev.target.id === 'adm-v-search') { admV.q = ev.target.value; admV.limit = 50; renderAdmVList(); }
    else if (ev.target.id === 'adm-i-search') { admI.q = ev.target.value; admI.limit = 50; renderAdmIList(); }
    else if (ev.target.id === 'adm-s-search') { admS.q = ev.target.value; admS.limit = 50; renderAdmSList(); }
    else if (ev.target.id === 'v-search') { vQuery = ev.target.value; vLimit = 40; renderVList(); }
    else if (ev.target.id === 'tq-in' && vType && vType.cur && !vType.cur.result) {
      var tcur = vType.cur, tmax = tqFree(tcur).length, clean = ev.target.value.replace(/[\s\-'’.,!?;:]/g, '').slice(0, tmax);
      if (clean !== ev.target.value) ev.target.value = clean;
      tcur.typed = clean; tcur.msg = '';
      var sqEl = document.getElementById('tq-sq'); if (sqEl) sqEl.innerHTML = tqSquares(tcur);
    }
    else if (/^ecc?-/.test(ev.target.id)) eloCalcOut();
    else if (ev.target.id === 'j-conf') { var o = document.getElementById('j-conf-out'); if (o) o.textContent = ev.target.value; }
  });
  document.addEventListener('keydown', function (ev) {   /* Esc closes the sound panel in the sound questions */
    if (ev.key === 'Escape' && ipaPop) { var cb = document.getElementById('snd-close'); if (cb) cb.click(); }
  });
  view.addEventListener('keydown', function (ev) {   /* Enter sends the sentence answer; Shift+Enter makes a new line */
    if (ev.target.id === 'ip-in' && ev.target.tagName === 'TEXTAREA' && ev.key === 'Enter' && !ev.shiftKey && !ev.isComposing) { ev.preventDefault(); ipSubmit(); }
  });
  view.addEventListener('submit', function (ev) {
    if (ev.target.id === 'jform') { ev.preventDefault(); saveEntry(); }
    else if (ev.target.id === 'vform') { ev.preventDefault(); addCustomWord(); }
    else if (ev.target.id === 'tqform') { ev.preventDefault(); tqSubmit(); }
    else if (ev.target.id === 'ipform') { ev.preventDefault(); ipSubmit(); }
  });
  window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });

  applyFonts();
  syncAdminTab();
  render();
})();
