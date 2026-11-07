/* HOW TO EDIT: IPA chart (American English). One entry per sound inside "sounds".
   Fields: id (short ASCII name, also used for audio file names), symbol, type ("vowel", "diphthong" or "consonant"), group (heading shown on the chart),
   voice ("Hữu thanh" / "Vô thanh" or empty), examples (word + IPA), tip (how to make the sound), mistake (typical mistake of Vietnamese speakers),
   pairs (minimal pairs: a / b with their IPA). The Vietnamese explanations are drafts and still need a native review.
   AUDIO: put recordings in a folder, then set the folders below. Sound file = <sounds folder><id>.<ext>, example word file = <words folder><word>.<ext>
   (lowercase, other characters replaced by "-"). While a folder is empty, example words use the device voice and the sound button is hidden. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

OEL.ipa = {
  audio: { sounds: "", words: "", ext: "mp3" },   /* e.g. sounds: "audio/ipa/", words: "audio/words/" */
  sounds: [
    {
    "id": "dh",
    "symbol": "ð",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Hữu thanh",
    "examples": [{"word": "this", "ipa": "ðɪs"}, {"word": "mother", "ipa": "ˈmʌðɚ"}, {"word": "breathe", "ipa": "brið"}],
    "tip": "Vị trí giống /θ/ nhưng dây thanh rung.",
    "mistake": "Hay đọc thành /d/ hoặc /z/ (this nghe như “dis”).",
    "pairs": [{"a": "they", "aIpa": "ðeɪ", "b": "day", "bIpa": "deɪ"}]
    },
    {
    "id": "s",
    "symbol": "s",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Vô thanh",
    "examples": [{"word": "see", "ipa": "si"}, {"word": "bus", "ipa": "bʌs"}, {"word": "city", "ipa": "ˈsɪti"}],
    "tip": "Đầu lưỡi gần lợi trên, hơi rít ra qua một khe nhỏ. Dây thanh không rung.",
    "mistake": "Bỏ âm /s/ cuối từ (books, cats). Rất quan trọng khi nói số nhiều.",
    "pairs": [{"a": "bus", "aIpa": "bʌs", "b": "buzz", "bIpa": "bʌz"}, {"a": "see", "aIpa": "si", "b": "she", "bIpa": "ʃi"}]
    },
    {
    "id": "i",
    "symbol": "i",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "see", "ipa": "si"}, {"word": "eat", "ipa": "it"}, {"word": "key", "ipa": "ki"}],
    "tip": "Môi hơi bẹt như đang cười, lưỡi nâng cao và đưa ra trước. Đọc dài hơn chữ “i” trong tiếng Việt.",
    "mistake": "Hay đọc ngắn như /ɪ/, nên “sheep” nghe như “ship”.",
    "pairs": [{"a": "sheep", "aIpa": "ʃip", "b": "ship", "bIpa": "ʃɪp"}, {"a": "seat", "aIpa": "sit", "b": "sit", "bIpa": "sɪt"}]
    },
    {
    "id": "h",
    "symbol": "h",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Vô thanh",
    "examples": [{"word": "he", "ipa": "hi"}, {"word": "house", "ipa": "haʊs"}, {"word": "who", "ipa": "hu"}],
    "tip": "Chỉ thở hơi ra từ cổ họng, miệng đã ở vị trí của nguyên âm sau. Giống “h” tiếng Việt.",
    "mistake": "Bỏ âm /h/ ở đầu từ (hot nghe như “ot”).",
    "pairs": "no info"
    },
    {
    "id": "p",
    "symbol": "p",
    "type": "consonant",
    "group": "Âm tắc",
    "voice": "Vô thanh",
    "examples": [{"word": "pat", "ipa": "pæt"}, {"word": "pop", "ipa": "pɑp"}],
    "tip": "Hai môi mím chặt rồi bật hơi mạnh ra ngoài, dây thanh không rung.",
    "mistake": "Phát âm giống chữ 'p' cuối tiếng Việt (âm câm/không bật hơi), hoặc nhầm với /b/.",
    "pairs": [{"a": "pack", "aIpa": "pæk", "b": "back", "bIpa": "bæk"}, {"a": "palm", "aIpa": "pɑm", "b": "balm", "bIpa": "bɑm"}]
    },
    {
    "id": "b",
    "symbol": "b",
    "type": "consonant",
    "group": "Âm tắc",
    "voice": "Hữu thanh",
    "examples": [{"word": "bat", "ipa": "bæt"}, {"word": "boy", "ipa": "bɔɪ"}],
    "tip": "Hai môi mím chặt, bật hơi đồng thời rung dây thanh.",
    "mistake": "Đọc quá nhẹ hoặc nuốt âm khi đứng cuối từ (job nghe như 'chóp').",
    "pairs": [{"a": "bin", "aIpa": "bɪn", "b": "pin", "bIpa": "pɪn"}, {"a": "best", "aIpa": "bɛst", "b": "pest", "bIpa": "pɛst"}]
    },
    {
    "id": "t",
    "symbol": "t",
    "type": "consonant",
    "group": "Âm tắc",
    "voice": "Vô thanh",
    "examples": [{"word": "too", "ipa": "tu"}, {"word": "cat", "ipa": "kæt"}],
    "tip": "Đầu lưỡi chạm vào lợi trên, bật hơi mạnh ra, dây thanh không rung.",
    "mistake": "Nhầm lẫn với âm /t/ tiếng Việt vốn phát âm bằng cách đặt đầu lưỡi chạm vào mặt sau răng cửa.",
    "pairs": [{"a": "tin", "aIpa": "tɪn", "b": "din", "bIpa": "dɪn"}]
    },
    {
    "id": "d",
    "symbol": "d",
    "type": "consonant",
    "group": "Âm tắc",
    "voice": "Hữu thanh",
    "examples": [{"word": "dog", "ipa": "dɔg"}, {"word": "sad", "ipa": "sæd"}],
    "tip": "Đầu lưỡi đặt ở chân lợi trên, đẩy hơi ra và làm rung dây thanh.",
    "mistake": "Đọc thành âm /z/ hoặc biến thành âm /t/ ở cuối từ.",
    "pairs": [{"a": "doe", "aIpa": "doʊ", "b": "dough", "bIpa": "doʊ"}, {"a": "do", "aIpa": "du", "b": "to", "bIpa": "tu"}]
    },
    {
    "id": "k",
    "symbol": "k",
    "type": "consonant",
    "group": "Âm tắc",
    "voice": "Vô thanh",
    "examples": [{"word": "cat", "ipa": "kæt"}, {"word": "key", "ipa": "ki"}],
    "tip": "Gốc lưỡi nâng lên chạm vòm mềm, chặn hơi lại rồi bật mạnh ra ngoài.",
    "mistake": "Bỏ quên âm /k/ ở cuối từ (book nghe như 'bu').",
    "pairs": [{"a": "cat", "aIpa": "kæt", "b": "gat", "bIpa": "gæt"}]
    },
    {
    "id": "g",
    "symbol": "g",
    "type": "consonant",
    "group": "Âm tắc",
    "voice": "Hữu thanh",
    "examples": [{"word": "go", "ipa": "goʊ"}, {"word": "bag", "ipa": "bæg"}],
    "tip": "Gốc lưỡi chạm vòm mềm, bật hơi kết hợp rung dây thanh.",
    "mistake": "Phát âm quá yếu ở cuối từ khiến người nghe nhầm với /k/.",
    "pairs": [{"a": "goat", "aIpa": "goʊt", "b": "coat", "bIpa": "koʊt"}]
    },
    {
    "id": "f",
    "symbol": "f",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Vô thanh",
    "examples": [{"word": "fish", "ipa": "fɪʃ"}, {"word": "cuff", "ipa": "kʌf"}],
    "tip": "Răng cửa trên chạm nhẹ vào môi dưới, đẩy hơi qua khe hở.",
    "mistake": "Đọc giống âm 'ph' hoặc 'v' tiếng Việt.",
    "pairs": [{"a": "fan", "aIpa": "fæn", "b": "van", "bIpa": "væn"}]
    },
    {
    "id": "v",
    "symbol": "v",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Hữu thanh",
    "examples": [{"word": "van", "ipa": "væn"}, {"word": "leave", "ipa": "liv"}],
    "tip": "Vị trí răng cắn môi dưới giống /f/, nhưng dây thanh rung mạnh.",
    "mistake": "Hay đọc lẫn lộn thành /b/ hoặc /f/ (ví dụ 'very' đọc thành 'mery' hoặc 'fery').",
    "pairs": [{"a": "vest", "aIpa": "vɛst", "b": "best", "bIpa": "bɛst"}, {"a": "of", "aIpa": "ʌv", "b": "off", "bIpa": "ɔf"}]
    },
    {
    "id": "th_voiceless",
    "symbol": "θ",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Vô thanh",
    "examples": [{"word": "think", "ipa": "θɪŋk"}, {"word": "math", "ipa": "mæθ"}],
    "tip": "Đặt đầu lưỡi nhẹ giữa hai hàm răng, đẩy hơi thoát ra qua khe hở giữa lưỡi và răng trên.",
    "mistake": "Đọc thành âm /s/, /t/ hoặc /f/ (think nghe như 'sink' hoặc 'ting').",
    "pairs": [{"a": "three", "aIpa": "θri", "b": "free", "bIpa": "fri"}]
    },
    {
    "id": "z",
    "symbol": "z",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Hữu thanh",
    "examples": [{"word": "zip", "ipa": "zɪp"}, {"word": "buzz", "ipa": "bʌz"}],
    "tip": "Vị trí lưỡi giống /s/ nhưng làm rung dây thanh tạo tiếng vo ve.",
    "mistake": "Nuốt âm /z/ cuối từ số nhiều hoặc sở hữu cách (dogs đọc thành 'dog').",
    "pairs": [{"a": "zoo", "aIpa": "zu", "b": "sue", "bIpa": "su"}]
    },
    {
    "id": "sh",
    "symbol": "ʃ",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Vô thanh",
    "examples": [{"word": "shop", "ipa": "ʃɑp"}, {"word": "fish", "ipa": "fɪʃ"}],
    "tip": "Môi hơi chúm lại, lưỡi nâng gần vòm miệng, đẩy hơi thoát ra tạo tiếng gió lớn.",
    "mistake": "Phát âm giống âm 'x' hoặc 's' trong tiếng Việt.",
    "pairs": [{"a": "she", "aIpa": "ʃi", "b": "see", "bIpa": "si"}]
    },
    {
    "id": "zh",
    "symbol": "ʒ",
    "type": "consonant",
    "group": "Âm xát",
    "voice": "Hữu thanh",
    "examples": [{"word": "measure", "ipa": "ˈmɛʒɚ"}, {"word": "vision", "ipa": "ˈvɪʒən"}],
    "tip": "Khẩu hình giống /ʃ/ nhưng dây thanh rung.",
    "mistake": "Đọc thành âm /dʒ/ hoặc /z/.",
    "pairs": [{"a": "confusion", "aIpa": "kənˈfjuʒən", "b": "appusion", "bIpa": "no info"}]
    },
    {
    "id": "ch",
    "symbol": "tʃ",
    "type": "consonant",
    "group": "Âm tắc xát",
    "voice": "Vô thanh",
    "examples": [{"word": "chair", "ipa": "tʃɛɹ"}, {"word": "watch", "ipa": "wɑtʃ"}],
    "tip": "Kết hợp âm /t/ và /ʃ/, đầu lưỡi chạm lợi rồi kéo lùi nhẹ, môi tròn nhẹ.",
    "mistake": "Đọc nhầm thành âm 'ch' nhẹ hoặc /ʃ/ trong tiếng Việt.",
    "pairs": [{"a": "chip", "aIpa": "tʃɪp", "b": "ship", "bIpa": "ʃɪp"}]
    },
    {
    "id": "jh",
    "symbol": "dʒ",
    "type": "consonant",
    "group": "Âm tắc xát",
    "voice": "Hữu thanh",
    "examples": [{"word": "judge", "ipa": "dʒʌdʒ"}, {"word": "edge", "ipa": "ɛdʒ"}],
    "tip": "Tương tự /tʃ/ nhưng dây thanh rung (kết hợp /d/ và /ʒ/).",
    "mistake": "Đọc thành âm /z/ hoặc 'd' tiếng Việt.",
    "pairs": [{"a": "joke", "aIpa": "dʒoʊk", "b": "choke", "bIpa": "tʃoʊk"}]
    },
    {
    "id": "m",
    "symbol": "m",
    "type": "consonant",
    "group": "Âm mũi",
    "voice": "Hữu thanh",
    "examples": [{"word": "mom", "ipa": "mɑm"}, {"word": "map", "ipa": "mæp"}],
    "tip": "Khép chặt hai môi, không khí thoát ra qua đường mũi.",
    "mistake": "Nhầm lẫn khi phát âm ở cuối từ, đọc quá ngắn hoặc bị biến thành /n/.",
    "pairs": [{"a": "sum", "aIpa": "sʌm", "b": "sun", "bIpa": "sʌn"}]
    },
    {
    "id": "n",
    "symbol": "n",
    "type": "consonant",
    "group": "Âm mũi",
    "voice": "Hữu thanh",
    "examples": [{"word": "net", "ipa": "nɛt"}, {"word": "sun", "ipa": "sʌn"}],
    "tip": "Đầu lưỡi chạm lợi trên, hơi đi qua mũi.",
    "mistake": "Đọc lẫn với /ŋ/ khi ở cuối từ.",
    "pairs": [{"a": "sin", "aIpa": "sɪn", "b": "sing", "bIpa": "sɪŋ"}]
    },
    {
    "id": "ng",
    "symbol": "ŋ",
    "type": "consonant",
    "group": "Âm mũi",
    "voice": "Hữu thanh",
    "examples": [{"word": "sing", "ipa": "sɪŋ"}, {"word": "finger", "ipa": "ˈfɪŋgɚ"}],
    "tip": "Gốc lưỡi nâng lên chạm vòm mềm, chặn không khí qua miệng và đẩy hoàn toàn qua mũi.",
    "mistake": "Hay thêm âm /g/ hoặc /k/ ở đuôi (sing đọc thành sing-g).",
    "pairs": [{"a": "sin", "aIpa": "sɪn", "b": "sing", "bIpa": "sɪŋ"}]
    },
    {
    "id": "l",
    "symbol": "l",
    "type": "consonant",
    "group": "Âm tiếp cận",
    "voice": "Hữu thanh",
    "examples": [{"word": "lip", "ipa": "lɪp"}, {"word": "ball", "ipa": "bɔl"}],
    "tip": "Đầu lưỡi chạm lợi trên, luồng hơi đi qua hai bên mép lưỡi.",
    "mistake": "Đọc thành âm /n/ hoặc phát âm không rõ phần 'dark l' ở cuối từ.",
    "pairs": [{"a": "light", "aIpa": "laɪt", "b": "right", "bIpa": "ɹaɪt"}]
    },
    {
    "id": "r",
    "symbol": "ɹ",
    "type": "consonant",
    "group": "Âm tiếp cận",
    "voice": "Hữu thanh",
    "examples": [{"word": "red", "ipa": "ɹɛd"}, {"word": "car", "ipa": "kɑɹ"}],
    "tip": "Lưỡi uốn cong về phía sau vòm họng, không chạm vào vòm miệng, môi hơi tròn.",
    "mistake": "Đọc giống âm 'r' hoặc 'g' của tiếng Việt.",
    "pairs": [{"a": "right", "aIpa": "ɹaɪt", "b": "white", "bIpa": "waɪt"}]
    },
    {
    "id": "w",
    "symbol": "w",
    "type": "consonant",
    "group": "Âm tiếp cận",
    "voice": "Hữu thanh",
    "examples": [{"word": "water", "ipa": "ˈwɑtɚ"}, {"word": "win", "ipa": "wɪn"}],
    "tip": "Môi chúm tròn như chuẩn bị huýt sáo rồi mở nhanh ra khi phát âm nguyên âm tiếp theo.",
    "mistake": "Đọc nhầm thành âm /v/.",
    "pairs": [{"a": "witch", "aIpa": "wɪtʃ", "b": "itch", "bIpa": "ɪtʃ"}]
    },
    {
    "id": "y",
    "symbol": "j",
    "type": "consonant",
    "group": "Âm tiếp cận",
    "voice": "Hữu thanh",
    "examples": [{"word": "yes", "ipa": "jɛs"}, {"word": "you", "ipa": "ju"}],
    "tip": "Thân lưỡi nâng cao gần vòm cứng, tương tự âm 'y' (i dài) chuyển nhanh sang nguyên âm.",
    "mistake": "Phát âm quá nặng giống chữ 'gi' hoặc 'd' tiếng Việt.",
    "pairs": [{"a": "yes", "aIpa": "jɛs", "b": "guess", "bIpa": "gɛs"}]
    },
    {
    "id": "ih",
    "symbol": "ɪ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "sit", "ipa": "sɪt"}, {"word": "ship", "ipa": "ʃɪp"}],
    "tip": "Môi mở hờ, lưỡi hạ thấp và lùi về sau một chút so với /i/. Ngắn và lỏng hơn.",
    "mistake": "Đọc nhầm thành âm /i/ tiếng Việt.",
    "pairs": [{"a": "ship", "aIpa": "ʃɪp", "b": "sheep", "bIpa": "ʃip"}]
    },
    {
    "id": "eh",
    "symbol": "ɛ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "bed", "ipa": "bɛd"}, {"word": "let", "ipa": "lɛt"}],
    "tip": "Miệng mở rộng hơn /ɪ/, khóe miệng hơi bè ra, lưỡi hạ thấp.",
    "mistake": "Đọc thành âm 'e' tiếng Việt quá đóng.",
    "pairs": [{"a": "bed", "aIpa": "bɛd", "b": "bad", "bIpa": "bæd"}]
    },
    {
    "id": "ae",
    "symbol": "æ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "cat", "ipa": "kæt"}, {"word": "apple", "ipa": "ˈæpəl"}],
    "tip": "Miệng mở rộng theo chiều dọc và ngang, hạ cằm thấp xuống, đầu lưỡi chạm chân răng dưới.",
    "mistake": "Đọc lẫn lộn thành âm /e/ hoặc /ɑ/.",
    "pairs": [{"a": "cat", "aIpa": "kæt", "b": "cut", "bIpa": "kʌt"}]
    },
    {
    "id": "ah",
    "symbol": "ʌ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "cup", "ipa": "kʌp"}, {"word": "bus", "ipa": "bʌs"}],
    "tip": "Miệng mở tự nhiên, thả lỏng cơ miệng, phát âm ngắn giống âm 'ă' lai 'ơ' của tiếng Việt.",
    "mistake": "Đọc thành âm 'a' dài hoặc 'u' rõ của tiếng Việt.",
    "pairs": [{"a": "cut", "aIpa": "kʌt", "b": "cat", "bIpa": "kæt"}]
    },
    {
    "id": "schwa",
    "symbol": "ə",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "about", "ipa": "əˈbaʊt"}, {"word": "comma", "ipa": "ˈkɑmə"}],
    "tip": "Âm schwa (âm schwa/lướt), cực kỳ ngắn và lỏng miệng, chỉ xuất hiện ở âm tiết không được nhấn trọng âm.",
    "mistake": "Đọc rõ thành nguyên âm đầy đủ (như 'a' hoặc 'e').",
    "pairs": "no info"
    },
    {
    "id": "u_short",
    "symbol": "ʊ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "book", "ipa": "bʊk"}, {"word": "put", "ipa": "pʊt"}],
    "tip": "Môi tròn nhẹ, thả lỏng, không chúm quá chặt, phát âm ngắn hơn /u/.",
    "mistake": "Đọc thành âm /u/ dài hoặc /ʌ/.",
    "pairs": [{"a": "pull", "aIpa": "pʊl", "b": "pool", "bIpa": "pul"}]
    },
    {
    "id": "u_long",
    "symbol": "u",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "boot", "ipa": "but"}, {"word": "blue", "ipa": "blu"}],
    "tip": "Môi chúm tròn và đưa về phía trước, lưỡi nâng cao sát vòm mềm, kéo dài hơn /ʊ/.",
    "mistake": "Đọc quá ngắn như /ʊ/.",
    "pairs": [{"a": "pool", "aIpa": "pul", "b": "pull", "bIpa": "pʊl"}]
    },
    {
    "id": "o_open",
    "symbol": "ɔ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "caught", "ipa": "kɔt"}, {"word": "ball", "ipa": "bɔl"}],
    "tip": "Miệng mở tròn vừa, hạ cằm thấp hơn so với /u/.",
    "mistake": "Phát âm lẫn lộn với /ɑ/ hoặc âm /o/ tiếng Việt.",
    "pairs": [{"a": "caught", "aIpa": "kɔt", "b": "cot", "bIpa": "kɑt"}]
    },
    {
    "id": "ah_back",
    "symbol": "ɑ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "cot", "ipa": "kɑt"}, {"word": "father", "ipa": "ˈfɑðɚ"}],
    "tip": "Miệng mở rộng, lưỡi hạ thấp hoàn toàn ở phía sau.",
    "mistake": "Đọc nhầm thành âm /ɔ/ hoặc âm 'a' ngắn tiếng Việt.",
    "pairs": [{"a": "cot", "aIpa": "kɑt", "b": "caught", "bIpa": "kɔt"}]
    },
    {
    "id": "er_stressed",
    "symbol": "ɝ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "bird", "ipa": "bɝd"}, {"word": "fern", "ipa": "fɝn"}],
    "tip": "Nguyên âm uốn lưỡi (R-colored vowel) có mang trọng âm, lưỡi cong ngược lên giống /ɹ/ nhưng kéo dài như nguyên âm.",
    "mistake": "Đọc thành âm /ɜː/ Anh-Anh hoặc tách rời thành /ə/ + /r/.",
    "pairs": [{"a": "bird", "aIpa": "bɝd", "b": "bed", "bIpa": "bɛd"}]
    },
    {
    "id": "er_unstressed",
    "symbol": "ɚ",
    "type": "vowel",
    "group": "Nguyên âm đơn",
    "voice": "",
    "examples": [{"word": "teacher", "ipa": "ˈtitʃɚ"}, {"word": "butter", "ipa": "ˈbʌtɚ"}],
    "tip": "Giống /ɝ/ nhưng ở âm tiết không mang trọng âm (rất phổ biến cuối từ trong tiếng Anh Mỹ).",
    "mistake": "Phát âm quá nặng như âm /ɝ/ hoặc mất hẳn âm r cuối.",
    "pairs": "no info"
    },
    {
    "id": "ey",
    "symbol": "eɪ",
    "type": "diphthong",
    "group": "Nguyên âm đôi",
    "voice": "",
    "examples": [{"word": "face", "ipa": "feɪs"}, {"word": "day", "ipa": "deɪ"}],
    "tip": "Bắt đầu từ âm /ɛ/ hoặc /e/ rồi trượt nhanh về hướng âm /ɪ/. Khóe miệng kéo rộng sang hai bên.",
    "mistake": "Đọc thành âm 'e' đơn thuần của tiếng Việt.",
    "pairs": [{"a": "face", "aIpa": "feɪs", "b": "fish", "bIpa": "fɪʃ"}]
    },
    {
    "id": "ay",
    "symbol": "aɪ",
    "type": "diphthong",
    "group": "Nguyên âm đôi",
    "voice": "",
    "examples": [{"word": "time", "ipa": "taɪm"}, {"word": "pie", "ipa": "paɪ"}],
    "tip": "Bắt đầu bằng âm /ɑ/ rộng miệng rồi trượt mượt mà đến âm /ɪ/.",
    "mistake": "Đọc giống âm 'ai' tiếng Việt nhưng bị ngắn hoặc thiếu độ trượt.",
    "pairs": [{"a": "time", "aIpa": "taɪm", "b": "tame", "bIpa": "teɪm"}]
    },
    {
    "id": "oy",
    "symbol": "ɔɪ",
    "type": "diphthong",
    "group": "Nguyên âm đôi",
    "voice": "",
    "examples": [{"word": "boy", "ipa": "bɔɪ"}, {"word": "coin", "ipa": "kɔɪn"}],
    "tip": "Bắt đầu bằng âm tròn môi /ɔ/ rồi trượt đến âm /ɪ/.",
    "mistake": "Đọc thành âm 'oi' nặng hoặc nhầm lẫn với /oʊ/.",
    "pairs": [{"a": "boy", "aIpa": "bɔɪ", "b": "buoy", "bIpa": "buči"}]
    },
    {
    "id": "ow",
    "symbol": "oʊ",
    "type": "diphthong",
    "group": "Nguyên âm đôi",
    "voice": "",
    "examples": [{"word": "go", "ipa": "goʊ"}, {"word": "home", "ipa": "hoʊm"}],
    "tip": "Bắt đầu từ âm trung tâm /ə/ hoặc /o/ rồi chuyển động môi khép nhẹ lại về phía /ʊ/.",
    "mistake": "Đọc thành âm 'ô' đơn của tiếng Việt.",
    "pairs": [{"a": "boat", "aIpa": "boʊt", "b": "bite", "bIpa": "baɪt"}]
    },
    {
    "id": "aw",
    "symbol": "aʊ",
    "type": "diphthong",
    "group": "Nguyên âm đôi",
    "voice": "",
    "examples": [{"word": "now", "ipa": "naʊ"}, {"word": "house", "ipa": "haʊs"}],
    "tip": "Bắt đầu từ âm mở rộng /æ/ hoặc /ɑ/ rồi trượt đến âm tròn môi /ʊ/.",
    "mistake": "Đọc thành âm 'ao' tiếng Việt, môi không chuyển động đủ độ tròn.",
    "pairs": [{"a": "now", "aIpa": "naʊ", "b": "no", "bIpa": "noʊ"}]
    }
    
  ]
};
