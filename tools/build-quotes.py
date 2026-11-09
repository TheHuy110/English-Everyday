#!/usr/bin/env python3
"""Builds content/quotes.js (quotes + American IPA) from tools/quotes-source.txt.

Run:  pip install cmudict   then   python3 tools/build-quotes.py
The IPA comes from the CMU Pronouncing Dictionary (citation forms, no sentence-level reductions) and is written in the same style
as the Oxford word list on the site. It is a draft: read it once and correct content/quotes.js by hand where needed.
"""
import json, os, re, sys
import cmudict

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'quotes-source.txt')
OUT = os.path.join(HERE, '..', 'content', 'quotes.js')
D = cmudict.dict()

CONS = {'B': 'b', 'CH': 'tʃ', 'D': 'd', 'DH': 'ð', 'F': 'f', 'G': 'ɡ', 'HH': 'h', 'JH': 'dʒ', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'NG': 'ŋ', 'P': 'p',
        'R': 'r', 'S': 's', 'SH': 'ʃ', 'T': 't', 'TH': 'θ', 'V': 'v', 'W': 'w', 'Y': 'j', 'Z': 'z', 'ZH': 'ʒ'}
VOW = {'AA': 'ɑː', 'AE': 'æ', 'AO': 'ɔː', 'AW': 'aʊ', 'AY': 'aɪ', 'EH': 'e', 'EY': 'eɪ', 'IH': 'ɪ', 'OW': 'əʊ', 'OY': 'ɔɪ', 'UH': 'ʊ', 'UW': 'uː'}
# Consonant groups that can start an English syllable (used to place the stress mark before the onset of the stressed syllable).
ONSETS2 = {'p l', 'p r', 'b l', 'b r', 't r', 'd r', 'k l', 'k r', 'ɡ l', 'ɡ r', 'f l', 'f r', 'θ r', 'ʃ r', 't w', 'd w', 'k w', 'ɡ w', 's w', 's l', 's m', 's n',
           's p', 's t', 's k', 's f', 'θ w', 'h j', 'p j', 'b j', 'k j', 'f j', 'v j', 'm j', 'n j', 'l j', 's j', 't j', 'd j'}
ONSETS3 = {'s p l', 's p r', 's t r', 's k r', 's k l', 's k w', 's p j', 's t j', 's k j'}

# Words the dictionary does not have: write the IPA by hand here.
OVERRIDES = {'unexamined': 'ˌʌnɪɡˈzæmɪnd', 'droppeth': 'ˈdrɑːpəθ'}

def vowel_ipa(p, stress):
    if p == 'AH': return 'ə' if stress == '0' else 'ʌ'
    if p == 'ER': return 'ər' if stress == '0' else 'ɜːr'
    if p == 'IY': return 'i' if stress == '0' else 'iː'
    return VOW[p]

def word_ipa(w):
    if w.lower() in OVERRIDES: return OVERRIDES[w.lower()]
    prons = D.get(w.lower())
    if not prons: return None
    ph = prons[0]
    syl = []                      # (text, is_vowel, stress)
    for p in ph:
        m = re.match(r'([A-Z]+)(\d?)$', p)
        base, st = m.group(1), m.group(2)
        if base in CONS: syl.append((CONS[base], False, ''))
        else: syl.append((vowel_ipa(base, st), True, st))
    nv = sum(1 for x in syl if x[1])
    out = []
    for i, (t, v, st) in enumerate(syl):
        if v and nv > 1 and st in ('1', '2'):
            j = i                # walk back over the consonants before this vowel, keeping the longest legal onset
            while j > 0 and not syl[j - 1][1]: j -= 1
            cl = [x[0] for x in syl[j:i]]
            k = len(cl)
            if k >= 3 and ' '.join(cl[-3:]) in ONSETS3: k = 3
            elif k >= 2 and ' '.join(cl[-2:]) in ONSETS2: k = 2
            else: k = min(k, 1)
            pos = i - k
            out.insert(len(out) - (i - pos), 'ˈ' if st == '1' else 'ˌ')
        out.append(t)
    return ''.join(out)

def sentence_ipa(text):
    words = re.findall(r"[A-Za-z]+(?:'[A-Za-z]+)*", text.replace('’', "'"))
    res = []
    for w in words:
        ipa = word_ipa(w)
        if ipa is None:
            parts = [word_ipa(x) for x in w.split("'")]
            if None in parts: return None, w
            ipa = ''.join(parts)
        res.append(ipa)
    return ' '.join(res), None

def main():
    rows, bad = [], 0
    for ln, line in enumerate(open(SRC, encoding='utf-8'), 1):
        line = line.strip()
        if not line or line.startswith('#'): continue
        parts = [x.strip() for x in line.split('|', 2)]
        if len(parts) < 2: print('line %d: needs  author | quote | translation' % ln); bad += 1; continue
        author, text = parts[0], parts[1]
        vi = parts[2] if len(parts) > 2 else ''
        if not vi: print('line %d: no Vietnamese translation' % ln); bad += 1
        ipa, miss = sentence_ipa(text)
        if ipa is None: print('line %d: no pronunciation for "%s", quote skipped' % (ln, miss)); bad += 1; continue
        rows.append({'text': text, 'author': author, 'ipa': ipa, 'vi': vi})
    body = ',\n'.join('  ' + json.dumps(r, ensure_ascii=False) for r in rows)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write('/* HOW TO EDIT: Quotes for the IPA sentence test. Fields: text, author, ipa (American IPA, same style as the vocabulary list), vi (Vietnamese translation).\n'
                '   Generated from tools/quotes-source.txt by tools/build-quotes.py. You can also edit this file by hand; the IPA is a draft that needs a native review. */\n'
                'window.OEL = window.OEL || {};\nOEL.quotes = [\n' + body + '\n];\n')
    print('content/quotes.js written: %d quotes, %d problem(s).' % (len(rows), bad))
    return 1 if bad else 0

if __name__ == '__main__':
    sys.exit(main())
