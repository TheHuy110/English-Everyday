/* HOW TO EDIT: Grammar rules. Copy an existing { ... } entry and change it. Fields: title, level (A1-C2), category, rule (use **bold** for key words), form, examples (list), wrong, right. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

/* ---------- Ngữ pháp ---------- */
OEL.grammar = [
  
  
  { title: "Thì hiện tại đơn", grammarId: "001", level: "A1", category: "Thì",
    rule: "Dùng thì hiện tại đơn cho thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình cố định. Với các chủ ngữ số ít (**he**, **she**, **it**) hoặc danh từ không đếm được, động từ phải thêm **-s hoặc -es**. *Mẹo chính tả:* Động từ kết thúc bằng phụ âm + **y** đổi thành **-ies** (**fly** -> **flies**), nhưng nguyên âm + **y** chỉ thêm **-s** (**play** -> **plays**).",
    form: ["S + V(s/es)", "S + do / does + not + V-bare", "Do / Does + S + V-bare?"],
    examples: ["She walks to work every day.", "Water boils at 100 degrees Celsius.", "The train leaves at 7:15."],
    wrong: "He go to school by bus.", right: "He goes to school by bus.",
    more: [
      { type: "extension", text: "Dùng thì hiện tại đơn trong mệnh đề thời gian và mệnh đề **if** để nói về tương lai: **When** she arrives, we will start. **If** it rains, we'll stay home." },
      { type: "nuance", text: "Với **always**, thì hiện tại tiếp diễn thêm sắc thái bực mình: **He is always losing his keys**. Còn **He always loses his keys** chỉ nêu một thói quen trung tính, không mang cảm xúc." },
      { type: "advanced", text: "Hiện tại lịch sử (**historic present**): khi kể chuyện quá khứ, người nói dùng thì hiện tại đơn cho sinh động (**So I walk in, and he says nothing**). Cách này cũng thường gặp trong tiêu đề báo chí." }
    ]
  },
  { title: "Thì hiện tại tiếp diễn", grammarId: "002", level: "A1", category: "Thì",
    rule: "Dùng cho hành động đang diễn ra lúc nói hoặc quanh thời điểm hiện tại, và cho tình huống tạm thời. Các động từ chỉ trạng thái như **know**, **like**, **want**, **believe** thường không dùng với **-ing**.",
    form: ["S + am / is / are + V-ing", "S + am / is / are + not + V-ing", "Am / Is / Are + S + V-ing?"],
    examples: ["I'm reading a book right now.", "They are staying with friends this week.", "Is it raining?"],
    wrong: "I am knowing the answer.", right: "I know the answer.",
    more: [
      { type: "extension", text: "Dùng cho kế hoạch cá nhân đã thu xếp trong tương lai gần (**future arrangement**): **We're meeting at six tomorrow**." },
      { type: "nuance", text: "Một số động từ chỉ trạng thái dùng được với **-ing** khi mang nghĩa hành động: **I'm thinking about it** (đang cân nhắc) khác **I think it's good** (nghĩ rằng/tin là). Tương tự, **I'm having lunch** (đang ăn) khác **I have a car** (sở hữu)." }
    ]
  },
  { title: "Mạo từ", grammarId: "003", level: "A1", category: "Mạo từ",
    rule: "Dùng **a / an** cho một người hoặc vật chưa xác định, hoặc khi nhắc đến lần đầu. Dùng **the** khi người nói và người nghe đều biết đó là cái nào. Không dùng mạo từ với danh từ số nhiều nói chung và danh từ không đếm được. *Mẹo chính tả:* Việc chọn **a** hay **an** phụ thuộc hoàn toàn vào **nguyên âm phiên âm** (sound) chứ không phải chữ cái viết (letter) (ví dụ: **an hour** vì **h** câm, phát âm bắt đầu bằng **/aʊ/**, nhưng **a university** vì bắt đầu bằng bán nguyên âm **/j/**).",
    form: ["a + N (bắt đầu bằng âm phụ âm)", "an + N (bắt đầu bằng âm nguyên âm)", "the + N (xác định / duy nhất)"],
    examples: ["I saw a dog. The dog was huge.", "She is an engineer.", "I love music."],
    wrong: "She is engineer.", right: "She is an engineer.",
    more: [
      { type: "extension", text: "Dùng **the** với tính từ để chỉ cả một nhóm người trong xã hội: **the poor**, **the elderly**, **the young**." },
      { type: "nuance", text: "Khi nói chung về một loại, có thể dùng số nhiều không mạo từ (**Dogs are loyal**) hoặc **a** + danh từ số ít (**A dog is loyal**). **The** + danh từ số ít (**The dog is loyal**) nghe trang trọng, thường dùng khi nói về loài hoặc phát minh." },
      { type: "advanced", text: "Một số cụm cố định không dùng mạo từ (**zero article**): **go to school**, **at night**, **by bus**. Cách dùng có thể khác giữa Anh-Anh và Anh-Mỹ: **in hospital** (Anh) và **in the hospital** (Mỹ)." }
    ]
  },
  { title: "Thì quá khứ đơn", grammarId: "004", level: "A2", category: "Thì",
    rule: "Dùng cho hành động đã kết thúc tại một thời điểm xác định trong quá khứ. Động từ có quy tắc thêm **-ed**. Động từ bất quy tắc đổi dạng và phải học thuộc. Sau **did** hoặc **didn't**, bắt buộc dùng động từ nguyên mẫu (**V-bare**).",
    form: ["S + V-ed / V2", "S + did + not + V-bare", "Did + S + V-bare?"],
    examples: ["We visited my grandparents last summer.", "I didn't see him yesterday.", "Did you call her?"],
    wrong: "I didn't went to the party.", right: "I didn't go to the party.",
    more: [
      { type: "extension", text: "**Used to** + **V-bare** nói về thói quen hoặc trạng thái từng xảy ra thường xuyên trong quá khứ nay đã chấm dứt: **I used to live in Huế**." },
      { type: "advanced", text: "Dùng thì quá khứ đơn để tạo sự lịch sự, mềm mỏng hơn khi đưa ra yêu cầu hoặc nhờ vả: **I was wondering if you could help me**. Ở đây quá khứ không nói về thời gian quá khứ mà giúp hạ bớt độ đường đột của lời nhờ." }
    ]
  },
  { title: "Danh từ đếm được và không đếm được", grammarId: "005", level: "A2", category: "Danh từ",
    rule: "Danh từ đếm được có thể đếm bằng số (**one chair**, **two chairs**). Danh từ không đếm được thì không (**water**, **advice**, **information**). Dùng **many / few** với danh từ đếm được số nhiều và **much / little** với danh từ không đếm được. **A lot of** dùng được với cả hai.",
    form: ["many / few + N (số nhiều)", "much / little + N (không đếm được)", "a lot of / plenty of + N (cả hai loại)"],
    examples: ["How many bottles do we need?", "How much water is left?", "She gave me some good advice."],
    wrong: "He gave me many informations.", right: "He gave me a lot of information.",
    more: [
      { type: "nuance", text: "Phân biệt **a few / a little** (mang nghĩa tích cực: có một chút, đủ dùng) với **few / little** (mang nghĩa phủ định: rất ít, hầu như không đủ)." },
      { type: "advanced", text: "Một số danh từ thay đổi ý nghĩa hoàn toàn tùy thuộc vào việc đếm được hay không: **coffee** (không đếm được: chất cà phê) vs **a coffee** (đếm được: một tách cà phê), **paper** (giấy) vs **a paper** (tờ báo/bài báo khoa học)." }
    ]
  },
  { title: "So sánh hơn và so sánh nhất", grammarId: "006", level: "A2", category: "Tính từ",
    rule: "Thêm **-er / -est** vào tính từ ngắn. Dùng **more / most** với tính từ dài. Không dùng lặp cả hai cùng lúc (**more cheaper** là lỗi thừa từ). *Mẹo chính tả:* Tính từ 2 âm tiết tận cùng bằng **-y** (**happy**, **easy**) đổi **y** -> **i** rồi thêm **-er / -est**.",
    form: ["S + V + adj-er + than + N", "S + V + the + adj-est", "S + V + more + adj + than + N", "S + V + the most + adj"],
    examples: ["This bag is cheaper than that one.", "It was the most interesting film of the year.", "She is taller than her brother."],
    wrong: "This bag is more cheaper.", right: "This bag is cheaper.",
    more: [
      { type: "extension", text: "Phân biệt **farther** (chỉ khoảng cách địa lý vật lý) và **further** (khoảng cách vật lý lẫn chiều sâu tinh thần/mức độ như **further information**)." },
      { type: "advanced", text: "Nhấn mạnh mức độ so sánh hơn bằng cách thêm **much**, **far**, **a lot** vào trước cấu trúc: **This car is much more expensive than that one**." }
    ]
  },
  { title: "Thì hiện tại hoàn thành", grammarId: "007", level: "B1", category: "Thì",
    rule: "Nối quá khứ với hiện tại: diễn tả trải nghiệm (**ever**, **never**), tin mới/hành động vừa xảy ra (**just**, **already**), và tình huống bắt đầu trong quá khứ còn tiếp tục ở hiện tại. Không dùng với mốc thời gian đã kết thúc như **yesterday** hoặc **in 2019**.",
    form: ["S + have / has + V3/ed", "S + have / has + not + V3/ed", "Have / Has + S + V3/ed?"],
    examples: ["I have lived here for five years.", "She has just left.", "Have you ever tried sushi?"],
    wrong: "I have seen him yesterday.", right: "I saw him yesterday.",
    more: [
      { type: "extension", text: "**For** + khoảng thời gian (**for 5 years**), **since** + mốc thời gian (**since 2019**): **I've lived here for five years. I've lived here since 2019**." },
      { type: "nuance", text: "**Have been to** nghĩa là đã từng đến và đã quay về (**She has been to Paris**). **Have gone to** nghĩa là đã đi và hiện chưa về (**She has gone to Paris**)." },
      { type: "nuance", text: "Anh-Mỹ hay dùng quá khứ đơn với **just**, **already**, **yet**: **Did you eat yet?** Anh-Anh thường dùng hiện tại hoàn thành: **Have you eaten yet?**" }
    ]
  },
  { title: "Động từ khuyết thiếu", grammarId: "008", level: "B1", category: "Động từ",
    rule: "**Can**, **could**, **must**, **should**, **might** và **will** đi trực tiếp với **động từ nguyên mẫu không to** (**V-bare**). Chúng không thêm **-s** ở ngôi thứ ba và không có “to” theo sau.",
    form: ["S + modal verb + V-bare", "S + ought to + V-bare"],
    examples: ["You should rest.", "It might rain later.", "You must wear a seat belt."],
    wrong: "She can to swim.", right: "She can swim.",
    more: [
      { type: "nuance", text: "Sắc thái khuyên bảo: **Should** đưa ra lời khuyên cá nhân nhẹ nhàng; **Ought to** mang nghĩa vụ hoặc chuẩn mực đạo đức xã hội." },
      { type: "advanced", text: "Phân biệt **must** (sự bắt buộc chủ quan từ bản thân người nói) và **have to** (sự bắt buộc khách quan từ quy định/luật lệ bên ngoài)." }
    ]
  },
  { title: "Câu điều kiện loại 1 và loại 2", grammarId: "009", level: "B1", category: "Câu điều kiện",
    rule: "Loại 1 nói về tình huống có thật hoặc có khả năng xảy ra trong tương lai. Loại 2 nói về tình huống không có thật hoặc khó xảy ra ở hiện tại. Không dùng **will** hoặc **would** ngay bên trong mệnh đề **if**.",
    form: ["Loại 1: If + S + hiện tại đơn, S + will + V-bare", "Loại 2: If + S + quá khứ đơn (were cho mọi ngôi), S + would + V-bare"],
    examples: ["If it rains, we'll stay home.", "If I had more time, I would learn the piano.", "If I were you, I would apologise."],
    wrong: "If I will see him, I tell him.", right: "If I see him, I'll tell him.",
    more: [
      { type: "extension", text: "Có thể dùng **should**, **might**, **could** thay cho **will**, **would** để giảm độ chắc chắn của kết quả: **If it rains, we might stay home**." },
      { type: "nuance", text: "**Unless** tương đương với **if ... not**: **Unless you hurry, you'll be late** tương đương **If you don't hurry, you'll be late**." },
      { type: "advanced", text: "Ở câu điều kiện loại 2, dùng **were** cho mọi ngôi trong văn viết trang trọng: **If I were you...** Trong văn nói giao tiếp, **If I was you** cũng được chấp nhận." }
    ]
  },
  { title: "Câu bị động", grammarId: "010", level: "B1", category: "Động từ",
    rule: "Dùng câu bị động khi hành động hoặc đối tượng chịu tác động quan trọng hơn người thực hiện. Chia động từ **be** đúng thì của câu gốc, rồi thêm quá khứ phân từ (**V3/ed**).",
    form: ["S + be (chia đúng thì) + V3/ed + (by + tác nhân)"],
    examples: ["The bridge was built in 1998.", "English is spoken in many countries.", "The report is being written now."],
    wrong: "The report is writing now.", right: "The report is being written now.",
    more: [
      { type: "nuance", text: "Vị trí trạng từ: Trạng từ chỉ nơi chốn đứng *trước* **by + tác nhân**, trạng từ chỉ thời gian đứng *sau* **by + tác nhân**." },
      { type: "advanced", text: "Các nội động từ (**intransitive verbs** như **happen**, **arrive**, **die**, **disappear**) không có tân ngữ nên KHÔNG BAO GIỜ được chia ở dạng bị động." }
    ]
  },


  { title: "Mệnh đề quan hệ (Relative clauses)", grammarId: "011", level: "B2", category: "Mệnh đề",
    rule: "Dùng đại từ quan hệ nối mệnh đề bổ nghĩa cho danh từ. *Phân biệt sắc thái:* **Who** làm chủ ngữ/tân ngữ chỉ người; **Whom** *chỉ làm tân ngữ* chỉ người (trang trọng); **Whose** thay cho tính từ sở hữu + danh từ (không có mạo từ theo sau); **That** thay cho **who/which** trong mệnh đề xác định, nhưng KHÔNG ĐƯỢC đứng sau dấu phẩy hoặc giới từ.",
    form: "N + who/which/that/whose/where + clause",
    examples: ["The woman who called is my aunt.", "The man to whom I spoke was very polite.", "The book whose cover is red belongs to me."],
    wrong: "The book which I bought it was expensive.", right: "The book which I bought was expensive." },

  { title: "Câu gián tiếp (Reported speech)", grammarId: "012", level: "B2", category: "Mệnh đề",
    rule: "Thuật lại lời nói của người khác. Khi động từ tường thuật ở quá khứ (**said**, **told**), phải **lùi một thì** và đổi đại từ, từ chỉ thời gian/nơi chốn (**now** -> **then**, **today** -> **that day**, **here** -> **there**). *Bẫy ngữ pháp quan trọng:* Trong câu hỏi gián tiếp, câu hỏi phải đổi về **trật tự câu khẳng định** (S + V), triệt tiêu trợ động từ **do/does/did**.",
    form: "S + said (that) + clause (lùi thì)<br>S + asked + wh-word/if/whether + S + V (khẳng định)",
    examples: ["“I am tired,” she said. -> She said she was tired.", "He asked me where I lived.", "She asked if I was ready."],
    wrong: "He asked me where do I live.", right: "He asked me where I lived." },

  { title: "Câu điều kiện loại 3", grammarId: "013", level: "B2", category: "Câu điều kiện",
    rule: "Dùng để diễn tả giả định trái ngược hoàn toàn với sự thật trong quá khứ và thể hiện sự tiếc nuối hoặc trách móc về kết quả quá khứ. *Sắc thái nâng cao:* Có thể dùng **could have + V3** (chỉ khả năng đã có thể xảy ra) hoặc **might have + V3** (chỉ sự phỏng đoán trong quá khứ) để thay thế cho **would have + V3** tùy ngữ cảnh.",
    form: "If + S + had + V3/ed, S + would/could/might have + V3/ed",
    examples: ["If I had studied, I would have passed.", "If she hadn't missed the bus, she could have arrived on time."],
    wrong: "If I would have studied, I would have passed.", right: "If I had studied, I would have passed." },

  { title: "Đảo ngữ để nhấn mạnh (Inversion)", grammarId: "014", level: "C1", category: "Văn phong",
    rule: "Đưa các phó từ/trạng từ mang nghĩa phủ định hoặc hạn chế (**never**, **hardly**, **seldom**, **rarely**, **little**, **not only**) lên đầu câu nhằm gây ấn tượng mạnh hoặc tạo văn phong trang trọng. *Cấu trúc:* Đảo trợ động từ hoặc **be** lên trước chủ ngữ giống như cấu trúc câu hỏi nghi vấn.",
    form: "Negative adverb + trợ động từ / be + S + V-bare",
    examples: ["Never have I seen such a beautiful sunset.", "Not only did she win, but she also broke the record.", "Little did he know about the surprise."],
    wrong: "Never I have seen such a sunset.", right: "Never have I seen such a sunset." },

  { title: "Thì hiện tại hoàn thành tiếp diễn (Present perfect continuous)", grammarId: "015", level: "B1", category: "Thì",
    rule: "Diễn tả hành động bắt đầu trong quá khứ, kéo dài liên tục đến hiện tại và có khả năng tiếp diễn. *So sánh sắc thái với Present Perfect:* **Present perfect** nhấn mạnh *kết quả/số lượng* (*I have read 3 books*); **Present perfect continuous** nhấn mạnh *quá trình/thời lượng liên tục* hoặc để lại dấu vết ở hiện tại (*I have been reading for 3 hours / My hands are dirty because I've been gardening*).",
    form: "S + have/has + been + V-ing",
    examples: ["It has been raining since this morning.", "They have been working here for three hours.", "Why are your eyes red? - I've been crying."],
    wrong: "She has learning English for two years.", right: "She has been learning English for two years." },

  { title: "Thì quá khứ tiếp diễn (Past continuous)", grammarId: "016", level: "A2", category: "Thì",
    rule: "Diễn tả hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc hai hành động xảy ra song song (**while**). Khi phối hợp thì với **when**: hành động đang diễn ra chia quá khứ tiếp diễn, hành động đột ngột xen vào chia quá khứ đơn. *Lưu ý:* Tránh lầm lẫn giữa **when** (thường đi với quá khứ đơn) và **while** (thường đi với quá khứ tiếp diễn).",
    form: "S + was/were + V-ing",
    examples: ["I was reading a book at 8 PM last night.", "They were playing tennis when it started to rain.", "While I was cooking, my husband was watching TV."],
    wrong: "She was cook dinner when I arrived.", right: "She was cooking dinner when I arrived." },

  { title: "Thì quá khứ hoàn thành (Past perfect)", grammarId: "017", level: "B1", category: "Thì",
    rule: "Diễn tả một hành động xảy ra và hoàn thành *trước* một hành động khác hoặc một mốc thời gian khác trong quá khứ. *Mẹo liên kết:* Thường đi kèm các từ nối **before**, **after**, **by the time**. Công thức phối hợp: **By the time + quá khứ đơn, quá khứ hoàn thành**.",
    form: "S + had + V3/ed",
    examples: ["By the time we arrived, the train had left.", "She had already eaten before her friends came.", "He passed the exam because he had studied hard."],
    wrong: "They had finish the project before the deadline.", right: "They had finished the project before the deadline." },

  { title: "Thì quá khứ hoàn thành tiếp diễn (Past perfect continuous)", grammarId: "018", level: "B2", category: "Thì",
    rule: "Nhấn mạnh quá trình kéo dài liên tục của một hành động xảy ra trước một thời điểm hoặc một hành động khác trong quá khứ. *Sắc thái:* Giúp giải thích nguyên nhân cho một trạng thái trong quá khứ (*He was tired because he had been running*).",
    form: "S + had + been + V-ing",
    examples: ["They had been playing football for two hours before it started to rain.", "She was tired because she had been working all night.", "He had been living in Hanoi for five years before he moved."],
    wrong: "We had playing games when the lights went out.", right: "We had been playing games when the lights went out." },

  { title: "Thì tương lai đơn (Future simple)", grammarId: "019", level: "A2", category: "Thì",
    rule: "Dùng **will** cho quyết định bộc phát ngay tại thời điểm nói, lời hứa, lời đề nghị giúp đỡ, hoặc dự đoán chủ quan không có bằng chứng trực quan. *Phân biệt sắc thái:* Khác với **be going to** (dự định từ trước / dự đoán có căn cứ mắt thấy tai nghe).",
    form: "S + will + V-bare",
    examples: ["I will help you with your heavy bag.", "I think it will rain tomorrow.", "Don't worry, I will call you later."],
    wrong: "She will goes to the party.", right: "She will go to the party." },

  { title: "Thì tương lai tiếp diễn (Future continuous)", grammarId: "020", level: "B1", category: "Thì",
    rule: "Diễn tả hành động sẽ đang trong tiến trình xảy ra tại một thời điểm hoặc khoảng thời gian cụ thể ở tương lai (*at 9 PM tomorrow*, *this time next week*). *Sắc thái nâng cao:* Còn dùng để hỏi lịch trình của ai đó một cách lịch sự (*Will you be using the car tonight?*).",
    form: "S + will + be + V-ing",
    examples: ["At this time tomorrow, I will be flying to Tokyo.", "Don't call me at 8 PM because I will be having dinner.", "Will you be passing by the post office?"],
    wrong: "They will be study at the library tomorrow morning.", right: "They will be studying at the library tomorrow morning." },

  { title: "Thì tương lai hoàn thành (Future perfect)", grammarId: "021", level: "B2", category: "Thì",
    rule: "Diễn tả một hành động sẽ hoàn tất *trước* một mốc thời gian hoặc trước một hành động khác trong tương lai. *Dấu hiệu nhận biết điển hình:* **by**, **by the time**, **by the end of...** đi cùng thời gian trong tương lai. Cấu trúc: **By the time + hiện tại đơn, tương lai hoàn thành**.",
    form: "S + will + have + V3/ed",
    examples: ["By next month, I will have finished this book.", "They will have built the bridge by the end of this year.", "By the time you wake up, I will have left."],
    wrong: "She will have wrote the letter by tomorrow.", right: "She will have written the letter by tomorrow." },

  { title: "Thì tương lai hoàn thành tiếp diễn (Future perfect continuous)", grammarId: "022", level: "C1", category: "Thì",
    rule: "Nhấn mạnh chiều dài thời gian của một hành động đã và đang diễn ra tính đến một mốc thời điểm xác định trong tương lai. Thường chứa khoảng thời gian bắt đầu bằng **for** kết hợp với mốc thời gian tương lai bắt đầu bằng **by**.",
    form: "S + will + have + been + V-ing",
    examples: ["By next year, I will have been living here for ten years.", "By 5 PM, she will have been teaching for six hours straight."],
    wrong: "By next week, he will have been work here for a year.", right: "By next week, he will have been working here for a year." },

  { title: "Câu điều kiện loại 0 (Zero conditional)", grammarId: "023", level: "A2", category: "Câu điều kiện",
    rule: "Diễn tả chân lý, quy luật tự nhiên, sự thật hiển nhiên hoặc thói quen mang tính tất yếu (khi A xảy ra thì B luôn xảy ra). *Mẹo cú pháp:* Có thể thay **if** bằng **when** mà không làm thay đổi ý nghĩa của câu.",
    form: "If + S + hiện tại đơn, S + hiện tại đơn",
    examples: ["If you heat ice, it melts.", "Water boils if it reaches 100 degrees Celsius.", "When you press this button, the machine starts."],
    wrong: "If you heat ice, it will melt.", right: "If you heat ice, it melts." },

  { title: "Câu điều kiện hỗn hợp (Mixed conditional)", grammarId: "024", level: "C1", category: "Câu điều kiện",
    rule: "Kết hợp giữa giả định trái ngược với quá khứ (**if + past perfect** của loại 3) và kết quả trái ngược với hiện tại (**would + V-bare** của loại 2). *Ngữ cảnh:* Diễn tả một quyết định hay sự việc đã xảy ra/không xảy ra trong quá khứ mà hậu quả của nó vẫn kéo dài và ảnh hưởng đến ngay lúc này.",
    form: "If + S + had + V3/ed, S + would + V-bare",
    examples: ["If I had studied medicine, I would be a doctor now.", "If she had saved money in the past, she could buy the car today."],
    wrong: "If I had studied medicine, I would have been a doctor now.", right: "If I had studied medicine, I would be a doctor now." },

  { title: "Mệnh đề quan hệ xác định (Defining relative clause)", grammarId: "025", level: "B1", category: "Mệnh đề",
    rule: "Cung cấp thông tin bắt buộc phải có để định danh cho danh từ đứng trước; nếu bỏ mệnh đề này thì câu sẽ mất nghĩa hoặc không rõ nghĩa. *Quy tắc quan trọng:* Không dùng dấu phẩy. Có thể dùng **that** để thay thế cho **who** hoặc **which**. Có thể **lược bỏ đại từ quan hệ** khi nó đóng vai trò làm *tân ngữ* trong mệnh đề.",
    form: "N + who/which/that + clause",
    examples: ["The man who stole my bag was caught by the police.", "This is the book (that) I bought yesterday.", "The girl you met is my sister."],
    wrong: "The man, who stole my bag, was caught.", right: "The man who stole my bag was caught." },

  { title: "Mệnh đề quan hệ không xác định (Non-defining relative clause)", grammarId: "026", level: "B2", category: "Mệnh đề",
    rule: "Bổ sung thêm thông tin phụ cho danh từ đã được xác định rõ ràng (danh từ riêng, danh từ có tính từ sở hữu hoặc từ chỉ định **this/that**). *Quy tắc cấm kỵ:* Phải ngăn cách bằng dấu phẩy, **KHÔNG BAO GIỜ dùng that** và **KHÔNG BAO GIỜ lược bỏ đại từ quan hệ**.",
    form: "N (đã xác định), + who/which/where/whose + clause, + ...",
    examples: ["Hanoi, which is the capital of Vietnam, is very bustling.", "My father, who is a doctor, loves reading books.", "Mr. Smith, whom you met yesterday, is our manager."],
    wrong: "My father, that is a doctor, loves reading.", right: "My father, who is a doctor, loves reading." },

  { title: "Động từ khuyết thiếu (Must / Have to)", grammarId: "027", level: "A2", category: "Động từ",
    rule: "**Must** thể hiện sự bắt buộc xuất phát từ cảm xúc/ý chí chủ quan của người nói. **Have to** thể hiện sự bắt buộc khách quan do luật pháp, nội quy hay hoàn cảnh quy định. *Lỗi kinh điển ở dạng phủ định:* **Mustn't** mang nghĩa *cấm đoán* (không được làm), trong khi **don't have to** mang nghĩa *không bắt buộc* (thích làm thì làm, không làm cũng không sao).",
    form: "S + must / have to + V-bare<br>S + mustn't + V-bare (cấm)<br>S + don't/doesn't have to + V-bare (không bắt buộc)",
    examples: ["You must wear a helmet when riding a motorbike.", "I have to submit this report by 5 PM today.", "You don't have to pay; it's free."],
    wrong: "You mustn't pay because the museum is free.", right: "You don't have to pay because the museum is free." },

  { title: "Động từ khuyết thiếu (Should / Ought to)", grammarId: "028", level: "A2", category: "Động từ",
    rule: "Dùng để đưa ra lời khuyên hoặc ý kiến gợi ý hành động nên làm. *Sắc thái phân biệt:* **Should** mang tính khuyên bảo mang ý kiến cá nhân nhẹ nhàng. **Ought to** mang sắc thái mạnh hơn, hướng tới trách nhiệm, nghĩa vụ hoặc chuẩn mực đạo đức xã hội. Lưu ý: **should + V-bare** nhưng **ought + to-V**.",
    form: "S + should + V-bare<br>S + ought to + V-bare",
    examples: ["You should study harder for the final exam.", "You ought to apologize to her for your rude behavior.", "You ought to respect your parents."],
    wrong: "You should to go to bed early.", right: "You should go to bed early." },

  { title: "Động từ khuyết thiếu (Can / Could / Be able to)", grammarId: "029", level: "A1", category: "Động từ",
    rule: "Diễn tả khả năng làm việc gì đó. *Phân biệt sắc thái quá khứ:* **Could** dùng cho khả năng chung chung trong quá khứ (*When I was young, I could run fast*). **Was/Were able to** dùng khi xoay sở vượt qua khó khăn để thực hiện thành công một việc cụ thể trong một tình huống nhất định (*Although the test was hard, he was able to pass it*).",
    form: "S + can / could / be able to + V-bare",
    examples: ["She can speak three languages fluently.", "When I was young, I could run very fast.", "Despite the heavy traffic, we were able to reach the airport on time."],
    wrong: "Although the sea was rough, he could swim to the shore.", right: "Although the sea was rough, he was able to swim to the shore." },

  { title: "Động từ khuyết thiếu suy đoán (Modal verbs of deduction)", grammarId: "030", level: "B2", category: "Động từ",
    rule: "Phỏng đoán bản chất/sự việc ở hiện tại dựa trên bằng chứng. **Must** = chắc chắn đúng (>90%); **May/Might/Could** = có thể đúng (30-50%); **Can't** = chắc chắn không thể xảy ra. *Lỗi kinh điển:* Khi phủ định sự suy đoán chắc chắn, tuyệt đối KHÔNG dùng *must not* mà phải dùng **can't** (*He has no money, he can't be rich*).",
    form: "S + must / might / could / can't + V-bare",
    examples: ["He has a new car and a big house; he must be very rich.", "She isn't answering her phone; she might be busy.", "He was in London today, so he can't be the thief in Hanoi."],
    wrong: "He has no money; he must not be rich.", right: "He has no money; he can't be rich." },

  { title: "Danh động từ (Gerunds - V-ing)", grammarId: "031", level: "B1", category: "Danh từ & Động từ",
    rule: "Động từ thêm **-ing** đóng vai trò làm danh từ (chủ ngữ hoặc tân ngữ). Bắt buộc dùng **V-ing** đứng sau các giới từ (**in**, **on**, **at**, **about**, **of**, **for**) và sau các động từ chỉ cảm xúc/sở thích (**enjoy**, **avoid**, **mind**, **consider**, **admit**, **deny**, **suggest**).",
    form: "S + verb (enjoy/mind/avoid/suggest) + V-ing<br>Preposition + V-ing",
    examples: ["She enjoys listening to classical music in her free time.", "Would you mind closing the door, please?", "He is good at playing football."],
    wrong: "She enjoys listen to music.", right: "She enjoys listening to music." },

  { title: "Động từ nguyên mẫu có 'to' (To-infinitive)", grammarId: "032", level: "B1", category: "Động từ",
    rule: "Dùng **to-V** làm tân ngữ đứng sau các động từ chỉ mong muốn, ý định, quyết định, hứa hẹn (**want**, **hope**, **decide**, **plan**, **refuse**, **promise**, **agree**, **offer**), hoặc đứng sau các tính từ để giải thích lý do (*happy to help*), hoặc chỉ mục đích (*went to buy*).",
    form: "S + verb (want/hope/decide/agree) + to-V<br>S + be + adj + to-V",
    examples: ["I want to buy a new smartphone next week.", "She decided to study abroad in Canada.", "I am glad to see you again."],
    wrong: "I want buying a new car.", right: "I want to buy a new car." },

  { title: "Động từ nguyên mẫu không 'to' (Bare infinitive)", grammarId: "033", level: "B2", category: "Động từ",
    rule: "Dùng động từ nguyên mẫu không **to** sau các động từ sai khiến (**make**, **let**), sau trợ động từ khuyết thiếu (**can**, **must**), và sau các động từ chỉ giác quan (**see**, **hear**, **watch**, **notice**) khi chứng kiến **toàn bộ quá trình** diễn ra của hành động.",
    form: "S + make / let + object + V-bare<br>S + see / hear + object + V-bare (thấy toàn bộ)",
    examples: ["Her parents let her stay out late on weekends.", "The teacher made us rewrite the whole essay.", "I saw him cross the street and enter the shop."],
    wrong: "Her parents let her to stay out late.", right: "Her parents let her stay out late." },

  { title: "Câu cầu khiến (Causative verbs: Have / Get)", grammarId: "034", level: "B2", category: "Cấu trúc câu",
    rule: "Diễn tả việc sắp xếp, thuê hoặc nhờ người khác làm một việc gì đó cho mình. *Phân biệt thể Chủ động và Bị động:* Chủ động: **have someone do something** hoặc **get someone to do something**. Bị động (vật bị tác động): **have/get something done (V3/ed)**.",
    form: "S + have + someone + V-bare<br>S + get + someone + to-V<br>S + have / get + something + V3/ed (bị động)",
    examples: ["I had the plumber fix the pipe.", "She got her brother to help her.", "I had my laptop repaired yesterday."],
    wrong: "I had my car repair yesterday.", right: "I had my car repaired yesterday." },

  { title: "Câu ước ở hiện tại (Wishes about the present)", grammarId: "035", level: "B1", category: "Câu ước",
    rule: "Diễn tả mong ước về một sự việc không có thật hoặc trái ngược với thực tế ở hiện tại. Mệnh đề sau **wish** phải lùi về thì quá khứ đơn. *Mẹo nâng cao:* Động từ **be** được ưu tiên chia thành **were** cho tất cả các ngôi trong văn phong trang trọng (*I wish I were rich*).",
    form: "S + wish(es) + S + V-ed/V2 (were cho mọi ngôi)",
    examples: ["I wish I knew the answer to this question.", "She wishes she lived closer to her workplace.", "I wish I were a millionaire."],
    wrong: "I wish I know the answer.", right: "I wish I knew the answer." },

  { title: "Câu ước ở quá khứ (Wishes about the past)", grammarId: "036", level: "B2", category: "Câu ước",
    rule: "Diễn tả sự nuối tiếc về một việc đã xảy ra hoặc không xảy ra trong quá khứ (ước điều ngược lại với quá khứ). Mệnh đề sau **wish** bắt buộc phải lùi về thì quá khứ hoàn thành (**had + V3/ed**).",
    form: "S + wish(es) + S + had + V3/ed",
    examples: ["I wish I had studied harder for yesterday's test.", "She wishes she hadn't said those rude words to him.", "They wish they had bought the tickets earlier."],
    wrong: "I wish I studied harder yesterday.", right: "I wish I had studied harder yesterday." },

  { title: "Thì hiện tại đơn với tương lai (Present simple for future schedules)", grammarId: "037", level: "A2", category: "Thì",
    rule: "Dùng thì hiện tại đơn để diễn tả các sự kiện sẽ xảy ra trong tương lai nhưng tuân theo **lịch trình cố định**, thời gian biểu, chương trình phát sóng hoặc thời gian chạy của phương tiện công cộng (tàu, xe, máy bay). Người nói không thể tự thay đổi lịch trình này.",
    form: "S + V(s/es) (chỉ lịch trình/thời gian biểu cố định)",
    examples: ["The plane departs at 6:00 AM tomorrow.", "Our classes start next Monday.", "What time does the film begin tonight?"],
    wrong: "The plane will depart at 6:00 AM tomorrow.", right: "The plane departs at 6:00 AM tomorrow." },

  { title: "Thì hiện tại tiếp diễn chỉ kế hoạch tương lai (Future arrangements)", grammarId: "038", level: "B1", category: "Thì",
    rule: "Diễn tả một kế hoạch, sự thu xếp cá nhân đã được lên lịch rõ ràng, ấn định thời gian địa điểm cụ thể và có sự tham gia của người khác trong tương lai gần (**future arrangement**). Độ chắc chắn xảy ra cao hơn nhiều so với **will** hay **be going to**.",
    form: "S + am/is/are + V-ing (có mốc thời gian tương lai)",
    examples: ["I am seeing my dentist at 3 PM tomorrow.", "We are flying to Tokyo next week; we bought the tickets.", "What are you doing this Saturday evening?"],
    wrong: "I see my dentist tomorrow at 3 PM.", right: "I am seeing my dentist at 3 PM tomorrow." },

  { title: "Tương lai gần với 'Be going to'", grammarId: "039", level: "A1", category: "Thì",
    rule: "Dùng **be going to** trong hai trường hợp: (1) Diễn tả ý định, kế hoạch đã nảy sinh trước thời điểm nói (nhưng chưa thu xếp chi tiết như Present Continuous); (2) Dự đoán một sự việc chắc chắn sắp xảy ra dựa trên **bằng chứng trực quan ở hiện tại** (*dark clouds* -> *going to rain*).",
    form: "S + am/is/are + going to + V-bare",
    examples: ["Look at those dark clouds! It is going to rain.", "We are going to buy a new house next year.", "Are you going to watch the match tonight?"],
    wrong: "I will buy a new car, I planned it last month.", right: "I am going to buy a new car, I planned it last month." },

  { title: "Động từ chỉ trạng thái (Stative verbs)", grammarId: "040", level: "B1", category: "Động từ",
    rule: "Các động từ chỉ trạng thái tư duy, cảm xúc, tri giác hoặc sở hữu (**want**, **know**, **understand**, **like**, **love**, **belong**, **remember**, **hate**) KHÔNG BAO GIỜ được chia ở các thì tiếp diễn. *Ngoại lệ nâng cao:* Một số động từ khi đổi từ nghĩa 'trạng thái' sang nghĩa 'hành động' thì CÓ THỂ chia tiếp diễn (**have** = sở hữu [không chia] vs **have** = ăn/uống/tắm [chia tiếp diễn]; **think** = tin rằng [không chia] vs **think** = đang suy nghĩ [chia tiếp diễn]).",
    form: "S + stative verb (chia ở thì đơn, không dùng V-ing)",
    examples: ["I understand your problem right now.", "This jacket belongs to my brother.", "I am thinking about moving to a new city."],
    wrong: "I am understanding the lesson now.", right: "I understand the lesson now." },


  
  
];