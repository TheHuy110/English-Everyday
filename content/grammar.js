/* HOW TO EDIT: Grammar rules. Copy an existing { ... } entry and change it. Fields: title, level (A1-C2), category, rule (use **bold** for key words), form, examples (list), wrong, right. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

/* ---------- Ngữ pháp ---------- */
OEL.grammar = [
  
  { title: "Thì hiện tại đơn (Present simple)", grammarId: "001", level: "A1", category: "Thì",
    rule: "Dùng thì hiện tại đơn cho thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình cố định. Với các chủ ngữ số ít như *he, she, it* hoặc danh từ không đếm được, động từ phải thêm **-s hoặc -es**.",
    form: ["S + V(s/es)", "S + do/does not + V-bare", "Do/Does + S + V-bare?"],
    examples: ["Water boils at 100 degrees Celsius.", "She walks to work every day.", "The train leaves at 7:15 AM."],
    wrong: "Water boil at 100 degrees Celsius.", right: "Water boils at 100 degrees Celsius." },

  { title: "Thì hiện tại tiếp diễn (Present continuous)", grammarId: "002", level: "A1", category: "Thì",
    rule: "Dùng để diễn tả một hành động đang diễn ra ngay tại thời điểm nói (thường có các từ nhận biết như *Look!, Listen!, right now*) hoặc một kế hoạch đã sắp xếp trong tương lai gần.",
    form: ["S + am/is/are + V-ing"],
    examples: ["Look! The baby is sleeping.", "They are playing football in the yard right now.", "We are visiting our grandparents this weekend."],
    wrong: "Look! The baby sleeps.", right: "Look! The baby is sleeping." },

  { title: "Mạo từ: a, an, the", grammarId: "003", level: "A1", category: "Mạo từ",
    rule: "Dùng **a/an** trước danh từ đếm được số ít chưa xác định (*an* đứng trước từ bắt đầu bằng âm nguyên âm u, e, o, a, i). Dùng **the** trước danh từ đã xác định hoặc duy nhất.",
    form: ["a + danh từ bắt đầu bằng phụ âm", "an + danh từ bắt đầu bằng nguyên âm", "the + danh từ xác định"],
    examples: ["I saw an elephant at the zoo.", "She is a doctor.", "The sun rises in the east."],
    wrong: "I saw a elephant at the zoo.", right: "I saw an elephant at the zoo." },
  { title: "Thì quá khứ đơn (Past simple)", grammarId: "004", level: "A2", category: "Thì",
    rule: "Dùng cho hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ tại một thời điểm xác định. Động từ có quy tắc thêm **-ed**, động từ bất quy tắc có dạng riêng.",
    form: ["S + V-ed/V2", "S + did not + V-bare", "Did + S + V-bare?"],
    examples: ["We visited my grandparents last summer.", "I didn't see him yesterday.", "Did you call her?"],
    wrong: "I didn't went to the party.", right: "I didn't go to the party." },

  { title: "Danh từ đếm được và không đếm được", grammarId: "005", level: "A2", category: "Danh từ",
    rule: "Danh từ đếm được có dạng số ít và số nhiều. Danh từ không đếm được không dùng với số đếm. Dùng **many/few** với đếm được số nhiều và **much/little** với không đếm được.",
    form: ["many / few + danh từ đếm được số nhiều", "much / little + danh từ không đếm được"],
    examples: ["How many bottles do we need?", "How much water is left?", "She gave me some good advice."],
    wrong: "He gave me many informations.", right: "He gave me a lot of information." },

  { title: "So sánh hơn và so sánh nhất", grammarId: "006", level: "A2", category: "Tính từ",
    rule: "Thêm **-er / -est** vào tính từ ngắn và dùng **more / most** với tính từ dài để lập cấu trúc so sánh hơn và so sánh nhất.",
    form: ["S + adj-er + than + N", "S + the + adj-est", "S + more + adj + than + N", "S + the most + adj"],
    examples: ["This bag is cheaper than that one.", "It was the most interesting film of the year.", "She is taller than her brother."],
    wrong: "This bag is more cheaper.", right: "This bag is cheaper." },

  { title: "Thì hiện tại hoàn thành (Present perfect)", grammarId: "007", level: "B1", category: "Thì",
    rule: "Dùng để diễn tả hành động xảy ra trong quá khứ nhưng kết quả còn lưu đến hiện tại, hoặc kinh nghiệm tính đến thời điểm hiện tại.",
    form: ["S + have/has + V3/ed", "S + have/has not + V3/ed", "Have/Has + S + V3/ed?"],
    examples: ["I have lived in this city for five years.", "She has just left.", "Have you ever tried sushi?"],
    wrong: "I have seen him yesterday.", right: "I saw him yesterday." },

  { title: "Động từ khuyết thiếu (Modal verbs)", grammarId: "008", level: "B1", category: "Động từ",
    rule: "Các động từ như *can, could, must, should, might* đi trực tiếp với **động từ nguyên mẫu không to** và không chia theo ngôi thứ ba số ít.",
    form: ["S + modal verb + V-bare"],
    examples: ["You should rest.", "It might rain later.", "You must wear a seat belt."],
    wrong: "She can to swim.", right: "She can swim." },

  { title: "Câu điều kiện loại 1 và loại 2", grammarId: "009", level: "B1", category: "Câu điều kiện",
    rule: "Loại 1 diễn tả sự việc có thể xảy ra ở tương lai (If + hiện tại đơn, will + V). Loại 2 diễn tả giả định trái ngược thực tế hiện tại (If + quá khứ đơn, would + V).",
    form: ["If + S + hiện tại đơn, S + will + V-bare", "If + S + quá khứ đơn (were), S + would + V-bare"],
    examples: ["If it rains, we'll stay home.", "If I had more time, I would learn the piano.", "If I were you, I would apologise."],
    wrong: "If I will see him, I tell him.", right: "If I see him, I'll tell him." },

  { title: "Câu bị động (Passive voice)", grammarId: "010", level: "B1", category: "Động từ",
    rule: "Dùng khi đối tượng chịu tác động được nhấn mạnh hơn chủ thể thực hiện hành động. Chia động từ **be** theo thì và thêm quá khứ phân từ.",
    form: ["S + be (đúng thì) + V3/ed + (by agent)"],
    examples: ["The bridge was built in 1998.", "English is spoken in many countries.", "The report is being written now."],
    wrong: "The report is writing now.", right: "The report is being written now." },

  { title: "Mệnh đề quan hệ (Relative clauses)", grammarId: "011", level: "B2", category: "Mệnh đề",
    rule: "Dùng **who** cho người, **which** cho vật, **that** cho cả người lẫn vật trong mệnh đề xác định, **whose** chỉ sở hữu và **where** chỉ nơi chốn.",
    form: ["N + who/which/that/whose/where + clause"],
    examples: ["The woman who called is my aunt.", "My aunt, who lives abroad, is visiting.", "The book that I bought was expensive."],
    wrong: "The book which I bought it was expensive.", right: "The book which I bought was expensive." },

  { title: "Câu gián tiếp (Reported speech)", grammarId: "012", level: "B2", category: "Mệnh đề",
    rule: "Khi thuật lại lời nói, lùi thì của động từ nếu động từ tường thuật ở quá khứ. Câu hỏi gián tiếp giữ trật tự câu khẳng định, không đảo trợ động từ.",
    form: ["S + said (that) + clause (lùi thì)", "S + asked + wh-word/if + S + V (khẳng định)"],
    examples: ["“I am tired,” she said. -> She said she was tired.", "He asked me where I lived.", "They said they had finished."],
    wrong: "He asked me where do I live.", right: "He asked me where I lived." },

  { title: "Câu điều kiện loại 3", grammarId: "013", level: "B2", category: "Câu điều kiện",
    rule: "Dùng để diễn tả một giả định không có thật trong quá khứ và kết quả trái ngược quá khứ.",
    form: ["If + S + had + V3/ed, S + would have + V3/ed"],
    examples: ["If I had studied, I would have passed.", "If she hadn't missed the bus, she would have arrived on time."],
    wrong: "If I would have studied, I would have passed.", right: "If I had studied, I would have passed." },

  { title: "Đảo ngữ để nhấn mạnh (Inversion)", grammarId: "014", level: "C1", category: "Văn phong",
    rule: "Khi các trạng từ phủ định hoặc hạn chế (*never, hardly, rarely, not only*) đứng đầu câu, ta phải đảo trợ động từ lên trước chủ ngữ.",
    form: ["Negative adverb + trợ động từ + S + V-bare"],
    examples: ["Never have I seen such a beautiful sunset.", "Not only did she win, but she also broke the record.", "Hardly had we arrived when it started to rain."],
    wrong: "Never I have seen such a sunset.", right: "Never have I seen such a sunset." },

  { title: "Thì hiện tại hoàn thành tiếp diễn (Present perfect continuous)", grammarId: "015", level: "B1", category: "Thì",
    rule: "Nhấn mạnh khoảng thời gian của một hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn đến hiện tại.",
    form: ["S + have/has + been + V-ing"],
    examples: ["It has been raining since this morning.", "They have been working here for three hours.", "How long have you been waiting?"],
    wrong: "She has learning English for two years.", right: "She has been learning English for two years." },

  { title: "Thì quá khứ tiếp diễn (Past continuous)", grammarId: "016", level: "A2", category: "Thì",
    rule: "Diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ, hoặc hành động đang xảy ra thì có hành động khác xen vào.",
    form: ["S + was/were + V-ing"],
    examples: ["I was reading a book at 8 PM last night.", "They were playing tennis when it started to rain.", "What were you doing at this time yesterday?"],
    wrong: "She was cook dinner when I arrived.", right: "She was cooking dinner when I arrived." },

  { title: "Thì quá khứ hoàn thành (Past perfect)", grammarId: "017", level: "B1", category: "Thì",
    rule: "Diễn tả hành động đã xảy ra và hoàn thành trước một hành động hoặc một mốc thời gian khác trong quá khứ.",
    form: ["S + had + V3/ed"],
    examples: ["By the time we arrived, the train had left.", "She had already eaten before her friends came.", "He passed the exam because he had studied hard."],
    wrong: "They had finish the project before the deadline.", right: "They had finished the project before the deadline." },

  { title: "Thì quá khứ hoàn thành tiếp diễn (Past perfect continuous)", grammarId: "018", level: "B2", category: "Thì",
    rule: "Nhấn mạnh quá trình diễn ra liên tục của một hành động trước một mốc thời điểm hoặc hành động khác trong quá khứ.",
    form: ["S + had + been + V-ing"],
    examples: ["They had been playing football for two hours before it started to rain.", "She was tired because she had been working all night.", "He had been living in Hanoi for five years before he moved."],
    wrong: "We had playing games when the lights went out.", right: "We had been playing games when the lights went out." },

  { title: "Thì tương lai đơn (Future simple)", grammarId: "019", level: "A2", category: "Thì",
    rule: "Dùng **will** để diễn tả quyết định bộc phát ngay lúc nói, lời hứa, lời đề nghị hoặc dự đoán chủ quan.",
    form: ["S + will + V-bare"],
    examples: ["I will help you with your heavy bag.", "I think it will rain tomorrow.", "Don't worry, I will call you later."],
    wrong: "She will goes to the party.", right: "She will go to the party." },

  { title: "Thì tương lai tiếp diễn (Future continuous)", grammarId: "020", level: "B1", category: "Thì",
    rule: "Diễn tả một hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.",
    form: ["S + will + be + V-ing"],
    examples: ["At this time tomorrow, I will be flying to Tokyo.", "Don't call me at 8 PM because I will be having dinner.", "Will you be using your computer this afternoon?"],
    wrong: "They will be study at the library tomorrow morning.", right: "They will be studying at the library tomorrow morning." },

  { title: "Thì tương lai hoàn thành (Future perfect)", grammarId: "021", level: "B2", category: "Thì",
    rule: "Diễn tả hành động sẽ hoàn thành trước một mốc thời gian hoặc một hành động khác trong tương lai.",
    form: ["S + will + have + V3/ed"],
    examples: ["By next month, I will have finished this book.", "They will have built the bridge by the end of this year.", "Will you have completed the report by 5 PM?"],
    wrong: "She will have wrote the letter by tomorrow.", right: "She will have written the letter by tomorrow." },

  { title: "Thì tương lai hoàn thành tiếp diễn (Future perfect continuous)", grammarId: "022", level: "C1", category: "Thì",
    rule: "Nhấn mạnh khoảng thời gian kéo dài của một hành động tính đến một mốc xác định trong tương lai.",
    form: ["S + will + have + been + V-ing"],
    examples: ["By next year, I will have been living here for ten years.", "By the time you arrive, we will have been waiting for two hours.", "She will have been working at this company for five years by June."],
    wrong: "By next week, he will have been work here for a year.", right: "By next week, he will have been working here for a year." },

  { title: "Câu điều kiện loại 0 (Zero conditional)", grammarId: "023", level: "A2", category: "Câu điều kiện",
    rule: "Diễn tả sự thật hiển nhiên, chân lý hoặc quy luật tự nhiên luôn đúng khi có điều kiện xảy ra.",
    form: ["If + S + hiện tại đơn, S + hiện tại đơn"],
    examples: ["If you heat ice, it melts.", "Water boils if it reaches 100 degrees Celsius.", "If plants don't get enough water, they die."],
    wrong: "If you heat ice, it will melt.", right: "If you heat ice, it melts." },

  { title: "Câu điều kiện hỗn hợp (Mixed conditional)", grammarId: "024", level: "C1", category: "Câu điều kiện",
    rule: "Kết hợp giả định trái ngược ở quá khứ (loại 3) với kết quả ở hiện tại (loại 2).",
    form: ["If + S + had + V3/ed, S + would + V-bare"],
    examples: ["If I had studied medicine, I would be a doctor now.", "If she had saved money, she could buy the car today.", "If we had left last night, we would be home now."],
    wrong: "If I had studied medicine, I would have been a doctor now.", right: "If I had studied medicine, I would be a doctor now." },

  { title: "Mệnh đề quan hệ xác định (Defining relative clause)", grammarId: "025", level: "B1", category: "Mệnh đề",
    rule: "Cung cấp thông tin thiết yếu để xác định danh từ đứng trước, không có dấu phẩy ngăn cách.",
    form: ["N + who/which/that + clause"],
    examples: ["The man who stole my bag was caught by the police.", "This is the book that I bought yesterday.", "She likes the teacher who teaches English."],
    wrong: "The man, who stole my bag, was caught.", right: "The man who stole my bag was caught." },

  { title: "Mệnh đề quan hệ không xác định (Non-defining relative clause)", grammarId: "026", level: "B2", category: "Mệnh đề",
    rule: "Bổ sung thông tin cho danh từ đã xác định rõ, bắt buộc phải nằm giữa dấu phẩy và không dùng *that*.",
    form: ["N (đã xác định), + who/which/where + clause, + ..."],
    examples: ["Hanoi, which is the capital of Vietnam, is very bustling.", "My father, who is a doctor, loves reading books.", "Mr. Smith, whom you met yesterday, is our new manager."],
    wrong: "My father, that is a doctor, loves reading.", right: "My father, who is a doctor, loves reading." },

  { title: "Động từ khuyết thiếu (Must / Have to)", grammarId: "027", level: "A2", category: "Động từ",
    rule: "**Must** chỉ sự bắt buộc chủ quan từ người nói; **have to** chỉ sự bắt buộc khách quan từ quy định ngoại cảnh.",
    form: ["S + must / have to + V-bare"],
    examples: ["You must wear a helmet when riding a motorbike.", "I have to submit this report by 5 PM today.", "Children must listen to their parents."],
    wrong: "She must has to go now.", right: "She has to go now." },

  { title: "Động từ khuyết thiếu (Should / Ought to)", grammarId: "028", level: "A2", category: "Động từ",
    rule: "Dùng để đưa ra lời khuyên hoặc ý kiến gợi ý việc nên làm.",
    form: ["S + should / ought to + V-bare"],
    examples: ["You should study harder for the final exam.", "You ought to apologize to her for your mistake.", "Should we book the tickets in advance?"],
    wrong: "You should to go to bed early.", right: "You should go to bed early." },

  { title: "Động từ khuyết thiếu (Can / Could / Be able to)", grammarId: "029", level: "A1", category: "Động từ",
    rule: "Diễn tả năng lực hoặc khả năng thực hiện hành động ở hiện tại (*can*), quá khứ (*could*) hoặc mọi tình huống (*be able to*).",
    form: ["S + can / could / be able to + V-bare"],
    examples: ["She can speak three languages fluently.", "When I was young, I could run very fast.", "He will be able to finish the task tomorrow."],
    wrong: "She can speaks English very well.", right: "She can speak English very well." },

  { title: "Động từ khuyết thiếu suy đoán (Modal verbs of deduction)", grammarId: "030", level: "B2", category: "Động từ",
    rule: "Dùng các từ như *must* (chắc là), *might/may* (có lẽ), *can't* (chắc không thể) để phỏng đoán sự việc ở hiện tại.",
    form: ["S + must / might / can't + V-bare"],
    examples: ["He has a new car and a big house; he must be very rich.", "She isn't answering her phone; she might be busy.", "That can't be true; I saw it with my own eyes."],
    wrong: "He must is very rich.", right: "He must be very rich." },

  { title: "Danh động từ (Gerunds - V-ing)", grammarId: "031", level: "B1", category: "Danh từ & Động từ",
    rule: "Động từ thêm *-ing* đóng vai trò như một danh từ, thường đứng sau các động từ chỉ sở thích/ghét hoặc sau giới từ.",
    form: ["S + verb (enjoy/mind/finish) + V-ing"],
    examples: ["She enjoys listening to classical music in her free time.", "Would you mind closing the door, please?", "He is good at playing football."],
    wrong: "She enjoys listen to music.", right: "She enjoys listening to music." },

  { title: "Động từ nguyên mẫu có 'to' (To-infinitive)", grammarId: "032", level: "B1", category: "Động từ",
    rule: "Dùng sau các động từ chỉ dự định, mong muốn, quyết định (*want, hope, decide*) hoặc để diễn tả mục đích.",
    form: ["S + want / hope / decide + to-V"],
    examples: ["I want to buy a new smartphone next week.", "She decided to study abroad in Canada.", "He went to the library to borrow some books."],
    wrong: "I want buying a new car.", right: "I want to buy a new car." },

  { title: "Động từ nguyên mẫu không 'to' (Bare infinitive)", grammarId: "033", level: "B2", category: "Động từ",
    rule: "Dùng sau động từ khuyết thiếu, các động từ chỉ giác quan (*see, hear*) hoặc động từ sai khiến (*make, let*).",
    form: ["S + let / make / see + object + V-bare"],
    examples: ["Her parents let her stay out late on weekends.", "The teacher made us rewrite the whole essay.", "I saw him cross the street and enter the shop."],
    wrong: "Her parents let her to stay out late.", right: "Her parents let her stay out late." },

  { title: "Câu cầu khiến (Causative verbs: Have / Get)", grammarId: "034", level: "B2", category: "Cấu trúc câu",
    rule: "Diễn tả việc nhờ vả hoặc thuê người khác thực hiện một hành động hộ mình ở thể bị động.",
    form: ["S + have / get + object (thing) + V3/ed"],
    examples: ["I need to have my laptop repaired before tomorrow.", "She got her house cleaned by a professional service last week.", "He had his passport renewed yesterday."],
    wrong: "I had my car repair yesterday.", right: "I had my car repaired yesterday." },

  { title: "Câu ước ở hiện tại (Wishes about the present)", grammarId: "035", level: "B1", category: "Câu ước",
    rule: "Diễn tả mong ước về một sự việc không có thật ở hiện tại, dùng thì quá khứ đơn trong mệnh đề sau.",
    form: ["S + wish(es) + S + quá khứ đơn (were)"],
    examples: ["I wish I knew the answer to this question.", "She wishes she lived closer to her workplace.", "He wishes he had more free time today."],
    wrong: "I wish I know the answer.", right: "I wish I knew the answer." },

  { title: "Câu ước ở quá khứ (Wishes about the past)", grammarId: "036", level: "B2", category: "Câu ước",
    rule: "Diễn tả sự tiếc nuối về một việc đã xảy ra hoặc không xảy ra trong quá khứ, dùng thì quá khứ hoàn thành.",
    form: ["S + wish(es) + S + had + V3/ed"],
    examples: ["I wish I had studied harder for yesterday's test.", "She wishes she hadn't said those rude words to him.", "They wish they had bought the tickets earlier."],
    wrong: "I wish I studied harder yesterday.", right: "I wish I had studied harder yesterday." },

  { title: "Thì hiện tại đơn với tương lai (Present simple for future schedules)", grammarId: "037", level: "A2", category: "Thì",
    rule: "Dùng thì hiện tại đơn để nói về thời gian biểu, lịch trình cố định của tàu xe, máy bay hoặc sự kiện công cộng.",
    form: ["S + hiện tại đơn (chỉ lịch trình)"],
    examples: ["The plane departs at 6:00 AM tomorrow.", "Our classes start next Monday.", "What time does the movie finish tonight?"],
    wrong: "The plane will depart at 6:00 AM tomorrow.", right: "The plane departs at 6:00 AM tomorrow." },

  { title: "Thì hiện tại tiếp diễn chỉ kế hoạch tương lai (Future arrangements)", grammarId: "038", level: "B1", category: "Thì",
    rule: "Diễn tả kế hoạch cá nhân đã được lên lịch trình và chắc chắn sẽ xảy ra trong tương lai gần.",
    form: ["S + am/is/are + V-ing"],
    examples: ["I am seeing my dentist at 3 PM tomorrow.", "We are flying to Tokyo next week.", "What are you doing this Saturday evening?"],
    wrong: "I see my dentist tomorrow.", right: "I am seeing my dentist tomorrow." },

  { title: "Tương lai gần với 'Be going to'", grammarId: "039", level: "A1", category: "Thì",
    rule: "Diễn tả dự định đã có từ trước hoặc dự đoán có căn cứ rõ ràng từ dấu hiệu ở hiện tại.",
    form: ["S + am/is/are + going to + V-bare"],
    examples: ["Look at those dark clouds! It is going to rain.", "We are going to buy a new house next year.", "Are you going to watch the match tonight?"],
    wrong: "I will buy a new car, I planned it.", right: "I am going to buy a new car, I planned it." },

  { title: "Động từ chỉ trạng thái (Stative verbs)", grammarId: "040", level: "B1", category: "Động từ",
    rule: "Các động từ chỉ tri giác, cảm xúc, sở hữu hoặc tư duy (*want, know, belong, understand*) thường không chia ở thì tiếp diễn.",
    form: ["S + stative verb (thì đơn)"],
    examples: ["I understand your problem right now.", "This jacket belongs to my brother.", "She loves listening to classical music."],
    wrong: "I am understanding the lesson now.", right: "I understand the lesson now." },

 

];