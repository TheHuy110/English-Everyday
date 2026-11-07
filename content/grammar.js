/* HOW TO EDIT: Grammar rules. Copy an existing { ... } entry and change it. Fields: title, level (A1-C2), category, rule (use **bold** for key words), form, examples (list), wrong, right. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

/* ---------- Ngữ pháp ---------- */
OEL.grammar = [
  
  
  { title: "Thì hiện tại đơn", grammarId: "001", level: "A1", category: "Thì",
    rule: "Dùng thì hiện tại đơn cho thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình cố định. Với các chủ ngữ số ít (**he**, **she**, **it**) hoặc danh từ không đếm được, động từ phải thêm **-s hoặc -es**. *Sắc thái nâng cao:* Động từ chỉ trạng thái (**stative verbs** như **know**, **understand**, **belong**) tuyệt đối không chia ở các thì tiếp diễn. *Mở rộng:* Thì này còn dùng để diễn tả lịch trình giao thông hoặc chương trình công cộng trong tương lai (*The train leaves at 6 AM*). *Mẹo chính tả:* Động từ kết thúc bằng phụ âm + **y** đổi thành **-ies** (**fly** -> **flies**), nhưng nguyên âm + **y** chỉ thêm **-s** (**play** -> **plays**).",
    form: "S + V(s/es)<br>S + do/does not + V-bare<br>Do/Does + S + V-bare?",
    examples: ["Water boils at 100 degrees Celsius.", "She walks to work every day.", "The train departs at 6:00 AM tomorrow morning."],
    wrong: "Water boil at 100 degrees Celsius.", right: "Water boils at 100 degrees Celsius.",
    more: [
      { type: "extension", text: "Dùng thì hiện tại đơn trong mệnh đề chỉ thời gian và mệnh đề điều kiện để chỉ tương lai: **When** she arrives, we will start. **If** it rains, we'll stay home." },
      { type: "nuance", text: "Với **always**, thì hiện tại tiếp diễn biểu thị sắc thái bực mình (*He is always losing his keys*). Còn thì hiện tại đơn (*He always loses his keys*) chỉ nêu thói quen trung tính, không mang cảm xúc phàn nàn." },
      { type: "advanced", text: "Hiện tại lịch sử (**historic present**): khi kể chuyện quá khứ hoặc viết tiêu đề báo chí, dùng thì hiện tại đơn để tạo cảm giác sống động, chân thực như đang xảy ra ngay trước mắt." }
    ]
  },

  { title: "Thì hiện tại tiếp diễn", grammarId: "002", level: "A1", category: "Thì",
    rule: "Diễn tả hành động đang xảy ra ngay tại thời điểm nói (thường có từ nhận biết như **Look!**, **Listen!**, **at the moment**) hoặc một kế hoạch cá nhân đã ấn định thời gian trong tương lai gần (**future arrangement**). *Sắc thái phàn nàn:* Khi đi kèm với trạng từ **always** (**S + be + always + V-ing**), câu thể hiện sự phàn nàn về một thói quen gây khó chịu. *Lỗi dễ sót:* Các động từ chỉ tri giác (**see**, **hear**, **smell**) chỉ chia tiếp diễn khi diễn tả hành động cố ý nếm/ngửi/xem chứ không dùng cho khả năng nhận thức tự nhiên.",
    form: "S + am/is/are + V-ing",
    examples: ["Look! The baby is sleeping.", "They are playing football in the yard right now.", "I am seeing my dentist at 3 PM tomorrow."],
    wrong: "Look! The baby sleeps.", right: "Look! The baby is sleeping.",
    more: [
      { type: "extension", text: "Dùng để diễn tả một tình huống mang tính tạm thời, trái ngược với thói quen lâu dài: *I usually walk to work, but this week I am taking the bus*." },
      { type: "nuance", text: "Một số động từ trạng thái có thể dùng với đuôi **-ing** khi chuyển sang nghĩa hành động: *I'm thinking about it* (đang cân nhắc) khác với *I think it's good* (nghĩ rằng/tin là). Tương tự: *I'm having lunch* (đang ăn) khác với *I have a car* (sở hữu)." }
    ]
  },

  { title: "Mạo từ", grammarId: "003", level: "A1", category: "Mạo từ",
    rule: "Dùng mạo từ không xác định **a/an** trước danh từ đếm được số ít chưa xác định. Dùng mạo từ xác định **the** khi đối tượng đã được nhắc tới hoặc là duy nhất. *Sắc thái âm thanh:* Việc chọn **a** hay **an** phụ thuộc hoàn toàn vào **âm phát âm đầu tiên** (**phonetic sound**) chứ không phải chữ cái viết. Ví dụ: **an hour** (vì **h** câm, phát âm bắt đầu bằng nguyên âm **/aʊ/**), nhưng **a university** (phát âm bắt đầu bằng bán nguyên âm **/j/**). Danh từ số nhiều hoặc không đếm được mang nghĩa chung chung thì không dùng mạo từ (**zero article**).",
    form: "a + danh từ bắt đầu bằng âm phụ âm<br>an + danh từ bắt đầu bằng âm nguyên âm<br>the + danh từ xác định / duy nhất",
    examples: ["I saw an elephant at the zoo.", "He has been waiting for an hour.", "The sun rises in the east."],
    wrong: "I saw a elephant at the zoo.", right: "I saw an elephant at the zoo.",
    more: [
      { type: "extension", text: "Dùng **the** kết hợp với tính từ để chỉ cả một tập hợp/nhóm người trong xã hội: **the poor** (người nghèo), **the elderly** (người cao tuổi), **the young** (giới trẻ)." },
      { type: "nuance", text: "Khi nói chung về một loài hoặc đặc tính, có thể dùng số nhiều không mạo từ (*Dogs are loyal*) hoặc **a** + danh từ số ít (*A dog is loyal*). Sử dụng **The** + danh từ số ít (*The dog is loyal*) mang văn phong trang trọng, thường xuất hiện trong nghiên cứu hoặc phát minh." },
      { type: "advanced", text: "Các cụm cố định không dùng mạo từ bao gồm: *go to school*, *at night*, *by bus*. Lưu ý sự biến đổi địa phương: *in hospital* (Anh-Anh) và *in the hospital* (Anh-Mỹ)." }
    ]
  },

  { title: "Thì quá khứ đơn", grammarId: "004", level: "A2", category: "Thì",
    rule: "Diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ tại một thời điểm xác định (**yesterday**, **last week**, **in 1998**). Động từ có quy tắc thêm **-ed**, động từ bất quy tắc dùng dạng **V2**. *Lỗi dễ sót:* Trong câu phủ định và câu hỏi nghi vấn, khi đã mượn trợ động từ quá khứ **did/didn't**, động từ chính **bắt buộc phải trả về dạng nguyên mẫu không to** (**bare infinitive**).",
    form: "S + V-ed / V2<br>S + did not (didn't) + V-bare<br>Did + S + V-bare?",
    examples: ["We visited my grandparents last summer.", "I didn't see him at the party yesterday.", "Did you call her last night?"],
    wrong: "I didn't see him yesterday (khi chia didn't saw).", right: "I didn't see him at the party yesterday.",
    more: [
      { type: "extension", text: "Dùng **used to** + **V-bare** để diễn tả thói quen hoặc trạng thái từng tồn tại thường xuyên trong quá khứ nhưng nay đã chấm dứt hoàn toàn: *I used to live in Huế*." },
      { type: "advanced", text: "Dùng thì quá khứ đơn để tạo sự lịch sự, mềm mỏng hơn khi đưa ra yêu cầu hoặc nhờ vả: *I was wondering if you could help me* (Quá khứ ở đây không chỉ thời gian mà giúp hạ bớt độ đường đột của lời nhờ)." }
    ]
  },

  { title: "Danh từ đếm được và không đếm được", grammarId: "005", level: "A2", category: "Danh từ",
    rule: "Danh từ đếm được có dạng số ít và số nhiều. Danh từ không đếm được không thể đếm bằng số và không đi với **a/an**. Dùng **many/few** cho danh từ đếm được số nhiều, **much/little** cho danh từ không đếm được. *Bẫy từ vựng:* Nhiều danh từ trong tiếng Việt đếm được nhưng tiếng Anh tuyệt đối KHÔNG đếm được như **advice**, **information**, **furniture**, **equipment**, **news**, **money**. Muốn đếm phải dùng từ chỉ đơn vị đo lường (**a piece of advice**, **an item of news**).",
    form: "many / few + danh từ đếm được số nhiều<br>much / little + danh từ không đếm được<br>a lot of / plenty of + cả hai loại danh từ",
    examples: ["How many bottles do we need?", "How much money do you have left?", "She gave me a piece of good advice."],
    wrong: "He gave me many informations.", right: "He gave me a lot of information.",
    more: [
      { type: "nuance", text: "Phân biệt **a few / a little** (có một chút/một ít, đủ để dùng - mang nghĩa tích cực) với **few / little** (rất ít, hầu như không có, không đủ dùng - mang nghĩa phủ định)." },
      { type: "advanced", text: "Một số danh từ thay đổi ý nghĩa hoàn toàn tùy thuộc vào việc đếm được hay không: **coffee** (không đếm được: chất cà phê; đếm được: *a coffee* = 1 tách cà phê), **paper** (không đếm được: chất liệu giấy; đếm được: *a paper* = tờ báo/bài báo khoa học)." }
    ]
  },

  { title: "So sánh hơn và so sánh nhất", grammarId: "006", level: "A2", category: "Tính từ",
    rule: "Thêm đuôi **-er/-est** vào tính từ ngắn (1 âm tiết) và dùng **more/most** trước tính từ dài (2 âm tiết trở lên). *Quy tắc đuôi -y:* Tính từ 2 âm tiết kết thúc bằng **-y** (**happy**, **easy**) được đối xử như tính từ ngắn (đổi **y** -> **i** + **-er/-est**). Tuyệt đối không dùng lặp cấu trúc (**more cheaper** là lỗi thừa từ). Một số dạng bất quy tắc quan trọng: **good** -> **better** -> **best**; **bad** -> **worse** -> **worst**; **far** -> **farther/further**.",
    form: "Tính từ ngắn: S + V + adj-er + than + N | S + V + the + adj-est<br>Tính từ dài: S + V + more + adj + than + N | S + V + the most + adj",
    examples: ["This bag is cheaper than that one.", "Mount Everest is the highest mountain in the world.", "She is happier than her sister."],
    wrong: "This bag is more cheaper than that one.", right: "This bag is cheaper than that one.",
    more: [
      { type: "extension", text: "Phân biệt **farther** và **further**: **farther** dùng riêng cho khoảng cách địa lý có thể đo đạc (*farther away*), còn **further** dùng cho cả khoảng cách lẫn mức độ/chiều sâu tinh thần (*further information*)." },
      { type: "advanced", text: "Nhấn mạnh mức độ so sánh hơn bằng cách thêm **much**, **far**, **a lot** hoặc **slightly** vào trước cấu trúc: *This car is much more expensive than that one*." }
    ]
  },

  { title: "Thì hiện tại hoàn thành", grammarId: "007", level: "B1", category: "Thì",
    rule: "Nối quá khứ với hiện tại: diễn tả trải nghiệm (**ever**, **never**), hành động vừa mới xảy ra (**just**, **already**), hoặc tình huống bắt đầu trong quá khứ và còn tiếp diễn ở hiện tại (**for**, **since**). *Lỗi cấm kỵ:* Không dùng thì này với mốc thời gian quá khứ đã kết thúc xác định như **yesterday**, **ago**, **in 2019** (phải dùng thì quá khứ đơn).",
    form: "S + have/has + V3/ed<br>S + have/has not + V3/ed<br>Have/Has + S + V3/ed?",
    examples: ["I have lived in this city for five years.", "She has just left the office.", "Have you ever visited Paris?"],
    wrong: "I have seen him yesterday.", right: "I saw him yesterday.",
    more: [
      { type: "extension", text: "Sử dụng **for** + khoảng thời gian (*for 5 years*) và **since** + mốc thời gian (*since 2019*) để xác định phạm vi thời gian của hành động." },
      { type: "nuance", text: "Phân biệt **have been to** và **have gone to**: **have been to** nghĩa là đã từng đến và đã trở về (*She has been to Paris*), còn **have gone to** nghĩa là đã đi và hiện chưa về (*She has gone to Paris*)." },
      { type: "advanced", text: "Sự biệt lập văn phong Anh - Mỹ: Người Anh thường dùng thì hiện tại hoàn thành với **just**, **already**, **yet** (*Have you eaten yet?*), trong khi người Mỹ hay có xu hướng dùng quá khứ đơn (*Did you eat yet?*)." }
    ]
  },

  { title: "Động từ khuyết thiếu", grammarId: "008", level: "B1", category: "Động từ",
    rule: "Các động từ khuyết thiếu như **can**, **could**, **must**, **should**, **may**, **might** đi trực tiếp với **động từ nguyên mẫu không to** (**V-bare**) và không chia theo ngôi. Tuyệt đối không dùng *should to* hay *must to*.",
    form: "S + modal verb (should/must/can/might) + V-bare<br>S + ought to + V-bare",
    examples: ["You should rest when you feel tired.", "You ought to respect your elders.", "It might rain later this afternoon."],
    wrong: "You should to rest when you feel tired.", right: "You should rest when you feel tired.",
    more: [
      { type: "nuance", text: "Sắc thái khuyên bảo: **Should** đưa ra lời khuyên cá nhân mang tính gợi ý nhẹ nhàng; **Ought to** mang sắc thái mạnh hơn về trách nhiệm, nghĩa vụ hoặc chuẩn mực đạo đức xã hội." },
      { type: "advanced", text: "Phân biệt sự bắt buộc giữa **Must** và **Have to**: **Must** thể hiện sự bắt buộc xuất phát từ cảm xúc/ý chí chủ quan của người nói, còn **Have to** thể hiện sự bắt buộc khách quan do quy định, luật pháp hoặc hoàn cảnh bên ngoài." }
    ]
  },

  { title: "Câu điều kiện loại một và loại hai", grammarId: "009", level: "B1", category: "Câu điều kiện",
    rule: "Câu điều kiện loại 1 diễn tả sự việc có thật hoặc có khả năng cao xảy ra ở hiện tại/tương lai. Câu điều kiện loại 2 diễn tả giả định trái ngược với thực tế hiện tại hoặc không thể xảy ra. *Lỗi cấm kỵ:* Không bao giờ dùng **will** hoặc **would** ngay bên trong mệnh đề **if**.",
    form: "Loại 1: If + S + hiện tại đơn, S + will + V-bare<br>Loại 2: If + S + quá khứ đơn (were cho mọi ngôi), S + would/could + V-bare",
    examples: ["If it rains tomorrow, we will stay at home.", "If I had more time, I would learn the piano.", "If I were you, I would apologize to her."],
    wrong: "If it will rain tomorrow, we stay home.", right: "If it rains tomorrow, we will stay at home.",
    more: [
      { type: "extension", text: "Thay thế **will/would** bằng **should**, **might**, **could** ở mệnh đề chính để giảm bớt độ chắc chắn của kết quả: *If it rains, we might stay home*." },
      { type: "nuance", text: "Sử dụng **Unless** tương đương với **If ... not**: *Unless you study hard, you will fail* mang ý nghĩa *If you don't study hard, you will fail*." },
      { type: "advanced", text: "Ở câu điều kiện loại 2, động từ **were** được ưu tiên dùng cho tất cả các ngôi trong văn phong viết trang trọng (*If I were you*). Trong giao tiếp hàng ngày, *If I was you* vẫn được chấp nhận." }
    ]
  },

  { title: "Câu bị động", grammarId: "010", level: "B1", category: "Động từ",
    rule: "Dùng khi đối tượng chịu tác động quan trọng hơn người thực hiện hành động, hoặc khi không biết/không muốn nêu rõ tác nhân. Cấu trúc cốt lõi là **be + V3/ed** (chia động từ **be** theo đúng thì của câu gốc).",
    form: "S + be (chia đúng thì) + V3/ed + (by + tác nhân)",
    examples: ["The bridge was built in 1998.", "English is spoken in many countries around the world.", "An unexpected accident happened yesterday."],
    wrong: "An unexpected accident was happened yesterday.", right: "An unexpected accident happened yesterday.",
    more: [
      { type: "nuance", text: "Vị trí của trạng từ: Trạng từ chỉ nơi chốn đứng *trước* **by + tác nhân**, trạng từ chỉ thời gian đứng *sau* **by + tác nhân** (*The book was found in the library by Mary yesterday*)." },
      { type: "advanced", text: "Các nội động từ (**intransitive verbs** như **happen**, **arrive**, **appear**, **disappear**, **die**) không có tân ngữ đi kèm nên KHÔNG BAO GIỜ được chia ở dạng bị động." }
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