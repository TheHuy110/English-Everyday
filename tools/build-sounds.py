#!/usr/bin/env python3
"""Builds content/sound-groups.js: the words of the vocabulary list grouped by a spelling and the sound it has in that word.

Run:  pip install cmudict   then   python3 tools/build-sounds.py
Used by the IPA test "choose the word whose underlined part sounds different" (the generated half; content/odd-sounds.csv stays as the hand-made half).
How it works: each word is aligned letter by letter with its CMU Pronouncing Dictionary pronunciation, using the spelling rules in RULES below
(for example "ea" may be /iː/, /e/, /eɪ/ or /ɜːr/). The cheapest alignment wins. If two equally cheap alignments disagree about a spelling, the word is
left out for that spelling. A word is used for a spelling only when that spelling occurs once in the word, and, for vowels, in the stressed syllable.
Output: OEL.soundGroups = { "ea": { "iː": ["t*ea*", ...], "e": ["br*ea*d", ...] }, ... }  (letters between * * are the underlined spelling).
To teach it a new spelling or a new way of reading one, add it to RULES (or SILENT) and run the tool again, then check the audit lines it prints.
"""
import json, os, re, sys
from functools import lru_cache
import cmudict

HERE = os.path.dirname(os.path.abspath(__file__))
VOCAB = os.path.join(HERE, '..', 'content', 'vocab.js')
OUT = os.path.join(HERE, '..', 'content', 'sound-groups.js')
D = cmudict.dict()

# spelling -> possible sounds (ARPAbet; a space joins several sounds that the spelling makes together, "" = silent)
RULES = {
    # single vowel letters
    'a': ['AE', 'EY', 'AA', 'AH', 'AO', 'EH', 'IH'], 'e': ['EH', 'IY', 'AH', 'IH'], 'i': ['IH', 'AY', 'IY', 'AH'],
    'o': ['AA', 'AO', 'OW', 'AH', 'UW', 'UH', 'IH'], 'u': ['AH', 'UW', 'UH', 'Y UW', 'IH', 'EH'], 'y': ['IH', 'AY', 'IY', 'Y', 'AH'],
    # vowel teams
    'ai': ['EY', 'EH', 'AE', 'IH'], 'ay': ['EY', 'IY', 'EH'], 'au': ['AO', 'AA', 'AE', 'AW'], 'aw': ['AO', 'AA'], 'ea': ['IY', 'EH', 'EY', 'AA', 'IH', 'AH'],
    'ee': ['IY', 'IH'], 'ei': ['EY', 'IY', 'AY', 'EH', 'IH'], 'eu': ['UW', 'Y UW'], 'ew': ['UW', 'Y UW', 'OW'], 'ey': ['EY', 'IY', 'AY'],
    'ie': ['IY', 'AY', 'EH', 'IH', 'AH'], 'oa': ['OW', 'AO'], 'oe': ['OW', 'UW', 'AH'], 'oi': ['OY'], 'oy': ['OY'], 'oo': ['UW', 'UH', 'AH', 'AO', 'OW'],
    'ou': ['AW', 'AH', 'UW', 'OW', 'UH', 'AO', 'AA'], 'ow': ['AW', 'OW', 'AH'], 'ue': ['UW', 'Y UW'], 'ui': ['UW', 'IH', 'Y UW'],
    'igh': ['AY'], 'eigh': ['EY', 'AY'], 'augh': ['AO', 'AE F', 'AA F', 'AO'], 'ough': ['OW', 'AH F', 'AO F', 'AA F', 'UW', 'AW', 'AO', 'AA', 'AH', 'AH P'], 'ind': ['AY N D'],
    # vowel + r
    'ar': ['AA R', 'AO R', 'EH R', 'ER', 'AH R'], 'er': ['ER', 'EH R', 'IH R', 'AH R'], 'ir': ['ER', 'IH R', 'AY ER', 'AY R'], 'or': ['AO R', 'ER', 'AH R'],
    'ur': ['ER', 'AH R', 'UH R'], 'ear': ['IH R', 'ER', 'EH R', 'AA R'], 'air': ['EH R'], 'are': ['EH R', 'AA R'], 'ere': ['IH R', 'EH R', 'ER'],
    'ire': ['AY ER', 'AY R'], 'ore': ['AO R'], 'ure': ['UH R', 'Y UH R', 'ER'], 'our': ['AO R', 'AW ER', 'ER', 'UH R'], 'oor': ['UH R', 'AO R'],
    'eer': ['IH R'], 'eir': ['EH R'], 'ier': ['IH R', 'AY ER'], 'oar': ['AO R'], 'ore': ['AO R'],
    # consonants
    'b': ['B'], 'c': ['K', 'S', 'SH'], 'ch': ['CH', 'K', 'SH'], 'ck': ['K'], 'd': ['D', 'JH', 'T'], 'dg': ['JH'], 'f': ['F', 'V'], 'g': ['G', 'JH', 'ZH'],
    'gh': ['G', 'F', ''], 'gn': ['N'], 'h': ['HH'], 'j': ['JH', 'Y'], 'k': ['K'], 'kn': ['N'], 'l': ['L'], 'm': ['M'], 'mb': ['M'], 'n': ['N', 'NG'], 'ng': ['NG', 'NG G'],
    'p': ['P'], 'ph': ['F'], 'q': ['K'], 'qu': ['K W', 'K'], 'r': ['R'], 's': ['S', 'Z', 'SH', 'ZH'], 'sh': ['SH'], 'ss': ['S', 'SH', 'Z'], 't': ['T', 'CH', 'SH'],
    'th': ['TH', 'DH', 'T'], 'ti': ['SH', 'CH'], 'ci': ['SH'], 'si': ['SH', 'ZH'], 'tch': ['CH'], 'v': ['V'], 'w': ['W'], 'wh': ['W', 'HH'], 'wr': ['R'], 'x': ['K S', 'G Z', 'Z'],
    'z': ['Z', 'S'], 'zz': ['Z', 'T S'],
}
for c in 'bdfglmnprtz':                  # double letters read like the single one (butter, little, ...)
    RULES[c + c] = RULES.get(c + c, RULES[c])
