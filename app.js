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
  var GRAMMAR = list(OEL.grammar).map(function (g) {
    g = g || {};
    return { t: str(g.title), lv: str(g.level).toUpperCase(), cat: str(g.category), rule: str(g.rule), form: str(g.form),
      ex: list(g.examples).map(String), no: str(g.wrong), yes: str(g.right) };
  }).filter(function (g) { var ok = g.t && g.lv && g.rule; if (!ok) warn('ngữ pháp', g); return ok; });

  var BANK = list(OEL.questions).map(function (q) {
    q = q || {};
    var o = list(q.options).map(String), a = o.indexOf(String(q.answer));
    var ok = q.question && o.length >= 2 && a > -1 && str(q.level);
    if (!ok) { warn('câu hỏi (đáp án phải trùng đúng một lựa chọn)', q); return null; }
    return { lv: str(q.level).toUpperCase(), topic: str(q.topic), q: String(q.question), o: o, a: a, why: str(q.explanation) };
  }).filter(Boolean);

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
  var gQuery = '', gLevel = ALL, rType = ALL;
  var quiz = null;
  var cLevels = [], cTopics = [], cLen = 10;
  var journal = LS.get('oel.journal', []);
  if (!Array.isArray(journal)) journal = [];
  var best = LS.get('oel.best', {});
  if (!best || typeof best !== 'object') best = {};
  var delId = null, exportText = null;

  var view = document.getElementById('view');
  var ROUTES = ['home', 'grammar', 'vocab', 'tests', 'resources', 'tips', 'journal'];

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
  function totalMinutes() { return journal.reduce(function (s, e) { return s + (+e.minutes || 0); }, 0); }
  function head(call, title, lead) {
    return '<section class="sec-head"><p class="call">' + call + '</p><h1>' + title + '</h1><p class="lead">' + lead + '</p></section>';
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
      ['#grammar', 'NGP 100', 'Ngữ pháp', 'Giải thích dễ hiểu, ví dụ và một lỗi thường gặp cho mỗi quy tắc.', GRAMMAR.length + ' quy tắc'],
      ['#vocab', 'TV 150', 'Từ vựng', 'Thẻ từ vựng CEFR-J cấp A1 đến A2. Đánh dấu từ cần học và ôn theo lịch lặp lại.', VOCAB.length + ' từ'],
      ['#tests', 'KT 200', 'Bài kiểm tra', 'Các bài trắc nghiệm ngắn, có giải thích cho từng đáp án.', BANK.length + ' câu hỏi'],
      ['#resources', 'TN 300', 'Tài nguyên', 'Các trang miễn phí để luyện nghe, đọc, viết và từ vựng.', RESOURCES.length + ' trang'],
      ['#tips', 'MEO 400', 'Mẹo học', 'Thói quen cho từng kỹ năng và các cặp từ ai cũng hay nhầm.', TIPS_FLAT.length + ' mẹo'],
      ['#journal', 'NK 500', 'Nhật ký học tập', 'Ghi lại thời gian học, từ mới và lỗi sai. Chỉ mình bạn xem được.', journal.length + ' mục']
    ].map(function (s) {
      return '<a class="card" href="' + s[0] + '"><span class="call">' + s[1] + '</span><h3>' + s[2] + '</h3><p>' + s[3] + '</p><span class="meta">' + s[4] + '</span></a>';
    }).join('');
    var bestKeys = Object.keys(best);
    var lastPl = LS.get('oel.placement', null);
    var plLine = lastPl && lastPl.level ? '<p style="margin-top:1rem">Trình độ ước lượng gần nhất: <mark>' + esc(lastPl.level) + '</mark></p>' : '';
    var progress = (journal.length || bestKeys.length || plLine || Object.keys(vstore).length)
      ? plLine + '<div class="stats" style="margin-top:1rem">' +
        '<div class="stat"><b>' + streak() + '</b><span>ngày liên tiếp</span></div>' +
        '<div class="stat"><b>' + totalMinutes() + '</b><span>phút đã ghi</span></div>' +
        '<div class="stat"><b>' + wordBank().length + '</b><span>từ đã lưu</span></div>' +
        '<div class="stat"><b>' + bestKeys.length + '/' + QSETS.length + '</b><span>bài đã làm</span></div>' +
        (Object.keys(vstore).length ? '<div class="stat"><b>' + dueList().length + '</b><span>từ cần ôn</span></div>' : '') + '</div>'
      : '<p class="muted">Chưa có gì được ghi lại. Hãy viết một mục nhật ký hoặc làm một bài kiểm tra, tiến độ của bạn sẽ hiện ở đây.</p>';
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
    return head('NGP 100', 'Ngữ pháp', GRAMMAR.length + ' quy tắc cốt lõi từ thì hiện tại đơn đến đảo ngữ. Mỗi quy tắc có giải thích ngắn, ví dụ và một lỗi cần tránh.') +
      '<div class="tools"><div><label for="g-search">Tìm quy tắc</label><input id="g-search" type="search" placeholder="Thử: điều kiện, bị động, mạo từ" value="' + esc(gQuery) + '" autocomplete="off"></div>' +
      '<div class="chips" role="group" aria-label="Lọc theo cấp độ">' + chips + '</div></div>' +
      '<p class="muted" id="g-count" aria-live="polite" style="margin-bottom:0.8rem"></p><div id="g-list"></div>';
  }
  function renderGList() {
    var q = gQuery.trim().toLowerCase();
    var items = GRAMMAR.map(function (g, i) { return { g: g, i: i }; }).filter(function (o) {
      var g = o.g;
      if (gLevel !== ALL && g.lv !== gLevel) return false;
      if (!q) return true;
      return (g.t + ' ' + g.cat + ' ' + g.rule + ' ' + g.ex.join(' ') + ' ' + g.form).toLowerCase().indexOf(q) > -1;
    });
    var listEl = document.getElementById('g-list'), count = document.getElementById('g-count');
    if (!listEl) return;
    count.textContent = items.length + ' quy tắc' + (gLevel !== ALL ? ' ở cấp ' + gLevel : '');
    if (!items.length) { listEl.innerHTML = '<div class="empty">Không có quy tắc nào phù hợp. Hãy xóa từ khóa hoặc chọn cấp độ khác.</div>'; return; }
    listEl.innerHTML = items.map(function (o) {
      var g = o.g;
      return '<details class="rule"><summary><span class="no">NGP ' + (101 + o.i) + '</span><h3>' + esc(g.t) + '</h3><span class="tag">' + esc(g.lv) + '</span></summary>' +
        '<div class="body"><p>' + md(g.rule) + '</p>' + (g.form ? '<div class="form">' + esc(g.form) + '</div>' : '') +
        (g.ex.length ? '<ul>' + g.ex.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>' : '') +
        (g.no && g.yes ? '<div class="pair"><div><b class="no-way" style="text-decoration:none">Sai</b><span class="no-way">' + esc(g.no) + '</span></div>' +
        '<div><b class="yes-way">Đúng</b><span class="yes-way">' + esc(g.yes) + '</span></div></div>' : '') + '</div></details>';
    }).join('');
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
  function newQuiz(o) {
    o.i = 0; o.score = 0; o.picked = null; o.missed = []; o.done = false; o.tally = {};
    return o;
  }
  function startSet(id) {
    var s = QSETS.filter(function (x) { return x.id === id; })[0];
    if (!s) return;
    quiz = newQuiz({ kind: 'set', setId: s.id, title: s.title, lvLabel: s.lv, qs: s.qs.slice(), total: s.qs.length });
  }
  function startCustom() {
    var pool = shuffle(customPool());
    if (!pool.length) return;
    var take = pool.slice(0, Math.min(cLen, pool.length));
    quiz = newQuiz({ kind: 'custom', title: 'Bài kiểm tra tự tạo', lvLabel: take.length + ' câu', qs: take, total: take.length });
  }
  /* Kiểm tra trình độ: bắt đầu ở B1, đúng thì lên một cấp, sai thì xuống một cấp. */
  function startPlacement(n) {
    var lvs = bankLevels();
    if (!lvs.length) return;
    var mid = lvs.indexOf('B1');
    quiz = newQuiz({ kind: 'placement', title: 'Kiểm tra trình độ', lvLabel: n + ' câu', qs: [], used: [], lvs: lvs,
      idx: mid > -1 ? mid : Math.floor(lvs.length / 2), total: n });
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
          quiz.used.push(q); quiz.qs.push(q);
          return true;
        }
      }
    }
    return false;
  }
  /* Mức ước lượng có hai cách tính (sẽ tinh chỉnh sau):
     - Bài dài (25 câu): cấp độ cao nhất mà bạn trả lời đúng ít nhất một nửa số câu ở cấp đó.
     - Bài ngắn (10 câu): cấp độ có tỉ lệ đúng cao nhất, vì mỗi cấp chỉ có vài câu nên một câu đúng may mắn
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
      return est;
    }
    lvs.forEach(function (l) {
      var t = quiz.tally[l];
      if (t && t.asked && t.right / t.asked >= 0.5) est = l;
    });
    return est;
  }
  function finishQuiz() {
    quiz.done = true;
    if (quiz.kind === 'set') {
      if (best[quiz.setId] === undefined || quiz.score > best[quiz.setId]) { best[quiz.setId] = quiz.score; LS.set('oel.best', best); }
    } else if (quiz.kind === 'placement') {
      quiz.est = estimateLevel();
      LS.set('oel.placement', { level: quiz.est, date: today(), n: quiz.qs.length });
    }
  }

  function chipBtn(action, val, label, pressed) {
    return '<button type="button" class="chip" data-action="' + action + '" data-v="' + esc(val) + '" aria-pressed="' + pressed + '">' + esc(label) + '</button>';
  }
  function viewTests() {
    if (quiz) return quiz.done ? viewQuizResult() : viewQuizQuestion();
    var last = LS.get('oel.placement', null);
    var lastTxt = last && last.level
      ? '<p>Kết quả gần nhất: <mark>' + esc(last.level) + '</mark> <span class="muted">(ước lượng, ' + esc(niceDate(last.date)) + ')</span></p>' : '';
    var pool = customPool();
    var lvChips = bankLevels().map(function (l) { return chipBtn('c-level', l, l, cLevels.indexOf(l) > -1); }).join('');
    var tpChips = bankTopics().map(function (t) { return chipBtn('c-topic', t, t, cTopics.indexOf(t) > -1); }).join('');
    var lenChips = [10, 25].map(function (n) { return chipBtn('c-len', n, n === 10 ? 'Nhanh: 10 câu' : 'Dài: 25 câu', cLen === n); }).join('');
    var note = !pool.length ? 'Không có câu hỏi nào phù hợp. Hãy bỏ bớt một bộ lọc.'
      : pool.length < cLen ? 'Có ' + pool.length + ' câu phù hợp, nên bài sẽ ngắn hơn ' + cLen + ' câu.'
      : 'Có ' + pool.length + ' câu phù hợp.';
    var cards = QSETS.map(function (s) {
      var b = best[s.id];
      return '<div class="card"><span class="call">' + esc(s.lv) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.blurb) + '</p>' +
        '<span class="meta">' + s.qs.length + ' câu hỏi / ' + (b !== undefined ? 'điểm cao nhất ' + b + '/' + s.qs.length : 'chưa làm') + '</span>' +
        '<div style="margin-top:0.6rem"><button class="btn" type="button" data-action="start" data-set="' + esc(s.id) + '">Bắt đầu</button></div></div>';
    }).join('');
    return head('KT 200', 'Bài kiểm tra', 'Kiểm tra trình độ, tự tạo bài theo cấp độ và chủ đề, hoặc luyện theo bài có sẵn. Sau mỗi câu bạn sẽ thấy lời giải thích.') +
      '<div class="stack">' +
      '<section class="panel stack" style="gap:1rem"><div><p class="call">KT 210</p><h2>Kiểm tra trình độ</h2></div>' +
      '<p class="muted">Độ khó tự điều chỉnh: trả lời đúng thì câu sau khó hơn, trả lời sai thì dễ hơn. Kết quả chỉ là mức ước lượng, không phải chứng chỉ.</p>' + lastTxt +
      '<div class="row"><button class="btn" type="button" data-action="start-placement" data-n="10">Kiểm tra nhanh: 10 câu</button>' +
      '<button class="btn ghost" type="button" data-action="start-placement" data-n="25">Kiểm tra dài: 25 câu</button></div></section>' +
      '<section class="panel stack" style="gap:1rem"><div><p class="call">KT 220</p><h2>Tự tạo bài kiểm tra</h2></div>' +
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
      '<p class="qtext">' + esc(q.q) + '</p><div class="opts">' + opts + '</div>' + fb + '</div>';
  }
  function viewQuizResult() {
    var n = quiz.qs.length, pct = n ? quiz.score / n : 0;
    var miss = quiz.missed.map(function (i) {
      var q = quiz.qs[i];
      return '<div class="miss"><strong style="font-family:var(--font-display)">' + esc(q.q) + '</strong><span>Đáp án: <mark>' + esc(q.o[q.a]) + '</mark></span><span class="muted">' + esc(q.why) + '</span></div>';
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
          ? 'Bài ngắn chọn cấp độ bạn trả lời đúng tỉ lệ cao nhất. Làm bài dài (25 câu) sẽ chính xác hơn.'
          : 'Bài dài chọn cấp độ cao nhất mà bạn trả lời đúng từ một nửa số câu trở lên.') + '</p>';
      nextBtn = '<button class="btn" type="button" data-action="level" data-level="' + esc(quiz.est) + '">Xem ngữ pháp cấp ' + esc(quiz.est) + '</button>';
      retry = '<button class="btn ghost" type="button" data-action="start-placement" data-n="' + quiz.total + '">Làm lại</button>';
    } else {
      msg = pct >= 0.85 ? 'Kết quả rất tốt. Hãy thử bài ở cấp độ cao hơn.' : pct >= 0.6 ? 'Tiến bộ tốt. Hãy xem lại các câu bên dưới rồi làm lại.' : 'Cố lên. Đọc lại ngữ pháp cho những câu bạn làm sai rồi thử lại.';
      top = '<div class="score">' + quiz.score + ' / ' + n + '</div>';
      if (quiz.kind === 'set') extra = '<p class="muted">Điểm cao nhất trên thiết bị này: ' + best[quiz.setId] + '/' + n + '.</p>';
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
    return head('TN 300', 'Tài nguyên', 'Các trang miễn phí được chọn vì dạy rõ ràng. Lọc theo kỹ năng bạn muốn luyện. Liên kết mở trong tab mới.') +
      '<div class="chips" role="group" aria-label="Lọc theo kỹ năng" style="margin-bottom:1.25rem">' + chips + '</div>' +
      (items.length ? '<div class="grid res">' + cards + '</div>' : '<div class="empty">Chưa có tài nguyên nào cho kỹ năng này.</div>');
  }

  /* ---------- Mẹo học ---------- */
  function viewTips() {
    var groups = TIPS.map(function (g) {
      return '<div class="panel"><h3>' + esc(g.g) + '</h3><ul class="tip-list">' + g.l.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
    var rows = CONFUSED.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('');
    return head('MEO 400', 'Mẹo học', 'Những thói quen nhỏ cho từng kỹ năng, và các cặp từ làm khó cả người học lẫn người bản xứ.') +
      '<div class="stack"><div class="grid wide">' + groups + '</div>' +
      '<section><h2 style="margin-bottom:0.3rem">Các cặp từ dễ nhầm</h2><p class="muted" style="margin-bottom:1rem">Hãy kiểm tra những cặp này trước khi gửi email hoặc nộp bài viết.</p>' +
      '<div class="table-wrap"><table><thead><tr><th>Cặp từ</th><th>Quy tắc</th><th>Ví dụ</th></tr></thead><tbody>' + rows + '</tbody></table></div></section></div>';
  }

  /* ---------- Từ vựng ---------- */
  var INTERVALS = [1, 3, 7]; /* số ngày chờ trước lần ôn tiếp theo; sau lần nhớ thứ 4 từ được tính là đã thuộc */
  var POS_VI = { n: 'danh từ', v: 'động từ', adj: 'tính từ', adv: 'trạng từ', prep: 'giới từ', conj: 'liên từ', pron: 'đại từ',
    det: 'hạn định từ', num: 'số từ', interj: 'thán từ', modal: 'động từ khuyết thiếu', be: 'động từ', 'do': 'động từ', have: 'động từ', to: 'to + động từ' };

  var VTOPICS = list(OEL.vocabTopics).map(String);
  var VOCAB = [], VBY = Object.create(null), VLEVELS = [];
  LEVELS.forEach(function (l) {
    list(OEL.vocab && OEL.vocab[l.id]).forEach(function (r) {
      if (!Array.isArray(r) || !str(r[0]) || !str(r[2])) { warn('từ vựng', r); return; }
      var id = l.id + ':' + r[0] + '|' + r[1];
      if (VBY[id]) { warn('từ vựng bị trùng', r); return; }
      var tp = typeof r[3] === 'number' && r[3] >= 0 && r[3] < VTOPICS.length ? r[3] : -1;
      var w = { id: id, w: String(r[0]), pos: String(r[1] || ''), vi: String(r[2]), tp: tp, lv: l.id };
      VBY[id] = w; VOCAB.push(w);
      if (VLEVELS.indexOf(l.id) < 0) VLEVELS.push(l.id);
    });
  });

  var CAN_SPEAK = (function () {
    try { return 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function'; } catch (e) { return false; }
  })();
  function speak(text) {
    try {
      var u = new window.SpeechSynthesisUtterance(String(text).split('/')[0]);
      u.lang = 'en-US'; u.rate = 0.9;
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
  var vstore = cleanStore(LS.get('oel.vocab', {}));
  function saveV() { LS.set('oel.vocab', vstore); }

  var vSub = 'decks', vLevel = VLEVELS[0] || 'A1', vQuery = '', vTopic = -1, vLimit = 40, vMsg = '';
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
  function levelWords(lv) { return VOCAB.filter(function (w) { return w.lv === lv; }); }
  function vFiltered() {
    var q = vQuery.trim().toLowerCase();
    return VOCAB.filter(function (w) {
      if (w.lv !== vLevel) return false;
      if (vTopic > -1 && w.tp !== vTopic) return false;
      if (!q) return true;
      return w.w.toLowerCase().indexOf(q) > -1 || w.vi.toLowerCase().indexOf(q) > -1;
    });
  }
  function refocusKey(id) {
    var els = view.querySelectorAll('[data-key]');
    for (var i = 0; i < els.length; i++) if (els[i].getAttribute('data-key') === id) { els[i].focus(); return; }
  }
  function speakBtn(w) {
    return CAN_SPEAK ? '<button type="button" class="btn ghost small" data-action="speak" data-w="' + esc(w) + '" aria-label="Nghe phát âm ' + esc(w) + '">Nghe</button>' : '';
  }
  function posTag(w) { return w.pos ? '<span class="tag">' + esc(POS_VI[w.pos] || w.pos) + '</span> ' : ''; }

  /* --- Phiên duyệt thẻ: chọn từ nào cần học --- */
  function startBrowse() {
    var pool = vFiltered().filter(function (w) { return !vstore[w.id]; });
    var take = shuffle(pool).slice(0, 20);
    if (!take.length) { vMsg = 'Không còn từ chưa đánh dấu trong bộ lọc này.'; return; }
    vBrowse = { queue: take.map(function (w) { return w.id; }), i: 0, shown: false, added: 0, known: 0, skipped: 0, done: false };
  }
  /* --- Phiên ôn tập: từ đến hạn ôn hôm nay --- */
  function startReview() {
    var ids = dueList();
    if (!ids.length) return;
    var q = ids.slice(0, 20);
    vReview = { queue: q, i: 0, shown: false, right: 0, wrong: 0, left: ids.length - q.length, done: false };
  }
  function answerReview(ok) {
    var id = vReview.queue[vReview.i], e = vstore[id];
    if (e) {
      if (ok) {
        vReview.right++;
        if (e.s >= INTERVALS.length) { e.k = 1; e.d = ''; }
        else { e.d = addDays(today(), INTERVALS[e.s]); e.s++; }
      } else {
        vReview.wrong++; e.s = 0; e.d = today(); vReview.queue.push(id); /* gặp lại ở cuối buổi ôn */
      }
      saveV();
    }
    vReview.i++; vReview.shown = false;
    if (vReview.i >= vReview.queue.length) vReview.done = true;
  }

  function cardHtml(w, shown) {
    return '<div class="vcard"><span class="big">' + esc(w.w) + '</span><div class="row" style="justify-content:center">' + posTag(w) + speakBtn(w.w) + '</div>' +
      (shown ? '<p class="mean">' + esc(w.vi) + '</p>' : '<button class="btn ghost" type="button" data-action="card-show">Hiện nghĩa</button>') + '</div>';
  }
  function sessionTop(title, i, total, exitAction) {
    return '<div class="row" style="justify-content:space-between"><p class="call" style="margin:0">' + esc(title) + '</p><button class="btn ghost small" type="button" data-action="' + exitAction + '">Thoát</button></div>' +
      '<div><p class="muted" style="font-size:0.9rem;margin-bottom:0.4rem">Thẻ ' + (i + 1) + ' / ' + total + '</p><div class="bar"><i style="width:' + (i / total * 100) + '%"></i></div></div>';
  }
  function viewBrowseCard() {
    var w = entryWord(vBrowse.queue[vBrowse.i]);
    return '<div class="quiz">' + sessionTop('Duyệt thẻ / ' + vLevel, vBrowse.i, vBrowse.queue.length, 'b-exit') + cardHtml(w, vBrowse.shown) +
      '<div class="row"><button class="btn" type="button" data-action="b-learn">Cần học</button><button class="btn ghost" type="button" data-action="b-know">Đã biết</button>' +
      '<button class="btn ghost" type="button" data-action="b-skip">Bỏ qua</button></div>' +
      '<p class="muted" style="font-size:0.9rem">“Cần học” đưa từ vào lịch ôn. “Đã biết” không ôn lại. “Bỏ qua” để từ ở lại trong bộ từ.</p></div>';
  }
  function viewBrowseDone() {
    return '<div class="quiz"><p class="call">Duyệt thẻ / ' + esc(vLevel) + '</p><h1 style="font-size:2rem">Xong 20 thẻ</h1>' +
      '<div class="stats"><div class="stat"><b>' + vBrowse.added + '</b><span>cần học</span></div><div class="stat"><b>' + vBrowse.known + '</b><span>đã biết</span></div><div class="stat"><b>' + vBrowse.skipped + '</b><span>bỏ qua</span></div></div>' +
      '<div class="row"><button class="btn" type="button" data-action="v-browse">Duyệt tiếp 20 từ</button><button class="btn ghost" type="button" data-action="m-open">Từ của tôi</button><button class="btn ghost" type="button" data-action="b-exit">Xong</button></div></div>';
  }
  function viewReviewCard() {
    var w = entryWord(vReview.queue[vReview.i]);
    return '<div class="quiz">' + sessionTop('Ôn tập', vReview.i, vReview.queue.length, 'r-exit') + cardHtml(w, vReview.shown) +
      (vReview.shown ? '<div class="row"><button class="btn" type="button" data-action="r-yes">Đã nhớ</button><button class="btn ghost" type="button" data-action="r-no">Chưa nhớ</button></div>' +
        '<p class="muted" style="font-size:0.9rem">Từ chưa nhớ sẽ xuất hiện lại ở cuối buổi ôn này.</p>' :
        '<p class="muted" style="font-size:0.9rem">Hãy thử nhớ nghĩa trước, rồi bấm “Hiện nghĩa” để kiểm tra.</p>') + '</div>';
  }
  function viewReviewDone() {
    var left = dueList().length;
    return '<div class="quiz"><p class="call">Ôn tập</p><h1 style="font-size:2rem">Xong buổi ôn</h1>' +
      '<div class="stats"><div class="stat"><b>' + vReview.right + '</b><span>lần nhớ</span></div><div class="stat"><b>' + vReview.wrong + '</b><span>lần chưa nhớ</span></div><div class="stat"><b>' + left + '</b><span>từ còn cần ôn</span></div></div>' +
      '<p class="muted">Từ bạn nhớ sẽ quay lại sau 1, 3 rồi 7 ngày. Sau lần nhớ thứ tư, từ được tính là đã thuộc.</p>' +
      '<div class="row">' + (left ? '<button class="btn" type="button" data-action="r-start">Ôn tiếp</button>' : '') + '<button class="btn ghost" type="button" data-action="m-open">Từ của tôi</button><button class="btn ghost" type="button" data-action="r-exit">Xong</button></div></div>';
  }

  function vrow(w) {
    var e = vstore[w.id], status = '', act, key = 'data-key="' + esc(w.id) + '" data-id="' + esc(w.id) + '"';
    if (!e) act = '<button type="button" class="btn small" data-action="v-add" ' + key + '>Học từ này</button>';
    else {
      status = e.k ? '<span class="tag">Đã biết</span>' : '<span class="tag on">Đang học</span>';
      act = '<button type="button" class="btn ghost small" data-action="v-remove" ' + key + '>Bỏ đánh dấu</button>';
    }
    return '<li class="vrow"><div><span class="vw">' + esc(w.w) + '</span> ' + posTag(w) + status + '</div>' +
      '<div class="vact">' + speakBtn(w.w) + act + '</div><div class="vvi">' + esc(w.vi) + '</div></li>';
  }
  function renderVList() {
    var listEl = document.getElementById('v-list'), cnt = document.getElementById('v-count');
    if (!listEl) return;
    var items = vFiltered(), shown = items.slice(0, vLimit);
    cnt.textContent = items.length + ' từ' + (items.length > shown.length ? ', đang hiện ' + shown.length : '');
    if (!items.length) { listEl.innerHTML = '<div class="empty">Không có từ nào phù hợp. Hãy xóa từ khóa hoặc chọn chủ đề khác.</div>'; return; }
    listEl.innerHTML = '<ul class="vlist">' + shown.map(vrow).join('') + '</ul>' +
      (items.length > shown.length ? '<div style="margin-top:1rem"><button class="btn ghost" type="button" data-action="v-more">Xem thêm 40 từ</button></div>' : '');
  }
  function viewDecks() {
    if (!VLEVELS.length) return '<div class="empty">Chưa có bộ từ nào.</div>';
    var lvChips = VLEVELS.map(function (l) { return chipBtn('v-level', l, l + ' (' + levelWords(l).length + ' từ)', vLevel === l); }).join('');
    var ws = levelWords(vLevel), learning = 0, known = 0, topicCount = {};
    ws.forEach(function (w) {
      var e = vstore[w.id];
      if (e) { if (e.k) known++; else learning++; }
      if (w.tp > -1) topicCount[w.tp] = (topicCount[w.tp] || 0) + 1;
    });
    var tpChips = chipBtn('v-topic', '-1', 'Tất cả', vTopic === -1) + VTOPICS.map(function (t, i) {
      return topicCount[i] ? chipBtn('v-topic', String(i), t + ' (' + topicCount[i] + ')', vTopic === i) : '';
    }).join('');
    return '<div class="stack" style="gap:1.5rem">' +
      '<div class="chips" role="group" aria-label="Chọn bộ từ">' + lvChips + '</div>' +
      '<div class="panel"><div class="stats"><div class="stat"><b>' + learning + '</b><span>đang học</span></div><div class="stat"><b>' + known + '</b><span>đã biết</span></div><div class="stat"><b>' + (ws.length - learning - known) + '</b><span>chưa đánh dấu</span></div></div>' +
      '<div class="row" style="margin-top:1rem"><button class="btn" type="button" data-action="v-browse">Duyệt thẻ: 20 từ</button><button class="btn ghost" type="button" data-action="v-batch">Thêm nhanh 20 từ mới</button></div>' +
      '<p class="muted" style="margin-top:0.6rem;font-size:0.95rem">Duyệt thẻ cho bạn xem từng từ rồi chọn “Cần học” hoặc “Đã biết”. Thêm nhanh đưa 20 từ ngẫu nhiên vào danh sách học. Cả hai chỉ lấy từ chưa đánh dấu, theo bộ lọc bên dưới.</p></div>' +
      '<div><p class="lab" style="margin-bottom:0.4rem">Chủ đề</p><div class="chips" role="group" aria-label="Lọc theo chủ đề">' + tpChips + '</div></div>' +
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
      '<p class="muted">Mỗi buổi ôn tối đa 20 từ. Bạn nhớ từ thì từ quay lại sau 1, 3 rồi 7 ngày. Bạn chưa nhớ thì từ trở lại từ đầu và xuất hiện lại ở cuối buổi.</p>' +
      '<div class="row"><button class="btn" type="button" data-action="r-start">Bắt đầu ôn</button></div></div>';
  }
  function statusText(e) { return e.k ? 'Đã thuộc' : (e.d <= today() ? 'Cần ôn hôm nay' : 'Ôn lại ngày ' + niceShort(e.d)); }
  function mrow(id) {
    var w = entryWord(id), e = vstore[id], key = 'data-key="' + esc(id) + '" data-id="' + esc(id) + '"';
    var due = !e.k && e.d <= today();
    var acts = (e.k ? '<button type="button" class="btn ghost small" data-action="m-relearn" ' + key + '>Học lại</button>' : '') +
      '<button type="button" class="btn ghost small" data-action="m-remove" ' + key + '>' + (w.custom ? 'Xóa' : 'Bỏ khỏi danh sách') + '</button>';
    return '<li class="vrow"><div><span class="vw">' + esc(w.w) + '</span> ' + posTag(w) + (w.custom ? '<span class="tag">Từ riêng</span> ' : '') +
      '<span class="tag' + (due ? ' on' : '') + '">' + esc(statusText(e)) + '</span></div><div class="vact">' + speakBtn(w.w) + acts + '</div><div class="vvi">' + esc(w.vi) + '</div></li>';
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
      return chipBtn('v-sub', s[0], s[1], vSub === s[0]);
    }).join('');
    var body = vSub === 'review' ? viewReviewHome(due) : vSub === 'mine' ? viewMine() : viewDecks();
    return head('TV 150', 'Từ vựng', 'Học từ theo danh sách chuẩn CEFR-J. Đánh dấu từ cần học rồi ôn lại đúng lúc: sau 1 ngày, 3 ngày, 7 ngày.') +
      '<div class="chips" role="group" aria-label="Các phần của mục từ vựng" style="margin-bottom:1.25rem">' + subs + '</div>' +
      (vMsg ? '<p class="panel" role="status" style="margin-bottom:1rem">' + esc(vMsg) + '</p>' : '') + body +
      '<p class="muted" style="margin-top:2rem;font-size:0.9rem">Danh sách từ theo CEFR-J Vocabulary Profile v1.5 (Tono Laboratory, Tokyo University of Foreign Studies). Nghĩa tiếng Việt do Tiếng Anh mỗi ngày biên soạn và đang được rà soát.</p>';
  }
  function addCustomWord() {
    var w = document.getElementById('v-word').value.trim(), vi = document.getElementById('v-vi').value.trim();
    if (!w || !vi) { vMsg = 'Hãy nhập cả từ tiếng Anh và nghĩa tiếng Việt.'; render(); return; }
    var id = 'u:' + w.toLowerCase().slice(0, 80);
    if (vstore[id]) { vMsg = 'Từ này đã có trong danh sách riêng của bạn.'; render(); return; }
    vstore[id] = { s: 0, d: today(), k: 0, w: w.slice(0, 80), vi: vi.slice(0, 200) };
    saveV(); vMsg = 'Đã thêm “' + w + '” vào danh sách học.'; render();
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
    return head('NK 500', 'Nhật ký học tập', 'Ghi lại bạn đã học gì, những từ mới gặp và những lỗi bạn muốn bỏ. Các mục chỉ được lưu trong trình duyệt này.') +
      '<div class="stack"><div class="panel"><div class="stats">' +
      '<div class="stat"><b>' + streak() + '</b><span>ngày liên tiếp</span></div><div class="stat"><b>' + journal.length + '</b><span>mục nhật ký</span></div>' +
      '<div class="stat"><b>' + totalMinutes() + '</b><span>phút</span></div><div class="stat"><b>' + bank.length + '</b><span>từ đã lưu</span></div></div></div>' +
      '<form id="jform" class="panel jform" novalidate>' +
      '<div><label for="j-date">Ngày</label><input id="j-date" type="date" value="' + today() + '"></div>' +
      '<div><label for="j-min">Số phút đã học</label><input id="j-min" type="number" min="0" max="600" step="5" value="20"></div>' +
      '<div class="full"><label for="j-topic">Hôm nay bạn đã học gì?</label><input id="j-topic" type="text" placeholder="Ví dụ: quá khứ đơn, một tập podcast, 10 thẻ từ vựng"></div>' +
      '<div class="full"><label for="j-words">Từ mới (cách nhau bằng dấu phẩy)</label><input id="j-words" type="text" placeholder="Ví dụ: reluctant, take for granted, break the ice"></div>' +
      '<div class="full"><label for="j-mistake">Một lỗi cần nhớ</label><textarea id="j-mistake" placeholder="Viết cả cách sai và cách đúng"></textarea></div>' +
      '<div class="full"><label for="j-conf">Mức tự tin hôm nay: <output id="j-conf-out">3</output>/5</label><input id="j-conf" type="range" min="1" max="5" step="1" value="3"></div>' +
      '<div class="full row"><button class="btn" type="submit">Lưu mục nhật ký</button><span id="j-msg" class="muted" role="status"></span></div></form>' +
      (bank.length ? '<section><h2 style="margin-bottom:0.8rem">Kho từ vựng</h2><div class="words">' + bank.map(function (w) { return '<span class="word">' + esc(w) + '</span>'; }).join('') + '</div></section>' : '') +
      '<section><div class="row" style="justify-content:space-between;margin-bottom:0.8rem"><h2>Các mục nhật ký</h2>' + (journal.length ? '<button class="btn ghost small" type="button" data-action="export">Sao chép tất cả dạng văn bản</button>' : '') + '</div>' +
      (exportText !== null ? '<div style="margin-bottom:1rem"><label for="j-export">Chọn tất cả và sao chép đoạn văn bản này</label><textarea id="j-export" class="export" readonly>' + esc(exportText) + '</textarea></div>' : '') +
      '<div class="stack" style="gap:0.9rem" id="j-list">' + entries + '</div></section></div>';
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
    return ROUTES.indexOf(h) > -1 ? h : 'home';
  }
  function render() {
    var r = current();
    var html = r === 'home' ? viewHome() : r === 'grammar' ? viewGrammar() : r === 'vocab' ? viewVocab() : r === 'tests' ? viewTests() :
      r === 'resources' ? viewResources() : r === 'tips' ? viewTips() : viewJournal();
    view.innerHTML = html;
    var links = document.querySelectorAll('#tabs a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-r') === r) links[i].setAttribute('aria-current', 'page');
      else links[i].removeAttribute('aria-current');
    }
    if (r === 'grammar') renderGList();
    if (r === 'vocab' && vSub === 'decks' && !vBrowse && !vReview) renderVList();
  }

  /* Giữ tiêu điểm bàn phím trên nút vừa bấm sau khi vẽ lại trang. */
  function refocus(action, v) {
    var els = view.querySelectorAll('[data-action="' + action + '"]');
    for (var i = 0; i < els.length; i++) {
      if (els[i].getAttribute('data-v') === v) { els[i].focus(); return; }
    }
  }

  /* ---------- Sự kiện ---------- */
  view.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-action]');
    if (!t) return;
    var a = t.getAttribute('data-action');
    if (/^(v|b|r|m|card)-/.test(a)) vMsg = '';
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
      vLevel = t.getAttribute('data-v'); vTopic = -1; vLimit = 40; render(); refocus(a, vLevel);
    } else if (a === 'v-topic') {
      vTopic = parseInt(t.getAttribute('data-v'), 10); vLimit = 40; render(); refocus(a, String(vTopic));
    } else if (a === 'v-more') {
      vLimit += 40; renderVList();
    } else if (a === 'v-add' || a === 'v-remove') {
      var wid = t.getAttribute('data-id');
      if (a === 'v-add') vstore[wid] = { s: 0, d: today(), k: 0 }; else delete vstore[wid];
      saveV(); render(); refocusKey(wid);
    } else if (a === 'v-batch') {
      var bpool = shuffle(vFiltered().filter(function (w) { return !vstore[w.id]; })).slice(0, 20);
      bpool.forEach(function (w) { vstore[w.id] = { s: 0, d: today(), k: 0 }; });
      saveV();
      vMsg = bpool.length ? 'Đã thêm ' + bpool.length + ' từ vào danh sách học. Các từ này sẽ xuất hiện ở mục “Ôn hôm nay”.' : 'Không còn từ chưa đánh dấu trong bộ lọc này.';
      render();
    } else if (a === 'v-browse') {
      vBrowse = null; startBrowse(); render(); window.scrollTo(0, 0);
    } else if (a === 'speak') {
      speak(t.getAttribute('data-w'));
    } else if (a === 'card-show') {
      if (vBrowse && !vBrowse.done) vBrowse.shown = true; else if (vReview && !vReview.done) vReview.shown = true;
      render();
      var yb = view.querySelector('[data-action="r-yes"]') || view.querySelector('[data-action="b-learn"]'); if (yb) yb.focus();
    } else if (a === 'b-learn' || a === 'b-know' || a === 'b-skip') {
      if (!vBrowse || vBrowse.done) return;
      var bid = vBrowse.queue[vBrowse.i];
      if (a === 'b-learn') { vstore[bid] = { s: 0, d: today(), k: 0 }; vBrowse.added++; }
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
    if (ev.target.id === 'g-search') { gQuery = ev.target.value; renderGList(); }
    else if (ev.target.id === 'v-search') { vQuery = ev.target.value; vLimit = 40; renderVList(); }
    else if (ev.target.id === 'j-conf') { var o = document.getElementById('j-conf-out'); if (o) o.textContent = ev.target.value; }
  });
  view.addEventListener('submit', function (ev) {
    if (ev.target.id === 'jform') { ev.preventDefault(); saveEntry(); }
    else if (ev.target.id === 'vform') { ev.preventDefault(); addCustomWord(); }
  });
  window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });

  render();
})();
