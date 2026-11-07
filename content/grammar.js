/* HOW TO EDIT: Grammar rules. Copy an existing { ... } entry and change it. Fields: title, level (A1-C2), category, rule (use **bold** for key words), form, examples (list), wrong, right. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

/* ---------- Ngữ pháp ---------- */
OEL.grammar = [
  
  
  { title: "Thì hiện tại đơn", grammarId: "001", level: "A1", category: "Thì",
    rule: "Dùng thì hiện tại đơn cho thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình cố định. Với các chủ ngữ số ít (**he**, **she**, **it**) hoặc danh từ không đếm được, động từ phải thêm **-s hoặc -es**. **Mẹo chính tả:** Động từ kết thúc bằng phụ âm + **y** đổi thành **-ies** (**fly** -> **flies**), nhưng nguyên âm + **y** chỉ thêm **-s** (**play** -> **plays**).",
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
    rule: "Dùng **a / an** cho một người hoặc vật chưa xác định, hoặc khi nhắc đến lần đầu. Dùng **the** khi người nói và người nghe đều biết đó là cái nào. Không dùng mạo từ với danh từ số nhiều nói chung và danh từ không đếm được. **Mẹo chính tả:** Việc chọn **a** hay **an** phụ thuộc hoàn toàn vào **nguyên âm phiên âm** (sound) chứ không phải chữ cái viết (letter) (ví dụ: **an hour** vì **h** câm, phát âm bắt đầu bằng **/aʊ/**, nhưng **a university** vì bắt đầu bằng bán nguyên âm **/j/**).",
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
    rule: "Thêm **-er / -est** vào tính từ ngắn. Dùng **more / most** với tính từ dài. Không dùng lặp cả hai cùng lúc (**more cheaper** là lỗi thừa từ). **Mẹo chính tả:** Tính từ 2 âm tiết tận cùng bằng **-y** (**happy**, **easy**) đổi **y** -> **i** rồi thêm **-er / -est**.",
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

  { title: "Mệnh đề quan hệ", grammarId: "011", level: "B2", category: "Mệnh đề",
    rule: "Dùng đại từ quan hệ nối mệnh đề bổ nghĩa cho danh từ đứng trước. **Who** làm chủ ngữ/tân ngữ chỉ người; **which** chỉ vật; **that** thay cho **who/which** trong mệnh đề xác định; **whose** chỉ sở hữu; **where** chỉ nơi chốn.",
    form: ["N + who / which / that / whose / where + clause"],
    examples: ["The woman who called is my aunt.", "My aunt, who lives abroad, is visiting.", "The book that I bought was expensive."],
    wrong: "The book which I bought it was expensive.", right: "The book which I bought was expensive.",
    more: [
      { type: "nuance", text: "Trong mệnh đề quan hệ xác định, có thể **lược bỏ đại từ quan hệ** khi nó đóng vai trò làm tân ngữ (**The man I saw yesterday**). Tuy nhiên, tuyệt đối không lược bỏ khi nó làm chủ ngữ." },
      { type: "advanced", text: "Đại từ quan hệ **whom** làm tân ngữ chỉ người trong văn phong trang trọng, thường đi sau giới từ (**The man to whom I spoke**)." }
    ]
  },
  { title: "Câu gián tiếp", grammarId: "012", level: "B2", category: "Mệnh đề",
    rule: "Khi thuật lại lời người khác, nếu động từ tường thuật ở quá khứ thì phải **lùi một bậc thì** và thay đổi đại từ, trạng từ chỉ thời gian/nơi chốn. Trong câu hỏi gián tiếp, phải giữ **trật tự câu khẳng định** (S + V), không mượn trợ động từ do/does/did.",
    form: ["S + said (that) + clause (lùi thì)", "S + asked + wh-word / if / whether + S + V"],
    examples: ["“I am tired,” she said. -> She said she was tired.", "He asked me where I lived.", "They said they had finished."],
    wrong: "He asked me where do I live.", right: "He asked me where I lived.",
    more: [
      { type: "nuance", text: "Không lùi thì trong câu gián tiếp khi nội dung đó vẫn là **chân lý hiển nhiên** hoặc sự thật ở hiện tại (*He said that water boils at 100 degrees Celsius*)." },
      { type: "advanced", text: "Các động từ tường thuật nâng cao giúp câu văn phong phú hơn thay vì chỉ dùng *said/asked*: **denied**, **admitted**, **suggested**, **promised**, **warned**." }
    ]
  },
  { title: "Câu điều kiện loại ba", grammarId: "013", level: "B2", category: "Câu điều kiện",
    rule: "Dùng câu điều kiện loại 3 để diễn tả một giả định không có thật trong quá khứ, trái ngược với những gì đã thực sự xảy ra và để bày tỏ sự tiếc nuối. Mệnh đề **if** chia ở quá khứ hoàn thành (**had + V3/ed**), mệnh đề chính dùng **would have + V3/ed**.",
    form: ["If + S + had + V3/ed, S + would / could / might have + V3/ed"],
    examples: ["If I had studied, I would have passed.", "If she hadn't missed the bus, she would have arrived on time."],
    wrong: "If I would have studied, I would have passed.", right: "If I had studied, I would have passed.",
    more: [
      { type: "nuance", text: "Có thể thay **would have** bằng **could have** (chỉ khả năng đã có thể xảy ra) hoặc **might have** (chỉ sự phỏng đoán) tùy vào sắc thái ý nghĩa." },
      { type: "advanced", text: "Đảo ngữ câu điều kiện loại 3 bằng cách bỏ **if** và đưa **had** lên đầu câu: **Had I studied, I would have passed**." }
    ]
  },
  { title: "Đảo ngữ để nhấn mạnh", grammarId: "014", level: "C1", category: "Văn phong",
    rule: "Khi các trạng từ phủ định hoặc hạn chế (**never**, **hardly**, **rarely**, **seldom**, **not only**, **little**) đứng đầu câu để tạo sự nhấn mạnh trang trọng, ta bắt buộc phải **đảo trợ động từ** (hoặc động từ 'be') lên trước chủ ngữ.",
    form: ["Negative adverb + trợ động từ / be + S + V-bare"],
    examples: ["Never have I seen such a beautiful sunset.", "Not only did she win, but she also broke the record.", "Hardly had we arrived when it started to rain."],
    wrong: "Never I have seen such a sunset.", right: "Never have I seen such a sunset.",
    more: [
      { type: "nuance", text: "Hiện tượng đảo ngữ chỉ xảy ra khi các trạng từ này mang nghĩa phủ định thực sự đứng **ở đầu câu**. Nếu chúng nằm ở giữa câu, trật tự câu giữ nguyên bình thường." },
      { type: "advanced", text: "Cấu trúc đảo ngữ với **Not only... but also...** chỉ áp dụng cho vế đầu tiên: **Not only did he pass the exam, but he also got a scholarship**." }
    ]
  },
  { title: "Thì hiện tại hoàn thành tiếp diễn", grammarId: "015", level: "B1", category: "Thì",
    rule: "Nhấn mạnh quá trình kéo dài liên tục của một hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn đến hiện tại (hoặc vừa mới chấm dứt nhưng để lại kết quả hiện hữu).",
    form: ["S + have / has + been + V-ing"],
    examples: ["It has been raining since this morning.", "They have been working here for three hours.", "How long have you been waiting?"],
    wrong: "She has learning English for two years.", right: "She has been learning English for two years.",
    more: [
      { type: "nuance", text: "Phân biệt với hiện tại hoàn thành đơn: Hiện tại hoàn thành đơn nhấn mạnh **kết quả/số lượng** (*I have written 3 letters*), còn hiện tại hoàn thành tiếp diễn nhấn mạnh **thời gian/quá trình** (*I have been writing letters for 2 hours*)." }
    ]
  },
  { title: "Thì quá khứ tiếp diễn", grammarId: "016", level: "A2", category: "Thì",
    rule: "Diễn tả một hành động đang diễn ra tại một thời điểm xác định trong quá khứ, hoặc hai hành động diễn ra song song cùng lúc. Thường dùng phối hợp với quá khứ đơn khi có hành động khác xen vào.",
    form: ["S + was / were + V-ing"],
    examples: ["I was reading a book at 8 PM last night.", "They were playing tennis when it started to rain.", "What were you doing at this time yesterday?"],
    wrong: "She was cook dinner when I arrived.", right: "She was cooking dinner when I arrived.",
    more: [
      { type: "nuance", text: "Hành động dài đang xảy ra chia quá khứ tiếp diễn, hành động đột ngột cắt ngang chia quá khứ đơn (thường đi với từ **when** hoặc **while**)." }
    ]
  },
  { title: "Thì quá khứ hoàn thành", grammarId: "017", level: "B1", category: "Thì",
    rule: "Diễn tả một hành động đã xảy ra và hoàn tất trước một hành động khác hoặc trước một mốc thời gian cụ thể trong quá khứ.",
    form: ["S + had + V3/ed"],
    examples: ["By the time we arrived, the train had left.", "She had already eaten before her friends came.", "He passed the exam because he had studied hard."],
    wrong: "They had finish the project before the deadline.", right: "They had finished the project before the deadline.",
    more: [
      { type: "nuance", text: "Thường đi kèm với các từ nối thời gian như **by the time**, **before**, **after** để phân định rõ hành động nào xảy ra trước trong quá khứ." }
    ]
  },
  { title: "Thì quá khứ hoàn thành tiếp diễn", grammarId: "018", level: "B2", category: "Thì",
    rule: "Nhấn mạnh tính liên tục của một hành động đã diễn ra kéo dài trước một mốc thời điểm hoặc một hành động khác trong quá khứ.",
    form: ["S + had + been + V-ing"],
    examples: ["They had been playing football for two hours before it started to rain.", "She was tired because she had been working all night.", "He had been living in Hanoi for five years before he moved."],
    wrong: "We had playing games when the lights went out.", right: "We had been playing games when the lights went out.",
    more: [
      { type: "advanced", text: "Thì này thường dùng để giải thích nguyên nhân cho một trạng thái hoặc kết quả xảy ra ở quá khứ (**He was exhausted because he had been running**)." }
    ]
  },
  { title: "Thì tương lai đơn", grammarId: "019", level: "A2", category: "Thì",
    rule: "Dùng **will** để diễn tả quyết định bộc phát ngay tại thời điểm nói, đưa ra lời hứa, lời đề nghị giúp đỡ, hoặc dự đoán chủ quan không có căn cứ trực quan.",
    form: ["S + will + V-bare"],
    examples: ["I will help you with your heavy bag.", "I think it will rain tomorrow.", "Don't worry, I will call you later."],
    wrong: "She will goes to the party.", right: "She will go to the party.",
    more: [
      { type: "nuance", text: "Khác với **be going to** (dự định đã có sẵn từ trước trong đầu), **will** là quyết định mang tính tự phát ngay lúc nói." }
    ]
  },
  { title: "Thì tương lai tiếp diễn", grammarId: "020", level: "B1", category: "Thì",
    rule: "Diễn tả một hành động sẽ đang diễn ra tại một thời điểm cụ thể hoặc một khoảng thời gian xác định trong tương lai.",
    form: ["S + will + be + V-ing"],
    examples: ["At this time tomorrow, I will be flying to Tokyo.", "Don't call me at 8 PM because I will be having dinner.", "Will you be using your computer this afternoon?"],
    wrong: "They will be study at the library tomorrow morning.", right: "They will be studying at the library tomorrow morning.",
    more: [
      { type: "nuance", text: "Còn được dùng để hỏi lịch trình của người khác một cách lịch sự, không mang sắc thái ép buộc (*Will you be staying for dinner?*)." }
    ]
  },
  { title: "Thì tương lai hoàn thành", grammarId: "021", level: "B2", category: "Thì",
    rule: "Diễn tả một hành động sẽ hoàn thành xong xuôi trước một mốc thời gian hoặc trước một hành động khác trong tương lai.",
    form: ["S + will + have + V3/ed"],
    examples: ["By next month, I will have finished this book.", "They will have built the bridge by the end of this year.", "Will you have completed the report by 5 PM?"],
    wrong: "She will have wrote the letter by tomorrow.", right: "She will have written the letter by tomorrow.",
    more: [
      { type: "nuance", text: "Luôn đi kèm với các trạng từ chỉ thời gian bắt đầu bằng chữ **by** như *by tomorrow*, *by next year*, *by the time*." }
    ]
  },
  { title: "Thì tương lai hoàn thành tiếp diễn", grammarId: "022", level: "C1", category: "Thì",
    rule: "Nhấn mạnh khoảng thời gian kéo dài của một hành động đã và đang diễn ra tính đến một mốc xác định trong tương lai.",
    form: ["S + will + have + been + V-ing"],
    examples: ["By next year, I will have been living here for ten years.", "By the time you arrive, we will have been waiting for two hours.", "She will have been working at this company for five years by June."],
    wrong: "By next week, he will have been work here for a year.", right: "By next week, he will have been working here for a year."
  },
  { title: "Câu điều kiện loại không", grammarId: "023", level: "A2", category: "Câu điều kiện",
    rule: "Diễn tả chân lý, quy luật tự nhiên, sự thật hiển nhiên hoặc thói quen mang tính tất yếu luôn luôn đúng khi điều kiện xảy ra.",
    form: ["If + S + hiện tại đơn, S + hiện tại đơn"],
    examples: ["If you heat ice, it melts.", "Water boils if it reaches 100 degrees Celsius.", "If plants don't get enough water, they die."],
    wrong: "If you heat ice, it will melt.", right: "If you heat ice, it melts.",
    more: [
      { type: "nuance", text: "Có thể thay thế từ **if** bằng từ **when** mà cấu trúc và ý nghĩa không thay đổi (*When you heat ice, it melts*)." }
    ]
  },
  { title: "Câu điều kiện hỗn hợp", grammarId: "024", level: "C1", category: "Câu điều kiện",
    rule: "Kết hợp giữa giả định trái ngược ở quá khứ (loại 3: **if + past perfect**) với kết quả ở hiện tại (loại 2: **would + V-bare**). Dùng khi một sự việc trong quá khứ chi phối và để lại hậu quả ngay lúc này.",
    form: ["If + S + had + V3/ed, S + would / could / might + V-bare"],
    examples: ["If I had studied medicine, I would be a doctor now.", "If she had saved money, she could buy the car today.", "If we had left last night, we would be home now."],
    wrong: "If I had studied medicine, I would have been a doctor now.", right: "If I had studied medicine, I would be a doctor now."
  },
  { title: "Mệnh đề quan hệ xác định", grammarId: "025", level: "B1", category: "Mệnh đề",
    rule: "Cung cấp thông tin thiết yếu không thể thiếu để xác định danh từ đứng trước, nếu bỏ đi câu sẽ không rõ nghĩa. **Không dùng dấu phẩy** ngăn cách và có thể dùng **that** thay thế cho **who/which**.",
    form: ["N + who / which / that + clause"],
    examples: ["The man who stole my bag was caught by the police.", "This is the book that I bought yesterday.", "She likes the teacher who teaches English."],
    wrong: "The man, who stole my bag, was caught.", right: "The man who stole my bag was caught."
  },
  { title: "Mệnh đề quan hệ không xác định", grammarId: "026", level: "B2", category: "Mệnh đề",
    rule: "Bổ sung thông tin phụ cho danh từ đã được xác định rõ ràng. Bắt buộc phải đặt nằm **giữa hai dấu phẩy**, **tuyệt đối không dùng that** và không được lược bỏ đại từ quan hệ.",
    form: ["N (xác định), + who / which / where + clause, + ..."],
    examples: ["Hanoi, which is the capital of Vietnam, is very bustling.", "My father, who is a doctor, loves reading books.", "Mr. Smith, whom you met yesterday, is our new manager."],
    wrong: "My father, that is a doctor, loves reading.", right: "My father, who is a doctor, loves reading."
  },
  { title: "Động từ khuyết thiếu bắt buộc", grammarId: "027", level: "A2", category: "Động từ",
    rule: "**Must** thể hiện sự bắt buộc chủ quan từ người nói; **have to** chỉ sự bắt buộc khách quan từ quy định ngoại cảnh. *Mẹo chính tả/ngữ pháp:* **Mustn't** mang nghĩa cấm đoán, còn **don't have to** mang nghĩa không bắt buộc.",
    form: ["S + must / have to + V-bare"],
    examples: ["You must wear a helmet when riding a motorbike.", "I have to submit this report by 5 PM today.", "You don't have to pay; it's free."],
    wrong: "She must has to go now.", right: "She has to go now."
  },
  { title: "Động từ khuyết thiếu lời khuyên", grammarId: "028", level: "A2", category: "Động từ",
    rule: "Dùng **should** hoặc **ought to** để đưa ra lời khuyên hoặc ý kiến gợi ý việc nên làm. **Should** mang tính cá nhân, **ought to** nặng tính đạo đức hoặc quy tắc xã hội hơn.",
    form: ["S + should / ought to + V-bare"],
    examples: ["You should study harder for the final exam.", "You ought to apologize to her for your mistake.", "Should we book the tickets in advance?"],
    wrong: "You should to go to bed early.", right: "You should go to bed early."
  },
  { title: "Động từ khuyết thiếu năng lực", grammarId: "029", level: "A1", category: "Động từ",
    rule: "Diễn tả năng lực hoặc khả năng thực hiện hành động ở hiện tại (**can**), quá khứ (**could**) hoặc mọi tình huống thông qua cấu trúc tương đương (**be able to**).",
    form: ["S + can / could / be able to + V-bare"],
    examples: ["She can speak three languages fluently.", "When I was young, I could run very fast.", "He will be able to finish the task tomorrow."],
    wrong: "She can speaks English very well.", right: "She can speak English very well."
  },
  { title: "Động từ khuyết thiếu suy đoán", grammarId: "030", level: "B2", category: "Động từ",
    rule: "Dùng các từ như **must** (chắc là), **might/may** (có lẽ), **can't** (chắc không thể) để phỏng đoán logic các sự việc xảy ra ở hiện tại.",
    form: ["S + must / might / can't + V-bare"],
    examples: ["He has a new car and a big house; he must be very rich.", "She isn't answering her phone; she might be busy.", "That can't be true; I saw it with my own eyes."],
    wrong: "He must is very rich.", right: "He must be very rich."
  },
  { title: "Danh động từ", grammarId: "031", level: "B1", category: "Danh từ & Động từ",
    rule: "Động từ thêm đuôi **-ing** đóng vai trò như một danh từ (**gerund**), thường đứng sau các động từ chỉ sở thích/ghét, sau giới từ hoặc làm chủ ngữ trong câu.",
    form: ["S + verb (enjoy/mind/finish) + V-ing"],
    examples: ["She enjoys listening to classical music in her free time.", "Would you mind closing the door, please?", "He is good at playing football."],
    wrong: "She enjoys listen to music.", right: "She enjoys listening to music."
  },
  { title: "Động từ nguyên mẫu có to", grammarId: "032", level: "B1", category: "Động từ",
    rule: "Dùng **to-infinitive** sau các động từ chỉ dự định, mong muốn, quyết định (**want**, **hope**, **decide**) hoặc dùng để diễn tả mục đích thực hiện hành động.",
    form: ["S + want / hope / decide + to-V"],
    examples: ["I want to buy a new smartphone next week.", "She decided to study abroad in Canada.", "He went to the library to borrow some books."],
    wrong: "I want buying a new car.", right: "I want to buy a new car."
  },
  { title: "Động từ nguyên mẫu không to", grammarId: "033", level: "B2", category: "Động từ",
    rule: "Dùng **bare infinitive** sau động từ khuyết thiếu, các động từ chỉ giác quan (**see**, **hear**) hoặc các động từ sai khiến mạnh (**make**, **let**).",
    form: ["S + let / make / see + object + V-bare"],
    examples: ["Her parents let her stay out late on weekends.", "The teacher made us rewrite the whole essay.", "I saw him cross the street and enter the shop."],
    wrong: "Her parents let her to stay out late.", right: "Her parents let her stay out late."
  },
  { title: "Câu cầu khiến", grammarId: "034", level: "B2", category: "Cấu trúc câu",
    rule: "Diễn tả việc nhờ vả, thuê hoặc giao việc cho người khác thực hiện hộ mình. Thể bị động của cấu trúc này sử dụng **have/get + object + V3/ed**.",
    form: ["S + have / get + object (thing) + V3/ed"],
    examples: ["I need to have my laptop repaired before tomorrow.", "She got her house cleaned by a professional service last week.", "He had his passport renewed yesterday."],
    wrong: "I had my car repair yesterday.", right: "I had my car repaired yesterday."
  },
  { title: "Câu ước ở hiện tại", grammarId: "035", level: "B1", category: "Câu ước",
    rule: "Diễn tả mong ước về một sự việc không có thật, trái ngược với thực tế ở hiện tại, bắt buộc dùng thì quá khứ đơn trong mệnh đề sau (**wish**).",
    form: ["S + wish(es) + S + V-ed/V2 (were cho mọi ngôi)"],
    examples: ["I wish I knew the answer to this question.", "She wishes she lived closer to her workplace.", "He wishes he had more free time today."],
    wrong: "I wish I know the answer.", right: "I wish I knew the answer."
  },
  { title: "Câu ước ở quá khứ", grammarId: "036", level: "B2", category: "Câu ước",
    rule: "Diễn tả sự tiếc nuối về một việc đã xảy ra hoặc không xảy ra trái với thực tế trong quá khứ, dùng thì quá khứ hoàn thành trong mệnh đề sau.",
    form: ["S + wish(es) + S + had + V3/ed"],
    examples: ["I wish I had studied harder for yesterday's test.", "She wishes she hadn't said those rude words to him.", "They wish they had bought the tickets earlier."],
    wrong: "I wish I studied harder yesterday.", right: "I wish I had studied harder yesterday."
  },
  { title: "Thì hiện tại đơn với tương lai", grammarId: "037", level: "A2", category: "Thì",
    rule: "Dùng thì hiện tại đơn để nói về thời gian biểu, lịch trình cố định của tàu xe, máy bay hoặc các sự kiện công cộng đã ấn định.",
    form: ["S + V(s/es) (chỉ lịch trình/thời gian biểu cố định)"],
    examples: ["The plane departs at 6:00 AM tomorrow.", "Our classes start next Monday.", "What time does the movie finish tonight?"],
    wrong: "The plane will depart at 6:00 AM tomorrow.", right: "The plane departs at 6:00 AM tomorrow."
  },
  { title: "Thì hiện tại tiếp diễn chỉ kế hoạch tương lai", grammarId: "038", level: "B1", category: "Thì",
    rule: "Diễn tả kế hoạch cá nhân đã được lên lịch trình chi tiết và chắc chắn sẽ xảy ra trong tương lai gần (**future arrangement**).",
    form: ["S + am/is/are + V-ing (có mốc thời gian tương lai)"],
    examples: ["I am seeing my dentist at 3 PM tomorrow.", "We are flying to Tokyo next week.", "What are you doing this Saturday evening?"],
    wrong: "I see my dentist tomorrow.", right: "I am seeing my dentist tomorrow."
  },
  { title: "Tương lai gần với be going to", grammarId: "039", level: "A1", category: "Thì",
    rule: "Diễn tả dự định đã có từ trước trong đầu hoặc dùng để dự đoán một sự việc có căn cứ, dấu hiệu rõ ràng ngay trước mắt ở hiện tại.",
    form: ["S + am/is/are + going to + V-bare"],
    examples: ["Look at those dark clouds! It is going to rain.", "We are going to buy a new house next year.", "Are you going to watch the match tonight?"],
    wrong: "I will buy a new car, I planned it.", right: "I am going to buy a new car, I planned it."
  },
  { title: "Động từ chỉ trạng thái", grammarId: "040", level: "B1", category: "Động từ",
    rule: "Các động từ chỉ tri giác, cảm xúc, sở hữu hoặc tư duy (**want**, **know**, **belong**, **understand**) là **stative verbs**, tuyệt đối không chia ở các thì tiếp diễn.",
    form: ["S + stative verb (chia ở thì đơn, không dùng V-ing)"],
    examples: ["I understand your problem right now.", "This jacket belongs to my brother.", "She loves listening to classical music."],
    wrong: "I am understanding the lesson now.", right: "I understand the lesson now."
  },
  


  
  
];