SILENT = {'e', 'h', 'b', 'k', 'w', 'g', 'l', 't', 'n', 'u', 'a', 'd', 'p', 'c', 's', 'i', 'o', 'y'}   # any of these may be silent, at a price
COST_GRAPHEME, COST_SILENT = 1.0, 3.0
MAXG = max(len(g) for g in RULES)
RULE_SEQ = {g: [tuple(s.split()) for s in alts] for g, alts in RULES.items()}

VOWELS = {'AA', 'AE', 'AH', 'AO', 'AW', 'AY', 'EH', 'ER', 'EY', 'IH', 'IY', 'OW', 'OY', 'UH', 'UW'}
IPA = {'AA': 'ɑː', 'AE': 'æ', 'AH': 'ʌ', 'AO': 'ɔː', 'AW': 'aʊ', 'AY': 'aɪ', 'EH': 'e', 'ER': 'ɜːr', 'EY': 'eɪ', 'IH': 'ɪ', 'IY': 'iː', 'OW': 'oʊ', 'OY': 'ɔɪ',
       'UH': 'ʊ', 'UW': 'uː', 'B': 'b', 'CH': 'tʃ', 'D': 'd', 'DH': 'ð', 'F': 'f', 'G': 'ɡ', 'HH': 'h', 'JH': 'dʒ', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'NG': 'ŋ',
       'P': 'p', 'R': 'r', 'S': 's', 'SH': 'ʃ', 'T': 't', 'TH': 'θ', 'V': 'v', 'W': 'w', 'Y': 'j', 'Z': 'z', 'ZH': 'ʒ'}
# sounds that many learners (and American English itself) merge: never put them in the same question (cot / caught)
NEAR = [{'ɑː', 'ɔː'}, {'ɑːr', 'ɔːr'}]
NO_TARGET = {'d'}                 # -ed endings (shaped /t/, child /d/): true, but too dull to ask about
MIN_MAIN, MIN_ODD = 4, 2          # words needed in the group that gives the three same-sound words / the odd word


