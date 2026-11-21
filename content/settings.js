/* HOW TO EDIT: Fine-tuning numbers for XP, Elo, ranks, rank mode and fonts. Plain numbers and text only.
   Easiest way: Admin page > "Tinh chỉnh và xuất mã": change values, press "Xuất mã", copy the text and paste it over this whole file.
   Achievements, stage names and idle time stay in progress.js. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

OEL.settings = {
  /* ---- XP: points per activity, and the level curve (XP from level k to k+1 = base * k ^ power) ---- */
  xp: { minute: 1, learned: 3, reviewed: 1, grammar: 2, test: 5 },
  curve: { base: 10, power: 1.8 },

  /* ---- Elo: used by rank mode. lv = difficulty of a question of each CEFR level ----
     start/min/max = first, lowest and highest score. scale = steepness of the expected-score curve.
     k0, k1, tau = step size K = k0 + k1 * e^(-answers / tau). margin = band slack. guess = 1 counts blind guessing.
     firstOld / seed only matter for the old placement test. */
  elo: { start: 1000, min: 400, max: 2800, scale: 500, k0: 200, k1: 400, tau: 16, margin: 100, guess: 1, firstOld: 1, seed: 1,
    lv: { A1: 900, A2: 1200, B1: 1400, B2: 1800, C1: 2200, C2: 2600 } },

  /* ---- Ranks: a player has the highest rank whose "elo" they reach. Below the first rank still counts as rank 1. ---- */
  ranks: [
    { id: 1, name: "Đồng", elo: 900 },
    { id: 2, name: "Bạc", elo: 1200 },
    { id: 3, name: "Vàng", elo: 1400 },
    { id: 4, name: "Bạch Kim", elo: 1800 },
    { id: 5, name: "Kim Cương", elo: 2200 },
    { id: 6, name: "Người bản xứ", elo: 2600 }
  ],

  /* ---- Rank mode ----
     questions / minutes = length and time limit of one test.
     mix = share of grammar, vocab and IPA questions (relative weights).
     wild = chance that a question ignores the player's level; wildSpread = how far (in Elo) a wild question may be from the player.
     nearSpread = how far (in Elo) a normal question may be from the player.
     ipaLevel = difficulty level given to each kind of IPA question (vocab uses the highest level of the word). */
  rank: {
    questions: 30, minutes: 20,
    mix: { grammar: 1, vocab: 1, ipa: 1 },
    wild: 0.2, wildSpread: 900, nearSpread: 250,
    ipaLevel: { sound: "A2", odd: "B1", stress: "B2", type: "B1", quote: "B2" }
  },

  /* ---- Rank mode bonuses (Elo points added at the end of a test) ----
     quick: a correct answer in under quickSec seconds earns quickPts; a wrong answer after a quick tap (under quickSec) costs quickStrike.
     streak: consecutive correct answers; from streakFrom in a row each correct answer earns streakPts, capped at streakMax per test.
     win: the test ended with a net Elo gain; consecutive winning tests earn winPts each, capped at winMax.
     fast: a net Elo gain AND finished in under fastMin minutes earns fastPts. */
  bonus: {
    quickSec: 3, quickPts: 1, quickStrike: 2,
    streakFrom: 3, streakPts: 1, streakMax: 15,
    winPts: 5, winMax: 25,
    fastMin: 10, fastPts: 10
  },

  /* ---- Fonts: heading, content and small-label fonts (names from the Admin font list) ---- */
  fonts: { display: "Newsreader", body: "Bitter", mono: "Itim" }
};
