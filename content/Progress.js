/* HOW TO EDIT: XP rules, levels and achievements for the Journal page. Everything here is plain numbers and text.
   - xp: how many XP each kind of activity earns.
   - curve, levelsPerStage, stages: how levels are computed and named (see comments below).
   - achievements: "stat" says what is counted, "goal" is the number to reach. Allowed stats:
       minutes (total minutes studied), streak (current day streak), days (number of study days),
       learned (words marked to learn), reviewed (words remembered in a review), grammar (grammar rules opened),
       tests (tests finished), level (current level number).
     Give every achievement a unique id. Do not rename the id of an achievement people may already have unlocked. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

OEL.progress = {
  idleSeconds: 60,   /* time only counts while the visitor is active; after this many quiet seconds it pauses */
  xp: { minute: 1, learned: 3, reviewed: 1, grammar: 2, test: 5 },

  /* Level curve: XP needed to go from level k to level k+1 = base * k ^ power (rounded).
     With base 10 and power 1.8: level 2 needs 10 XP in total, level 5 about 240, level 10 about 1,200, level 20 about 14,600.
     Raise "power" for a steeper climb, change "base" to scale everything. */
  curve: { base: 10, power: 1.8 },

  /* Stages: a name (and optional picture) shown for several levels in a row.
     Total levels = number of stages x levelsPerStage (here 10 x 2 = 20). Level 1 needs 0 XP.
     "img" is optional: a path such as "images/tree-3.png" shows a picture instead of the level number. */
  levelsPerStage: 2,
  stages: [
    { name: "Hạt giống", img: "" },
    { name: "Mầm non", img: "" },
    { name: "Cây con", img: "" },
    { name: "Cây non", img: "" },
    { name: "Cây nhỏ", img: "" },
    { name: "Cây trưởng thành", img: "" },
    { name: "Cây lớn", img: "" },
    { name: "Cây cao", img: "" },
    { name: "Cây cổ thụ", img: "" },
    { name: "Đại thụ", img: "" }
  ],

  achievements: [
    { id: "min-10", name: "Khởi động", desc: "Học tổng cộng 10 phút", stat: "minutes", goal: 10 },
    { id: "min-60", name: "Một giờ học", desc: "Học tổng cộng 60 phút", stat: "minutes", goal: 60 },
    { id: "min-600", name: "Mười giờ học", desc: "Học tổng cộng 600 phút", stat: "minutes", goal: 600 },
    { id: "streak-3", name: "Ba ngày liên tiếp", desc: "Học 3 ngày liên tiếp", stat: "streak", goal: 3 },
    { id: "streak-7", name: "Một tuần đều đặn", desc: "Học 7 ngày liên tiếp", stat: "streak", goal: 7 },
    { id: "streak-30", name: "Một tháng kiên trì", desc: "Học 30 ngày liên tiếp", stat: "streak", goal: 30 },
    { id: "grammar-1", name: "Quy tắc đầu tiên", desc: "Mở 1 quy tắc ngữ pháp", stat: "grammar", goal: 1 },
    { id: "grammar-10", name: "Người mê ngữ pháp", desc: "Mở 10 quy tắc ngữ pháp", stat: "grammar", goal: 10 },
    { id: "learn-10", name: "Mười từ đầu tiên", desc: "Đánh dấu 10 từ cần học", stat: "learned", goal: 10 },
    { id: "learn-100", name: "Trăm từ", desc: "Đánh dấu 100 từ cần học", stat: "learned", goal: 100 },
    { id: "learn-500", name: "Kho từ vựng", desc: "Đánh dấu 500 từ cần học", stat: "learned", goal: 500 },
    { id: "review-50", name: "Ôn bài chăm chỉ", desc: "Nhớ đúng 50 lần khi ôn từ", stat: "reviewed", goal: 50 },
    { id: "test-1", name: "Bài kiểm tra đầu tiên", desc: "Hoàn thành 1 bài kiểm tra", stat: "tests", goal: 1 },
    { id: "test-5", name: "Quen với kiểm tra", desc: "Hoàn thành 5 bài kiểm tra", stat: "tests", goal: 5 },
    { id: "level-9", name: "Cây nhỏ", desc: "Đạt cấp 9", stat: "level", goal: 9 },
    { id: "level-20", name: "Đại thụ", desc: "Đạt cấp 20, cấp cao nhất", stat: "level", goal: 20 }
  ]
};