def align_all(word, ph):
    """Every cheapest way to read `word` as the sounds `ph`: lists of (spelling, start, sounds)."""
    n, m = len(word), len(ph)
    plain = tuple(re.sub(r'\d', '', p) for p in ph)

    @lru_cache(maxsize=None)
    def best(i, j):
        if i == n: return (0.0, [[]]) if j == m else (None, [])
        opts = []
        for L in range(min(MAXG, n - i), 0, -1):
            g = word[i:i + L]
            for seq in RULE_SEQ.get(g, ()):
                if plain[j:j + len(seq)] == seq:
                    c, paths = best(i + L, j + len(seq))
                    if c is not None: opts.append((c + COST_GRAPHEME + (0.5 if not seq else 0), [[(g, i, j, j + len(seq))] + p for p in paths]))
        if word[i] in SILENT:
            c, paths = best(i + 1, j)
            if c is not None: opts.append((c + COST_SILENT, [[('~' + word[i], i, j, j)] + p for p in paths]))
        if not opts: return (None, [])
        low = min(c for c, _ in opts)
        merged = []
        for c, paths in opts:
            if abs(c - low) < 1e-9: merged.extend(paths)
        return (low, merged[:40])

    cost, paths = best(0, 0)
    return cost, paths


def collect(word, ph):
    """-> list of (spelling, start, ipa label, underlined word) that every cheapest alignment agrees on."""
    cost, paths = align_all(word, ph)
    if cost is None or not paths: return []
    sig = [set((g, i, j0, j1) for g, i, j0, j1 in p if not g.startswith('~')) for p in paths]
    agreed = set.intersection(*sig)
    units = [u for u in paths[0] if (u[0], u[1], u[2], u[3]) in agreed]
    out = []
    for g, i, j0, j1 in units:
        if sum(1 for u in paths[0] if u[0] == g) != 1: continue          # the same spelling twice: skip, nobody knows which one is underlined
        seq = ph[j0:j1]
        if any(re.sub(r'\d', '', p) in VOWELS and not p.endswith('1') for p in seq): continue   # vowel not in the stressed syllable
        if not seq and g != 'gh': continue
        label = ''.join(IPA[re.sub(r'\d', '', p)] for p in seq) or '∅'
        if label == 'ʌr': label = 'ɜːr'
        out.append((g, label, word[:i] + '*' + g + '*' + word[i + len(g):]))
    return out


def main():
    src = open(VOCAB, encoding='utf-8').read()
    rows = json.loads(src[src.index('[\n'):src.rindex(']') + 1])
    words = sorted({str(r[1]).lower() for r in rows if re.fullmatch(r'[a-z]{3,}', str(r[1]).lower())})
    groups, used = {}, 0
    for w in words:
        prons = D.get(w)
        if not prons or len(prons) != 1: continue                         # several pronunciations: skip, like build-stress.py
        found = collect(w, prons[0])
        if found: used += 1
        for g, label, marked in found:
            groups.setdefault(g, {}).setdefault(label, []).append(marked)
    kept = {}
    for g, by in groups.items():
        if g in NO_TARGET: continue
        by = {l: ws for l, ws in by.items() if len(ws) >= MIN_ODD}
        mains = [l for l, ws in by.items() if len(ws) >= MIN_MAIN]
        ok = any(any(o != m and not any({o, m} == p for p in NEAR) for o in by) for m in mains)
        if ok: kept[g] = {l: sorted(ws) for l, ws in sorted(by.items(), key=lambda kv: -len(kv[1]))}
    body = ',\n'.join('  ' + json.dumps(g, ensure_ascii=False) + ': ' + json.dumps(kept[g], ensure_ascii=False) for g in sorted(kept))
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write('/* GENERATED by tools/build-sounds.py - do not edit by hand. Words grouped by spelling and by the sound that spelling has in the word; letters between * * are underlined. */\n'
                'window.OEL = window.OEL || {};\nOEL.soundGroups = {\n' + body + '\n};\n')
    print('content/sound-groups.js written. Words used:', used, 'of', len(words))
    for g in sorted(kept):
        print('  %-5s %s' % (g, '  '.join('/%s/ %d' % (l, len(ws)) for l, ws in kept[g].items())))
    if '--audit' in sys.argv:
        import random
        random.seed(1)
        for g in sorted(kept):
            for l, ws in kept[g].items():
                print('AUDIT %s /%s/: %s' % (g, l, ', '.join(random.sample(ws, min(6, len(ws))))))


if __name__ == '__main__':
    sys.exit(main())
