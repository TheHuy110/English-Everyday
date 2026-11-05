/* HOW TO EDIT: Grammar rules. Copy an existing { ... } entry and change it. Fields: title, level (A1-C2), category, rule (use **bold** for key words), form, examples (list), wrong, right. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

/* ---------- Ngữ pháp ---------- */
OEL.grammar = [
  { title: "Thì hiện tại đơn (Present simple)", level: "A1", category: "Thì",
    rule: "Dùng thì hiện tại đơn cho thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình. Với he, she, it, thêm **-s hoặc -es** vào sau động từ.",
    form: "chủ ngữ + động từ nguyên mẫu (+s với he/she/it)",
    examples: ["She walks to work every day.", "Water boils at 100 degrees Celsius.", "The train leaves at 7:15."],
    wrong: "He go to school by bus.", right: "He goes to school by bus." },
  { title: "Thì hiện tại tiếp diễn (Present continuous)", level: "A1", category: "Thì",
    rule: "Dùng cho hành động đang diễn ra lúc nói hoặc quanh thời điểm hiện tại, và cho tình huống tạm thời. Các động từ chỉ trạng thái như **know, like, want, believe** thường không dùng với -ing.",
    form: "am / is / are + động từ-ing",
    examples: ["I'm reading a book right now.", "They are staying with friends this week.", "Is it raining?"],
    wrong: "I am knowing the answer.", right: "I know the answer." },
  { title: "Mạo từ: a, an, the", level: "A1", category: "Danh từ",
    rule: "Dùng **a / an** cho một người hoặc vật chưa xác định, hoặc khi nhắc đến lần đầu. Dùng **the** khi người nói và người nghe đều biết đó là cái nào. Không dùng mạo từ với danh từ số nhiều nói chung và danh từ không đếm được.",
    form: "a + âm phụ âm / an + âm nguyên âm / the + danh từ xác định",
    examples: ["I saw a dog. The dog was huge.", "She is an engineer.", "I love music."],
    wrong: "She is engineer.", right: "She is an engineer." },
  { title: "Thì quá khứ đơn (Past simple)", level: "A2", category: "Thì",
    rule: "Dùng cho hành động đã kết thúc tại một thời điểm xác định trong quá khứ. Động từ có quy tắc thêm **-ed**. Động từ bất quy tắc đổi dạng và phải học thuộc. Sau did hoặc didn't, dùng động từ nguyên mẫu.",
    form: "động từ + ed / dạng bất quy tắc; did + chủ ngữ + động từ nguyên mẫu?",
    examples: ["We visited my grandparents last summer.", "I didn't see him yesterday.", "Did you call her?"],
    wrong: "I didn't went to the party.", right: "I didn't go to the party." },
  { title: "Danh từ đếm được và không đếm được", level: "A2", category: "Danh từ",
    rule: "Danh từ đếm được có thể đếm (one chair, two chairs). Danh từ không đếm được thì không (water, advice, information). Dùng **many / few** với danh từ đếm được và **much / little** với danh từ không đếm được. **A lot of** dùng được với cả hai.",
    form: "many + danh từ số nhiều / much + danh từ không đếm được",
    examples: ["How many bottles do we need?", "How much water is left?", "She gave me some good advice."],
    wrong: "He gave me many informations.", right: "He gave me a lot of information." },
  { title: "So sánh hơn và so sánh nhất", level: "A2", category: "Tính từ",
    rule: "Thêm **-er / -est** vào tính từ ngắn. Dùng **more / most** với tính từ dài. Không dùng cả hai cùng lúc.",
    form: "ngắn: adj + er than / the adj + est; dài: more adj than / the most adj",
    examples: ["This bag is cheaper than that one.", "It was the most interesting film of the year.", "She is taller than her brother."],
    wrong: "This bag is more cheaper.", right: "This bag is cheaper." },
  { title: "Thì hiện tại hoàn thành (Present perfect)", level: "B1", category: "Thì",
    rule: "Nối quá khứ với hiện tại: trải nghiệm, tin mới, và tình huống bắt đầu trong quá khứ và còn tiếp tục. Không dùng với mốc thời gian đã kết thúc như **yesterday** hoặc **in 2019**.",
    form: "have / has + quá khứ phân từ",
    examples: ["I have lived here for five years.", "She has just left.", "Have you ever tried sushi?"],
    wrong: "I have seen him yesterday.", right: "I saw him yesterday." },
  { title: "Động từ khuyết thiếu (Modal verbs)", level: "B1", category: "Động từ",
    rule: "Can, could, must, should, might và will đi với **động từ nguyên mẫu**. Chúng không thêm -s ở ngôi thứ ba và không có “to” theo sau.",
    form: "chủ ngữ + động từ khuyết thiếu + động từ nguyên mẫu",
    examples: ["You should rest.", "It might rain later.", "You must wear a seat belt."],
    wrong: "She can to swim.", right: "She can swim." },
  { title: "Câu điều kiện loại 1 và loại 2", level: "B1", category: "Câu điều kiện",
    rule: "**Loại 1** nói về tình huống có thật hoặc có khả năng xảy ra trong tương lai. **Loại 2** nói về tình huống không có thật hoặc khó xảy ra. Không dùng will trong mệnh đề if.",
    form: "Loại 1: if + hiện tại, will + động từ nguyên mẫu / Loại 2: if + quá khứ, would + động từ nguyên mẫu",
    examples: ["If it rains, we'll stay home.", "If I had more time, I would learn the piano.", "If I were you, I would apologise."],
    wrong: "If I will see him, I tell him.", right: "If I see him, I'll tell him." },
  { title: "Câu bị động (Passive voice)", level: "B1", category: "Động từ",
    rule: "Dùng câu bị động khi hành động hoặc đối tượng chịu tác động quan trọng hơn người thực hiện. Chia **be** đúng thì, rồi thêm quá khứ phân từ.",
    form: "be (đúng thì) + quá khứ phân từ",
    examples: ["The bridge was built in 1998.", "English is spoken in many countries.", "The report is being written now."],
    wrong: "The report is writing now.", right: "The report is being written now." },
  { title: "Mệnh đề quan hệ (Relative clauses)", level: "B2", category: "Mệnh đề",
    rule: "Dùng **who** cho người, **which** cho vật, **that** cho cả hai trong mệnh đề xác định, **whose** chỉ sự sở hữu và **where** chỉ nơi chốn. Mệnh đề không xác định bổ sung thông tin và cần dấu phẩy. Không nhắc lại tân ngữ bên trong mệnh đề.",
    form: "danh từ + who / which / that / whose / where + mệnh đề",
    examples: ["The woman who called is my aunt.", "My aunt, who lives abroad, is visiting.", "The book that I bought was expensive."],
    wrong: "The book which I bought it was expensive.", right: "The book which I bought was expensive." },
  { title: "Câu gián tiếp (Reported speech)", level: "B2", category: "Mệnh đề",
    rule: "Khi thuật lại lời người khác, thì thường lùi một bậc và đại từ thay đổi. Câu hỏi gián tiếp dùng **trật tự câu khẳng định**, không có did hay do.",
    form: "said (that) + mệnh đề lùi thì; asked + từ hỏi + chủ ngữ + động từ",
    examples: ["“I am tired,” she said. She said she was tired.", "He asked me where I lived.", "They said they had finished."],
    wrong: "He asked me where do I live.", right: "He asked me where I lived." },
  { title: "Câu điều kiện loại 3", level: "B2", category: "Câu điều kiện",
    rule: "Dùng để nói về quá khứ không có thật: điều đã không xảy ra và kết quả tưởng tượng của nó. Mệnh đề if dùng **had + quá khứ phân từ**, không bao giờ dùng would have.",
    form: "if + quá khứ hoàn thành, would have + quá khứ phân từ",
    examples: ["If I had studied, I would have passed.", "If she hadn't missed the bus, she would have arrived on time."],
    wrong: "If I would have studied, I would have passed.", right: "If I had studied, I would have passed." },
  { title: "Đảo ngữ để nhấn mạnh (Inversion)", level: "C1", category: "Văn phong",
    rule: "Sau các trạng từ phủ định hoặc hạn chế đứng đầu câu như **never, hardly, rarely, not only**, đặt trợ động từ trước chủ ngữ.",
    form: "trạng từ phủ định + trợ động từ + chủ ngữ + động từ",
    examples: ["Never have I seen such a beautiful sunset.", "Not only did she win, but she also broke the record.", "Hardly had we arrived when it started to rain."],
    wrong: "Never I have seen such a sunset.", right: "Never have I seen such a sunset." }

  {
    title: "Thì hiện tại đơn (Present simple)",
    level: "A1",
    category: "Thì",
    rule: "Dùng thì hiện tại đơn cho thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình. Với he, she, it, thêm **-s hoặc -es** vào sau động từ.",
    form: "chủ ngữ + động từ nguyên mẫu (+s với he/she/it)",
    examples: [
      "She walks to work every day.",
      "Water boils at 100 degrees Celsius.",
      "The train leaves at 7:15."
    ],
    wrong: "He go to school by bus.",
    right: "He goes to school by bus."
  },
  {
    title: "Thì hiện tại tiếp diễn (Present continuous)",
    level: "A1",
    category: "Thì",
    rule: "Dùng để diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc một hành động sắp xảy ra trong tương lai gần theo kế hoạch.",
    form: "chủ ngữ + am/is/are + động từ thêm -ing",
    examples: [
      "They are playing football in the yard right now.",
      "Look! The baby is sleeping.",
      "We are visiting our grandparents this weekend."
    ],
    wrong: "She is write a letter now.",
    right: "She is writing a letter now."
  },
  {
    title: "Thì hiện tại hoàn thành (Present perfect)",
    level: "A2",
    category: "Thì",
    rule: "Dùng để diễn tả hành động đã xảy ra trong quá khứ nhưng kết quả hoặc ảnh hưởng còn kéo dài đến hiện tại, hoặc kinh nghiệm tính đến thời điểm hiện tại.",
    form: "chủ ngữ + have/has + quá khứ phân từ (V3/ed)",
    examples: [
      "I have lived in this city for five years.",
      "She has already finished her homework.",
      "Have you ever been to Japan?"
    ],
    wrong: "He has went to the supermarket.",
    right: "He has gone to the supermarket."
  },
  {
    title: "Thì hiện tại hoàn thành tiếp diễn (Present perfect continuous)",
    level: "B1",
    category: "Thì",
    rule: "Dùng để nhấn mạnh khoảng thời gian của một hành động bắt đầu trong quá khứ và vẫn đang tiếp tục diễn ra ở hiện tại.",
    form: "chủ ngữ + have/has + been + động từ thêm -ing",
    examples: [
      "It has been raining since this morning.",
      "They have been working here for three hours.",
      "How long have you been waiting?"
    ],
    wrong: "She has learning English for two years.",
    right: "She has been learning English for two years."
  },
  {
    title: "Thì quá khứ đơn (Past simple)",
    level: "A2",
    category: "Thì",
    rule: "Dùng để diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ tại một thời điểm xác định.",
    form: "chủ ngữ + động từ ở dạng quá khứ (V2/ed)",
    examples: [
      "I visited my grandparents last weekend.",
      "She bought a new car yesterday.",
      "They went to Paris in 2020."
    ],
    wrong: "He didn't went to school yesterday.",
    right: "He didn't go to school yesterday."
  },
  {
    title: "Thì quá khứ tiếp diễn (Past continuous)",
    level: "A2",
    category: "Thì",
    rule: "Dùng để diễn tả một hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ, hoặc một hành động đang xảy ra thì có hành động khác xen vào.",
    form: "chủ ngữ + was/were + động từ thêm -ing",
    examples: [
      "I was reading a book at 8 PM last night.",
      "They were playing tennis when it started to rain.",
      "What were you doing at this time yesterday?"
    ],
    wrong: "She was cook dinner when I arrived.",
    right: "She was cooking dinner when I arrived."
  },
  {
    title: "Thì quá khứ hoàn thành (Past perfect)",
    level: "B1",
    category: "Thì",
    rule: "Dùng để diễn tả một hành động đã xảy ra và hoàn thành trước một hành động khác trong quá khứ (hoặc trước một mốc thời gian trong quá khứ).",
    form: "chủ ngữ + had + quá khứ phân từ (V3/ed)",
    examples: [
      "By the time we arrived, the train had left.",
      "She had already eaten before her friends came.",
      "He passed the exam because he had studied hard."
    ],
    wrong: "They had finish the project before the deadline.",
    right: "They had finished the project before the deadline."
  },
  {
    title: "Thì quá khứ hoàn thành tiếp diễn (Past perfect continuous)",
    level: "B2",
    category: "Thì",
    rule: "Dùng để nhấn mạnh quá trình diễn ra liên tục của một hành động trước một hành động khác trong quá khứ.",
    form: "chủ ngữ + had + been + động từ thêm -ing",
    examples: [
      "They had been playing football for two hours before it started to rain.",
      "She was tired because she had been working all night.",
      "He had been living in Hanoi for five years before moving to Da Nang."
    ],
    wrong: "We had playing games when the lights went out.",
    right: "We had been playing games when the lights went out."
  },
  {
    title: "Thì tương lai đơn (Future simple)",
    level: "A2",
    category: "Thì",
    rule: "Dùng để diễn tả một quyết định đưa ra ngay tại thời điểm nói, một lời hứa, một lời đe dọa hoặc một dự đoán không có căn cứ chắc chắn.",
    form: "chủ ngữ + will + động từ nguyên mẫu",
    examples: [
      "I will help you with your heavy bag.",
      "I think it will rain tomorrow.",
      "Don't worry, I will call you later."
    ],
    wrong: "She will goes to the party.",
    right: "She will go to the party."
  },
  {
    title: "Thì tương lai tiếp diễn (Future continuous)",
    level: "B1",
    category: "Thì",
    rule: "Dùng để diễn tả một hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.",
    form: "chủ ngữ + will + be + động từ thêm -ing",
    examples: [
      "At this time tomorrow, I will be flying to Tokyo.",
      "Don't call me at 8 PM because I will be having dinner.",
      "Will you be using your computer this afternoon?"
    ],
    wrong: "They will be study at the library tomorrow morning.",
    right: "They will be studying at the library tomorrow morning."
  },
  {
    title: "Thì tương lai hoàn thành (Future perfect)",
    level: "B2",
    category: "Thì",
    rule: "Dùng để diễn tả một hành động sẽ hoàn thành trước một thời điểm hoặc một hành động khác trong tương lai.",
    form: "chủ ngữ + will + have + quá khứ phân từ (V3/ed)",
    examples: [
      "By next month, I will have finished this book.",
      "They will have built the bridge by the end of this year.",
      "Will you have completed the report by 5 PM?"
    ],
    wrong: "She will have wrote the letter by tomorrow.",
    right: "She will have written the letter by tomorrow."
  },
  {
    title: "Thì tương lai hoàn thành tiếp diễn (Future perfect continuous)",
    level: "C1",
    category: "Thì",
    rule: "Dùng để nhấn mạnh khoảng thời gian kéo dài của một hành động tính đến một thời điểm xác định trong tương lai.",
    form: "chủ ngữ + will + have + been + động từ thêm -ing",
    examples: [
      "By next year, I will have been living here for ten years.",
      "By the time you arrive, we will have been waiting for two hours.",
      "She will have been working at this company for five years next month."
    ],
    wrong: "By next week, he will have been work here for a year.",
    right: "By next week, he will have been working here for a year."
  }
];
