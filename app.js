/* Tiếng Anh mỗi ngày - site code. Content lives in content/*.js */
(function () {
  'use strict';
  var OEL = window.OEL || {};

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
  var MORE_TYPES = { extension: 'Mở rộng', advanced: 'Nâng cao', nuance: 'Sắc thái' };
  var GRAMMAR = list(OEL.grammar).map(function (g) {
    g = g || {};
    return { t: str(g.title), lv: str(g.level).toUpperCase(), topic: str(g.topic) || str(g.category), gid: idOf(g.grammarId), rule: str(g.rule),
      form: (Array.isArray(g.form) ? g.form : [g.form]).map(str).filter(Boolean),
      more: list(g.more).map(function (m) { m = m || {}; return { type: MORE_TYPES[str(m.type)] ? str(m.type) : 'extension', text: str(m.text) }; }).filter(function (m) { return m.text; }),
      ex: list(g.examples).map(String), no: str(g.wrong), yes: str(g.right) };
  }).filter(function (g) { var ok = g.t && g.lv && g.rule; if (!ok) warn('ngữ pháp', g); return ok; });

  var GBYID = Object.create(null), GDUP = [];
  GRAMMAR.forEach(function (g) {
    if (!g.gid) return;
    if (GBYID[g.gid]) { GDUP.push(g.gid); warn('ngữ pháp (grammarId bị trùng: ' + g.gid + ')', g); } else GBYID[g.gid] = g;
  });
  var BANK = list(OEL.questions).map(function (q) {
    q = q || {};
    var o = list(q.options).map(String), a = o.indexOf(String(q.answer));
    var ok = q.question && o.length >= 2 && a > -1 && str(q.level);
    if (!ok) { warn('câu hỏi (đáp án phải trùng đúng một lựa chọn)', q); return null; }
    return { lv: str(q.level).toUpperCase(), topic: str(q.topic), q: String(q.question), o: o, a: a, why: str(q.explanation), gid: idOf(q.grammarId) };
  }).filter(Boolean);

  var LINKS = Object.create(null);   /* grammarId -> number of questions pointing at it */
  BANK.forEach(function (q) { if (q.gid) LINKS[q.gid] = (LINKS[q.gid] || 0) + 1; });
  var IPA_CFG = (OEL.ipa && OEL.ipa.audio) || {};
  var IPA = list(OEL.ipa && OEL.ipa.sounds).map(function (s) {
    s = s || {};
    return { id: str(s.id), sym: str(s.symbol), type: str(s.type) || 'consonant', group: str(s.group), voice: str(s.voice), tip: str(s.tip), bad: str(s.mistake),
      ex: list(s.examples).map(function (e) { e = e || {}; return { w: str(e.word), ipa: str(e.ipa) }; }).filter(function (e) { return e.w; }),
      pairs: list(s.pairs).map(function (p) { p = p || {}; return { a: str(p.a), ai: str(p.aIpa), b: str(p.b), bi: str(p.bIpa) }; }).filter(function (p) { return p.a && p.b; }) };
  }).filter(function (s) { var ok = s.id && s.sym; if (!ok) warn('âm IPA (cần id và symbol)', s); return ok; });
  var seenSets = {};
  var QSETS = list(OEL.tests).map(function (s) {
    s = s || {};
    var lvs = list(s.levels).map(function (l) { return String(l).toUpperCase(); });
    return { id: str(s.id), title: str(s.title), lvs: lvs, lv: lvs.length > 1 ? lvs[0] + ' đến ' + lvs[lvs.length - 1] : (lvs[0] || ''),
      blurb: str(s.blurb), qs: BANK.filter(function (q) { return lvs.indexOf(q.lv) > -1; }) };
  }).filter(function (s) {
    var ok = s.id && s.title && s.qs.length && !seenSets[s.id];
    if (!ok) warn('bài kiểm tra (cần id riêng, tên và có câu hỏi thuộc cấp độ đã chọn)', s); else seenSets[s.id] = true;
    return ok;
  });

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
  function pctOf(sum, cnt) { return cnt ? Math.round(sum / cnt * 100) : 0; }
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
    return '<p style="margin:0">' + label + ': <mark>' + esc(h.level) + '</mark> <span class="muted">(ước lượng, ' + esc(niceDate(h.date)) + ' · ' + h.score + '/' + h.total + ' câu, ' + (plKind(h) === 'quick' ? 'KT nhanh' : 'KT dài') + ')</span></p>';
  }
  function plSummary() {
    if (!PLHIST.length) return '';
    var rows = ['quick', 'long'].map(function (k) {
      var items = PLHIST.filter(function (h) { return plKind(h) === k; });
      if (!items.length) return '';
      var ref = k === 'quick' ? 10 : 25, avg = 0, li = 0;
      items.forEach(function (h) { avg += h.score / h.total; li += Math.max(0, lvIdx(h.level)); });
      avg /= items.length; li = Math.round(li / items.length);
      return '<tr><td>' + (k === 'quick' ? 'Kiểm tra nhanh' : 'Kiểm tra dài') + '</td><td>' + items.length + '</td><td>' + num1(avg * ref) + ' / ' + ref + '</td><td>' + esc(LEVELS[li].id) + '</td></tr>';
    }).join('');
    return '<div class="stack" style="gap:0.4rem">' + plLine('Kết quả cao nhất', plBest()) + plLine('Kết quả gần nhất', PLHIST[PLHIST.length - 1]) + '</div>' +
      '<div class="table-wrap"><table style="min-width:0"><thead><tr><th>Chi tiết</th><th>Số bài</th><th>Điểm trung bình</th><th>Trình độ ước lượng</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
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
  function admVRows() {
    var q = admV.q.trim().toLowerCase(), rows = [];
    if (admV.f === 'orphan') {
      Object.keys(VDEF).forEach(function (k) { if (!VORD[k]) rows.push({ o: Number(k), orphan: true, vi: String(VDEF[k]) }); });
    } else {
      VOCAB.forEach(function (w) {
        if (admV.f === 'nomean' && hasDef(w)) return;
        if (admV.f === 'noaudio' && w.uk && w.us) return;
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
        return '<tr><td>' + w.o + '</td><td>' + esc(w.w) + '</td><td>' + esc(w.pos) + '</td><td>' + esc(w.lv) + '</td><td>' + esc(w.ph) + '</td><td>' + (hasDef(w) ? esc(w.vi) : '<span class="muted">—</span>') +
          '</td><td>' + (w.uk ? '✓' : '—') + '</td><td>' + (w.us ? '✓' : '—') + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      (rows.length > shown.length ? '<div style="margin-top:0.8rem">' + admBtn('adm-v-more', 'Xem thêm 50 dòng') + '</div>' : '');
  }
  function admVocabPanel() {
    var withDef = VOCAB.filter(hasDef).length, mIds = Object.keys(VDEF), orphan = mIds.filter(function (k) { return !VORD[k]; });
    var noUk = VOCAB.filter(function (w) { return !w.uk; }).length, noUs = VOCAB.filter(function (w) { return !w.us; }).length;
    function ids(a, n) { return a.length ? ' (' + esc(a.slice(0, n).join(', ')) + (a.length > n ? '…' : '') + ')' : ''; }
    var fl = [['all', 'Tất cả'], ['nomean', 'Chưa có nghĩa'], ['noaudio', 'Thiếu âm thanh'], ['orphan', 'ID nghĩa không có từ']].map(function (f) { return chipBtn('adm-v-f', f[0], f[1], admV.f === f[0]); }).join('');
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
      '<p>Ngữ pháp: <strong>' + GRAMMAR.length + '</strong> quy tắc ' + kv(gLv) + '</p>' +
      '<p>Câu hỏi: <strong>' + BANK.length + '</strong> ' + kv(byLv) + '</p><p>Chủ đề câu hỏi: ' + kv(byTopic) + '</p>' +
      '<p>Từ vựng: ' + vocabInfo + '</p><p>Bài luyện: ' + setInfo + '</p></section>' +
      '<section class="panel stack" style="gap:0.8rem"><h2>Kiểm tra grammarId</h2>' +
      '<p>Câu hỏi khớp quy tắc: <strong>' + okQ + '</strong> · chưa có grammarId: <strong>' + noIdQ + '</strong> · grammarId không khớp: <strong>' + orphan.length + '</strong></p>' +
      '<p>Quy tắc chưa có grammarId: <strong>' + noIdG.length + '</strong>' + (noIdG.length ? ' (' + esc(noIdG.slice(0, 8).map(function (g) { return g.t; }).join('; ')) + (noIdG.length > 8 ? '…' : '') + ')' : '') + '</p>' +
      '<p>grammarId bị trùng: <strong>' + GDUP.length + '</strong>' + (GDUP.length ? ' (' + esc(GDUP.join(', ')) + ')' : '') + '</p>' +
      '<p>Quy tắc chưa có câu hỏi nào: <strong>' + noQ.length + '</strong>' + (noQ.length ? ' (' + esc(noQ.slice(0, 12).map(function (g) { return g.gid; }).join(', ')) + (noQ.length > 12 ? '…' : '') + ')' : '') + '</p>' +
      orphanHtml + '<details><summary style="cursor:pointer;font-weight:600">Bảng quy tắc ngữ pháp (' + GRAMMAR.length + ')</summary><div class="table-wrap"><table style="min-width:0"><thead><tr><th>ID</th><th>Quy tắc</th><th>Cấp</th><th>Chủ đề</th><th>Số câu hỏi</th></tr></thead><tbody>' + rows + '</tbody></table></div></details></section>' +
      admVocabPanel() +
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
  function adminAction(a, t) {
    var n = parseInt(t.getAttribute('data-n'), 10), sy = window.scrollY, d = today();
    if (a.indexOf('adm-reset') === 0 && admConfirm !== a) { admConfirm = a; render(); window.scrollTo(0, sy); return; }
    admConfirm = '';
    if (a === 'adm-v-f') { admV.f = t.getAttribute('data-v'); admV.limit = 50; render(); window.scrollTo(0, sy); return; }
    if (a === 'adm-v-more') { admV.limit += 50; renderAdmVList(); return; }
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
    else if (a === 'adm-reset-tests') { stats = { sets: {}, all: { sum: 0, cnt: 0 } }; LS.set('oel.stats', stats); PLHIST = []; savePl(); }
    else if (a === 'adm-reset-vocab') { vstore = cleanStore({}); saveV(); }
    else if (a === 'adm-reset-all') {
      activity = cleanActivity({}); lastLevel = 0; stats = { sets: {}, all: { sum: 0, cnt: 0 } }; LS.set('oel.stats', stats); PLHIST = []; savePl();
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
      var n = GRAMMAR.filter(function (g) { return g.lv === l.id; }).length;
      var ct = n ? n + ' quy tắc ngữ pháp' : 'Chỉ có tài nguyên';
      return '<button class="step" data-action="level" data-level="' + l.id + '" type="button"><b>' + l.id + '</b><span class="nm">' + l.name + '</span><span class="ds">' + l.d + '</span><span class="ct">' + ct + '</span></button>';
    }).join('');
    var shelf = [
      ['#grammar', 'Ngữ pháp', 'Giải thích dễ hiểu, ví dụ và một lỗi thường gặp cho mỗi quy tắc.', GRAMMAR.length + ' quy tắc'],
      ['#vocab', 'Từ vựng', 'Danh sách từ Oxford theo cấp độ CEFR, có phiên âm và giọng Anh, Mỹ. Đánh dấu từ cần học và ôn theo lịch lặp lại.', VOCAB.length + ' từ'],
      ['#ipa', 'Phát âm', 'Bảng âm IPA tiếng Anh Mỹ: nghe âm, xem ví dụ, mẹo phát âm và các cặp âm dễ nhầm.', IPA.length + ' âm'],
      ['#tests', 'Bài kiểm tra', 'Các bài trắc nghiệm ngắn, có giải thích cho từng đáp án.', BANK.length + ' câu hỏi'],
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
        '<div class="stat"><b>' + bestKeys.length + '/' + QSETS.length + '</b><span>bài đã làm</span></div>' +
        (Object.keys(vstore).length ? '<div class="stat"><b>' + dueList().length + '</b><span>từ cần ôn</span></div>' : '') + '</div>'
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
    o.i = 0; o.score = 0; o.picked = null; o.missed = []; o.done = false; o.tally = {};
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
    quiz = newQuiz({ kind: 'placement', title: 'Kiểm tra trình độ', lvLabel: n + ' câu', qs: [], used: [], lvs: lvs,
      idx: mid > -1 ? mid : Math.floor(lvs.length / 2), total: n, open: {} });
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
      quiz.est = estimateLevel();
      PLHIST.push({ level: quiz.est, date: today(), score: quiz.score, total: quiz.qs.length }); savePl();
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
      var b = setStat(s.id), todayBest = b && b.day === today() && b.bn ? 'Điểm cao nhất hôm nay: ' + b.bs + '/' + b.bn : 'Hôm nay chưa làm';
      return '<div class="card"><span class="call">' + esc(s.lv) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.blurb) + '</p>' +
        '<span class="meta">' + todayBest + (ADMIN ? ' · [admin] ' + s.qs.length + ' câu' : '') + (b && b.cnt ? ' · Trung bình: ' + pctOf(b.sum, b.cnt) + '%' : '') + '</span>' +
        '<div style="margin-top:0.6rem"><button class="btn" type="button" data-action="start" data-set="' + esc(s.id) + '">Bắt đầu</button></div></div>';
    }).join('');
    return head('Bài kiểm tra', 'Kiểm tra trình độ, ôn tập theo chủ đề, hoặc luyện theo cấp độ. Sau mỗi câu bạn sẽ thấy lời giải thích.') +
      '<div class="stack">' +
      '<section class="panel stack placement" style="gap:1rem"><div><h2>Kiểm tra trình độ</h2></div>' +
      '<p class="muted">Độ khó tự điều chỉnh: trả lời đúng thì câu sau khó hơn, trả lời sai thì dễ hơn. Kết quả chỉ là mức ước lượng, không phải chứng chỉ.</p>' + lastTxt +
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
      return '<button type="button" class="' + cls + '" data-action="pick" data-i="' + i + '"' + (answered ? ' disabled' : '') + '><i>' + letters[i] + '</i><span>' + esc(o) + '</span></button>';
    }).join('');
    var fb = '';
    if (answered) {
      var ok = quiz.picked === q.a;
      fb = '<div class="feedback" aria-live="polite"><strong>' + (ok ? 'Chính xác.' : 'Chưa đúng. Đáp án là ' + esc(q.o[q.a]) + '.') + '</strong><span>' + esc(q.why) + '</span>' +
        '<div style="margin-top:0.5rem"><button class="btn" type="button" data-action="next">' + (quiz.i === quiz.total - 1 ? 'Xem kết quả' : 'Câu tiếp theo') + '</button></div></div>';
    }
    return '<div class="quiz"><div class="row" style="justify-content:space-between"><p class="call" style="margin:0">' + esc(quiz.title) + ' / ' + esc(quiz.lvLabel) + '</p><button class="btn ghost small" type="button" data-action="quit">Thoát</button></div>' +
      '<div><p class="muted" style="font-size:0.9rem;margin-bottom:0.4rem">Câu ' + (quiz.i + 1) + ' / ' + quiz.total + '</p><div class="bar"><i style="width:' + (quiz.i / quiz.total * 100) + '%"></i></div></div>' +
      '<p class="qtext">' + esc(q.q) + '</p>' + admQInfo(q) + '<div class="opts">' + opts + '</div>' + fb + '</div>';
  }
  function viewQuizResult() {
    var n = quiz.qs.length, pct = n ? quiz.score / n : 0;
    var miss = quiz.missed.map(function (i) {
      var q = quiz.qs[i], g = q.gid ? GBYID[q.gid] : null, open = !!(quiz.open && quiz.open[i]);
      return '<div class="miss"><strong style="font-family:var(--font-display)">' + esc(q.q) + '</strong>' + admQInfo(q) + '<span>Đáp án: <mark>' + esc(q.o[q.a]) + '</mark></span><span class="muted">' + esc(q.why) + '</span>' +
        (g ? '<div><button class="btn ghost small" type="button" data-action="q-rule" data-v="' + i + '" aria-expanded="' + open + '">' + (open ? 'Ẩn quy tắc' : 'Xem quy tắc') + '</button></div>' +
          (open ? '<div class="rule ruleview"><div class="rv-head"><h3>' + esc(g.t) + '</h3><span class="tag lvtag">' + esc(g.lv) + '</span></div>' + ruleBody(g) + '</div>' : '') : '') + '</div>';
    }).join('');
    var top, extra = '', msg, retry, nextBtn = '';
    if (quiz.kind === 'placement') {
      var rows = quiz.lvs.filter(function (l) { return quiz.tally[l]; }).map(function (l) {
        var t = quiz.tally[l];
        return '<tr><td>' + esc(l) + '</td><td>' + t.right + ' / ' + t.asked + '</td></tr>';
      }).join('');
      top = '<p class="muted" style="margin:0">Trình độ ước lượng</p><div class="score">' + esc(quiz.est) + '</div><p class="muted">' + quiz.score + ' / ' + n + ' câu đúng</p>';
      msg = 'Hãy bắt đầu từ ngữ pháp ở cấp ' + quiz.est + ' và luyện thêm ở cấp đó.';
      extra = '<div class="table-wrap"><table style="min-width:0"><thead><tr><th>Cấp độ</th><th>Đúng / Đã hỏi</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '<p class="muted">Đây là ước lượng dựa trên ' + n + ' câu. ' + (quiz.total <= 10
          ? 'Bài ngắn lấy cấp độ bạn trả lời đúng tỉ lệ cao nhất. Nếu bạn đúng quá nửa ở cấp đó, bạn được xếp lên cấp kế tiếp để thử sức. Làm bài dài (25 câu) sẽ chính xác hơn.'
          : 'Bài dài chọn cấp độ cao nhất mà bạn trả lời đúng từ một nửa số câu trở lên.') + '</p>';
      nextBtn = '<button class="btn" type="button" data-action="level" data-level="' + esc(quiz.est) + '">Xem ngữ pháp cấp ' + esc(quiz.est) + '</button>';
      retry = '<button class="btn ghost" type="button" data-action="start-placement" data-n="' + quiz.total + '">Làm lại</button>';
    } else {
      msg = pct >= 0.85 ? 'Kết quả rất tốt. Hãy thử bài ở cấp độ cao hơn.' : pct >= 0.6 ? 'Tiến bộ tốt. Hãy xem lại các câu bên dưới rồi làm lại.' : 'Cố lên. Đọc lại ngữ pháp cho những câu bạn làm sai rồi thử lại.';
      top = '<div class="score">' + quiz.score + ' / ' + n + '</div>';
      if (quiz.kind === 'set') { var sb = setStat(quiz.setId); extra = '<p class="muted">Điểm cao nhất hôm nay: ' + sb.bs + '/' + sb.bn + '. Điểm trung bình của bài này: ' + pctOf(sb.sum, sb.cnt) + '%. Mỗi lần làm lại bạn sẽ nhận một bộ câu hỏi mới.</p>'; }
      nextBtn = '<a class="btn" href="#grammar">Ôn lại ngữ pháp</a>';
      retry = quiz.kind === 'set'
        ? '<button class="btn ghost" type="button" data-action="start" data-set="' + esc(quiz.setId) + '">Làm lại</button>'
        : '<button class="btn ghost" type="button" data-action="start-custom">Tạo bài mới</button>';
    }
    return '<div class="quiz"><p class="call">' + esc(quiz.title) + ' / ' + esc(quiz.lvLabel) + '</p>' + top + '<p class="lead">' + msg + '</p>' + extra +
      '<div class="row">' + nextBtn + retry + '<button class="btn ghost" type="button" data-action="quit">Tất cả bài kiểm tra</button></div>' +
      (miss ? '<div><h2 style="margin-bottom:0.5rem">Các câu cần ôn lại</h2>' + miss + '</div>' : '<p><mark>Điểm tuyệt đối. Không có câu nào cần ôn lại.</mark></p>') + '</div>';
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
  var VDEF = OEL.vocabDef && typeof OEL.vocabDef === 'object' ? OEL.vocabDef : {};
  var VOCAB = [], VBY = Object.create(null), VLEVELS = [], VORD = Object.create(null), VDUP = [], VSKIP = 0;
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
      } else if (!VBY[id]) { return; }
      out[id.slice(0, 200)] = r; n++;
    });
    return out;
  }
  var vstore = cleanStore(LS.get('oel.vocab2', {}));
  function saveV() { LS.set('oel.vocab2', vstore); }

  var vSub = 'decks', vLevel = '', vQuery = '', vLimit = 40, vMsg = '';
  var vBrowse = null, vReview = null, mFilter = 'all', vExport = null, vPending = null;

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
  function vsq(w) {
    var e = vstore[w.id], cls = 'vsq' + (e ? (e.k ? ' known' : ' learning') : ''), key = 'data-key="' + esc(w.id) + '" data-id="' + esc(w.id) + '"';
    var status = e ? (e.k ? 'Đã biết' : 'Đang học') : 'Bấm để học';
    return '<div class="' + cls + '"><button type="button" class="vsq-main" data-action="v-toggle" ' + key + ' aria-pressed="' + (e ? 'true' : 'false') + '" title="' + esc(viText(w)) + '">' +
      '<span class="vw">' + esc(w.w) + '</span>' + (w.ph ? '<span class="vph">' + esc(w.ph) + '</span>' : '') + (w.pos ? '<span class="vpos">' + esc(POS_VI[w.pos] || w.pos) + '</span>' : '') +
      '<span class="vm">' + esc(viText(w)) + '</span><span class="vlv">' + esc(w.lv) + '</span>' + (ADMIN && w.o !== undefined ? '<span class="vid">ID ' + w.o + '</span>' : '') + '<span class="vst">' + status + '</span></button>' +
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
    if (!ids.length) return '<div class="empty">Bạn chưa chọn từ nào để học. Vào “Bộ từ”, bấm “Học từ này” hoặc dùng “Duyệt thẻ”, rồi quay lại đây để ôn.</div>';
    if (!due) {
      var next = ids.map(function (id) { return vstore[id]; }).filter(function (e) { return !e.k && e.d; }).map(function (e) { return e.d; }).sort()[0];
      return '<div class="panel"><h2>Hôm nay không có từ cần ôn</h2><p class="muted" style="margin-top:0.5rem">' +
        (next ? 'Lần ôn kế tiếp: ngày ' + esc(niceShort(next)) + '.' : 'Tất cả từ trong danh sách đã thuộc. Hãy thêm từ mới ở “Bộ từ”.') + '</p></div>';
    }
    return '<div class="panel stack" style="gap:1rem"><div><p class="call">Ôn hôm nay</p><h2>' + due + ' từ cần ôn</h2></div>' +
      '<p class="muted">Mỗi buổi ôn tối đa 20 từ, mỗi từ là một câu trắc nghiệm 4 lựa chọn. Trả lời đúng thì từ quay lại sau 1, 3 rồi 7 ngày. Trả lời sai thì từ trở lại từ đầu và xuất hiện lại ở cuối buổi.</p>' +
      '<div class="row"><button class="btn" type="button" data-action="r-start">Bắt đầu ôn</button></div></div>';
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
    var due = dueList().length, mine = storeIds().length;
    var subs = [['decks', 'Bộ từ'], ['review', 'Ôn hôm nay (' + due + ')'], ['mine', 'Từ của tôi (' + mine + ')']].map(function (s) {
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
  function ipaWordBtn(w) {
    if (!CAN_SPEAK && !IPA_CFG.words) return '';
    return '<button type="button" class="btn ghost small" data-action="ipa-play" data-src="' + esc(ipaFile('w', wordSlug(w))) + '" data-w="' + esc(w) + '" aria-label="Nghe từ ' + esc(w) + '">Nghe</button>';
  }
  function ipaDetail() {
    var s = IPA.filter(function (x) { return x.id === ipaSel; })[0];
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
    return '<section class="panel ipa-detail stack" id="ipa-detail" style="gap:1rem"><div class="ipa-head"><span class="ipa-big">/' + esc(s.sym) + '/</span><div class="stack" style="gap:0.5rem"><p class="call" style="margin:0">' + esc(label) + '</p>' + soundBtn + '</div></div>' +
      (words ? '<div><p class="lab">Ví dụ</p><ul class="ipa-list">' + words + '</ul></div>' : '') +
      (s.tip ? '<div><p class="lab">Cách phát âm</p><p>' + esc(s.tip) + '</p></div>' : '') +
      (s.bad ? '<div><p class="lab">Lỗi thường gặp của người Việt</p><p>' + esc(s.bad) + '</p></div>' : '') +
      (pairs ? '<div><p class="lab">Cặp từ dễ nhầm</p><ul class="ipa-list">' + pairs + '</ul></div>' : '') + '</section>';
  }
  function viewIpa() {
    if (!IPA.length) return head('Phát âm', 'Bảng âm IPA tiếng Anh.') + '<div class="empty">Chưa có dữ liệu âm nào.</div>';
    var filters = [['all', 'Tất cả'], ['vowel', 'Nguyên âm'], ['diphthong', 'Nguyên âm đôi'], ['consonant', 'Phụ âm']].map(function (f) {
      return chipBtn('ipa-filter', f[0], f[1], ipaFilter === f[0]);
    }).join('');
    var groups = [], map = {};
    IPA.forEach(function (s) {
      if (ipaFilter !== 'all' && s.type !== ipaFilter) return;
      var k = s.group || s.type;
      if (!map[k]) { map[k] = []; groups.push(k); }
      map[k].push(s);
    });
    var grid = groups.map(function (k) {
      return '<section><h3 style="margin-bottom:0.6rem">' + esc(k) + '</h3><div class="ipa-grid">' + map[k].map(function (s) {
        return '<button type="button" class="ipa-tile" data-action="ipa-pick" data-v="' + esc(s.id) + '" aria-pressed="' + (ipaSel === s.id) + '"><b>' + esc(s.sym) + '</b><span>' + esc(s.ex[0] ? s.ex[0].w : '') + '</span></button>';
      }).join('') + '</div></section>';
    }).join('');
    return head('Phát âm', 'Bảng âm IPA tiếng Anh Mỹ. Bấm vào một âm để nghe, xem ví dụ, mẹo phát âm và các cặp từ dễ nhầm.') +
      '<div class="stack" style="gap:1.25rem">' + ipaDetail() + '<div class="chips" role="group" aria-label="Lọc loại âm">' + filters + '</div>' + grid +
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
      '<div class="stat"><b>' + st.grammar + '/' + GRAMMAR.length + '</b><span>quy tắc ngữ pháp</span></div><div class="stat"><b>' + st.tests + '</b><span>bài kiểm tra</span></div></div></div></section>';
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
  function render() {
    var r = current();
    var html = r === 'home' ? viewHome() : r === 'grammar' ? viewGrammar() : r === 'vocab' ? viewVocab() : r === 'ipa' ? viewIpa() : r === 'tests' ? viewTests() :
      r === 'resources' ? viewResources() : r === 'tips' ? viewTips() : r === 'admin' ? viewAdmin() : viewJournal();
    view.innerHTML = html;
    var links = document.querySelectorAll('#tabs a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-r') === r) links[i].setAttribute('aria-current', 'page');
      else links[i].removeAttribute('aria-current');
    }
    if (r === 'grammar') renderGList();
    if (r === 'vocab' && vSub === 'decks' && !vBrowse && !vReview) renderVList();
    if (r === 'admin') renderAdmVList();
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
    } else if (a === 'ipa-filter') {
      ipaFilter = t.getAttribute('data-v'); render(); refocus(a, ipaFilter);
    } else if (a === 'ipa-pick') {
      ipaSel = t.getAttribute('data-v'); render(); refocus(a, ipaSel);
      var dp = document.getElementById('ipa-detail'); if (dp && dp.scrollIntoView) dp.scrollIntoView({ block: 'start' });
    } else if (a === 'ipa-play') {
      playFile(t.getAttribute('data-src'), t.getAttribute('data-w'));
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
      var q = quiz.qs[quiz.i];
      var idx = parseInt(t.getAttribute('data-i'), 10);
      var right = idx === q.a;
      quiz.picked = idx;
      if (right) quiz.score++; else quiz.missed.push(quiz.i);
      var tl = quiz.tally[q.lv] || (quiz.tally[q.lv] = { asked: 0, right: 0 });
      tl.asked++; if (right) tl.right++;
      if (quiz.kind === 'placement') {
        quiz.idx = Math.max(0, Math.min(quiz.lvs.length - 1, quiz.lvs.indexOf(q.lv) + (right ? 1 : -1)));
      }
      render();
      var nb = view.querySelector('[data-action="next"]'); if (nb) nb.focus();
    } else if (a === 'next') {
      if (!quiz) return;
      quiz.i++; quiz.picked = null;
      if (quiz.kind === 'placement') {
        if (quiz.i >= quiz.total || !placementNext()) finishQuiz();
      } else if (quiz.i >= quiz.qs.length) {
        finishQuiz();
      }
      render(); window.scrollTo(0, 0);
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
      vBrowse = null; vReview = null; vSub = 'mine'; render(); window.scrollTo(0, 0);
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
    else if (ev.target.id === 'v-search') { vQuery = ev.target.value; vLimit = 40; renderVList(); }
    else if (ev.target.id === 'j-conf') { var o = document.getElementById('j-conf-out'); if (o) o.textContent = ev.target.value; }
  });
  view.addEventListener('submit', function (ev) {
    if (ev.target.id === 'jform') { ev.preventDefault(); saveEntry(); }
    else if (ev.target.id === 'vform') { ev.preventDefault(); addCustomWord(); }
  });
  window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });

  syncAdminTab();
  render();
})();
