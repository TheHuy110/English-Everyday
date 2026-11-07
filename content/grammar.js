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
  

  { title: "Cách dùng Make và Let", grammarId: "041", level: "B1", category: "Động từ",
    rule: "**Make** mang nghĩa ép buộc hoặc bắt buộc ai phải làm gì; **let** mang nghĩa cho phép ai làm gì. Cả hai đều đi trực tiếp với động từ nguyên mẫu không **to** (**V-bare**).",
    form: ["S + make / let + object + V-bare"],
    examples: ["My parents let me stay out late on weekends.", "The teacher made us rewrite the whole essay.", "Nothing can make me change my mind."],
    wrong: "She made me to cry yesterday.", right: "She made me cry yesterday.",
    more: [
      { type: "nuance", text: "Khi chuyển sang câu bị động, **make** bắt buộc phải dùng **to-V** (**He was made to rewrite the essay**), còn **let** thường được chuyển sang cấu trúc **allow** (**He was allowed to go out**)." }
    ]
  },
  { title: "Động từ theo sau bởi To-V hoặc V-ing thay đổi nghĩa", grammarId: "042", level: "B2", category: "Động từ",
    rule: "Một số động từ như **stop**, **remember**, **forget**, **try** khi đi với **to-V** và **V-ing** sẽ mang ý nghĩa hoàn toàn khác nhau.",
    form: ["S + verb + to-V (hướng tới tương lai / mục đích)", "S + verb + V-ing (hành động đã qua / trải nghiệm)"],
    examples: ["I stopped working because I was feeling exhausted.", "Please remember to lock the door.", "She stopped to take a short break."],
    wrong: "I stopped to work because I was tired.", right: "I stopped working because I was tired.",
    more: [
      { type: "extension", text: "**Stop to do something**: Dừng lại **để** làm việc khác. **Stop doing something**: Dừng hẳn việc đang làm." },
      { type: "nuance", text: "**Remember / Forget to do**: Nhớ / Quên **phải** làm việc gì (chưa làm). **Remember / Forget doing**: Nhớ / Quên **đã** làm việc gì trong quá khứ." }
    ]
  },
  { title: "Câu hỏi với từ để hỏi đóng vai trò chủ ngữ", grammarId: "043", level: "A2", category: "Câu hỏi",
    rule: "Khi từ để hỏi như **Who**, **What**, **Which** chính là chủ ngữ thực hiện hành động trong câu hỏi (**subject questions**), ta chia trực tiếp động từ theo ngôi thứ ba số ít mà không mượn trợ động từ **do/does/did**.",
    form: ["Who / What / Which + V (chia số ít) + O?"],
    examples: ["Who broke this expensive glass window yesterday?", "What caused the massive traffic jam?", "Which team won the championship last year?"],
    wrong: "Who did break this window?", right: "Who broke this window?",
    more: [
      { type: "nuance", text: "Phân biệt với câu hỏi tân ngữ (**object questions**): Khi từ để hỏi đóng vai trò làm tân ngữ, bắt buộc phải mượn trợ động từ (**Who did you see yesterday?**)." }
    ]
  },
  { title: "Câu cảm thán với What và How", grammarId: "044", level: "A2", category: "Cấu trúc câu",
    rule: "Dùng **What** trước danh từ hoặc cụm danh từ để cảm thán; dùng **How** trước tính từ hoặc trạng từ đứng độc lập.",
    form: ["What + (a/an) + adj + N + S + V!", "How + adj / adv + S + V!"],
    examples: ["What a wonderful day it is!", "What delicious food!", "How fast he runs!"],
    wrong: "How a beautiful girl she is!", right: "What a beautiful girl she is!",
    more: [
      { type: "nuance", text: "Trong **What...!**, nếu danh từ là số nhiều hoặc không đếm được, tuyệt đối không dùng mạo từ **a/an** (**What beautiful weather!**)." }
    ]
  },
  { title: "Cấu trúc Too... for someone to do something", grammarId: "045", level: "B1", category: "Cấu trúc câu",
    rule: "Dùng để chỉ mức độ quá mức khiến cho ai đó không thể thực hiện được một hành động nào đó.",
    form: ["S + be + too + adj + for + object + to-V"],
    examples: ["This math problem is too difficult for me to solve.", "The coffee was too hot for him to drink.", "The box was too heavy for her to lift."],
    wrong: "This box is too heavy for she to lift.", right: "This box is too heavy for her to lift.",
    more: [
      { type: "nuance", text: "Khi viết lại câu với **too... to**, tuyệt đối không lặp lại tân ngữ ở cuối mệnh đề (**This box is too heavy to lift**, không viết *lift it*)." }
    ]
  },
  { title: "Cấu trúc Enough... for someone to do something", grammarId: "046", level: "B1", category: "Cấu trúc câu",
    rule: "Dùng để chỉ mức độ đủ điều kiện cho ai đó thực hiện thành công một hành động. Tính từ/trạng từ bắt buộc phải đứng **trước enough**, còn danh từ đứng **sau enough**.",
    form: ["S + be + adj + enough + for + object + to-V", "S + V + enough + N + to-V"],
    examples: ["The weather is warm enough for us to go swimming.", "He has enough money to buy the car.", "The room is large enough for everyone."],
    wrong: "He is enough tall for me to see.", right: "He is tall enough for me to see.",
    more: [
      { type: "nuance", text: "Chú ý vị trí từ loại: Tính từ đứng trước (**tall enough**), nhưng danh từ lại đứng sau (**enough time**)." }
    ]
  },
  { title: "Cấu trúc It takes / took someone time to do something", grammarId: "047", level: "A2", category: "Cấu trúc câu",
    rule: "Dùng cấu trúc chủ ngữ giả **It** để diễn tả khoảng thời gian cần thiết hoặc tiêu tốn để ai đó hoàn thành một hành động.",
    form: ["It takes / took + object + time + to-V"],
    examples: ["It takes me twenty minutes to walk to school every morning.", "It took her two hours to finish the project.", "How long does it take to fly to Paris?"],
    wrong: "It takes me walking to school.", right: "It takes me twenty minutes to walk to school.",
    more: [
      { type: "extension", text: "Có thể chuyển đổi tương đương với cấu trúc **spend**: **S + spend + time + V-ing** (**I spend twenty minutes walking to school**)." }
    ]
  },
  { title: "Cấu trúc Spend time / money", grammarId: "048", level: "A2", category: "Cấu trúc câu",
    rule: "Dùng để diễn tả việc dành ra khoảng thời gian hoặc tiền bạc vào việc gì đó hoặc để làm việc gì đó, theo sau bởi giới từ **on** + danh từ hoặc danh động từ (**V-ing**).",
    form: ["S + spend(s) / spent + time / money + V-ing / on + N"],
    examples: ["She spends two hours reading books every day.", "They spent a lot of money on renovating their house.", "He spends too much time playing video games."],
    wrong: "I spend two hours to read books.", right: "I spend two hours reading books.",
    more: [
      { type: "nuance", text: "Sau **spend** là **V-ing** trực tiếp (**spend hours reading**), không dùng *to-V*." }
    ]
  },
  { title: "Cấu trúc Prefer A to B", grammarId: "049", level: "B1", category: "Cấu trúc câu",
    rule: "Dùng để diễn tả sự yêu thích một sự vật hay hoạt động này hơn một sự vật hay hoạt động khác. Bắt buộc dùng giới từ **to** để nối hai đối tượng so sánh.",
    form: ["S + prefer + N / V-ing + to + N / V-ing"],
    examples: ["I prefer drinking tea to drinking coffee.", "She prefers movies to books.", "He prefers walking to driving in rush hour."],
    wrong: "I prefer tea than coffee.", right: "I prefer tea to coffee.",
    more: [
      { type: "extension", text: "Khi dùng cấu trúc **would prefer**, đi kèm với **to-V** thay vì *V-ing*: **S + would prefer + to-V + rather than + V-bare**." }
    ]
  },
  { title: "Cấu trúc Would rather", grammarId: "050", level: "B2", category: "Cấu trúc câu",
    rule: "Dùng để diễn tả sở thích làm việc này hơn việc khác ở hiện tại hoặc tương lai, theo sau trực tiếp bởi động từ nguyên mẫu không **to** (**V-bare**).",
    form: ["S + would rather + V-bare + (than + V-bare)"],
    examples: ["I would rather stay at home than go out tonight.", "She would rather read a book than watch TV.", "Would you rather have coffee or juice?"],
    wrong: "I would rather to stay at home.", right: "I would rather stay at home.",
    more: [
      { type: "nuance", text: "Khi **would rather** có hai chủ ngữ khác nhau chỉ mong muốn ở hiện tại (**S1 + would rather + S2 + V2/ed**), mệnh đề sau lùi về thì quá khứ đơn (**I'd rather you stayed home**)." }
    ]
  },
  { title: "Cấu trúc It is time", grammarId: "051", level: "B2", category: "Cấu trúc câu",
    rule: "Dùng để diễn tả rằng đã đến lúc một việc gì đó nên được thực hiện ngay lập tức. Mệnh đề có chủ ngữ theo sau bắt buộc phải chia ở thì **quá khứ đơn**.",
    form: ["It is (high / about) time + S + V2/ed", "It is time + for + object + to-V"],
    examples: ["It is high time you went to bed; it's almost midnight.", "It is time we started our meeting.", "It is about time he apologized to her."],
    wrong: "It is time you go to bed.", right: "It is time you went to bed.",
    more: [
      { type: "nuance", text: "Nếu không có chủ ngữ **S** theo sau, ta dùng động từ nguyên mẫu có **to**: **It is time to go to bed**." }
    ]
  },
  { title: "Mệnh đề trạng ngữ chỉ thời gian với When, While, As", grammarId: "052", level: "B1", category: "Mệnh đề",
    rule: "Dùng để nối các hành động xảy ra đồng thời hoặc có hành động ngắn xen vào hành động dài đang diễn ra trong quá khứ.",
    form: ["When / While / As + clause, clause"],
    examples: ["While I was cooking dinner, the phone rang.", "When she arrived, everyone was waiting.", "As he walked down the street, he met an old friend."],
    wrong: "While I cooked, the phone rang.", right: "While I was cooking, the phone rang.",
    more: [
      { type: "nuance", text: "**While** và **as** thường đi với thì tiếp diễn (hành động kéo dài), còn **when** thường đi với thì đơn (hành động cắt ngang hoặc nối tiếp)." }
    ]
  },
  { title: "Cấu trúc Hardly... when và No sooner... than", grammarId: "053", level: "C1", category: "Cấu trúc câu",
    rule: "Diễn tả hành động này vừa mới xảy ra thì hành động khác nối tiếp ngay lập tức. Mệnh đề đầu bắt buộc phải **đảo ngữ** với thì quá khứ hoàn thành.",
    form: ["Hardly / Scarcely + had + S + V3/ed + when + S + V2/ed", "No sooner + had + S + V3/ed + than + S + V2/ed"],
    examples: ["Hardly had I opened the door when a cat jumped out.", "No sooner had we reached the station than the train left."],
    wrong: "Hardly I had opened the door when a cat jumped out.", right: "Hardly had I opened the door when a cat jumped out.",
    more: [
      { type: "nuance", text: "Chú ý đi cặp liên từ chính xác: **Hardly / Scarcely** đi với **when**, còn **No sooner** bắt buộc đi với **than**." }
    ]
  },
  { title: "Cấu trúc Not only... but also", grammarId: "054", level: "B2", category: "Liên từ",
    rule: "Dùng liên từ sóng đôi **not only... but also** để nối hai từ loại hoặc hai mệnh đề cùng chức năng nhằm nhấn mạnh ý 'không những... mà còn...'.",
    form: ["S + V + not only + A + but also + B"],
    examples: ["She is not only intelligent but also extremely hardworking.", "Not only did he pass the exam, but he also got a scholarship."],
    wrong: "He not only is smart, but also kind.", right: "He is not only smart, but also kind.",
    more: [
      { type: "advanced", text: "Khi đưa **Not only** lên đầu câu để nhấn mạnh, vế đầu tiên phải thực hiện đảo ngữ trợ động từ (**Not only did he pass...**)." }
    ]
  },
  { title: "Cấu trúc Either... or và Neither... nor", grammarId: "055", level: "B1", category: "Liên từ",
    rule: "**Either... or** (hoặc... hoặc...); **Neither... nor** (không... mà cũng không...). Động từ chính được chia theo chủ ngữ **N2** (chủ ngữ đứng gần động từ nhất).",
    form: ["Either / Neither + S1 + or / nor + S2 + V (chia theo S2)"],
    examples: ["Either you or I am responsible for this mistake.", "Neither the teacher nor the students were present.", "You can either stay here or come with us."],
    wrong: "Neither he nor I is ready.", right: "Neither he nor I am ready.",
    more: [
      { type: "nuance", text: "Quy tắc ngữ pháp chuẩn quy định động từ phải hòa hợp với chủ ngữ nằm gần nó nhất (**S2**)." }
    ]
  },
  { title: "Mệnh đề quan hệ rút gọn bằng V-ing và V3/ed", grammarId: "056", level: "B2", category: "Mệnh đề",
    rule: "Khi mệnh đề quan hệ ở thể chủ động, ta rút gọn bằng cách bỏ đại từ quan hệ và to-be, giữ lại **V-ing**. Nếu ở thể bị động, rút gọn giữ lại quá khứ phân từ (**V3/ed**).",
    form: ["N + V-ing + ... (chủ động)", "N + V3/ed + ... (bị động)"],
    examples: ["The girl standing next to my sister in the photograph is my cousin.", "The letter written by Mary yesterday is on the table."],
    wrong: "The girl stands next to my sister is my cousin.", right: "The girl standing next to my sister in the photograph is my cousin.",
    more: [
      { type: "nuance", text: "Chỉ rút gọn được mệnh đề quan hệ khi đại từ quan hệ (**who/which/that**) làm **chủ ngữ** trong mệnh đề đó." }
    ]
  },
  { title: "Mệnh đề quan hệ rút gọn bằng To-V", grammarId: "057", level: "B2", category: "Mệnh đề",
    rule: "Dùng **to-V** để rút gọn mệnh đề quan hệ khi danh từ đứng trước có các từ chỉ số thứ tự (**the first**, **the second**), so sánh nhất (**the best**), hoặc **the only** / **the last**.",
    form: ["N + (the first / the only / so sánh nhất) + to-V"],
    examples: ["Neil Armstrong was the first man to walk on the moon.", "I have many documents to sign before leaving."],
    wrong: "He is the first person step on Mars.", right: "He is the first person to step on Mars.",
    more: [
      { type: "nuance", text: "Nếu mệnh đề quan hệ dạng bị động mang ý nghĩa số thứ tự, rút gọn thành **to be + V3/ed** (**The first item to be sold**)." }
    ]
  },
  { title: "Cấu trúc đảo ngữ với Only", grammarId: "058", level: "C1", category: "Cấu trúc câu",
    rule: "Khi cụm từ bắt đầu bằng **Only** (**only when**, **only after**, **only by**) đứng đầu câu để nhấn mạnh, ta phải **đảo trợ động từ** lên trước chủ ngữ ở mệnh đề chính.",
    form: ["Only + time / condition + trợ động từ + S + V-bare"],
    examples: ["Only when she reached home did she realize her bag was missing.", "Only after finishing his homework did he go out to play."],
    wrong: "Only when she reached home she realized her bag.", right: "Only when she reached home did she realize her bag was missing.",
    more: [
      { type: "nuance", text: "Lưu ý đảo ngữ ở **mệnh đề chính**, không đảo ngữ ở mệnh đề phụ ngay sau **Only when/after**." }
    ]
  },
  { title: "Đảo ngữ với cụm từ phủ định tuyệt đối", grammarId: "059", level: "C1", category: "Cấu trúc câu",
    rule: "Các cụm từ mang ý nghĩa phủ định tuyệt đối đứng đầu câu như **under no circumstances**, **on no account**, **in no way** bắt buộc phải đảo trợ động từ lên trước chủ ngữ.",
    form: ["Negative phrase (Under no circumstances...) + trợ động từ + S + V-bare"],
    examples: ["Under no circumstances should you leave the room during the examination.", "On no account must this information be leaked."],
    wrong: "Under no circumstances you should leave the room.", right: "Under no circumstances should you leave the room.",
    more: [
      { type: "advanced", text: "Vì bản thân cụm từ đã mang nghĩa phủ định, mệnh đề sau tuyệt đối không dùng thêm **not** hay dạng phủ định." }
    ]
  },
  { title: "Đảo ngữ câu điều kiện ẩn If", grammarId: "060", level: "C1", category: "Câu điều kiện",
    rule: "Dùng để viết lại câu điều kiện trang trọng hơn bằng cách bỏ **if** và đảo trợ động từ (**Should**, **Were**, **Had**) lên trước chủ ngữ.",
    form: ["Loại 1: Should + S + V-bare, clause", "Loại 2: Were + S + ..., clause", "Loại 3: Had + S + V3/ed, clause"],
    examples: ["Should you need any assistance, please contact us.", "Had I known the truth, I would have told you."],
    wrong: "If should you need assistance...", right: "Should you need any assistance, please contact us.",
    more: [
      { type: "nuance", text: "Ở câu điều kiện loại 2 nếu động từ là động từ thường, cấu trúc đảo ngữ là **Were + S + to-V** (**Were I to win the lottery...**)." }
    ]
  },
  { title: "Cấu trúc So... that và Such... that", grammarId: "061", level: "B1", category: "Cấu trúc câu",
    rule: "Dùng để chỉ mức độ dẫn đến kết quả (quá... đến mức mà...). **So** đi với tính từ hoặc trạng từ; **such** đi với cụm danh từ.",
    form: ["S + be + so + adj + that + clause", "S + V + such + (a/an) + adj + N + that + clause"],
    examples: ["The tea was so hot that I couldn't drink it right away.", "It was such a difficult test that nobody could get a high score."],
    wrong: "It was so a difficult test that nobody passed.", right: "It was such a difficult test that nobody passed.",
    more: [
      { type: "extension", text: "Cấu trúc biến thể với danh từ số nhiều/không đếm được: **so much / so many + N + that**." }
    ]
  },
  { title: "Đảo ngữ So... that và Such... that", grammarId: "062", level: "C1", category: "Cấu trúc câu",
    rule: "Khi muốn nhấn mạnh mức độ ở đầu câu, đưa **So + adj** hoặc **Such + be + N** lên đầu và đảo động từ **be** lên trước chủ ngữ.",
    form: ["So + adj + be + S + that + clause", "Such + be + N + that + clause"],
    examples: ["So heavy was the rain that all football matches were postponed.", "Such was her beauty that everyone stared at her."],
    wrong: "So heavy the rain was that matches were postponed.", right: "So heavy was the rain that all football matches were postponed.",
    more: [
      { type: "nuance", text: "Với **such** đảo ngữ, động từ **be** đứng ngay sau **such** trước khi tới danh từ chủ ngữ (**Such was the force of the wind...**)." }
    ]
  },
  { title: "Mệnh đề chỉ nguyên nhân", grammarId: "063", level: "B1", category: "Mệnh đề",
    rule: "**Because**, **as**, **since** đi kèm với mệnh đề (S + V). **Because of**, **due to**, **owing to** đi kèm với danh từ hoặc danh động từ (**V-ing**).",
    form: ["Because / As / Since + clause", "Because of / Due to / Owing to + N / V-ing"],
    examples: ["The outdoor match was postponed because of the heavy rain.", "Because it rained heavily, we stayed at home."],
    wrong: "Because of it rained heavily, we stayed at home.", right: "Because it rained heavily, we stayed at home.",
    more: [
      { type: "nuance", text: "**Due to** thường đứng sau động từ **be** làm tính từ bổ nghĩa cho chủ ngữ, trong khi **because of** bổ nghĩa cho động từ hành động." }
    ]
  },
  { title: "Mệnh đề chỉ kết quả", grammarId: "064", level: "B1", category: "Liên từ",
    rule: "Dùng để diễn tả hệ quả của hành động trước đó. **So** là liên từ đứng giữa hai mệnh đề (sau dấu phẩy). **Therefore**, **consequently** là trạng từ liên kết đứng sau dấu chấm phẩy hoặc chấm câu.",
    form: ["Clause, so + clause", "Clause; therefore / consequently / as a result, + clause"],
    examples: ["He didn't study for the exam; therefore, he failed it.", "He didn't study hard, so he failed the exam."],
    wrong: "He didn't study, therefore he failed.", right: "He didn't study; therefore, he failed it.",
    more: [
      { type: "nuance", text: "Chú ý dấu câu: **therefore** dùng sau dấu chấm phẩy và theo sau bởi dấu phẩy (**; therefore,**), không dùng trực tiếp thay thế cho **so** sau dấu phẩy đơn." }
    ]
  },
  { title: "Mệnh đề chỉ mục đích", grammarId: "065", level: "B1", category: "Mệnh đề",
    rule: "**So that** và **in order that** đi với mệnh đề chứa động từ khuyết thiếu. **In order to**, **so as to**, **to** đi với động từ nguyên mẫu (**V-bare**).",
    form: ["S + V + so that / in order that + S + can/will/could + V-bare", "S + V + in order to / so as to / to + V-bare"],
    examples: ["He got up early in order to catch the first bus to work.", "He woke up early so that he could catch the first bus."],
    wrong: "He got up early in order that catching the bus.", right: "He got up early in order to catch the first bus to work.",
    more: [
      { type: "nuance", text: "Dạng phủ định chỉ dùng **in order not to** hoặc **so as not to** + V-bare, tuyệt đối không dùng *not to V* ở đầu câu để chỉ mục đích." }
    ]
  },
  { title: "Mệnh đề chỉ sự nhượng bộ", grammarId: "066", level: "B1", category: "Mệnh đề",
    rule: "**Although**, **even though**, **though** đi với mệnh đề (S + V). **In spite of** và **despite** đi với danh từ, cụm danh từ hoặc **V-ing**.",
    form: ["Although / Even though / Though + clause", "In spite of / Despite + N / V-ing"],
    examples: ["Although it was raining heavily, they went for a hike.", "Despite the heavy rain, they went for a hike."],
    wrong: "Despite it was raining, they went for a hike.", right: "Despite the heavy rain, they went for a hike.",
    more: [
      { type: "nuance", text: "Tuyệt đối không dùng *despite of* (chỉ dùng **despite** hoặc **in spite of**). Nếu muốn dùng mệnh đề sau **despite**, dùng cụm **despite the fact that + clause**." }
    ]
  },
  { title: "Cấu trúc nhượng bộ nâng cao với As và Though", grammarId: "067", level: "C1", category: "Cấu trúc câu",
    rule: "Đưa tính từ hoặc trạng từ lên đầu câu, theo sau bởi **as** hoặc **though** để diễn tả ý nghĩa 'mặc dù... thế nào đi nữa'.",
    form: ["Adj / Adv + as / though + S + V, clause"],
    examples: ["Hard as he tried, he couldn't lift the heavy weight.", "Rich as they are, they live very simply."],
    wrong: "Although hard as he tried, he failed.", right: "Hard as he tried, he couldn't lift the heavy weight.",
    more: [
      { type: "nuance", text: "Chỉ dùng **as** hoặc **though** trong cấu trúc đảo nhượng bộ này, không dùng *although*." }
    ]
  },
  { title: "Mệnh đề giả định với As if và As though", grammarId: "068", level: "B2", category: "Mệnh đề",
    rule: "Diễn tả tình huống giả định không có thật ở hiện tại, lùi thì về quá khứ đơn trong mệnh đề sau **as if / as though** (động từ **be** dùng **were** cho mọi ngôi).",
    form: ["S + V + as if / as though + S + V2/ed (were cho mọi ngôi)"],
    examples: ["He talks as if he knew everything about astrophysics.", "She acted as though she didn't care at all."],
    wrong: "He talks as if he knows everything.", right: "He talks as if he knew everything about astrophysics.",
    more: [
      { type: "nuance", text: "Sự khác biệt sắc thái: **Suggest** đưa ra lời đề nghị/gợi ý chung mang tính thảo luận; **Recommend** gợi ý dựa trên trải nghiệm/chuyên môn cá nhân; **Insist** mang tính khăng khăng, đòi hỏi bắt buộc phải thực hiện." }
    ]
  },
  { title: "Thức giả định với Suggest / Recommend / Insist", grammarId: "069", level: "B2", category: "Thức giả định",
    rule: "Dùng sau các động từ đề nghị, yêu cầu (**suggest**, **recommend**, **insist**, **demand**). Động từ ở mệnh đề **that** theo sau luôn ở dạng nguyên mẫu không chia (**bare infinitive**).",
    form: ["S + suggest / recommend / insist + that + S + (should) + V-bare"],
    examples: ["The doctor suggested that he eat more vegetables in his diet.", "I insist that he be present at the meeting."],
    wrong: "The doctor suggested that he eats vegetables.", right: "The doctor suggested that he eat more vegetables in his diet.",
    more: [
      { type: "nuance", text: "Phân biệt sắc thái từ vựng: **Suggest** (đề xuất/gợi ý ý tưởng để suy ngẫm), **Recommend** (khuyên dùng dựa trên kinh nghiệm hoặc chuyên môn), **Insist** (nài nỉ, khăng khăng đòi hỏi phải làm theo ý mình)." }
    ]
  },
  { title: "So sánh bằng với As... as", grammarId: "070", level: "A2", category: "So sánh",
    rule: "Dùng để diễn tả sự tương đương giữa hai đối tượng về tính chất hoặc mức độ hành động. Giữa hai từ **as** giữ nguyên tính từ hoặc trạng từ gốc.",
    form: ["S + V + as + adj / adv + as + N / pronoun"],
    examples: ["She runs as fast as her older brother.", "My house is as big as yours."],
    wrong: "She runs as fast than her brother.", right: "She runs as fast as her older brother.",
    more: [
      { type: "extension", text: "Trong câu phủ định so sánh bằng, có thể dùng **not so... as** để thay thế cho **not as... as**." }
    ]
  },

  { title: "So sánh hơn với tính từ và trạng từ", grammarId: "071", level: "A1", category: "So sánh",
    rule: "Thêm đuôi **-er + than** cho tính từ/trạng từ ngắn (1 âm tiết) và **more + adj/adv + than** cho từ dài (2 âm tiết trở lên). *Mẹo chính tả:* Tính từ ngắn kết thúc bằng một phụ âm đứng sau một nguyên âm thì gấp đôi phụ âm cuối trước khi thêm **-er** (**big** -> **bigger**).",
    form: ["S + V + adj/adv-er + than + N / pronoun", "S + V + more + adj/adv + than + N / pronoun"],
    examples: ["This building is taller than that one.", "This exercise is more difficult than the previous one.", "He runs faster than me."],
    wrong: "This building is more tall than that one.", right: "This building is taller than that one.",
    more: [
      { type: "nuance", text: "Phân biệt sắc thái: Dùng **more** với tính từ/trạng từ dài thể hiện sự tăng tiến tổng quát, nhưng có thể nhấn mạnh sự chênh lệch nhỏ bằng **slightly/a bit** hoặc chênh lệch lớn bằng **much/far** trước hình thức so sánh." }
    ]
  },
  { title: "So sánh nhất với tính từ và trạng từ", grammarId: "072", level: "A1", category: "So sánh",
    rule: "Dùng để so sánh một đối tượng với toàn bộ tập hợp (từ 3 đối tượng trở lên). Thêm **the + adj/adv-est** cho từ ngắn và **the most + adj/adv** cho từ dài.",
    form: ["S + V + the + adj/adv-est + (in/of...)", "S + V + the most + adj/adv + (in/of...)"],
    examples: ["Mount Everest is the highest mountain in the world.", "He is the most intelligent student in our class.", "She ran the fastest of all."],
    wrong: "He is the more intelligent student in our class.", right: "He is the most intelligent student in our class.",
    more: [
      { type: "nuance", text: "Phân biệt giới từ theo sau: Dùng **in** khi chỉ một địa điểm hoặc tập hợp danh từ số ít (**in the world**, **in the team**); dùng **of** khi đi với khoảng thời gian hoặc danh từ số nhiều (**of the three**, **of all time**)." }
    ]
  },
  { title: "So sánh kép The comparative, the comparative", grammarId: "073", level: "B2", category: "So sánh",
    rule: "Diễn tả mối quan hệ nguyên nhân - kết quả đồng tiến ('càng... thì càng...'). Cả hai vế đều đảo hình thức so sánh hơn lên đầu mệnh đề và bắt buộc có mạo từ **the**.",
    form: ["The + comparative + S + V, the + comparative + S + V"],
    examples: ["The more you practice, the better you will play.", "The higher we climbed, the colder it became.", "The sooner you start, the earlier you will finish."],
    wrong: "More you practice, better you will play.", right: "The more you practice, the better you will play.",
    more: [
      { type: "nuance", text: "Phân biệt sắc thái với cấu trúc ngắn: Trong giao tiếp có thể rút gọn tối đa mệnh đề thành các cụm từ ngắn như **The more, the merrier** (Càng đông càng vui) mà không cần chủ ngữ và động từ." }
    ]
  },
  { title: "So sánh lũy tiến", grammarId: "074", level: "B1", category: "So sánh",
    rule: "Diễn tả sự thay đổi liên tục theo chiều hướng tăng lên hoặc giảm đi của một đặc tính ('ngày càng...'). Tính từ ngắn nối bằng **and**, tính từ dài lặp lại từ **more**.",
    form: ["adj/adv-er + and + adj/adv-er", "more and more + adj/adv dài"],
    examples: ["Computers are getting smaller and cheaper every year.", "Traffic is becoming more and more congested.", "She worked harder and harder."],
    wrong: "Computers are getting smaller and cheap.", right: "Computers are getting smaller and cheaper every year.",
    more: [
      { type: "nuance", text: "Phân biệt với dạng giảm dần: Khi muốn diễn tả 'ngày càng kém/ít đi', dùng cấu trúc **less and less + adj/adv** cho cả từ ngắn lẫn từ dài (**less and less clear**)." }
    ]
  },
  { title: "Từ nối chỉ sự bổ sung", grammarId: "075", level: "B2", category: "Từ nối",
    rule: "Dùng **In addition**, **Moreover**, **Furthermore**, **Besides** để bổ sung thông tin hoặc luận điểm mới vào câu trước. Thường đứng đầu câu hoặc sau dấu chấm phẩy và ngăn cách bằng dấu phẩy.",
    form: ["Clause; moreover / furthermore / in addition / besides, + clause"],
    examples: ["He is fluent in French; moreover, he speaks German and Italian.", "The apartment is spacious; furthermore, it is centrally located.", "In addition to his salary, he gets bonuses."],
    wrong: "He is fluent in French moreover he speaks German.", right: "He is fluent in French; moreover, he speaks German.",
    more: [
      { type: "nuance", text: "Phân biệt sắc thái giữa các từ: **Moreover** và **Furthermore** mang văn phong trang trọng/học thuật cao dùng trong luận điểm; **Besides** vừa là trạng từ vừa là giới từ (**besides + N/V-ing**) mang tính thân mật hơn trong giao tiếp." }
    ]
  },
  { title: "Liên từ chỉ sự tương phản", grammarId: "076", level: "B2", category: "Từ nối",
    rule: "Dùng **However**, **Nevertheless**, **On the other hand** để đưa ra ý kiến hoặc sự việc tương phản với mệnh đề trước đó.",
    form: ["Clause; however / nevertheless / on the other hand, + clause"],
    examples: ["The team worked hard; however, they could not secure the contract.", "It was raining; nevertheless, they went out for a walk.", "On the one hand..., on the other hand..."],
    wrong: "The team worked hard, however they could not secure it.", right: "The team worked hard; however, they could not secure it.",
    more: [
      { type: "nuance", text: "Phân biệt mức độ trang trọng: **Nevertheless** mang sắc thái cực kỳ trang trọng và trang nghiêm hơn **However**; **On the other hand** dùng khi cân nhắc hai mặt đối lập của một vấn đề." }
    ]
  },
  { title: "Cấu trúc In case và In case of", grammarId: "077", level: "B1", category: "Liên từ",
    rule: "Dùng để diễn tả sự chuẩn bị, phòng ngừa một khả năng có thể xảy ra trong tương lai. **In case** đi với mệnh đề (S + V); **In case of** đi với danh từ hoặc cụm danh từ.",
    form: ["In case + clause", "In case of + N / V-ing"],
    examples: ["Take an umbrella with you in case it rains later.", "In case of emergency, please break the glass.", "I brought extra money in case we need it."],
    wrong: "In case of it rains, take an umbrella.", right: "In case it rains, take an umbrella.",
    more: [
      { type: "nuance", text: "Phân biệt **In case** và **If**: **In case** là hành động chuẩn bị làm trước *để phòng ngừa* (mang dù trước); **If** là hành động chỉ thực hiện *sau khi* điều kiện xảy ra (mưa mới mở dù)." }
    ]
  },
  { title: "Cấu trúc Provided that và As long as", grammarId: "078", level: "B2", category: "Liên từ",
    rule: "Dùng để đặt ra điều kiện bắt buộc để một sự việc khác được phép diễn ra ('miễn là', 'với điều kiện là'). Mệnh đề chứa điều kiện tuyệt đối không chia thì tương lai đơn.",
    form: ["Provided that / Providing that / As long as + S + V (hiện tại đơn), clause"],
    examples: ["You can borrow my car as long as you return it with a full tank.", "Provided that you study hard, you will pass the exam.", "Providing that weather is fine, we leave tomorrow."],
    wrong: "You can borrow my car as long as you will return it.", right: "You can borrow my car as long as you return it.",
    more: [
      { type: "nuance", text: "Phân biệt sắc thái: **Provided that** / **Providing that** thường dùng trong văn phong viết, hợp đồng hoặc quy định trang trọng; **As long as** dùng phổ biến trong giao tiếp hàng ngày." }
    ]
  },
  { title: "Mệnh đề trạng ngữ chỉ vị trí", grammarId: "079", level: "B1", category: "Mệnh đề",
    rule: "Dùng **where** (nơi mà) hoặc **wherever** (bất cứ nơi đâu) để bổ nghĩa cho động từ chính về vị trí/địa điểm diễn ra hành động.",
    form: ["Where / Wherever + clause, clause", "S + V + where / wherever + clause"],
    examples: ["You can sit wherever you like in the auditorium.", "Put the keys where everyone can see them.", "Wherever she goes, she makes friends easily."],
    wrong: "You can sit everywhere you like.", right: "You can sit wherever you like in the auditorium.",
    more: [
      { type: "nuance", text: "Phân biệt **Where** và **Wherever**: **Where** chỉ một địa điểm xác định cụ thể (*where I was born*); **Wherever** mang tính mở rộng, vô định (*bất kỳ chỗ nào*)." }
    ]
  },
  { title: "Câu mệnh lệnh kết hợp and hoặc or", grammarId: "080", level: "A2", category: "Cấu trúc câu",
    rule: "Đưa ra lời khuyên hoặc cảnh báo bằng cách dùng câu mệnh lệnh đứng đầu (**V-bare**), nối với vế sau bằng **and** (kết quả tích cực) hoặc **or / or else** (hậu quả tiêu cực).",
    form: ["V-bare..., and + S + will + V-bare", "V-bare..., or / or else + S + will + V-bare"],
    examples: ["Study hard, and you will pass the upcoming examination.", "Hurry up, or you will miss the train.", "Listen carefully, and you will understand."],
    wrong: "Study hard, and you pass the exam.", right: "Study hard, and you will pass the upcoming examination.",
    more: [
      { type: "nuance", text: "Phân biệt tương đương với câu điều kiện: **V-bare..., and...** tương đương mệnh đề **If + khẳng định**; **V-bare..., or...** tương đương mệnh đề **If + phủ định** (*If you don't hurry...*)." }
    ]
  },
  { title: "Danh từ đếm được và không đếm được nâng cao", grammarId: "081", level: "A1", category: "Danh từ",
    rule: "Danh từ đếm được có thể đếm bằng số và có dạng số nhiều; danh từ không đếm được không thể đếm trực tiếp mà phải thông qua các cụm từ định lượng (**a piece of**, **a glass of**).",
    form: ["Countable N (singular/plural)", "Uncountable N (+ a piece of / a bottle of / a cup of)"],
    examples: ["She gave me a great piece of advice.", "How much water do you drink every day?", "I need to buy some furniture for my new apartment."],
    wrong: "She gave me a great advice.", right: "She gave me a great piece of advice.",
    more: [
      { type: "nuance", text: "Phân biệt các từ có hai dạng nghĩa: **Hair** chỉ toàn bộ mái tóc là không đếm được (*Her hair is dark*), nhưng chỉ các sợi tóc riêng lẻ là đếm được (*There are two hairs on your shirt*)." }
    ]
  },
  { title: "Danh từ ghép và sở hữu cách", grammarId: "082", level: "A2", category: "Danh từ",
    rule: "Dùng danh từ ghép để chỉ tên loại đối tượng (**noun + noun**). Dùng sở hữu cách (**'s** cho danh từ số ít hoặc số nhiều bất quy tắc; **'** cho danh từ số nhiều tận cùng bằng s) để chỉ quyền sở hữu của người/động vật.",
    form: ["Noun + Noun (danh từ ghép)", "N (số ít) + 's + N", "N (số nhiều có s) + ' + N"],
    examples: ["This is my brother's laptop; he left it on the table.", "We visited the girls' dormitory yesterday.", "He bought a new bus ticket."],
    wrong: "This is my brothers laptop.", right: "This is my brother's laptop.",
    more: [
      { type: "nuance", text: "Phân biệt sở hữu với vật/thực thể vô sinh: Với đồ vật, dùng cấu trúc **N + of + N** (*the leg of the table*) chứ ít khi dùng sở hữu cách *'s* (*the table's leg*)." }
    ]
  },
  { title: "Sử dụng mạo từ nâng cao", grammarId: "083", level: "A1", category: "Mạo từ",
    rule: "Dùng **a/an** cho danh từ số ít nhắc tới lần đầu; **the** cho danh từ đã xác định/duy nhất; không dùng mạo từ (**zero article**) trước danh từ số nhiều/không đếm được khi phát biểu chung.",
    form: ["a / an + N (số ít, chưa xác định)", "the + N (đã xác định / duy nhất)", "Ø + N (số nhiều / không đếm được nghĩa chung)"],
    examples: ["She wants to buy a new car next month.", "The moon orbits around the Earth.", "Children love playing video games."],
    wrong: "She wants to buy new car.", right: "She wants to buy a new car.",
    more: [
      { type: "nuance", text: "Phân biệt danh từ có và không có **the**: **Go to hospital** (đến bệnh viện để chữa bệnh với tư cách bệnh nhân); **Go to the hospital** (đến bệnh viện với tư cách người thăm nuôi/khách)." }
    ]
  },
  { title: "Từ chỉ số lượng Much Many A lot of Plenty of", grammarId: "084", level: "A2", category: "Từ chỉ số lượng",
    rule: "**Many** đi với danh từ đếm được số nhiều; **Much** đi với danh từ không đếm được. **A lot of** / **Plenty of** dùng linh hoạt cho cả hai loại danh từ trong câu khẳng định.",
    form: ["many + N (đếm được số nhiều)", "much + N (không đếm được)", "a lot of / plenty of + N (cả hai loại)"],
    examples: ["How much sugar did you put in my coffee?", "There are many students in the library today.", "We have a lot of time before the train departs."],
    wrong: "How many sugar do you need?", right: "How much sugar do you need?",
    more: [
      { type: "nuance", text: "Phân biệt sắc thái: **Plenty of** mang ý nghĩa 'đủ và thừa thãi cho nhu cầu', trong khi **a lot of** chỉ đơn thuần là 'số lượng nhiều'." }
    ]
  },
  { title: "Từ chỉ số lượng Few A few Little A little", grammarId: "085", level: "B1", category: "Từ chỉ số lượng",
    rule: "**A few** / **A little** mang nghĩa tích cực (còn một ít, đủ dùng). **Few** / **Little** mang nghĩa phủ định (rất ít, hầu như không có, không đủ dùng).",
    form: ["a few / few + N (đếm được số nhiều)", "a little / little + N (không đếm được)"],
    examples: ["I have a few friends in this city, so I rarely feel lonely.", "He has little experience in marketing, so he failed to get the job.", "We have a little time left before the deadline."],
    wrong: "I have few friends so I feel very happy.", right: "I have a few friends so I feel quite happy.",
    more: [
      { type: "nuance", text: "Phân biệt thái độ người nói: **I have a little money** (Vui vì vẫn còn tiền tiêu); **I have little money** (Buồn/lo lắng vì sắp hết tiền)." }
    ]
  },
  { title: "Đại từ phân bổ All Both Neither Either None", grammarId: "086", level: "B2", category: "Đại từ",
    rule: "Dùng để chỉ tổng thể hoặc phân loại nhóm đối tượng. **Both / Neither / Either** dùng cho nhóm 2 đối tượng; **All / None** dùng cho nhóm từ 3 đối tượng trở lên.",
    form: ["Both / Neither / Either + of + the + N (2 đối tượng)", "All / None + of + the + N (>= 3 đối tượng)"],
    examples: ["Neither of the two candidates was qualified for the job.", "Both of my parents are teachers.", "None of the students failed the final examination."],
    wrong: "Neither of the two candidates were qualified.", right: "Neither of the two candidates was qualified.",
    more: [
      { type: "nuance", text: "Phân biệt hòa hợp chủ vị: **Neither of / Either of** theo sau bởi danh từ số nhiều nhưng động từ trong ngữ pháp trang trọng luôn chia ở **số ít** (*Neither of them was present*)." }
    ]
  },
  { title: "Phân biệt Every và Each", grammarId: "087", level: "B2", category: "Từ chỉ số lượng",
    rule: "**Each** dùng cho nhóm từ 2 đối tượng trở lên, nhấn mạnh tính riêng biệt từng cá thể. **Every** dùng cho nhóm từ 3 đối tượng trở lên, nhấn mạnh tính tổng thể của cả tập hợp.",
    form: ["Each / Every + N (đếm được số ít) + V (số ít)"],
    examples: ["Each student in the class was given a unique project topic.", "Every room in this hotel has an ocean view.", "She spoke to each participant individually."],
    wrong: "Every students received a gift.", right: "Each student received a gift.",
    more: [
      { type: "nuance", text: "Phân biệt cấu trúc: **Each** có thể đứng một mình hoặc đi với *of* (**Each of the boys**), nhưng **Every** bắt buộc phải có danh từ đứng ngay sau (không dùng *Every of*)." }
    ]
  },
  { title: "Đại từ phản thân", grammarId: "088", level: "A2", category: "Đại từ",
    rule: "Dùng khi chủ ngữ và tân ngữ chỉ cùng một đối tượng (**myself**, **yourself**, **himself**...), hoặc kết hợp cụm **by + reflexive pronoun** để diễn tả việc tự làm không có người giúp.",
    form: ["S + V + reflexive pronoun", "by + reflexive pronoun (tự mình làm)"],
    examples: ["He built the bookshelf all by himself without any help.", "She looked at herself in the mirror.", "Children, you must take care of yourselves."],
    wrong: "He looked at him in the mirror.", right: "He looked at himself in the mirror.",
    more: [
      { type: "nuance", text: "Phân biệt tân ngữ thường và đại từ phản thân: **He saw him** (Anh ấy nhìn thấy người đàn ông khác); **He saw himself** (Anh ấy nhìn chính mình trong gương)." }
    ]
  },
  { title: "Đại từ sở hữu và tính từ sở hữu", grammarId: "089", level: "A1", category: "Đại từ",
    rule: "Tính từ sở hữu (**my**, **your**, **his**...) phải đứng trước danh từ. Đại từ sở hữu (**mine**, **yours**, **his**...) đứng độc lập thay thế cho cả 'tính từ sở hữu + danh từ' để tránh lặp từ.",
    form: ["Possessive adj + N", "Possessive pronoun (mine / yours / his / hers / ours / theirs)"],
    examples: ["This isn't my jacket; mine is blue.", "Her hair is long, but his is short.", "Is this umbrella yours or ours?"],
    wrong: "This jacket is my.", right: "This jacket is mine.",
    more: [
      { type: "nuance", text: "Phân biệt **its** và **it's**: **Its** là tính từ sở hữu (*The dog wagged its tail*); **It's** là dạng viết tắt của *It is* hoặc *It has*." }
    ]
  },
  { title: "Trật tự của tính từ trước danh từ", grammarId: "090", level: "B1", category: "Tính từ",
    rule: "Khi nhiều tính từ cùng bổ nghĩa cho một danh từ, sắp xếp theo thứ tự **OSASCOMP**: Opinion (Ý kiến) -> Size (Kích thước) -> Age (Tuổi) -> Shape (Hình dáng) -> Color (Màu sắc) -> Origin (Nguồn gốc) -> Material (Chất liệu) -> Purpose (Mục đích).",
    form: ["Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose + N"],
    examples: ["She was wearing a beautiful long red silk dress at the wedding.", "He bought an old small wooden house.", "They gave me a wonderful round golden ring."],
    wrong: "She wore a red long beautiful silk dress.", right: "She was wearing a beautiful long red silk dress.",
    more: [
      { type: "nuance", text: "Phân biệt tính từ ý kiến chủ quan và khách quan: Tính từ thể hiện quan điểm chủ quan (**beautiful**, **lovely**) luôn đứng trước các tính từ miêu tả thực tế khách quan (**long**, **red**)." }
    ]
  },
  { title: "Tính từ tận cùng bằng ED và ING", grammarId: "091", level: "B1", category: "Tính từ",
    rule: "Tính từ đuôi **-ed** diễn tả cảm xúc/bị tác động của con người. Tính từ đuôi **-ing** mô tả bản chất, tính chất gây ra cảm xúc của sự vật, sự việc hoặc người khác.",
    form: ["S (người) + be + adj-ed (cảm xúc)", "S (sự vật/sự việc) + be + adj-ing (tính chất)"],
    examples: ["The long lecture was so boring that half the audience fell asleep.", "I am bored with this routine.", "She was surprised by the sudden news."],
    wrong: "The lecture was so bored.", right: "The lecture was so boring.",
    more: [
      { type: "nuance", text: "Phân biệt khi mô tả người: **He is bored** (Anh ấy đang cảm thấy chán nản); **He is boring** (Anh ấy là một người tẻ nhạt, làm người khác phát chán)." }
    ]
  },
  { title: "Vị trí và dạng của trạng từ", grammarId: "092", level: "A2", category: "Trạng từ",
    rule: "Trạng từ thể cách diễn tả cách thức hành động diễn ra (thêm **-ly** vào tính từ). Đứng sau động từ chính hoặc sau tân ngữ, tuyệt đối không đứng giữa động từ và tân ngữ.",
    form: ["S + V + (O) + adv (-ly)"],
    examples: ["She speaks English extremely fluently.", "He quickly finished his homework before dinner.", "Please drive carefully on this slippery road."],
    wrong: "She speaks English fluent.", right: "She speaks English fluently.",
    more: [
      { type: "nuance", text: "Phân biệt tính từ/trạng từ bất quy tắc: **Hard** (chăm chỉ/cứng) -> trạng từ vẫn là **hard**; còn **hardly** mang nghĩa hoàn toàn khác là 'hầu như không'." }
    ]
  },
  { title: "Trạng từ chỉ nơi chốn phủ định đứng đầu câu", grammarId: "093", level: "B2", category: "Trạng từ",
    rule: "Khi trạng từ chỉ nơi chốn mang tính phủ định hoặc giới hạn (**Nowhere**, **On no hill**) đứng đầu câu để nhấn mạnh, ta thực hiện đảo trợ động từ lên trước chủ ngữ.",
    form: ["Nowhere / Locative phrase + trợ động từ + S + V-bare"],
    examples: ["Nowhere will you find such breathtaking scenery as in the Alps.", "On the hilltop stood an ancient castle."],
    wrong: "Nowhere you will find such scenery.", right: "Nowhere will you find such breathtaking scenery.",
    more: [
      { type: "nuance", text: "Phân biệt đảo ngữ toàn bộ và đảo trợ động từ: Khi cụm trạng từ chỉ vị trí đứng đầu câu trong văn mô tả, động từ chính được đảo thẳng lên trước chủ ngữ không mượn trợ động từ (**On the table sat a black cat**)." }
    ]
  },
  { title: "Giới từ chỉ thời gian In On At", grammarId: "094", level: "A1", category: "Giới từ",
    rule: "Dùng **at** cho mốc giờ cụ thể, dịp lễ; **on** cho các ngày trong tuần, ngày tháng cụ thể; **in** cho tháng, năm, mùa, thế kỷ và các buổi trong ngày.",
    form: ["at + giờ / mốc thời gian cụ thể", "on + thứ / ngày tháng", "in + tháng / năm / mùa / thế kỷ"],
    examples: ["The concert starts at 7:30 PM sharp tonight.", "My birthday is on October 15th.", "We love traveling in summer."],
    wrong: "The concert starts in 7:30 PM.", right: "The concert starts at 7:30 PM.",
    more: [
      { type: "nuance", text: "Phân biệt **at night** và **in the night**: **At night** nói chung về thời gian ban đêm; **In the night** chỉ một thời điểm cụ thể trong một đêm nhất định." }
    ]
  },
  { title: "Giới từ chỉ nơi chốn In On At", grammarId: "095", level: "A1", category: "Giới từ",
    rule: "Dùng **at** cho vị trí địa điểm/sự kiện cụ thể, địa chỉ nhà; **on** cho bề mặt, tầng nhà, tên đường; **in** cho không gian kín, thành phố, quốc gia.",
    form: ["at + điểm cụ thể / địa chỉ nhà", "on + bề mặt / tên đường / tầng", "in + không gian kín / thành phố / quốc gia"],
    examples: ["She is currently studying at the library.", "There is a poster on the wall.", "They live in Hanoi, Vietnam."],
    wrong: "She is studying on the library.", right: "She is studying at the library.",
    more: [
      { type: "nuance", text: "Phân biệt **at the corner** (ở góc đường/ngã tư bên ngoài) và **in the corner** (ở góc bên trong một căn phòng)." }
    ]
  },
  { title: "Giới từ chỉ phương hướng và chuyển động", grammarId: "096", level: "A2", category: "Giới từ",
    rule: "Dùng các giới từ như **to**, **into**, **out of**, **through**, **across** để chỉ hướng di chuyển của đối tượng từ vị trí này sang vị trí khác.",
    form: ["S + V (chuyển động) + into / out of / across / through + N"],
    examples: ["She walked into the dark room and switched on the lights.", "They swam across the wide river.", "The train went through a long tunnel."],
    wrong: "She walked in the dark room from outside.", right: "She walked into the dark room.",
    more: [
      { type: "nuance", text: "Phân biệt **in** và **into**: **In** chỉ vị trí tĩnh bên trong (*She is in the room*); **Into** chỉ hướng di chuyển từ ngoài vào trong (*She walked into the room*)." }
    ]
  },
  { title: "Giới từ chỉ phương tiện và công cụ", grammarId: "097", level: "B1", category: "Giới từ",
    rule: "Dùng **by** trước phương tiện giao thông chung chung (không mạo từ). Dùng **on/in** khi phương tiện có mạo từ/tính từ sở hữu. Dùng **with** chỉ công cụ, dụng cụ cụ thể.",
    form: ["by + phương tiện (by bus, by train)", "in / on + a/my + phương tiện", "with + công cụ (with a pen, with a knife)"],
    examples: ["He usually travels to work by train to avoid traffic jams.", "She signed the official document with a golden pen.", "They went there in my car."],
    wrong: "He travels to work by the train.", right: "He travels to work by train.",
    more: [
      { type: "nuance", text: "Phân biệt **in** và **on** với phương tiện riêng: Dùng **on** cho phương tiện có thể đi lại đứng thẳng bên trong (**on the bus/plane/train**); dùng **in** cho phương tiện nhỏ phải ngồi xếp chân (**in a car/taxi**)." }
    ]
  },
  { title: "Cụm động từ với Take Give Make Do", grammarId: "098", level: "B1", category: "Cụm động từ",
    rule: "Cụm động từ (**phrasal verbs**) gồm động từ chính kết hợp với một hoặc hai tiểu từ, tạo ra ý nghĩa hoàn toàn mới khác biệt so với động từ gốc.",
    form: ["Verb + particle (take off, give up, make up, do away with)"],
    examples: ["Please take off your shoes before entering the temple.", "She decided to give up smoking for good.", "The plane took off on time despite the fog."],
    wrong: "Please take away your shoes.", right: "Please take off your shoes.",
    more: [
      { type: "nuance", text: "Phân biệt đa nghĩa của **take off**: Mang nghĩa cởi (quần áo/giày dép), máy bay cất cánh, hoặc sự nghiệp bắt đầu khởi sắc nhanh chóng." }
    ]
  },
  { title: "Cụm động từ với Look Bring Turn Put", grammarId: "099", level: "B1", category: "Cụm động từ",
    rule: "Các cụm động từ thông dụng đi với **look**, **bring**, **turn**, **put** thường xuyên xuất hiện trong giao tiếp và các kỳ thi đánh giá năng lực.",
    form: ["Verb + preposition / adverb (look forward to, turn down, put on)"],
    examples: ["Please put on your coat; the room is quite chilly.", "Can you turn down the music, please?", "She is looking forward to meeting you."],
    wrong: "Please put on your coat off.", right: "Please put on your coat.",
    more: [
      { type: "nuance", text: "Phân biệt cấu trúc đặc biệt: **Look forward to** bắt buộc theo sau bởi danh từ hoặc danh động từ **V-ing** (**looking forward to seeing you**), không dùng *to V-bare*." }
    ]
  },
  { title: "Câu cảm thán với What và How nâng cao", grammarId: "100", level: "A2", category: "Câu cảm thán",
    rule: "Dùng **What** trước cụm danh từ đếm được số ít, số nhiều hoặc không đếm được; dùng **How** trước tính từ hoặc trạng từ để thể hiện cảm xúc mạnh mẽ.",
    form: ["What + (a/an) + adj + N + S + V!", "How + adj / adv + S + V!"],
    examples: ["What a wonderful painting this is!", "How brilliantly she played the piano tonight!", "What delicious food they prepared!"],
    wrong: "How a wonderful painting this is!", right: "What a wonderful painting this is!",
    more: [
      { type: "nuance", text: "Phân biệt mạo từ với danh từ không đếm được trong câu cảm thán **What**: Tuyệt đối không thêm **a/an** trước danh từ không đếm được (**What bad weather!**, không viết *What a bad weather!*)." }
    ]
  },
  
  { title: "Câu hỏi đuôi nâng cao", grammarId: "101", level: "B2", category: "Cấu trúc câu",
    rule: "Các trường hợp ngoại lệ trong câu hỏi đuôi (**tag questions**): Rủ rê với **Let's** dùng **shall we**; câu mệnh lệnh dùng **will you**; chủ ngữ là đại từ bất định chỉ người (**everyone**, **nobody**) dùng **they** ở vế đuôi. *Lỗi tinh tế hay gặp:* Khi câu có các từ mang nghĩa phủ định ẩn (**hardly**, **seldom**, **never**, **nobody**), vế đuôi bắt buộc phải ở dạng **khẳng định**.",
    form: ["Let's + V-bare..., shall we?", "Imperative sentence..., will you?", "Everyone / Nobody + V..., ... + they?"],
    examples: ["Let's organize a surprise birthday party for her, shall we?", "Open the door, will you?", "Nobody called while I was out, did they?"],
    wrong: "Let's go out, will us?", right: "Let's go out, shall we?",
    more: [
      { type: "nuance", text: "Với mệnh đề **I am...**, câu hỏi đuôi phủ định chuẩn xác là **aren't I?** (*I am late, aren't I?*). Tuy nhiên, nếu ở thể phủ định **I am not...**, câu hỏi đuôi lại giữ nguyên dạng **am I?** (*I am not wrong, am I?*)." },
      { type: "advanced", text: "Khi phát biểu ý kiến với **I think / I believe + clause**, câu hỏi đuôi được chia theo mệnh đề phụ đằng sau (*I think she will pass, won't she?*). Nhưng nếu chủ ngữ không phải là **I** (*She thinks...*), vế đuôi lại tính theo mệnh đề chính (*She thinks he is smart, doesn't she?*)." }
    ]
  },
  { title: "Thức giả định nâng cao sau tính từ mạnh", grammarId: "102", level: "C1", category: "Cấu trúc câu",
    rule: "Dùng thức giả định (**subjunctive mood**) trong mệnh đề **that** đi sau các tính từ chỉ tính cấp thiết hoặc tầm quan trọng tối cao (**vital**, **essential**, **imperative**, **crucial**, **mandatory**). Động từ ở mệnh đề sau bắt buộc luôn ở dạng **nguyên mẫu không chia** (**bare infinitive**), bất kể thì hay chủ ngữ.",
    form: ["It is vital / essential / imperative / crucial + that + S + V-bare"],
    examples: ["It is vital that every single applicant complete the security clearance form.", "It is crucial that he be present at the ceremony.", "It is imperative that the decision be made today."],
    wrong: "It is vital that every applicant completes the form.", right: "It is vital that every applicant complete the form.",
    more: [
      { type: "nuance", text: "Dạng phủ định của thức giả định chỉ đơn giản là đặt **not** ngay trước động từ nguyên mẫu (**not complete**, **not be**), tuyệt đối không dùng trợ động từ *doesn't* hay *don't* (*It is essential that he not arrive late*)." },
      { type: "advanced", text: "Trong Anh - Anh trang trọng, người nói có thể thêm **should** trước động từ nguyên mẫu (*It is vital that every applicant should complete the form*). Tuy nhiên, văn phong học thuật chuẩn mực quốc tế (Anh - Mỹ) ưu tiên dùng trực tiếp động từ nguyên mẫu câm." }
    ]
  },
  { title: "Đảo ngữ nâng cao với Not until", grammarId: "103", level: "C1", category: "Đảo ngữ",
    rule: "Khi cấu trúc **Not until** + mốc thời gian hoặc mệnh đề chỉ thời gian đứng ở đầu câu nhằm nhấn mạnh thời điểm xảy ra sự việc, hiện tượng đảo ngữ trợ động từ (**inversion**) bắt buộc phải thực hiện ở **mệnh đề chính** đằng sau.",
    form: ["Not until + time / clause + trợ động từ / be + S + V-bare"],
    examples: ["Not until the manager arrived were the employees allowed to leave.", "Not until he opened the box did he realize the truth.", "Not until 2025 will the new policy take effect."],
    wrong: "Not until the manager arrived the employees were allowed to leave.", right: "Not until the manager arrived were the employees allowed to leave.",
    more: [
      { type: "nuance", text: "Bẫy ngữ pháp cực kỳ phổ biến: Mệnh đề ngay sau **Not until** giữ nguyên trật tự chủ-vị bình thường (**Not until the manager arrived**), chỉ đảo ngữ ở mệnh đề đứng đằng sau (**were the employees allowed...**)." },
      { type: "extension", text: "Cấu trúc này tương đương với cấu trúc câu chẻ nhấn mạnh: **It was not until + time/clause + that + S + V** (*It was not until the manager arrived that the employees were allowed to leave*)." }
    ]
  },
  { title: "Câu chẻ nhấn mạnh", grammarId: "104", level: "C1", category: "Cấu trúc câu",
    rule: "Câu chẻ (**cleft sentences**) dùng để cô lập và xoáy sâu sự chú ý vào một thành phần cụ thể trong câu (chủ ngữ, tân ngữ, trạng ngữ). Cấu trúc chuẩn: **It is / was + thành phần nhấn mạnh + who / that + clause**.",
    form: ["It is / was + focused element + who / that + clause"],
    examples: ["It was Mary who solved the difficult quantum physics puzzle.", "It was in this quiet café that they first met.", "It is his arrogance that annoys everyone."],
    wrong: "It was Mary whom solved the puzzle.", right: "It was Mary who solved the puzzle.",
    more: [
      { type: "nuance", text: "Dùng **who** hoặc **that** khi nhấn mạnh chủ ngữ chỉ người. Tuy nhiên, khi thành phần nhấn mạnh là trạng ngữ (chỉ thời gian, địa điểm, nguyên nhân), bắt buộc dùng **that**, tuyệt đối không dùng *where* hay *when* (*It was in Hanoi THAT we met*, không dùng *where*)." },
      { type: "advanced", text: "Dạng câu chẻ mở rộng với **Wh-** (**Wh-cleft / Pseudo-cleft**): **What + S + V + is/was + focused element** (*What I need right now is a long vacation*). Dạng này giúp tạo nhịp điệu diễn thuyết cực kỳ ấn tượng trong bài viết C1/C2." }
    ]
  },
  { title: "Đảo ngữ câu điều kiện ẩn If nâng cao", grammarId: "105", level: "C2", category: "Đảo ngữ",
    rule: "Trái ngược với văn phong thông thường, trong văn phong học thuật C2, liên từ **if** hoàn toàn bị triệt tiêu bằng cách đảo trực tiếp các trợ động từ/động từ giả định lên đầu câu: **Should** (loại 1), **Were** (loại 2), **Had** (loại 3).",
    form: ["Should + S + V-bare, clause", "Were + S + to-V / N / adj, clause", "Had + S + V3/ed, clause"],
    examples: ["Should any further technical problems arise, please contact our support team immediately.", "Were I in your shoes, I would accept the offer.", "Had we known about the storm, we would not have set sail."],
    wrong: "If should any problems arise, contact us.", right: "Should any further technical problems arise, please contact our support team immediately.",
    more: [
      { type: "nuance", text: "Với đảo ngữ loại 2 của động từ thường: Đưa **Were** lên đầu câu và chuyển động từ chính về dạng **to-V** (**Were the government to raise taxes, public protest would follow**)." },
      { type: "advanced", text: "Đảo ngữ câu điều kiện phủ định: Khi phủ định câu đảo ngữ, từ **not** đứng ngay sau chủ ngữ, tuyệt đối không viết tắt trợ động từ lên đầu (**Had it not been for your help...**, không viết *Hadn't it been...*)." }
    ]
  },
  { title: "Lược bỏ cấu trúc và từ thay thế", grammarId: "106", level: "C2", category: "Văn phong",
    rule: "Hiện tượng lược bỏ (**ellipsis**) và từ thay thế (**substitution**) giúp loại bỏ sự trùng lặp từ ngữ, tăng tính súc tích, tinh tế cho câu. Sử dụng các đại từ/trạng từ thay thế như **so**, **not**, **do so**, hoặc lược bỏ mệnh đề trùng lặp đằng sau trợ động từ.",
    form: ["S + verb + so / not", "S + auxiliary verb (ellipsis)", "S + do so (action substitution)"],
    examples: ["Do you think the government will lower taxes next year? - I hope not.", "She can play the piano brilliantly, and so can her younger brother.", "He promised to clear the desk, and he did so."],
    wrong: "I hope that they will not lower taxes.", right: "I hope not.",
    more: [
      { type: "nuance", text: "Phân biệt **I hope so** và **I guess so**: **I hope so** thể hiện mong muốn tích cực của người nói; **I guess so** thể hiện sự đồng ý miễn cưỡng hoặc thiếu chắc chắn." },
      { type: "advanced", text: "Sử dụng cụm **do so** để thay thế cho một cụm động từ hành động đã được nhắc đến ở vế trước (*If you wish to apply, please do so before Friday*). **Do so** trang trọng hơn nhiều so với việc chỉ dùng *do it*." }
    ]
  },
  { title: "Đảo ngữ vị trí học thuật", grammarId: "107", level: "C2", category: "Đảo ngữ",
    rule: "Trong văn phong miêu tả trang trọng, văn học hoặc phân tích không gian, khi trạng từ/cụm giới từ chỉ vị trí (**locative inversion**) hoặc phương hướng đứng đầu câu, **động từ chính được đảo trực tiếp lên trước chủ ngữ** mà không mượn trợ động từ do/does/did.",
    form: ["Prepositional phrase / Directional adv + verb (chia trực tiếp) + S"],
    examples: ["On the top of the snow-capped mountain stood an ancient monastery.", "Down came the heavy rain after a long dry spell.", "Next to the main entrance lies the administrative building."],
    wrong: "On the top of the mountain did stand a monastery.", right: "On the top of the snow-capped mountain stood an ancient monastery.",
    more: [
      { type: "nuance", text: "Điều kiện bắt buộc: Động từ chính phải là nội động từ chỉ trạng thái hoặc chuyển động (**stand**, **lie**, **sit**, **come**, **go**), và chủ ngữ phải là **danh từ**." },
      { type: "advanced", text: "Lỗi bẫy C2: Nếu chủ ngữ là một **đại từ nhân xưng** (**he**, **she**, **it**, **they**), tuyệt đối KHÔNG thực hiện đảo ngữ (*Down it came*, không viết *Down came it*)." }
    ]
  },
  { title: "Thức giả định hiện tại trong câu trang trọng", grammarId: "108", level: "C2", category: "Thức giả định",
    rule: "Sử dụng trong văn bản pháp lý, nghị quyết, thông cáo chính thức hoặc văn phong ngoại giao. Đứng sau các động từ như **decree**, **mandate**, **stipulate**, **move**, **command** + **that** + S + động từ nguyên mẫu không chia (**present subjunctive**).",
    form: ["S + decree / mandate / stipulate / move + that + S + V-bare"],
    examples: ["The board of directors insisted that the chief executive officer resign immediately.", "The judge ordered that the suspect be remanded in custody.", "The law stipulates that every citizen pay taxes."],
    wrong: "The board insisted that the CEO resigns.", right: "The board insisted that the CEO resign.",
    more: [
      { type: "nuance", text: "Dạng bị động của thức giả định hiện tại có cấu trúc là **be + V3/ed** (*It is required that the documents be submitted on time*), không chia *is/are/was/were*." },
      { type: "advanced", text: "Thức giả định cố định trong các thành ngữ cổ trang trọng (**fixed subjunctive phrases**): **Be that as it may** (Dù có như thế đi nữa), **Far be it from me to...** (Tôi đâu dám...), **God forbid** (Trời phật phù hộ / Đừng để xảy ra), **Come what may** (Dù có chuyện gì xảy ra)." }
    ]
  },
  { title: "Mệnh đề phân từ độc lập", grammarId: "109", level: "C2", category: "Rút gọn mệnh đề",
    rule: "Mệnh đề phân từ độc lập (**absolute participial clauses**) là mệnh đề rút gọn có chủ ngữ riêng biệt (không trùng với chủ ngữ mệnh đề chính). Hai mệnh đề ngăn cách bằng dấu phẩy và nối với nhau bằng danh từ/đại từ + phân từ (**V-ing** cho chủ động, **V3/ed** cho bị động).",
    form: ["Noun / Pronoun + V-ing / V3/ed / Adj, + main clause"],
    examples: ["Weather permitting, the annual open-air festival will take place tomorrow afternoon.", "All tickets having been sold out, we couldn't enter the concert hall.", "The task finished, they walked out of the room happily."],
    wrong: "Weather permits, the festival will take place.", right: "Weather permitting, the annual open-air festival will take place tomorrow afternoon.",
    more: [
      { type: "nuance", text: "Phân biệt với rút gọn mệnh đề thông thường: Rút gọn thông thường bắt buộc hai vế phải **chủ ngữ trùng nhau**. Mệnh đề độc lập dùng khi hai vế có **hai chủ ngữ hoàn toàn khác nhau** (*Weather* vs *The festival*)." },
      { type: "advanced", text: "Cấu trúc độc lập đi với giới từ **With**: **With + N + V-ing / V3/ed / Prep phrase** diễn tả nguyên nhân hoặc hoàn cảnh kèm theo (*With night coming on, we decided to set up camp*)." }
    ]
  },
  { title: "Đảo ngữ nhượng bộ với As và Though", grammarId: "110", level: "C2", category: "Mệnh đề",
    rule: "Đưa tính từ, trạng từ, hoặc động từ phân từ lên đầu câu đi liền với **as** hoặc **though** nhằm tạo sự nhấn mạnh cực đại vào tính chất nhượng bộ (tương đương với *Although + S + be + adj*).",
    form: ["Adj / Adv / Participle + as / though + S + be / verb, + main clause"],
    examples: ["Exhausted as she was after the long journey, she managed to finish her report.", "Defeated though they were, the team never lost their fighting spirit.", "Much as I respect him, I cannot agree with his decision."],
    wrong: "Although exhausted as she was, she finished her report.", right: "Exhausted as she was after the long journey, she managed to finish her report.",
    more: [
      { type: "nuance", text: "Khi đảo ngữ với danh từ đếm được số ít, mạo từ **a/an** phải bị loại bỏ tuyệt đối (*Child as he is, he speaks like an adult*, không dùng *A child as he is*)." },
      { type: "advanced", text: "Biến thể nhượng bộ với trạng từ **Much**: **Much as + S + V** mang nghĩa 'Mặc dù rất...' (*Much as I would like to help, I have no time*). Cấu trúc này xuất hiện dày đặc trong bài thi Writing C1/C2." }
    ]
  },
  { title: "Danh từ hóa trong tiếng Anh học thuật", grammarId: "111", level: "C2", category: "Văn phong",
    rule: "Danh từ hóa (**nominalization**) là quá trình biến đổi động từ, tính từ hoặc cả mệnh đề thành các cụm danh từ trừu tượng. Đây là tiêu chuẩn cốt lõi trong văn phong học thuật C2 nhằm tăng độ trang trọng, tính khách quan và súc tích cho bài viết.",
    form: ["Clause (S + V + O) -> Abstract Noun Phrase (The + N + of + N)"],
    examples: ["Because the city expanded rapidly, it caused severe environmental issues. -> The rapid expansion of the city caused severe environmental issues.", "We analyzed the data carefully. -> A careful analysis of the data was conducted."],
    wrong: "The city expanding rapidly caused issues.", right: "The rapid expansion of the city caused severe environmental issues.",
    more: [
      { type: "nuance", text: "Lợi ích của danh từ hóa: Loại bỏ bớt các đại từ xưng hô cá nhân (**I**, **we**, **you**), chuyển góc nhìn từ 'người thực hiện hành động' sang 'bản thân sự việc/nguyện lý' (*We discovered... -> The discovery of...*)." },
      { type: "advanced", text: "Bẫy lạm dụng danh từ hóa (**zombie nouns**): Mặc dù danh từ hóa nâng tầm văn phong học thuật, việc lạm dụng quá nhiều cụm danh từ phức tạp liên tiếp có thể khiến câu văn trở nên nặng nề, trì trệ và khó đọc. Cần phối hợp hài hòa giữa danh từ hóa và động từ mạnh." }
    ]
  }
  
  
];