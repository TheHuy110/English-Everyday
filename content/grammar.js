/* HOW TO EDIT: Grammar rules. Copy an existing { ... } entry and change it. Fields: title, level (A1-C2), category, rule (use **bold** for key words), form, examples (list), wrong, right. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

/* ---------- Ngữ pháp ---------- */
OEL.grammar = [
  
  
  { title: "Thì hiện tại đơn", grammarId: "001", level: "A1", category: "Thì",
    rule: "Thì hiện tại đơn dùng để nói về thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình cố định. Ví dụ: **She walks to work every day.** (Cô ấy đi bộ đi làm mỗi ngày.) Với chủ ngữ số ít (**he**, **she**, **it**, tên một người, danh từ không đếm được), động từ thêm **-s** hoặc **-es**. Với **I**, **you**, **we**, **they** thì giữ nguyên động từ. Mẹo chính tả: động từ tận cùng bằng phụ âm + **y** đổi thành **-ies** (**fly** -> **flies**), nhưng nguyên âm + **y** chỉ thêm **-s** (**play** -> **plays**). Câu phủ định và câu hỏi dùng **do / does**, và động từ chính trở về dạng nguyên mẫu.",
    form: ["S (I / you / we / they) + V-bare","S (he / she / it) + V-s / V-es","S + do / does + not + V-bare","Do / Does + S + V-bare?"],
    examples: ["She walks to work every day.","Water boils at 100 degrees Celsius.","The train leaves at 7:15.","My parents don't drink coffee in the evening.","Does Nam play football after school?"],
    wrong: "He go to school by bus.", right: "He goes to school by bus.",
    more: [
      { type: "extension", text: "Dùng thì hiện tại đơn trong mệnh đề thời gian và mệnh đề **if** để nói về tương lai: **When** she arrives, we will start. (Khi cô ấy đến, chúng ta sẽ bắt đầu.) **If** it rains, we'll stay home. (Nếu trời mưa, chúng tôi sẽ ở nhà.)" },
      { type: "extension", text: "Thì này hay đi với trạng từ tần suất: **always**, **usually**, **often**, **sometimes**, **never**. Chúng đứng trước động từ thường: **He usually drinks tea.** (Anh ấy thường uống trà.) Nhưng đứng sau **be**: **She is never late.** (Cô ấy không bao giờ trễ.)" },
      { type: "nuance", text: "Với **always**, thì hiện tại tiếp diễn thêm sắc thái bực mình: **He is always losing his keys** (Anh ta cứ làm mất chìa khóa hoài). Còn **He always loses his keys** chỉ nêu một thói quen trung tính." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She don't like coffee** thay vì **She doesn't like coffee**. Với **he / she / it**, trợ động từ phải là **does**, không phải **do** (tiếng Việt không chia động từ nên dễ quên)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Does he goes?** thay vì **Does he go?**. Đã có **does** thì động từ chính không thêm **-s** nữa, vì **does** đã mang dấu ngôi thứ ba rồi." },
      { type: "advanced", text: "Hiện tại lịch sử (**historic present**): khi kể chuyện quá khứ, người nói dùng thì hiện tại đơn cho sinh động (**So I walk in, and he says nothing**). Cách này cũng thường gặp trong tiêu đề báo chí." }
    ]
  },
  { title: "Thì hiện tại tiếp diễn", grammarId: "002", level: "A1", category: "Thì",
    rule: "Thì hiện tại tiếp diễn dùng cho hành động đang diễn ra ngay lúc nói, hoặc quanh thời điểm hiện tại, và cho tình huống tạm thời. Ví dụ: **I'm reading a book right now.** (Tôi đang đọc sách.) Cách tạo câu: **am / is / are** + động từ thêm **-ing**. Một số động từ chỉ trạng thái, như **know**, **like**, **want**, **believe**, thường không dùng với **-ing**. Ta nói **I know the answer**, không nói **I am knowing the answer**. Dấu hiệu hay gặp: **now**, **right now**, **at the moment**, **this week**.",
    form: ["S + am / is / are + V-ing","S + am / is / are + not + V-ing","Am / Is / Are + S + V-ing?"],
    examples: ["I'm reading a book right now.","They are staying with friends this week.","Is it raining?","Lan isn't watching TV at the moment.","What are you cooking, Mom?"],
    wrong: "I am knowing the answer.", right: "I know the answer.",
    more: [
      { type: "extension", text: "Dùng cho kế hoạch cá nhân đã thu xếp trong tương lai gần (**future arrangement**): **We're meeting at six tomorrow.** (Ngày mai 6 giờ chúng tôi gặp nhau.) Thường đi kèm một mốc thời gian." },
      { type: "extension", text: "Quy tắc thêm **-ing**: bỏ **e** cuối (**make** -> **making**), gấp đôi phụ âm cuối ở từ ngắn có một nguyên âm (**run** -> **running**, **sit** -> **sitting**). (Từ tận cùng **-ie** đổi thành **-ying**: **lie** -> **lying**.)" },
      { type: "nuance", text: "Một số động từ chỉ trạng thái dùng được với **-ing** khi mang nghĩa hành động: **I'm thinking about it** (đang cân nhắc) khác **I think it's good** (tôi nghĩ là tốt). Tương tự, **I'm having lunch** (đang ăn) khác **I have a car** (sở hữu)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She is work now** hoặc **She working now** thay vì **She is working now**. Tiếng Việt chỉ cần 'đang làm', nhưng tiếng Anh cần đủ cả **be** lẫn **-ing**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I am liking this song** thay vì **I like this song**. Dù thấy 'đang thích' nghe tự nhiên trong tiếng Việt, **like** là động từ chỉ trạng thái nên dùng thì hiện tại đơn." }
    ]
  },
  { title: "Mạo từ", grammarId: "003", level: "A1", category: "Mạo từ",
    rule: "Mạo từ là những từ nhỏ đứng trước danh từ. Dùng **a / an** cho người hoặc vật chưa xác định, hoặc khi nhắc đến lần đầu: **I saw a dog.** (Tôi thấy một con chó.) Dùng **the** khi người nói và người nghe đều biết đó là cái nào: **The dog was huge.** Không dùng mạo từ với danh từ số nhiều nói chung và danh từ không đếm được: **I love music.** Mẹo chính tả: chọn **a** hay **an** theo âm đọc chứ không theo chữ viết. Ví dụ **an hour** (h câm, đọc /aʊ/) nhưng **a university** (bắt đầu bằng âm /j/).",
    form: ["a + N đếm được số ít (bắt đầu bằng âm phụ âm)","an + N đếm được số ít (bắt đầu bằng âm nguyên âm)","the + N (xác định / duy nhất)","Ø + N số nhiều / không đếm được (nói chung, không dùng mạo từ)"],
    examples: ["I saw a dog. The dog was huge.","She is an engineer.","I love music.","Minh waited for an hour at the station.","Please close the window, it is cold."],
    wrong: "She is engineer.", right: "She is an engineer.",
    more: [
      { type: "extension", text: "Dùng **the** với tính từ để chỉ cả một nhóm người trong xã hội: **the poor** (người nghèo), **the elderly** (người cao tuổi), **the young** (người trẻ). Các cụm này mang nghĩa số nhiều." },
      { type: "extension", text: "Dùng **the** với vật duy nhất hoặc ai cũng biết: **the sun** (mặt trời), **the moon** (mặt trăng), **the sky** (bầu trời). Cũng dùng **the** khi vừa nhắc đến: **I bought a shirt. The shirt is blue.**" },
      { type: "nuance", text: "Khi nói chung về một loại, có thể dùng số nhiều không mạo từ (**Dogs are loyal**) hoặc **a** + danh từ số ít (**A dog is loyal**). **The** + danh từ số ít (**The dog is loyal**) nghe trang trọng, thường dùng khi nói về loài hoặc phát minh." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I have car** hoặc **She is teacher** thay vì **I have a car** và **She is a teacher**. Tiếng Việt không có mạo từ, nên danh từ số ít đếm được trong tiếng Anh dễ bị bỏ trống." },
      { type: "mistake", text: "Lỗi hay gặp: nói **a apple** hoặc **a hour** thay vì **an apple** và **an hour**. Hãy nghe âm đầu: âm nguyên âm dùng **an**, âm phụ âm dùng **a**." },
      { type: "advanced", text: "Một số cụm cố định không dùng mạo từ (**zero article**): **go to school**, **at night**, **by bus**. Cách dùng có thể khác giữa Anh-Anh và Anh-Mỹ: **in hospital** (Anh) và **in the hospital** (Mỹ)." }
    ]
  },
  { title: "Thì quá khứ đơn", grammarId: "004", level: "A2", category: "Thì",
    rule: "Thì quá khứ đơn dùng cho hành động đã xảy ra và kết thúc tại một thời điểm xác định trong quá khứ, ví dụ với **yesterday**, **last summer**, **in 2019**, **ago**. Động từ có quy tắc thêm **-ed** (**visit** -> **visited**). Động từ bất quy tắc đổi dạng và cần học thuộc (**go** -> **went**, **see** -> **saw**). Câu phủ định và câu hỏi dùng **did / didn't**. Sau **did** hoặc **didn't**, động từ luôn ở dạng nguyên mẫu (**V-bare**), vì **did** đã mang thì quá khứ rồi.",
    form: ["S + V-ed / V2","S + did + not + V-bare","Did + S + V-bare?"],
    examples: ["We visited my grandparents last summer.","I didn't see him yesterday.","Did you call her?","Lan went to Hue in 2019.","My brother bought a new phone two days ago."],
    wrong: "I didn't went to the party.", right: "I didn't go to the party.",
    more: [
      { type: "extension", text: "**Used to** + **V-bare** nói về thói quen hoặc trạng thái từng xảy ra thường xuyên trong quá khứ nay đã chấm dứt: **I used to live in Huế.** (Tôi từng sống ở Huế.) Phủ định và câu hỏi thường dùng **use to**: **Did you use to play football?**" },
      { type: "extension", text: "Cách đọc đuôi **-ed**: đọc /t/ sau âm vô thanh (**walked**), /d/ sau âm hữu thanh (**played**), và /ɪd/ sau âm **t** hoặc **d** (**wanted**, **needed**)." },
      { type: "nuance", text: "Quá khứ đơn nói về việc đã kết thúc và không còn liên hệ hiện tại: **I lived in Hanoi for two years** (giờ không còn ở đó). Nếu vẫn đang sống ở đó, ta dùng hiện tại hoàn thành." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Yesterday I go to school** hoặc **She buy a book last week** thay vì **I went** và **She bought**. Tiếng Việt chỉ cần từ chỉ thời gian, còn tiếng Anh bắt buộc đổi dạng động từ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Did you saw him?** thay vì **Did you see him?**. Chỉ đánh dấu thì quá khứ một lần, ở **did**." },
      { type: "advanced", text: "Dùng thì quá khứ đơn để lịch sự, mềm mỏng hơn khi nhờ vả: **I was wondering if you could help me.** Ở đây quá khứ không nói về thời gian quá khứ mà giúp hạ bớt độ đường đột của lời nhờ." }
    ]
  },
  { title: "Danh từ đếm được và không đếm được", grammarId: "005", level: "A2", category: "Danh từ",
    rule: "Danh từ đếm được có thể đếm bằng số và có dạng số nhiều: **one chair**, **two chairs**. Danh từ không đếm được thì không đếm bằng số và không thêm **-s**: **water**, **advice**, **information**. Dùng **many / few** với danh từ đếm được số nhiều và **much / little** với danh từ không đếm được. **A lot of** dùng được với cả hai loại. Câu hỏi số lượng cũng khác nhau: **How many bottles?** (đếm được) và **How much water?** (không đếm được).",
    form: ["many / few + N (đếm được số nhiều)","much / little + N (không đếm được)","a lot of / plenty of + N (cả hai loại)","How many + N số nhiều + ...? / How much + N không đếm được + ...?"],
    examples: ["How many bottles do we need?","How much water is left?","She gave me some good advice.","There isn't much milk in the fridge.","Nam has a lot of friends but only a few close ones."],
    wrong: "He gave me many informations.", right: "He gave me a lot of information.",
    more: [
      { type: "nuance", text: "Phân biệt **a few / a little** (nghĩa tích cực: có một ít, đủ dùng) với **few / little** (nghĩa tiêu cực: rất ít, gần như không đủ). So sánh **I have a few friends** (tôi có vài người bạn) với **I have few friends** (tôi gần như không có bạn)." },
      { type: "extension", text: "Muốn đếm danh từ không đếm được, dùng một đơn vị đứng trước: **a piece of advice**, **a glass of water**, **a slice of bread**, **two pieces of information**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **informations**, **advices**, **furnitures** thay vì **information**, **advice**, **furniture**. Trong tiếng Anh các từ này không đếm được nên không có dạng số nhiều, dù tiếng Việt có thể nói 'nhiều thông tin'." },
      { type: "mistake", text: "Lỗi hay gặp: nói **much people** hoặc **many water** thay vì **many people** và **much water**. Hãy xét danh từ đếm được hay không trước rồi mới chọn **many** hay **much**." },
      { type: "advanced", text: "Một số danh từ đổi nghĩa tùy đếm được hay không: **coffee** (chất cà phê) và **a coffee** (một tách cà phê), **paper** (giấy) và **a paper** (tờ báo hoặc bài báo khoa học)." }
    ]
  },
  { title: "So sánh hơn và so sánh nhất", grammarId: "006", level: "A2", category: "Tính từ",
    rule: "So sánh hơn dùng để so hai người hoặc vật, so sánh nhất dùng để chọn một trong nhóm từ ba trở lên. Với tính từ ngắn (một âm tiết), thêm **-er / -est**: **cheap** -> **cheaper** -> **the cheapest**. Với tính từ dài, dùng **more / most**: **more interesting**, **the most interesting**. Không dùng lặp cả hai cùng lúc (**more cheaper** là lỗi thừa từ). Mẹo chính tả: tính từ 2 âm tiết tận cùng bằng **-y** (**happy**, **easy**) đổi **y** -> **i** rồi thêm **-er / -est**. So sánh hơn đi với **than**, so sánh nhất đi với **the**.",
    form: ["So sánh hơn (adj ngắn): S + V + adj-er + than + N","So sánh hơn (adj dài): S + V + more + adj + than + N","So sánh nhất (adj ngắn): S + V + the + adj-est","So sánh nhất (adj dài): S + V + the most + adj"],
    examples: ["This bag is cheaper than that one.","It was the most interesting film of the year.","She is taller than her brother.","Saigon is bigger than Hue.","This exercise is easier than the last one."],
    wrong: "This bag is more cheaper.", right: "This bag is cheaper.",
    more: [
      { type: "extension", text: "Có ba dạng bất quy tắc cần thuộc: **good** -> **better** -> **the best**, **bad** -> **worse** -> **the worst**, **far** -> **farther / further** -> **the farthest / furthest**." },
      { type: "extension", text: "Phân biệt **farther** (chỉ khoảng cách vật lý) và **further** (khoảng cách vật lý lẫn nghĩa bóng như **further information**, thông tin thêm)." },
      { type: "nuance", text: "Dạng ngắn gọn gấp đôi phụ âm với từ có một nguyên âm + một phụ âm: **big** -> **bigger**, **hot** -> **hottest**. Một số tính từ 2 âm tiết dùng được cả hai cách, ví dụ **clever** -> **cleverer** hoặc **more clever**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He is more tall than me** thay vì **He is taller than me**. Tiếng Việt chỉ cần 'hơn', nên người học hay gắn **more** cho mọi tính từ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She is the most tall** hoặc bỏ **the** ở **She is tallest girl** thay vì **She is the tallest girl**. So sánh nhất cần **the**." },
      { type: "advanced", text: "Nhấn mạnh so sánh hơn bằng **much**, **far**, **a lot** đứng trước: **This car is much more expensive than that one.** Không dùng **very** ở vị trí này (không nói **very cheaper**)." }
    ]
  },
  { title: "Thì hiện tại hoàn thành", grammarId: "007", level: "B1", category: "Thì",
    rule: "Thì hiện tại hoàn thành nối quá khứ với hiện tại. Dùng để nói về trải nghiệm (**ever**, **never**), tin mới hoặc việc vừa xảy ra có kết quả ở hiện tại (**just**, **already**, **yet**), và tình huống bắt đầu trong quá khứ còn tiếp tục đến nay. Cách tạo: **have / has** + quá khứ phân từ (**V3/ed**). Điểm mấu chốt: không dùng với mốc thời gian đã kết thúc như **yesterday**, **last week** hoặc **in 2019**. Khi có mốc như vậy, hãy dùng quá khứ đơn.",
    form: ["S + have / has + V3/ed","S + have / has + not + V3/ed","Have / Has + S + V3/ed?"],
    examples: ["I have lived here for five years.","She has just left.","Have you ever tried sushi?","We haven't finished our homework yet.","Nam has never been to Da Nang."],
    wrong: "I have seen him yesterday.", right: "I saw him yesterday.",
    more: [
      { type: "extension", text: "**For** + khoảng thời gian (**for five years**), **since** + mốc thời gian (**since 2019**): **I've lived here for five years. I've lived here since 2019.** Hai câu cùng nghĩa, chỉ khác cách diễn đạt thời gian." },
      { type: "nuance", text: "**Have been to** nghĩa là đã từng đến và đã quay về (**She has been to Paris**). **Have gone to** nghĩa là đã đi và hiện chưa về (**She has gone to Paris**)." },
      { type: "nuance", text: "Anh-Mỹ hay dùng quá khứ đơn với **just**, **already**, **yet**: **Did you eat yet?** Anh-Anh thường dùng hiện tại hoàn thành: **Have you eaten yet?**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **I have lived here since five years** thay vì **I have lived here for five years**. **Since** cần mốc thời gian (**since 2019**), còn khoảng thời gian dùng **for**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I have went there** hoặc **She has saw it** thay vì **I have gone there** và **She has seen it**. Sau **have / has** phải dùng quá khứ phân từ (V3), không dùng dạng quá khứ đơn (V2)." },
      { type: "advanced", text: "Hiện tại hoàn thành dùng được với **this morning**, **today**, **this week** khi khoảng thời gian đó chưa kết thúc: **I've seen him twice this week.** Nếu đã hết khoảng thời gian, chuyển sang quá khứ đơn." }
    ]
  },
  { title: "Động từ khuyết thiếu", grammarId: "008", level: "B1", category: "Động từ",
    rule: "Động từ khuyết thiếu (modal verbs) như **can**, **could**, **must**, **should**, **might**, **will** thêm nghĩa cho động từ chính: khả năng, sự cho phép, bắt buộc, lời khuyên, phỏng đoán. Chúng đi trực tiếp với động từ nguyên mẫu không **to** (**V-bare**): **You should rest.** Chúng không thêm **-s** ở ngôi thứ ba (**she can**, không phải **she cans**). Phủ định thêm **not** (**cannot**, **must not**) và câu hỏi đảo modal lên trước chủ ngữ (**Can you swim?**), không mượn **do**. Ngoại lệ: **ought to** có **to**.",
    form: ["S + modal verb + V-bare","S + modal verb + not + V-bare","Modal verb + S + V-bare?","S + ought to + V-bare (riêng ought có to)"],
    examples: ["You should rest.","It might rain later.","You must wear a seat belt.","Can you swim?","She cannot come to the party tonight."],
    wrong: "She can to swim.", right: "She can swim.",
    more: [
      { type: "nuance", text: "Sắc thái khuyên bảo: **should** đưa ra lời khuyên cá nhân nhẹ nhàng; **ought to** nghe hơi trang trọng hơn, thường gắn với nghĩa vụ hoặc chuẩn mực. Trong giao tiếp hằng ngày, hai từ này gần nghĩa nhau." },
      { type: "extension", text: "Dùng modal để phỏng đoán theo mức độ chắc chắn: **It must be true** (chắc chắn đúng), **It might rain** (có thể mưa), **He can't be at home** (không thể ở nhà được). Mức chắc chắn giảm dần từ **must** xuống **might**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She can to swim** hoặc **He must goes** thay vì **She can swim** và **He must go**. Sau modal luôn là động từ nguyên mẫu không **to**, không chia thêm **-s**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Do you can swim?** thay vì **Can you swim?**. Modal tự làm trợ động từ nên không cần **do / does**." },
      { type: "advanced", text: "Phân biệt **must** (bắt buộc xuất phát từ cảm nhận của người nói) và **have to** (bắt buộc đến từ quy định hoặc hoàn cảnh bên ngoài). Phủ định khác hẳn nhau: **mustn't** là cấm, còn **don't have to** là không cần thiết." }
    ]
  },
  { title: "Câu điều kiện loại 1 và loại 2", grammarId: "009", level: "B1", category: "Câu điều kiện",
    rule: "Câu điều kiện loại 1 nói về tình huống có thật hoặc có khả năng xảy ra ở tương lai: **If it rains, we'll stay home.** Loại 2 nói về tình huống không có thật hoặc khó xảy ra ở hiện tại: **If I had more time, I would learn the piano.** Mệnh đề **if** của loại 1 dùng hiện tại đơn, của loại 2 dùng quá khứ đơn (nhưng nghĩa là hiện tại, không phải quá khứ). Thường không dùng **will** hoặc **would** ngay trong mệnh đề **if**. Dấu phẩy ngăn cách hai mệnh đề khi mệnh đề **if** đứng đầu.",
    form: ["Loại 1: If + S + V (hiện tại đơn), S + will + V-bare","Loại 2: If + S + V2 / were, S + would + V-bare (were cho mọi ngôi)","S + will / would + V-bare + if + S + V (đảo vế, bỏ dấu phẩy)"],
    examples: ["If it rains, we'll stay home.","If I had more time, I would learn the piano.","If I were you, I would apologise.","If Lan passes the exam, her parents will be happy.","What would you do if you won a million dollars?"],
    wrong: "If I will see him, I tell him.", right: "If I see him, I'll tell him.",
    more: [
      { type: "extension", text: "Có thể dùng **might**, **could**, **should** thay cho **will**, **would** để giảm độ chắc chắn của kết quả: **If it rains, we might stay home.** Mệnh đề **if** cũng có thể đứng sau: **We'll stay home if it rains.** (không cần dấu phẩy)." },
      { type: "nuance", text: "**Unless** tương đương **if ... not**: **Unless you hurry, you'll be late** tương đương **If you don't hurry, you'll be late**." },
      { type: "nuance", text: "Loại 1 dùng khi sự việc có thể xảy ra thật, còn loại 2 cho thấy người nói coi đó là không thật hoặc khó xảy ra. So sánh **If I win, I'll buy a car** (có hy vọng thật) với **If I won, I'd buy a car** (nghe viển vông hơn)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **If it will rain, we will stay home** thay vì **If it rains, we will stay home**. Tiếng Việt không đổi thì nên người học hay thêm **will** vào mệnh đề **if**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **If I would have more time, I would learn piano** thay vì **If I had more time, I would learn the piano**. Mệnh đề **if** của loại 2 dùng quá khứ đơn, không dùng **would**." },
      { type: "advanced", text: "Ở loại 2, văn viết trang trọng dùng **were** cho mọi ngôi: **If I were you...**, **If she were here...** Trong văn nói, **If I was you** cũng thường gặp." }
    ]
  },
  { title: "Câu bị động", grammarId: "010", level: "B1", category: "Động từ",
    rule: "Câu bị động dùng khi hành động hoặc đối tượng chịu tác động quan trọng hơn người thực hiện, hoặc khi không biết hay không cần nói người thực hiện. Cách tạo: chia động từ **be** đúng thì của câu gốc, rồi thêm quá khứ phân từ (**V3/ed**). Tân ngữ của câu chủ động trở thành chủ ngữ của câu bị động: **They built the bridge** -> **The bridge was built**. Nếu cần nêu người thực hiện, thêm **by + tác nhân**.",
    form: ["S + be (chia đúng thì) + V3/ed + (by + tác nhân)","S + be + not + V3/ed","Be + S + V3/ed?"],
    examples: ["The bridge was built in 1998.","English is spoken in many countries.","The report is being written now.","The window wasn't broken by the storm.","Was the package delivered yesterday?"],
    wrong: "The report is writing now.", right: "The report is being written now.",
    more: [
      { type: "extension", text: "Các thì thường gặp: hiện tại đơn **is made**, quá khứ đơn **was made**, hiện tại hoàn thành **has been made**, tương lai **will be made**, modal **can be made**." },
      { type: "nuance", text: "Vị trí trạng từ: trạng từ chỉ nơi chốn thường đứng trước **by + tác nhân**, còn trạng từ chỉ thời gian đứng sau: **The book was written in Paris by Hugo in 1862.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **The report is writing now** hoặc **The window broke by the boy** thay vì **The report is being written now** và **The window was broken by the boy**. Bị động luôn cần **be** + V3 (nhớ đúng thì)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **My bike was stolen by someone** hoặc **by people** một cách thừa. Khi người làm không quan trọng hay không rõ, hãy bỏ **by ...**: **My bike was stolen.**" },
      { type: "advanced", text: "Nội động từ (**intransitive verbs** như **happen**, **arrive**, **die**, **disappear**) không có tân ngữ nên không dùng được ở dạng bị động. Ta nói **The accident happened**, không nói **The accident was happened**." }
    ]
  },

  { title: "Mệnh đề quan hệ", grammarId: "011", level: "B2", category: "Mệnh đề",
    rule: "Mệnh đề quan hệ là mệnh đề bổ nghĩa cho danh từ đứng ngay trước, nối bằng đại từ hoặc trạng từ quan hệ. **Who** chỉ người; **which** chỉ vật; **that** thay cho **who / which** trong mệnh đề xác định; **whose** chỉ sở hữu; **where** chỉ nơi chốn. Mệnh đề xác định (**defining**) cho biết đang nói đến người hoặc vật nào, nên không có dấu phẩy. Mệnh đề không xác định (**non-defining**) chỉ thêm thông tin, đặt giữa dấu phẩy và không dùng **that**. Đại từ quan hệ đã thay thế danh từ nên không lặp lại đại từ đó trong mệnh đề.",
    form: ["Người: N + who / that + clause","Vật: N + which / that + clause","Sở hữu: N + whose + N + clause","Nơi chốn: N + where + clause","Không xác định: N, + who / which + clause, (không dùng that)"],
    examples: ["The woman who called is my aunt.","My aunt, who lives abroad, is visiting.","The book that I bought was expensive.","That is the boy whose bike was stolen.","Hanoi is the city where I was born."],
    wrong: "The book which I bought it was expensive.", right: "The book which I bought was expensive.",
    more: [
      { type: "nuance", text: "Trong mệnh đề xác định, có thể lược bỏ đại từ quan hệ khi nó làm tân ngữ (**The man I saw yesterday**). Không được lược khi nó làm chủ ngữ: phải nói **The man who lives next door**." },
      { type: "extension", text: "**Whose** chỉ sở hữu cho cả người lẫn vật: **I met a girl whose father is a pilot.** **Where** thay cho giới từ + nơi chốn: **This is the café where we met.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **The book which I bought it** thay vì **The book which I bought**. **Which** đã thay cho **it**, nên bỏ đại từ thừa. Tiếng Việt cho phép lặp 'cuốn sách mà tôi mua nó', còn tiếng Anh thì không." },
      { type: "mistake", text: "Lỗi hay gặp: nói **My aunt, that lives abroad, is visiting** thay vì **My aunt, who lives abroad, is visiting**. Mệnh đề không xác định (có dấu phẩy) không dùng **that**." },
      { type: "advanced", text: "**Whom** làm tân ngữ chỉ người trong văn phong trang trọng, và bắt buộc dùng sau giới từ: **The man to whom I spoke** (trong văn nói thường là **The man I spoke to**)." }
    ]
  },
  { title: "Câu gián tiếp", grammarId: "012", level: "B2", category: "Mệnh đề",
    rule: "Câu gián tiếp thuật lại lời người khác mà không trích nguyên văn. Khi động từ tường thuật ở quá khứ (**said**, **asked**), thường lùi một bậc thì (**am** -> **was**, hiện tại đơn -> quá khứ đơn, quá khứ đơn -> quá khứ hoàn thành) và đổi đại từ, trạng từ chỉ thời gian hoặc nơi chốn (**now** -> **then**, **here** -> **there**). Trong câu hỏi gián tiếp, giữ trật tự câu khẳng định (S + V), không mượn **do / does / did** và không có dấu hỏi: **He asked me where I lived.** Câu hỏi Yes/No dùng **if** hoặc **whether**.",
    form: ["S + said (that) + clause (lùi thì)","S + asked + wh-word + S + V (không đảo trợ động từ)","S + asked + if / whether + S + V"],
    examples: ["“I am tired,” she said. -> She said she was tired.","He asked me where I lived.","They said they had finished.","Lan asked me if I liked spicy food.","Minh told us that he was leaving the next day."],
    wrong: "He asked me where do I live.", right: "He asked me where I lived.",
    more: [
      { type: "nuance", text: "Không bắt buộc lùi thì khi nội dung vẫn đúng ở hiện tại hoặc là sự thật hiển nhiên: **He said that water boils at 100 degrees Celsius.** Cũng không lùi khi động từ tường thuật ở hiện tại: **She says she is tired.**" },
      { type: "extension", text: "Câu mệnh lệnh và yêu cầu dùng **told / asked + O + (not) to V**: **She told me to wait.** **He asked us not to talk.** Không dùng **that** trong cấu trúc này." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He asked me where do I live** thay vì **He asked me where I lived**. Câu hỏi gián tiếp không đảo trợ động từ, và cần lùi thì." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He said me that he was tired** thay vì **He said that he was tired** hoặc **He told me that he was tired**. **Say** không có tân ngữ người trực tiếp, còn **tell** thì cần." },
      { type: "advanced", text: "Các động từ tường thuật chính xác hơn giúp câu văn phong phú hơn **said / asked**: **denied**, **admitted**, **suggested**, **promised**, **warned**. Mỗi từ có cấu trúc riêng: **She denied taking it**, **He promised to call**." }
    ]
  },
  { title: "Câu điều kiện loại ba", grammarId: "013", level: "B2", category: "Câu điều kiện",
    rule: "Câu điều kiện loại 3 diễn tả giả định không có thật trong quá khứ, trái ngược với điều đã xảy ra, thường để bày tỏ sự tiếc nuối hoặc phê bình. Mệnh đề **if** chia ở quá khứ hoàn thành (**had + V3/ed**), mệnh đề chính dùng **would have + V3/ed**. Ví dụ: **If I had studied, I would have passed** nghĩa là thực tế là tôi đã không học và đã không đậu. Không đặt **would have** trong mệnh đề **if**.",
    form: ["If + S + had + V3/ed, S + would / could / might have + V3/ed","S + would have + V3/ed + if + S + had + V3/ed (đảo vế, bỏ dấu phẩy)"],
    examples: ["If I had studied, I would have passed.","If she hadn't missed the bus, she would have arrived on time.","If we had left earlier, we could have caught the train.","What would you have done if you had lost your phone?"],
    wrong: "If I would have studied, I would have passed.", right: "If I had studied, I would have passed.",
    more: [
      { type: "nuance", text: "Có thể thay **would have** bằng **could have** (đã có khả năng làm được) hoặc **might have** (có thể đã xảy ra, ít chắc chắn hơn) tùy sắc thái: **If I had left earlier, I might have caught the train.**" },
      { type: "extension", text: "Có thể dùng quá khứ hoàn thành ở mệnh đề **if** và **would** ở mệnh đề chính khi kết quả kéo đến hiện tại (điều kiện hỗn hợp): **If I had taken that job, I would be rich now.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **If I would have known, I would have told you** thay vì **If I had known, I would have told you**. Mệnh đề **if** dùng **had + V3**, không dùng **would have**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **If I had studied, I would passed** hoặc **would have pass** thay vì **would have passed**. Sau **would have** luôn là V3 (quá khứ phân từ)." },
      { type: "advanced", text: "Đảo ngữ trang trọng: bỏ **if** và đưa **had** lên đầu câu: **Had I studied, I would have passed.** Dạng phủ định: **Had she not missed the bus, she would have arrived on time.**" }
    ]
  },
  { title: "Đảo ngữ để nhấn mạnh", grammarId: "014", level: "C1", category: "Văn phong",
    rule: "Đảo ngữ để nhấn mạnh là cấu trúc trang trọng, thường gặp trong văn viết, diễn văn, văn học. Khi trạng từ phủ định hoặc hạn chế (**never**, **hardly**, **rarely**, **seldom**, **not only**, **little**, **no sooner**) đứng đầu câu, ta đảo trợ động từ (hoặc **be**) lên trước chủ ngữ. Nếu câu không có trợ động từ, mượn **do / does / did**: **Rarely does he complain.** Sau trợ động từ, động từ chính ở dạng nguyên mẫu hoặc quá khứ phân từ tùy thì.",
    form: ["Never / Rarely / Seldom / Little + trợ động từ + S + V","Hardly / No sooner + had + S + V3/ed + when / than + S + V2","Not only + trợ động từ + S + V, but + S + also + V","Câu gốc chỉ có V thường: Rarely + do / does / did + S + V-bare"],
    examples: ["Never have I seen such a beautiful sunset.","Not only did she win, but she also broke the record.","Hardly had we arrived when it started to rain.","Rarely does he complain about his work.","Little did they know about the surprise."],
    wrong: "Never I have seen such a sunset.", right: "Never have I seen such a sunset.",
    more: [
      { type: "nuance", text: "Đảo ngữ chỉ xảy ra khi trạng từ phủ định đứng ở đầu câu. Nếu nằm giữa câu, trật tự bình thường: **I have never seen such a sunset.** So với **Never have I seen such a sunset**, câu đảo mạnh và trang trọng hơn rõ rệt." },
      { type: "extension", text: "Các cụm hay gặp khác: **No sooner had we left than it began to rain**, **Under no circumstances should you open it**, **Only then did I understand**, **Little did he know the truth**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Never I have seen** hoặc **Rarely he goes** thay vì **Never have I seen** và **Rarely does he go**. Tiếng Việt giữ nguyên trật tự khi nhấn mạnh, nhưng tiếng Anh phải đảo trợ động từ lên trước chủ ngữ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Hardly had we arrived when it did start to rain** hoặc **Hardly we had arrived**. Mẫu đúng là **Hardly had + S + V3 + when + quá khứ đơn**." },
      { type: "advanced", text: "Với **Not only ... but also ...**, chỉ vế đầu (sau **Not only**) bị đảo: **Not only did he pass the exam, but he also got a scholarship.** Vế sau giữ trật tự bình thường." }
    ]
  },
  { title: "Thì hiện tại hoàn thành tiếp diễn", grammarId: "015", level: "B1", category: "Thì",
    rule: "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh quá trình kéo dài của một hành động: hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn đến bây giờ, hoặc vừa mới dừng lại nhưng để lại kết quả có thể thấy ngay (ví dụ: **I'm wet because I have been walking in the rain**). Cấu trúc: **have / has + been + V-ing**. Thường đi với **for** (khoảng thời gian) và **since** (mốc thời gian), và dùng nhiều trong câu hỏi **How long...?**. Điểm cần nhớ: thì này quan tâm đến thời gian và sự liên tục của hành động, không quan tâm hành động đã xong hay chưa.",
    form: ["S + have / has + been + V-ing","S + have / has + not + been + V-ing","Have / Has + S + been + V-ing?","How long + have / has + S + been + V-ing?"],
    examples: ["It has been raining since this morning.","They have been working here for three hours.","How long have you been waiting?","Nam hasn't been sleeping well lately.","Lan has been learning English since 2022."],
    wrong: "She has learning English for two years.", right: "She has been learning English for two years.",
    more: [
      { type: "nuance", text: "Phân biệt với hiện tại hoàn thành đơn: hiện tại hoàn thành đơn nhấn mạnh **kết quả hoặc số lượng** (**I have written 3 letters**), còn hiện tại hoàn thành tiếp diễn nhấn mạnh **thời gian hoặc quá trình** (**I have been writing letters for 2 hours**)." },
      { type: "extension", text: "Có thể dùng không kèm khoảng thời gian để giải thích một kết quả vừa thấy: **You look tired. Have you been working all day?** hoặc **The ground is wet. It has been raining.** Người nói nhìn thấy kết quả và suy ra quá trình trước đó." },
      { type: "advanced", text: "Các động từ chỉ trạng thái như **know**, **like**, **be**, **have** (nghĩa là sở hữu) thường không dùng ở dạng tiếp diễn, nên ta nói **I have known her for years**, không nói **I have been knowing her**. Một số động từ như **live**, **work**, **wait** thì dùng được cả hai dạng với nghĩa gần giống nhau." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She has learning English for two years** thay vì **She has been learning English for two years**, hoặc dùng **She is learning English for two years**. Tiếng Việt không đánh dấu thì nên dễ bỏ **been** hoặc dùng hiện tại tiếp diễn; khi có **for** hoặc **since** thì cần **have / has been + V-ing**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I have been knowing him since 2015** thay vì **I have known him since 2015**. **Know** là động từ chỉ trạng thái nên không chia tiếp diễn." }
    ]
  },
  { title: "Thì quá khứ tiếp diễn", grammarId: "016", level: "A2", category: "Thì",
    rule: "Thì quá khứ tiếp diễn diễn tả một hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ. Ví dụ: **At 8 PM last night, I was reading a book** (lúc 8 giờ tối qua, tôi đang đọc sách). Cấu trúc: **was / were + V-ing**. Dùng **was** với I, he, she, it và **were** với you, we, they. Thì này cũng dùng khi hai hành động xảy ra song song cùng lúc, hoặc khi một hành động đang diễn ra thì có hành động khác xen vào. Hành động đang diễn ra dùng quá khứ tiếp diễn, hành động xen vào dùng quá khứ đơn.",
    form: ["S + was / were + V-ing","S + was / were + not + V-ing","Was / Were + S + V-ing?"],
    examples: ["I was reading a book at 8 PM last night.","They were playing tennis when it started to rain.","What were you doing at this time yesterday?","Lan wasn't listening when the teacher called her name.","While Mom was cooking, Dad was washing the car."],
    wrong: "She was cook dinner when I arrived.", right: "She was cooking dinner when I arrived.",
    more: [
      { type: "nuance", text: "Với **when** và **while**: hành động ngắn, xen vào chia quá khứ đơn, hành động dài chia quá khứ tiếp diễn. **While I was cooking, the phone rang.** (đang nấu thì điện thoại reo). Nếu một chuỗi hành động nối tiếp nhau thì dùng quá khứ đơn: **When I arrived, she cooked dinner** nghĩa là cô ấy bắt đầu nấu sau khi tôi đến." },
      { type: "extension", text: "Hai hành động song song cùng lúc nối bằng **while**: **I was studying while my brother was playing games.** Quá khứ tiếp diễn cũng dùng để tả bối cảnh trong câu chuyện: **It was raining and people were hurrying home.**" },
      { type: "advanced", text: "Với **always**, quá khứ tiếp diễn diễn tả sự phàn nàn về thói quen gây khó chịu: **He was always losing his keys.** Ngoài ra, dùng quá khứ tiếp diễn có thể làm lời hỏi hoặc đề nghị lịch sự hơn: **I was wondering if you could help me.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **She was cook dinner** hoặc **She cooking dinner when I arrived** thay vì **She was cooking dinner**. Tiếng Việt không có **was** và đuôi **-ing**, nên người học hay quên một trong hai. Cần đủ cả **was / were** và **V-ing**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I was knowing the answer** thay vì **I knew the answer**. Các động từ chỉ trạng thái như **know**, **like**, **want** thường không dùng dạng tiếp diễn." }
    ]
  },
  { title: "Thì quá khứ hoàn thành", grammarId: "017", level: "B1", category: "Thì",
    rule: "Thì quá khứ hoàn thành diễn tả một hành động đã xảy ra và hoàn tất trước một hành động khác, hoặc trước một mốc thời gian trong quá khứ. Cấu trúc: **had + V3/ed**, dùng được với mọi chủ ngữ. Thì này giúp người nghe biết rõ hành động nào xảy ra trước: **When I got to the station, the train had left** (tàu đi rồi, sau đó tôi mới đến). Hành động xảy ra sau thường chia quá khứ đơn, hành động xảy ra trước chia quá khứ hoàn thành. Thì này còn dùng để giải thích nguyên nhân của một việc trong quá khứ.",
    form: ["S + had + V3/ed","S + had + not + V3/ed","Had + S + V3/ed?"],
    examples: ["By the time we arrived, the train had left.","She had already eaten before her friends came.","He passed the exam because he had studied hard.","I hadn't seen that film before last night.","Had they met before the party?"],
    wrong: "They had finish the project before the deadline.", right: "They had finished the project before the deadline.",
    more: [
      { type: "nuance", text: "Thường đi với các từ nối thời gian như **by the time**, **before**, **after**, **when** và các trạng từ như **already**, **just**, **never...before**. Với **before** và **after**, nếu thứ tự đã rõ thì có thể dùng quá khứ đơn: **After she ate, she left** vẫn đúng." },
      { type: "extension", text: "Dùng trong câu tường thuật, khi đổi từ hiện tại hoàn thành hoặc quá khứ đơn về quá khứ: **\"I have finished,\" he said** thành **He said he had finished.** Cũng dùng trong câu điều kiện loại 3: **If I had known, I would have told you.**" },
      { type: "advanced", text: "Không cần dùng quá khứ hoàn thành khi trình tự đã rõ và các hành động nối tiếp nhau đơn giản. **He opened the door and walked in** dùng quá khứ đơn là tự nhiên. Chỉ dùng **had + V3/ed** khi cần nhấn mạnh hành động nào xảy ra trước, hoặc khi kể lại sự việc đã xảy ra trước mạch chuyện chính." },
      { type: "mistake", text: "Lỗi hay gặp: nói **They had finish the project** hoặc **They had finishing the project** thay vì **They had finished the project**. Sau **had** luôn là V3/ed. Với động từ bất quy tắc cần nhớ dạng V3: **had gone**, **had seen**, **had written**." },
      { type: "mistake", text: "Lỗi hay gặp: dùng quá khứ đơn cho cả hai hành động khi cần làm rõ thứ tự, như **When I arrived, the film started** (phim bắt đầu sau khi tôi đến) trong khi ý muốn nói là phim đã bắt đầu từ trước: **the film had started**. Tiếng Việt thường chỉ dùng từ như \"đã\" hay \"rồi\" nên dễ bỏ qua sự khác biệt này." }
    ]
  },
  { title: "Thì quá khứ hoàn thành tiếp diễn", grammarId: "018", level: "B2", category: "Thì",
    rule: "Thì quá khứ hoàn thành tiếp diễn nhấn mạnh tính liên tục, kéo dài của một hành động đã diễn ra cho đến một mốc trong quá khứ, thường là ngay trước một hành động hoặc sự việc khác trong quá khứ. Cấu trúc: **had been + V-ing**, dùng với mọi chủ ngữ. Thì này thường đi với **for** (khoảng thời gian) và **since** (mốc thời gian), và hay dùng để giải thích nguyên nhân của một trạng thái hay kết quả trong quá khứ: **She was tired because she had been working all night.** Điểm khác với quá khứ hoàn thành đơn: thì này nhìn vào quá trình, còn quá khứ hoàn thành đơn nhìn vào việc đã hoàn tất.",
    form: ["S + had + been + V-ing","S + had + not + been + V-ing","Had + S + been + V-ing?"],
    examples: ["They had been playing football for two hours before it started to rain.","She was tired because she had been working all night.","He had been living in Hanoi for five years before he moved.","Had you been waiting long when the bus came?","I hadn't been sleeping well before the holiday."],
    wrong: "We had playing games when the lights went out.", right: "We had been playing games when the lights went out.",
    more: [
      { type: "nuance", text: "So sánh: **She had read the book** (đã đọc xong cuốn sách, nhấn mạnh việc hoàn thành) với **She had been reading the book** (đã đọc một lúc lâu, có thể chưa xong, nhấn mạnh quá trình). Câu thứ hai thường giải thích điều gì đó, ví dụ vì sao mắt cô ấy mỏi." },
      { type: "advanced", text: "Thì này là phiên bản quá khứ của hiện tại hoàn thành tiếp diễn, nên cũng dùng trong câu tường thuật: **\"I have been waiting for an hour,\" she said** thành **She said she had been waiting for an hour.** Động từ chỉ trạng thái như **know**, **belong** thường không dùng dạng tiếp diễn: **He had known her for years**." },
      { type: "extension", text: "Có thể dùng không kèm khoảng thời gian, chỉ để nêu nguyên nhân: **The streets were wet. It had been raining.** Người nói thấy kết quả ở quá khứ và nói về quá trình đã xảy ra ngay trước đó." },
      { type: "mistake", text: "Lỗi hay gặp: nói **We had playing games** hoặc **We had been play games** thay vì **We had been playing games**. Cần đủ ba phần: **had**, **been**, và **V-ing**. Tiếng Việt chỉ dùng \"đã đang\" hoặc \"đã\" nên người học hay bỏ sót một phần." },
      { type: "mistake", text: "Lỗi hay gặp: dùng **has been** thay vì **had been** khi câu kể về quá khứ, như **He said he has been waiting for an hour**. Khi mạch câu đã ở quá khứ thì phải lùi thì: **had been waiting**." }
    ]
  },
  { title: "Thì tương lai đơn", grammarId: "019", level: "A2", category: "Thì",
    rule: "Thì tương lai đơn dùng **will + động từ nguyên mẫu** (không có **to**). Dùng khi: quyết định ngay lúc nói (**I'll answer the phone**), lời hứa (**I will call you**), lời đề nghị giúp đỡ (**I will help you**), hoặc dự đoán dựa trên ý kiến cá nhân (**I think it will rain**). Dạng rút gọn: **I'll**, **she'll**, **won't** (= will not). Với mọi chủ ngữ, **will** không đổi dạng và động từ phía sau cũng không thêm **s**. Câu hỏi: đảo **will** lên trước chủ ngữ (**Will you come?**).",
    form: ["S + will + V-bare","S + will + not (won't) + V-bare","Will + S + V-bare?"],
    examples: ["I will help you with your heavy bag.","I think it will rain tomorrow.","Don't worry, I will call you later.","We won't be late for the meeting.","Will you come to my birthday party?"],
    wrong: "She will goes to the party.", right: "She will go to the party.",
    more: [
      { type: "nuance", text: "Khác với **be going to**: **will** cho quyết định mới nghĩ ra lúc nói, còn **be going to** cho dự định đã có từ trước hoặc dự đoán dựa vào dấu hiệu đang thấy. **Look at those clouds. It is going to rain.** (thấy mây đen nên đoán) khác với **I think it will rain** (ý kiến cá nhân)." },
      { type: "extension", text: "Dùng **will** cho lời yêu cầu lịch sự và lời đe dọa hoặc cảnh báo: **Will you open the window, please?**, **I won't tell anyone.** Cũng dùng trong câu điều kiện loại 1: **If you study, you will pass.**" },
      { type: "advanced", text: "Trong mệnh đề thời gian và mệnh đề **if**, không dùng **will** sau **when**, **if**, **as soon as**, **before**, **after**. Dùng hiện tại đơn thay thế: **I will call you when I arrive**, không nói **when I will arrive**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She will goes to the party** hoặc **She will to go** thay vì **She will go to the party**. Sau **will** luôn là động từ nguyên mẫu, không thêm **s**, **-ed**, **-ing** và không có **to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Tomorrow I go to school** hoặc **I will to see you tomorrow** khi diễn đạt việc tương lai, vì tiếng Việt chỉ cần thêm từ \"sẽ\" hoặc \"ngày mai\". Trong tiếng Anh cần chuyển động từ sang **will + V**: **Tomorrow I will go to school**." }
    ]
  },
  { title: "Thì tương lai tiếp diễn", grammarId: "020", level: "B1", category: "Thì",
    rule: "Thì tương lai tiếp diễn diễn tả một hành động sẽ đang diễn ra tại một thời điểm hoặc trong một khoảng thời gian cụ thể trong tương lai. Cấu trúc: **will be + V-ing**, dùng với mọi chủ ngữ. Ví dụ: **At 9 AM tomorrow, I will be sitting in an exam** (9 giờ sáng mai tôi sẽ đang ngồi thi). Thì này hay đi với các mốc thời gian như **at this time tomorrow**, **at 8 PM**, **this time next week**. Khác với tương lai đơn, nó nhìn hành động như đang diễn ra ở thời điểm đó, không phải một việc sẽ xảy ra rồi kết thúc.",
    form: ["S + will + be + V-ing","S + will + not + be + V-ing","Will + S + be + V-ing?"],
    examples: ["At this time tomorrow, I will be flying to Tokyo.","Don't call me at 8 PM because I will be having dinner.","Will you be using your computer this afternoon?","Lan won't be working next Monday.","This time next week, we will be lying on the beach."],
    wrong: "They will be study at the library tomorrow morning.", right: "They will be studying at the library tomorrow morning.",
    more: [
      { type: "nuance", text: "Dùng để hỏi về kế hoạch của người khác một cách lịch sự, không mang ý ép buộc: **Will you be using the car tonight?** nghe nhẹ nhàng hơn **Will you use the car tonight?**, vì câu sau có thể bị hiểu là một lời nhờ vả." },
      { type: "extension", text: "Dùng để nói về việc sẽ xảy ra như một phần của lịch trình hoặc diễn biến bình thường: **I will be seeing him at the meeting, so I can pass on the message.** Cũng dùng để đoán người khác đang làm gì: **Don't phone now; she will be sleeping.**" },
      { type: "advanced", text: "So sánh với tương lai hoàn thành tiếp diễn và tương lai đơn: **I will be working at 5** (lúc 5 giờ tôi đang làm), **I will have finished by 5** (trước 5 giờ tôi đã xong). Thì tương lai tiếp diễn không dùng với động từ chỉ trạng thái như **know**, **belong**: nói **I will know the result tomorrow**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **They will be study** hoặc **They will studying** thay vì **They will be studying**. Cần đủ **will**, **be**, và **V-ing**. Tiếng Việt chỉ dùng \"sẽ đang\" nên người học hay bỏ **be** hoặc quên đuôi **-ing**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **At 8 PM tomorrow I will have dinner** khi muốn nói hành động đang diễn ra, trong khi **I will be having dinner** mới đúng ý \"đang ăn\". Câu đầu chỉ nêu một việc sẽ làm." }
    ]
  },
  { title: "Thì tương lai hoàn thành", grammarId: "021", level: "B2", category: "Thì",
    rule: "Thì tương lai hoàn thành diễn tả một hành động sẽ hoàn tất trước một mốc thời gian, hoặc trước một hành động khác, trong tương lai. Cấu trúc: **will have + V3/ed**, dùng với mọi chủ ngữ. Ví dụ: **By next month, I will have finished this book** (đến tháng sau, tôi sẽ đã đọc xong cuốn sách này). Thì này thường đi với các cụm chỉ hạn chót như **by + mốc thời gian** (**by tomorrow**, **by 5 PM**), **by the time + mệnh đề** hoặc **before**. Điểm chính: nhấn mạnh việc đã xong tại một thời điểm trong tương lai.",
    form: ["S + will + have + V3/ed","S + will + not + have + V3/ed","Will + S + have + V3/ed?"],
    examples: ["By next month, I will have finished this book.","They will have built the bridge by the end of this year.","Will you have completed the report by 5 PM?","Nam won't have arrived by noon.","By the time you wake up, I will have left."],
    wrong: "She will have wrote the letter by tomorrow.", right: "She will have written the letter by tomorrow.",
    more: [
      { type: "nuance", text: "Từ **by** nghĩa là \"chậm nhất là, không muộn hơn\", khác với **until** nghĩa là \"cho đến khi\" (hành động kéo dài suốt). **I will have finished by 5** là xong trước hoặc lúc 5 giờ; **I will work until 5** là làm việc liên tục đến 5 giờ." },
      { type: "extension", text: "Dùng để đoán một việc chắc đã xảy ra rồi: **They will have arrived by now.** Dạng này mang nghĩa suy đoán về hiện tại hoặc quá khứ gần, không phải tương lai. Thường dùng trong văn nói và văn viết khi đã có căn cứ." },
      { type: "advanced", text: "Trong mệnh đề thời gian đi sau **by the time**, ta dùng hiện tại đơn, không dùng **will**: **By the time you arrive, I will have left.** Không nói **by the time you will arrive**. Câu phủ định và câu hỏi dùng **won't have + V3/ed** và **Will + S + have + V3/ed**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She will have wrote the letter** hoặc **She will have write the letter** thay vì **She will have written the letter**. Sau **have** phải là V3; với động từ bất quy tắc cần nhớ **written**, **gone**, **eaten**, **done**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I will finish the report by tomorrow** trong khi muốn nhấn mạnh việc sẽ đã xong là **I will have finished the report by tomorrow**. Cả hai đều dùng được; câu thứ nhất chỉ nêu dự định, câu thứ hai nhấn mạnh kết quả đã hoàn tất tại mốc đó." }
    ]
  },
  { title: "Thì tương lai hoàn thành tiếp diễn", grammarId: "022", level: "C1", category: "Thì",
    rule: "Thì tương lai hoàn thành tiếp diễn nhấn mạnh khoảng thời gian một hành động đã và đang diễn ra tính đến một mốc xác định trong tương lai. Cấu trúc: **will have been + V-ing**. Thì này thường đi với **for + khoảng thời gian** và **by + mốc thời gian** hoặc **by the time + mệnh đề**: **By June, she will have been working here for five years.** Người nói đứng ở tương lai và nhìn lại quá trình kéo dài từ trước đó. Đây là thì khá hiếm trong giao tiếp, chủ yếu xuất hiện khi cần nói chính xác về độ dài của một quá trình.",
    form: ["S + will + have + been + V-ing","S + will + not + have + been + V-ing","Will + S + have + been + V-ing?"],
    examples: ["By next year, I will have been living here for ten years.","By the time you arrive, we will have been waiting for two hours.","She will have been working at this company for five years by June.","Will he have been studying for ten hours by midnight?","By Friday, they won't have been travelling for a week."],
    wrong: "By next week, he will have been work here for a year.", right: "By next week, he will have been working here for a year.",
    more: [
      { type: "nuance", text: "So sánh với tương lai hoàn thành đơn: **will have finished** nhấn mạnh việc đã xong, còn **will have been working** nhấn mạnh thời gian làm việc kéo dài, không nói việc đó đã xong chưa. **By 6 PM, I will have written the report** khác với **By 6 PM, I will have been writing for four hours**." },
      { type: "advanced", text: "Trong mệnh đề đi sau **by the time**, **when**, **before** ta dùng hiện tại đơn thay vì **will**: **By the time you arrive, we will have been waiting for two hours.** Không nói **by the time you will arrive**." },
      { type: "extension", text: "Thường dùng khi nói về các cột mốc: kỷ niệm, thâm niên, quãng thời gian sống hoặc học ở đâu đó. **Next month, they will have been married for twenty years.** Thì này ít dùng trong lời nói thường ngày; nhiều khi tương lai hoàn thành đơn hoặc **will have + V3** đã đủ rõ nghĩa." },
      { type: "mistake", text: "Lỗi hay gặp: nói **he will have been work** hoặc **he will have been worked** thay vì **he will have been working**. Cần đủ bốn phần **will + have + been + V-ing**, và V-ing luôn dùng đuôi **-ing**. Người học Việt hay quên một trong các phần vì tiếng Việt không đánh dấu thì." },
      { type: "mistake", text: "Lỗi hay gặp: dùng thì này với động từ chỉ trạng thái, như **will have been knowing** hoặc **will have been having a car**. Nên nói **will have known** hoặc **will have had a car**; **know** và **have** (sở hữu) thường không dùng dạng tiếp diễn." }
    ]
  },
  { title: "Câu điều kiện loại không", grammarId: "023", level: "A2", category: "Câu điều kiện",
    rule: "Câu điều kiện loại 0 diễn tả điều luôn luôn đúng: quy luật tự nhiên, sự thật khoa học và thói quen chắc chắn xảy ra khi điều kiện xảy ra. Cấu trúc: **If + hiện tại đơn, hiện tại đơn**. Ví dụ: **If you heat ice, it melts** (nếu đun nóng đá thì nó tan). Hai vế đều dùng hiện tại đơn và không có **will**. Có thể đảo vế: **Water boils if it reaches 100 degrees.** Khi đảo vế, bỏ dấu phẩy. Cũng nhớ: chủ ngữ ngôi thứ ba số ít thì động từ thêm **s** (**it melts**).",
    form: ["If + S + V (hiện tại đơn), S + V (hiện tại đơn)","S + V (hiện tại đơn) + if + S + V (hiện tại đơn) (đảo vế, bỏ dấu phẩy)"],
    examples: ["If you heat ice, it melts.","Water boils if it reaches 100 degrees Celsius.","If plants don't get enough water, they die.","If I drink coffee at night, I can't sleep.","Does the ice melt if you put it in the sun?"],
    wrong: "If you heat ice, it melt.", right: "If you heat ice, it melts.",
    more: [
      { type: "nuance", text: "Có thể thay **if** bằng **when** mà nghĩa gần như không đổi (**When you heat ice, it melts**), vì điều này luôn xảy ra. Nhưng với loại 1, **if** và **when** khác nhau: **If it rains, I will stay home** (có thể mưa hoặc không)." },
      { type: "extension", text: "Vế kết quả có thể là câu mệnh lệnh hoặc dùng động từ khuyết thiếu: **If you feel sick, go home.** **If the light is red, you must stop.** Cách này hay dùng khi cho lời chỉ dẫn, quy tắc." },
      { type: "advanced", text: "Câu điều kiện loại 0 cũng dùng cho thói quen: **If I am tired, I go to bed early.** Có thể dùng **unless** thay cho **if... not**: **Plants die unless they get water.** Trong loại 0, cả hai vế còn dùng được thì quá khứ đơn để nói về thói quen trong quá khứ: **If it rained, we stayed inside.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **If you heat ice, it will melt** hoặc **If you will heat ice, it melts** thay vì **If you heat ice, it melts**. Khi nói về sự thật luôn đúng, không dùng **will**. Tiếng Việt chỉ dùng \"nếu... thì...\" nên người học hay thêm **will** theo thói quen." },
      { type: "mistake", text: "Lỗi hay gặp: nói **If plants don't gets enough water, they die** hoặc **If it melt, ...** thay vì **If plants don't get enough water, they die**. Quên chia **s** ở ngôi thứ ba số ít (**it melts**) hoặc dùng sai trợ động từ (**don't** với số nhiều, **doesn't** với số ít)." }
    ]
  },
  { title: "Câu điều kiện hỗn hợp", grammarId: "024", level: "C1", category: "Câu điều kiện",
    rule: "Câu điều kiện hỗn hợp trộn hai loại: vế **if** là giả định trái ngược ở quá khứ (loại 3: **if + had + V3/ed**), vế kết quả ở hiện tại (loại 2: **would / could / might + V-bare**). Dùng khi một việc không xảy ra trong quá khứ, và điều đó đang ảnh hưởng đến hiện tại: **If I had studied medicine, I would be a doctor now.** Cần chú ý mốc thời gian: **had + V3/ed** chỉ về quá khứ, còn **would + V-bare** chỉ về hiện tại hoặc tương lai. Các trạng từ như **now**, **today**, **still** thường giúp xác định vế kết quả.",
    form: ["If + S + had + V3/ed, S + would / could / might + V-bare (kết quả ở hiện tại)","If + S + had + not + V3/ed, S + would / could / might + V-bare"],
    examples: ["If I had studied medicine, I would be a doctor now.","If she had saved money, she could buy the car today.","If we had left last night, we would be home now.","If he hadn't broken his leg, he would be playing in the team now."],
    wrong: "If I had studied medicine, I would have been a doctor now.", right: "If I had studied medicine, I would be a doctor now.",
    more: [
      { type: "nuance", text: "Khác với loại 3 thuần túy (**would have + V3**), hai vế ở thời gian khác nhau. So sánh: **If I had left earlier, I would have caught the train** (cả hai ở quá khứ) với **If I had left earlier, I would be at the station now** (hậu quả ở hiện tại)." },
      { type: "extension", text: "Có dạng hỗn hợp ngược: vế **if** ở hiện tại hoặc trạng thái kéo dài, vế kết quả ở quá khứ. **If he were more careful, he wouldn't have made that mistake.** Dạng này diễn tả tính cách hoặc tình trạng chung, thường xuyên, khiến việc trong quá khứ xảy ra." },
      { type: "advanced", text: "Trong văn trang trọng có thể đảo ngữ, bỏ **if**: **Had I studied medicine, I would be a doctor now.** Các động từ khuyết thiếu **could** và **might** dùng ở vế kết quả để nói khả năng hoặc năng lực: **If she had saved money, she could buy the car today.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **If I had studied medicine, I would have been a doctor now** thay vì **I would be a doctor now**. Từ **now** cho biết kết quả đang ở hiện tại nên không dùng **would have + V3**. Tiếng Việt không đánh dấu thì nên người học dễ lặp lại dạng loại 3 cho cả hai vế." },
      { type: "mistake", text: "Lỗi hay gặp: nói **If I would have studied medicine, I would be a doctor now** thay vì **If I had studied medicine, ...**. Không dùng **would** trong mệnh đề **if** của câu điều kiện; ở đây phải dùng **had + V3/ed**." }
    ]
  },
  { title: "Mệnh đề quan hệ xác định", grammarId: "025", level: "B1", category: "Mệnh đề",
    rule: "Mệnh đề quan hệ xác định cung cấp thông tin cần thiết để biết chính xác danh từ phía trước là ai hay cái gì; bỏ đi thì câu không rõ nghĩa. Cấu trúc: **danh từ + who / which / that + mệnh đề**. Dùng **who** cho người, **which** cho vật, **that** cho cả người lẫn vật. Mệnh đề này không có dấu phẩy ngăn cách. **The man who stole my bag was caught** cho biết đó là người đàn ông nào. Khi đại từ quan hệ là tân ngữ của mệnh đề, có thể bỏ đi: **This is the book (that) I bought.** Khi nó là chủ ngữ (**who stole**) thì không được bỏ.",
    form: ["Người: N + who / that + clause","Vật: N + which / that + clause","Tân ngữ: N + (who / which / that) + S + V (có thể bỏ đại từ)"],
    examples: ["The man who stole my bag was caught by the police.","This is the book that I bought yesterday.","She likes the teacher who teaches English.","The shirt which I wore yesterday is dirty.","The food we ate last night was delicious."],
    wrong: "The woman which lives next door is a nurse.", right: "The woman who lives next door is a nurse.",
    more: [
      { type: "nuance", text: "Khi **that** làm tân ngữ, giới từ không thể đứng trước **that**. Nói **the person that I talked to** (giới từ ở cuối) hoặc dạng trang trọng **the person to whom I talked**; không nói **the person to that I talked**. Trong văn nói, **that** thường tự nhiên hơn **which** hoặc **who(m)**." },
      { type: "extension", text: "Có thể dùng **whose** (chỉ sở hữu), **where** (nơi chốn), **when** (thời gian): **The girl whose bag was stolen is crying.** **This is the house where I grew up.** Cũng dùng được **whom** cho tân ngữ người trong văn trang trọng: **The man whom I met was kind.**" },
      { type: "advanced", text: "Sau các từ như **all**, **everything**, **something**, **nothing**, **the only** và dạng so sánh nhất, **that** thường được ưa dùng hơn **which**: **Everything that he said was true.** Cũng có thể rút gọn mệnh đề: **the man standing there** (= who is standing), **the book written by her** (= which was written)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The man, who stole my bag, was caught** thay vì **The man who stole my bag was caught**. Thêm dấu phẩy làm câu thành mệnh đề không xác định, nghĩa là người này đã được biết rõ rồi. Khi cần xác định người nào, không dùng dấu phẩy." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The man who he stole my bag** hoặc **The book that I bought it** thay vì **The man who stole my bag** và **The book that I bought**. Tiếng Việt hay nhắc lại đại từ (\"cuốn sách mà tôi mua nó\"), nhưng tiếng Anh đã có đại từ quan hệ thay cho danh từ nên không lặp lại." }
    ]
  },
  { title: "Mệnh đề quan hệ không xác định", grammarId: "026", level: "B2", category: "Mệnh đề",
    rule: "Mệnh đề quan hệ không xác định thêm thông tin phụ cho danh từ vốn đã rõ (tên riêng, người hay vật duy nhất, hoặc đã được xác định bởi ngữ cảnh). Bỏ mệnh đề đi thì câu vẫn đủ nghĩa. Mệnh đề luôn nằm **giữa hai dấu phẩy**, hoặc sau một dấu phẩy nếu ở cuối câu. Dùng **who** (người), **which** (vật), **whose**, **where**, **when**; **không dùng that** và **không được bỏ** đại từ quan hệ, kể cả khi nó là tân ngữ. **Hanoi, which is the capital of Vietnam, is very bustling.**",
    form: ["N (đã xác định), + who / which / whose / where / when + clause, + ...","N + ... , + who / which + clause. (mệnh đề ở cuối câu)","Không dùng that; không bỏ đại từ quan hệ"],
    examples: ["Hanoi, which is the capital of Vietnam, is very bustling.","My father, who is a doctor, loves reading books.","Mr. Smith, who you met yesterday, is our new manager.","Lan, whose brother lives in Saigon, is visiting us.","We stayed in Hue, where my grandparents were born."],
    wrong: "My father, that is a doctor, loves reading.", right: "My father, who is a doctor, loves reading.",
    more: [
      { type: "nuance", text: "Dấu phẩy làm thay đổi nghĩa. **My sister who lives in Paris is a nurse** ngụ ý tôi có nhiều chị em gái và chỉ chị ở Paris là y tá. **My sister, who lives in Paris, is a nurse** ngụ ý tôi chỉ có một chị. Khi nói, mệnh đề không xác định thường có chỗ ngắt giọng trước và sau." },
      { type: "extension", text: "**Which** có thể nói về cả mệnh đề phía trước: **He passed the exam, which surprised everyone.** Khi có giới từ, trong văn trang trọng đặt giới từ trước đại từ: **The house, in which she grew up, was sold.** Cũng có thể dùng **whom** cho tân ngữ người: **Mr. Smith, whom you met yesterday, is our new manager.**" },
      { type: "advanced", text: "Có thể dùng với lượng từ: **She has three sons, two of whom live abroad.** **The books, most of which were old, were donated.** Mệnh đề này thường gặp trong văn viết, báo chí; trong văn nói thân mật người ta hay tách thành hai câu ngắn." },
      { type: "mistake", text: "Lỗi hay gặp: nói **My father, that is a doctor, loves reading** thay vì **My father, who is a doctor, loves reading**. Với mệnh đề không xác định không dùng **that**; dùng **who** cho người, **which** cho vật." },
      { type: "mistake", text: "Lỗi hay gặp: bỏ dấu phẩy hoặc bỏ đại từ, như **Mr. Smith you met yesterday is our manager** thay vì **Mr. Smith, whom you met yesterday, is our new manager**. Với mệnh đề không xác định, cần dấu phẩy và đại từ quan hệ đầy đủ." }
    ]
  },
  { title: "Động từ khuyết thiếu bắt buộc", grammarId: "027", level: "A2", category: "Động từ",
    rule: "**Must** và **have to** đều chỉ sự bắt buộc, nhưng khác nhau một chút. **Must** là sự bắt buộc xuất phát từ cảm nhận hoặc ý kiến của người nói (**I must study harder**). **Have to** là sự bắt buộc do quy định, hoàn cảnh bên ngoài (**I have to wear a uniform**). Sau **must** là động từ nguyên mẫu không **to** (**must go**); **have to** thì có sẵn **to** rồi đi tiếp với động từ nguyên mẫu (**have to go**). **Mẹo quan trọng:** **mustn't** nghĩa là cấm (**You mustn't smoke here**), còn **don't have to** nghĩa là không cần (**You don't have to pay**). Hai cụm này rất dễ nhầm.",
    form: ["S + must + V-bare","S + have / has to + V-bare","S + mustn't + V-bare (cấm)","S + don't / doesn't have to + V-bare (không cần)"],
    examples: ["You must wear a helmet when riding a motorbike.","I have to submit this report by 5 PM today.","You don't have to pay; it's free.","Students mustn't use phones during the exam.","Does Nam have to wear a uniform at school?"],
    wrong: "She must has to go now.", right: "She has to go now.",
    more: [
      { type: "nuance", text: "Trong nhiều tình huống, **must** và **have to** gần như thay thế nhau. Khác biệt chính: **must** nghe mạnh, mang tính cá nhân; **have to** trung tính hơn. Câu hỏi thường dùng **have to**: **Do I have to go?** (Cần phải đi không?). Hỏi bằng **Must I go?** nghe trang trọng và hơi cứng." },
      { type: "extension", text: "**Must** chỉ có dạng hiện tại, nên khi nói về quá khứ hoặc tương lai ta dùng **have to**: **I had to leave early yesterday** (hôm qua tôi phải về sớm), **I will have to work tomorrow** (mai tôi sẽ phải đi làm)." },
      { type: "advanced", text: "**Must** còn dùng để suy luận chắc chắn: **He must be tired** (chắc anh ấy mệt rồi). Với nghĩa này, phủ định là **can't**, không phải **mustn't**: **He can't be at home** (không thể nào anh ấy ở nhà). Ngoài ra, **have got to** là dạng thân mật hơn, hay dùng trong Anh-Anh: **I've got to go.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **She must has to go** hoặc **She musts go** thay vì **She has to go** (hoặc **She must go**). Không dùng hai từ chỉ sự bắt buộc cùng lúc, và **must** không bao giờ thêm **s**. Với **have to**, ngôi thứ ba số ít là **has to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **You mustn't come if you don't want to** thay vì **You don't have to come if you don't want to**. Tiếng Việt dùng \"không phải\" và \"không được\" khác nhau, nhưng người học hay nhầm hai nghĩa khi dịch sang tiếng Anh. **Mustn't** là bị cấm, **don't have to** là không cần thiết." }
    ]
  },
  { title: "Động từ khuyết thiếu lời khuyên", grammarId: "028", level: "A2", category: "Động từ",
    rule: "**Should** và **ought to** dùng để đưa ra lời khuyên hoặc nói điều nên làm (nhưng không bắt buộc). **Should** thường mang ý kiến cá nhân: **You should study harder** (bạn nên học chăm hơn). **Ought to** nghe trang trọng hơn một chút và thường nói về bổn phận, đạo đức hoặc quy tắc xã hội: **You ought to apologize.** Sau cả hai là động từ nguyên mẫu: **should + V**, **ought to + V**. Với **should**, không có **to**; với **ought**, luôn có **to**. Câu hỏi thường dùng **should**: **Should we go now?**",
    form: ["S + should + V-bare","S + ought to + V-bare","S + should not (shouldn't) + V-bare","Should + S + V-bare?"],
    examples: ["You should study harder for the final exam.","You ought to apologize to her for your mistake.","Should we book the tickets in advance?","You shouldn't eat too much sugar.","Children ought to respect their teachers."],
    wrong: "You should to go to bed early.", right: "You should go to bed early.",
    more: [
      { type: "nuance", text: "Lời khuyên với **should** nhẹ hơn **must** và **have to**. **You should see a doctor** là lời gợi ý, còn **You must see a doctor** nghe như mệnh lệnh mạnh. Thêm **really** để nhấn mạnh hơn: **You really should rest.** Dùng **I think** hoặc **I don't think** để câu nhẹ nhàng, lịch sự hơn." },
      { type: "extension", text: "Dạng phủ định là **shouldn't** (nên không) và **ought not to**: **You shouldn't eat so much sugar.** Cũng dùng **should** để hỏi xin lời khuyên: **What should I do?** Dạng **had better** (tốt hơn hết là) mạnh hơn: **You had better leave now, or you'll miss the bus.**" },
      { type: "advanced", text: "Ngoài lời khuyên, **should** còn dùng để nói điều được cho là đúng, hoặc dự đoán hợp lý: **The meeting should be over by now.** Với nghĩa này **ought to** cũng dùng được. Câu hỏi và phủ định của **ought to** khá hiếm; người bản ngữ thường dùng **should** thay thế." },
      { type: "mistake", text: "Lỗi hay gặp: nói **You should to go to bed early** hoặc **You should going** thay vì **You should go to bed early**. Sau **should** là động từ nguyên mẫu không **to**. Còn với **ought** thì cần **to**: **You ought to go**, không nói **You ought go**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He shoulds study** hoặc **Does he should study?** thay vì **He should study** và **Should he study?**. **Should** là động từ khuyết thiếu, không thêm **s**, không dùng **do / does** khi hỏi hoặc phủ định; chỉ cần đảo **should** lên trước chủ ngữ." }
    ]
  },
  { title: "Động từ khuyết thiếu năng lực", grammarId: "029", level: "A1", category: "Động từ",
    rule: "Dùng **can** để nói ai đó có khả năng làm gì ở hiện tại (She can swim: Cô ấy biết bơi). Dùng **could** cho khả năng trong quá khứ. Dùng **be able to** khi cần nói ở các thì khác, ví dụ tương lai (**will be able to**). Sau **can** và **could** luôn là động từ nguyên mẫu không **to** (V-bare), và **can** không thêm -s với **he/she/it**. Câu phủ định là **cannot** (hoặc **can't**), câu hỏi đảo **can** lên trước chủ ngữ: **Can you swim?**",
    form: ["S + can / could + V-bare","S + can't / cannot / couldn't + V-bare","Can / Could + S + V-bare?","S + be able to + V-bare (dùng ở các thì khác)"],
    examples: ["She can speak three languages fluently.","When I was young, I could run very fast.","He will be able to finish the task tomorrow.","Can you help me with my homework, Nam?","I couldn't open the door because I didn't have the key."],
    wrong: "She can speaks English very well.", right: "She can speak English very well.",
    more: [
      { type: "extension", text: "**Can** còn dùng để xin phép hoặc nhờ vả: **Can I sit here?** (Tôi ngồi đây được không?), **Can you help me?** (Bạn giúp tôi được không?). **Could** lịch sự hơn: **Could you help me, please?**" },
      { type: "nuance", text: "Với một việc làm được đúng một lần trong quá khứ, thường dùng **was able to** chứ không dùng **could**: **I was able to fix the bike yesterday.** (Hôm qua tôi đã sửa được xe.) **Could** hợp hơn khi nói năng lực chung: **I could swim when I was five.**" },
      { type: "advanced", text: "Với các động từ chỉ giác quan hoặc suy nghĩ như **see**, **hear**, **understand**, người ta thường dùng **can** thay cho thì tiếp diễn: **I can hear music.** (Tôi nghe thấy nhạc.)" },
      { type: "mistake", text: "Lỗi hay gặp: nói **She can to swim** hoặc **He cans swim** thay vì **She can swim** / **He can swim**. Sau **can** không có **to**, và **can** không đổi dạng theo ngôi, vì tiếng Việt không chia động từ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I will can go** thay vì **I will be able to go**. Hai động từ khuyết thiếu không đi liền nhau, nên khi cần thì tương lai phải dùng **be able to**." }
    ]
  },
  { title: "Động từ khuyết thiếu suy đoán", grammarId: "030", level: "B2", category: "Động từ",
    rule: "Động từ khuyết thiếu dùng để suy đoán logic, dựa trên bằng chứng hoặc điều ta biết, về những gì đang xảy ra ở hiện tại. **Must** nghĩa là gần như chắc chắn đúng (chắc là); **might / may / could** nghĩa là có thể đúng, không chắc (có lẽ); **can't** nghĩa là gần như chắc chắn không đúng (chắc không thể). Sau chúng là động từ nguyên mẫu không **to**: **be** với trạng thái (**must be tired**), **be + V-ing** với việc đang diễn ra (**must be working**). Lưu ý: dạng phủ định của **must** để suy đoán là **can't**, không phải **mustn't**.",
    form: ["S + must + be / V-bare (chắc chắn đúng)","S + might / may / could + be / V-bare (có thể)","S + can't + be / V-bare (chắc chắn không)","S + must / might / can't + be + V-ing (việc đang diễn ra)"],
    examples: ["He has a new car and a big house; he must be very rich.","She isn't answering her phone; she might be busy.","That can't be true; I saw it with my own eyes.","The lights are on, so Lan must be working late.","Nam may be waiting for us outside the cinema."],
    wrong: "She must to be tired after work.", right: "She must be tired after work.",
    more: [
      { type: "extension", text: "Để suy đoán về quá khứ, dùng **must / might / can't + have + V3/ed**: **She must have left early.** (Chắc là cô ấy đã đi sớm.), **He can't have seen us.** (Chắc là anh ấy không thể đã nhìn thấy chúng ta.)" },
      { type: "nuance", text: "Mức chắc chắn giảm dần: **must** (rất chắc) > **may** > **might** / **could** (ít chắc hơn). **Might** và **may** gần như cùng nghĩa trong suy đoán, còn **could** nhấn mạnh đó là một khả năng. Người nói càng chắc thì càng dùng **must** hoặc **can't**." },
      { type: "advanced", text: "**May not** hoặc **might not** dùng khi bạn nghĩ có thể không đúng: **She may not be at home.** Đừng dùng **can't** ở đây, vì **can't** là kết luận gần như chắc chắn rằng điều đó không đúng." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He must is rich** hoặc **He must to be rich** thay vì **He must be rich**. Sau động từ khuyết thiếu luôn là V-bare, không chia, không thêm **to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He mustn't be at home** thay vì **He can't be at home** (chắc là anh ấy không có nhà). **Mustn't** nghĩa là \"cấm\", không dùng để suy đoán phủ định." }
    ]
  },
  { title: "Danh động từ", grammarId: "031", level: "B1", category: "Danh từ & Động từ",
    rule: "**Gerund** là động từ thêm **-ing** nhưng dùng như một danh từ. Có ba chỗ dùng chính: làm chủ ngữ (**Swimming is fun.**), đứng sau giới từ (**good at playing**, **before leaving**), và đứng sau một số động từ như **enjoy**, **mind**, **finish**, **avoid**, **keep**, **suggest**, **practise**, **admit**. Phủ định bằng **not** đặt trước: **I regret not going.** Mẹo chính tả: bỏ **e** cuối (**make - making**), gấp đôi phụ âm cuối với từ ngắn có một nguyên âm (**run - running**), **lie - lying**.",
    form: ["V-ing + V (làm chủ ngữ): Swimming + is + adj","Giới từ + V-ing: be good at + V-ing","S + enjoy / mind / finish / avoid + V-ing","not + V-ing (phủ định)"],
    examples: ["Swimming is a good way to stay healthy.","She enjoys listening to classical music in her free time.","Would you mind closing the door, please?","He is good at playing football.","I regret not studying harder at school."],
    wrong: "She enjoys listen to music.", right: "She enjoys listening to music.",
    more: [
      { type: "extension", text: "Một số cụm cố định luôn đi với **V-ing**: **look forward to doing**, **be used to doing**, **It's worth doing**, **It's no use doing**, **can't help doing**, **spend time doing**. Ở **look forward to** và **be used to**, chữ **to** là giới từ, nên phải có **V-ing**." },
      { type: "nuance", text: "Gerund thường mang nghĩa hành động nói chung hoặc đã có thật, còn **to-V** hay gợi dự định hoặc điều sắp làm. So sánh **I like swimming.** (nói chung) với **I'd like to swim.** (bây giờ muốn)." },
      { type: "advanced", text: "Có thể đặt sở hữu cách hoặc đại từ sở hữu trước gerund: **I appreciate your helping me.** Cách này trang trọng hơn **I appreciate you helping me**, cách sau phổ biến trong văn nói." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She is good at play football** hoặc **before to leave** thay vì **good at playing** / **before leaving**. Sau giới từ phải dùng **V-ing**, không dùng động từ nguyên mẫu." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Would you mind to close the door?** thay vì **Would you mind closing the door?**. Tiếng Việt dịch \"phiền bạn đóng cửa\" không có dấu hiệu nào, nên dễ chèn **to** vào, nhưng **mind**, **enjoy**, **finish** chỉ đi với **V-ing**." }
    ]
  },
  { title: "Động từ nguyên mẫu có to", grammarId: "032", level: "B1", category: "Động từ",
    rule: "**To-infinitive** (**to + V-bare**) có hai cách dùng chính. Thứ nhất, đứng sau các động từ chỉ mong muốn, dự định, quyết định như **want**, **hope**, **decide**, **plan**, **need**, **promise**, **agree**, **refuse**, **learn**. Thứ hai, chỉ mục đích, trả lời câu hỏi \"để làm gì\": **He went to the library to borrow books.** Phủ định đặt **not** trước **to**: **I decided not to go.** Mẹo: mục đích còn có thể nói **in order to** hoặc **so as to**, trang trọng hơn.",
    form: ["S + want / hope / decide + to-V","S + verb + not + to-V (phủ định)","S + V + (in order / so as) to-V (chỉ mục đích)"],
    examples: ["I want to buy a new smartphone next week.","She decided to study abroad in Canada.","He went to the library to borrow some books.","Minh promised not to be late again.","Do you need to leave early today?"],
    wrong: "I want buying a new car.", right: "I want to buy a new car.",
    more: [
      { type: "extension", text: "To-V còn đứng sau tính từ (**happy to see you**, **easy to learn**), sau một số danh từ (**a chance to win**, **time to go**), và sau từ để hỏi (**I don't know what to do.**)." },
      { type: "nuance", text: "Mục đích dùng **to + V**, còn lý do dùng **because**: **I went there to meet her.** (mục đích) và **I went there because I wanted to meet her.** (lý do). Đừng dịch \"để\" thành **for + V**, vì **for** đi với danh từ hoặc V-ing." },
      { type: "advanced", text: "Với **want**, **ask**, **tell**, **expect**, **advise**, có thể thêm tân ngữ trước **to-V**: **I want you to wait.**, **She told me to call.** Cấu trúc này khác với **make** và **let**, hai động từ này bỏ **to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I want buy** hoặc **I want buying** thay vì **I want to buy**. Tiếng Việt \"muốn mua\" không cần từ nối, nhưng tiếng Anh cần **to** sau **want**, **hope**, **decide**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I went to the shop for buy milk** hoặc **for buying milk** thay vì **to buy milk**. Muốn nói mục đích của hành động thì dùng **to + V**." }
    ]
  },
  { title: "Động từ nguyên mẫu không to", grammarId: "033", level: "B2", category: "Động từ",
    rule: "**Bare infinitive** là động từ nguyên mẫu không **to**. Nó đứng sau động từ khuyết thiếu (**can**, **must**, **should**), sau **make** và **let** kèm tân ngữ (**make/let + object + V**), và sau động từ giác quan như **see**, **hear**, **watch**, **feel** kèm tân ngữ khi thấy trọn hành động: **I saw him cross the street.** Với **help**, có thể dùng cả hai: **help her (to) carry**. Còn **have + object + V** cũng dùng V-bare, nghĩa là nhờ ai làm gì.",
    form: ["S + modal verb + V-bare","S + let / make + O + V-bare","S + see / hear / watch / feel + O + V-bare (thấy trọn hành động)","S + have + O + V-bare (nhờ ai làm gì)"],
    examples: ["Her parents let her stay out late on weekends.","The teacher made us rewrite the whole essay.","I saw him cross the street and enter the shop.","You should see a doctor about that cough.","We heard the children sing in the garden."],
    wrong: "Her parents let her to stay out late.", right: "Her parents let her stay out late.",
    more: [
      { type: "extension", text: "**Had better** và **would rather** cũng đi với V-bare: **You had better leave now.**, **I'd rather stay home.** Cũng vậy với **Why not + V** (**Why not ask him?**)." },
      { type: "nuance", text: "Với động từ giác quan, **V-bare** thấy toàn bộ hành động từ đầu đến cuối (**I saw him cross the road.**), còn **V-ing** thấy hành động đang diễn ra (**I saw him crossing the road.**)." },
      { type: "advanced", text: "Ở thể bị động, **make** và các động từ giác quan lấy lại **to**: **He was made to rewrite it.**, **She was seen to enter the building.** Riêng **let** thường được thay bằng **be allowed to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The teacher made us to rewrite** thay vì **made us rewrite**. Vì \"bắt chúng tôi viết lại\" tiếng Việt không có từ nối, người học hay cố thêm **to**, nhưng sau **make** và **let** phải bỏ **to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I heard her to sing** thay vì **I heard her sing** (hoặc **singing**). Sau động từ giác quan cộng tân ngữ không dùng **to**." }
    ]
  },
  { title: "Câu cầu khiến", grammarId: "034", level: "B2", category: "Cấu trúc câu",
    rule: "Câu cầu khiến (**causative**) nói về việc ta nhờ, thuê hoặc để người khác làm giúp mình. Có hai kiểu. Kiểu chủ động: **have + person + V-bare** (**I had the mechanic check my car.**) và **get + person + to-V** (**I got him to check it.**). Kiểu bị động, hay dùng hơn khi người làm không quan trọng: **have / get + thing + V3/ed** (**I had my car repaired.**). Chú ý chia **have / get** theo thì, còn quá khứ phân từ giữ nguyên.",
    form: ["Chủ động: S + have + person + V-bare","Chủ động: S + get + person + to-V","Bị động: S + have / get + thing + V3/ed"],
    examples: ["I need to have my laptop repaired before tomorrow.","She got her house cleaned by a professional service last week.","He had his passport renewed yesterday.","I had the mechanic check my brakes.","Lan got her brother to fix her bike."],
    wrong: "I had my car repair yesterday.", right: "I had my car repaired yesterday.",
    more: [
      { type: "extension", text: "Kiểu bị động đi được với mọi thì: **I'm having my hair cut.**, **She has had her phone fixed.**, **We will get the windows cleaned.** Người thực hiện có thể nêu bằng **by** nếu cần, nhưng thường được bỏ." },
      { type: "nuance", text: "**Get** thân mật hơn **have** và hay gợi cảm giác phải tốn công thuyết phục hoặc cố gắng mới xong. Ngoài ra **have + thing + V3/ed** đôi khi nói về điều không may xảy ra: **He had his wallet stolen.** (Anh ấy bị mất ví.)" },
      { type: "advanced", text: "Không nhầm với **have + object + V-ing**: **I'll have you laughing in no time.** (Tôi sẽ làm bạn cười ngay.) Cấu trúc này gây ra một trạng thái hoặc hành động đang diễn ra." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I had my car repair** hoặc **I had repaired my car** (khi ý là nhờ người sửa) thay vì **I had my car repaired**. Xe không tự sửa, nên động từ phải ở dạng V3/ed. **I had repaired my car** là quá khứ hoàn thành, nghĩa là tự mình đã sửa." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I cut my hair at the salon** thay vì **I had my hair cut at the salon**. Nếu không dùng cấu trúc cầu khiến, câu nghe như chính bạn tự cắt tóc." }
    ]
  },
  { title: "Câu ước ở hiện tại", grammarId: "035", level: "B1", category: "Câu ước",
    rule: "Dùng **wish + quá khứ đơn** để nói ước điều gì đó khác với thực tế ở hiện tại (hoặc điều đang đúng bây giờ): **I wish I knew the answer.** (Thực tế: tôi không biết.) Thì quá khứ ở đây không chỉ quá khứ mà chỉ sự \"không có thật\". Với động từ **be**, thường dùng **were** cho mọi ngôi: **I wish I were taller.** Dạng **was** cũng gặp trong văn nói. Muốn ước về việc ai đó làm gì, hay dùng **would** (**I wish you would listen.**), còn khả năng dùng **could** (**I wish I could swim.**).",
    form: ["S + wish(es) + S + V2 / were (ước điều trái hiện tại)","S + wish(es) + S + could + V-bare","S + wish(es) + S + would + V-bare (mong ai đó làm gì)"],
    examples: ["I wish I knew the answer to this question.","She wishes she lived closer to her workplace.","He wishes he had more free time today.","I wish I were taller.","I wish I could swim as well as you."],
    wrong: "I wish I know the answer.", right: "I wish I knew the answer.",
    more: [
      { type: "extension", text: "**Wish + could** nói về điều ta không thể làm được hiện nay: **I wish I could speak French.** **Wish + would** dùng khi phàn nàn về thói quen hoặc hành vi gây khó chịu của người khác: **I wish he would stop talking.**" },
      { type: "nuance", text: "Không dùng **would** cho ước muốn về chính chủ ngữ của **wish**: nói **I wish I had more time**, không nói **I wish I would have more time**. **Would** dành cho người hoặc vật khác, hoặc điều ta muốn thay đổi." },
      { type: "advanced", text: "Với **if only**, cấu trúc tương tự nhưng cảm xúc mạnh hơn: **If only I knew the answer!** Văn viết trang trọng ưu tiên **were** cho mọi ngôi: **I wish it were true.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **I wish I know** hoặc **I wish I can swim** thay vì **I wish I knew** / **I wish I could swim**. Tiếng Việt \"ước gì tôi biết\" không đổi thì, nhưng tiếng Anh phải lùi một thì." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I wish I am rich** hoặc **I wish I will be rich** thay vì **I wish I were rich**. **Wish** về hiện tại không đi với **am** hay **will**." }
    ]
  },
  { title: "Câu ước ở quá khứ", grammarId: "036", level: "B2", category: "Câu ước",
    rule: "Dùng **wish + had + V3/ed** để nói tiếc nuối về một điều đã xảy ra hoặc không xảy ra trong quá khứ, nghĩa là ước quá khứ khác đi. **I wish I had studied harder.** nghĩa là thực tế bạn đã không học chăm. Thì quá khứ hoàn thành \"lùi\" thêm một bậc so với **wish + quá khứ đơn**. Phủ định: **I wish I hadn't said that.** (Thực tế: bạn đã nói.) Câu này chỉ nói về điều không thể thay đổi nữa, nên mang sắc thái tiếc nuối.",
    form: ["S + wish(es) + S + had + V3/ed","S + wish(es) + S + had + not + V3/ed"],
    examples: ["I wish I had studied harder for yesterday's test.","She wishes she hadn't said those rude words to him.","They wish they had bought the tickets earlier.","I wish I had visited my grandmother last summer."],
    wrong: "I wish I studied harder yesterday.", right: "I wish I had studied harder yesterday.",
    more: [
      { type: "extension", text: "Có thể dùng **could have + V3/ed** sau **wish** để ước về khả năng đã bỏ lỡ: **I wish I could have gone to the party.**" },
      { type: "nuance", text: "**If only + had + V3/ed** là cách nói tương đương, nhưng cảm xúc mạnh hơn: **If only I had listened to you!** (Giá mà tôi đã nghe lời bạn!)" },
      { type: "advanced", text: "Cấu trúc này khớp với câu điều kiện loại 3: **I wish I had known** tương ứng với **If I had known, I would have acted differently.** Cả hai đều nói về điều trái với quá khứ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I wish I would study harder yesterday** hoặc **I wish I studied harder** (khi nói về quá khứ) thay vì **I wish I had studied harder**. **Studied** một mình chỉ ước về hiện tại, nên cần **had** để lùi về quá khứ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I wish I have bought it** thay vì **I wish I had bought it**. Nhầm hiện tại hoàn thành với quá khứ hoàn thành; sau **wish** phải lùi thì thành **had + V3/ed**." }
    ]
  },
  { title: "Thì hiện tại đơn với tương lai", grammarId: "037", level: "A2", category: "Thì",
    rule: "Thì hiện tại đơn có thể nói về tương lai khi đó là lịch trình hoặc thời gian biểu cố định, do tổ chức hay hệ thống đặt ra, không phải do cá nhân quyết định. Ví dụ giờ tàu xe, chuyến bay, giờ học, giờ chiếu phim, lịch sự kiện công cộng. Câu thường có mốc thời gian tương lai: **The train leaves at 8 p.m.** (Tàu khởi hành lúc 8 giờ tối.) Dạng hỏi và phủ định dùng **do / does**: **What time does the film start?**",
    form: ["S + V-s / V-es + (mốc thời gian tương lai) (lịch trình cố định)","S + do / does + not + V-bare","Wh-word + do / does + S + V-bare?"],
    examples: ["The plane departs at 6:00 AM tomorrow.","Our classes start next Monday.","What time does the movie finish tonight?","The bank doesn't open until 9 a.m. tomorrow.","The train to Hue leaves at 7:30 this evening."],
    wrong: "The plane depart at 6:00 AM tomorrow.", right: "The plane departs at 6:00 AM tomorrow.",
    more: [
      { type: "extension", text: "Cách dùng này còn xuất hiện ở lịch cố định khác: **The shop opens at 9.**, **The conference ends on Friday.** Với **be**, ta dùng **is / are**: **The meeting is at 3 p.m.**" },
      { type: "nuance", text: "Đây không phải là dự định cá nhân. Nếu nói kế hoạch của mình, dùng **be going to** hoặc hiện tại tiếp diễn: **I'm going to the cinema tonight.** Hiện tại đơn chỉ hợp khi lịch có tính cố định: **The film starts at 8.**" },
      { type: "advanced", text: "Hiện tại đơn còn thay cho **will** trong mệnh đề thời gian hoặc điều kiện: **I'll call you when I arrive.**, **If it rains, we'll stay home.** Không nói **when I will arrive**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The plane will depart at 6 a.m.** khi nói về giờ bay đã ấn định, thay vì **The plane departs at 6 a.m.** Dùng **will** nghe như một dự đoán hoặc quyết định tức thời." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The class start at 8** thay vì **The class starts at 8**. Chủ ngữ số ít ngôi thứ ba cần thêm **-s/-es**, điều tiếng Việt không có." }
    ]
  },
  { title: "Thì hiện tại tiếp diễn chỉ kế hoạch tương lai", grammarId: "038", level: "B1", category: "Thì",
    rule: "Dùng thì hiện tại tiếp diễn (**am/is/are + V-ing**) với mốc thời gian tương lai để nói về một kế hoạch cá nhân đã được sắp xếp cụ thể, thường đã có thời gian, địa điểm hoặc có người khác liên quan, nên khá chắc chắn sẽ xảy ra. **We are flying to Tokyo next week.** (Chúng tôi đã đặt vé.) Cần có mốc tương lai như **tomorrow**, **next week**, **at 3 PM**, **this Saturday** để người nghe hiểu đây không phải việc đang diễn ra.",
    form: ["S + am / is / are + V-ing + (mốc thời gian tương lai)","S + am / is / are + not + V-ing + (mốc thời gian tương lai)","Am / Is / Are + S + V-ing + (mốc thời gian tương lai)?"],
    examples: ["I am seeing my dentist at 3 PM tomorrow.","We are flying to Tokyo next week.","What are you doing this Saturday evening?","Lan is not coming to the party on Friday.","Are they meeting us at the station at six?"],
    wrong: "We are fly to Tokyo next week.", right: "We are flying to Tokyo next week.",
    more: [
      { type: "extension", text: "Hay dùng khi hỏi về lịch trình của người khác: **What are you doing tonight?**, **Are you meeting her on Friday?** Câu hỏi này nghĩa là \"bạn đã có kế hoạch gì chưa\"." },
      { type: "nuance", text: "**Be going to** nói về dự định (có thể chưa sắp xếp xong), còn hiện tại tiếp diễn nhấn mạnh sự sắp xếp đã cụ thể: **I'm going to learn French.** (dự định) và **I'm having my first French lesson on Monday.** (đã xếp lịch)." },
      { type: "advanced", text: "Không dùng cách này với động từ chỉ trạng thái (**know**, **want**, **be** ở nghĩa thường). Với kiểu thông báo trong lịch trình tập thể, hiện tại đơn tự nhiên hơn: **The train leaves at 7.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **I see my dentist tomorrow** để nói việc đã hẹn, thay vì **I'm seeing my dentist tomorrow**. Tiếng Việt chỉ cần \"mai tôi đi gặp nha sĩ\", còn tiếng Anh dùng **be + V-ing** để thể hiện đã sắp xếp." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I am go to Hanoi next week** hoặc **I going to Hanoi next week** thay vì **I am going to Hanoi next week**. Phải có đủ **am/is/are** và **V-ing**." }
    ]
  },
  { title: "Tương lai gần với be going to", grammarId: "039", level: "A1", category: "Thì",
    rule: "**Be going to + V** dùng để nói về tương lai gần. Có hai cách dùng chính. Thứ nhất, dự định đã có từ trước khi nói: **We are going to buy a house.** (Chúng tôi đã tính mua nhà.) Thứ hai, dự đoán dựa trên dấu hiệu ta thấy ngay lúc nói: **Look at the clouds! It is going to rain.** Ghép **am / is / are** theo chủ ngữ. Phủ định: **I'm not going to go.** Câu hỏi: **Are you going to come?** Sau **going to** luôn là động từ nguyên mẫu.",
    form: ["S + am / is / are + going to + V-bare","S + am / is / are + not + going to + V-bare","Am / Is / Are + S + going to + V-bare?"],
    examples: ["Look at those dark clouds! It is going to rain.","We are going to buy a new house next year.","Are you going to watch the match tonight?","I'm not going to eat out tonight; I'm too tired.","Careful! You are going to fall."],
    wrong: "We are going to buys a new house next year.", right: "We are going to buy a new house next year.",
    more: [
      { type: "extension", text: "Trong văn nói, **going to** thường đọc thành **gonna**: **I'm gonna call her.** Hãy dùng **gonna** khi nói chuyện thân mật, còn viết trang trọng thì dùng **going to**." },
      { type: "nuance", text: "**Will** dùng cho quyết định tức thời lúc nói (**The phone is ringing. I'll get it.**), còn **be going to** dùng cho việc đã nghĩ từ trước. Nếu nói \"tôi đã định rồi\", chọn **be going to**." },
      { type: "advanced", text: "**Was / were going to + V** diễn tả dự định trong quá khứ mà thường không thành: **I was going to call you, but I forgot.** (Tôi đã định gọi bạn nhưng quên mất.)" },
      { type: "mistake", text: "Lỗi hay gặp: nói **I going to buy a car** hoặc **He is going to buys a car** thay vì **I am going to buy a car** / **He is going to buy a car**. Phải có **am/is/are** và động từ sau **to** không chia." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I will visit my aunt tomorrow, I have planned it** thay vì **I'm going to visit my aunt tomorrow**. Khi đã có kế hoạch từ trước, dùng **be going to**." }
    ]
  },
  { title: "Động từ chỉ trạng thái", grammarId: "040", level: "B1", category: "Động từ",
    rule: "**Stative verbs** (động từ chỉ trạng thái) diễn tả trạng thái hoặc cảm nhận bên trong chứ không phải hành động đang diễn ra. Nhóm chính gồm: suy nghĩ (**know**, **understand**, **believe**), cảm xúc (**love**, **hate**, **like**, **want**), sở hữu (**have**, **own**, **belong**) và giác quan (**see**, **hear**, **smell**). Các động từ này thường dùng thì đơn, không dùng thì tiếp diễn: **I understand.**, không nói **I am understanding.** Mẹo: nếu động từ không thể \"đang làm\" từng giây, nó thường là stative verb.",
    form: ["S + stative verb (thì đơn)","S + do / does + not + stative verb","S + am / is / are + V-ing (không dùng với stative verb)"],
    examples: ["I understand your problem.","This jacket belongs to my brother.","She loves listening to classical music.","I don't know the answer to this question.","Do you believe his story?"],
    wrong: "I am understanding the lesson now.", right: "I understand the lesson now.",
    more: [
      { type: "extension", text: "Một số động từ vừa là stative vừa là hành động, nghĩa khác nhau: **I have a car.** (sở hữu) nhưng **I'm having lunch.** (ăn trưa). **Think**: **I think it's good.** (ý kiến) và **I'm thinking about it.** (đang cân nhắc)." },
      { type: "nuance", text: "Với động từ giác quan, người ta hay dùng **can**: **I can see the sea.** hơn là **I'm seeing**. Còn **see** nghĩa \"gặp\" thì dùng tiếp diễn được: **I'm seeing her tomorrow.**" },
      { type: "advanced", text: "Trong tiếng Anh hiện đại, **love** và **like** đôi khi xuất hiện ở tiếp diễn để nhấn mạnh cảm xúc nhất thời, ví dụ slogan **I'm lovin' it**. Trong bài thi và văn viết, bạn nên dùng thì đơn." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I am wanting a coffee** hoặc **I am knowing him** thay vì **I want a coffee** / **I know him**. Tiếng Việt dùng \"đang\" thoải mái, nhưng với trạng thái, tiếng Anh dùng thì đơn." },
      { type: "mistake", text: "Lỗi hay gặp: nói **This book is belonging to me** thay vì **This book belongs to me**. **Belong** không bao giờ đi với **be + V-ing**." }
    ]
  },
  

  { title: "Cách dùng Make và Let", grammarId: "041", level: "B1", category: "Động từ",
    rule: "**Make** và **let** đều đi với tân ngữ rồi đến động từ nguyên mẫu không **to** (**V-bare**). **Make** nghĩa là bắt buộc hoặc khiến ai đó làm gì: **The teacher made us rewrite the essay.** **Let** nghĩa là cho phép: **My parents let me stay out late.** **Make** còn nghĩa là khiến ai có cảm xúc: **The film made me cry.** Cả hai không dùng **to** ở thể chủ động. Câu hỏi: **Did she let you go?**",
    form: ["S + make + O + V-bare (bắt buộc / khiến)","S + let + O + V-bare (cho phép)","S + make + O + adj / V-bare (khiến ai có cảm xúc)","Did / Do / Does + S + let + O + V-bare?"],
    examples: ["My parents let me stay out late on weekends.","The teacher made us rewrite the whole essay.","Nothing can make me change my mind.","Did she let you go to the concert?","The sad film made me cry."],
    wrong: "She made me to cry yesterday.", right: "She made me cry yesterday.",
    more: [
      { type: "extension", text: "**Let's + V-bare** là lời rủ: **Let's go home.** Phủ định là **Let's not go.** **Let me + V** là lời xin phép hoặc đề nghị: **Let me help you.** (Để tôi giúp bạn.)" },
      { type: "nuance", text: "Khi chuyển sang câu bị động, **make** lấy lại **to**: **He was made to rewrite the essay.** Còn **let** thường được thay bằng **be allowed to**: **He was allowed to go out.** Bị động của **let** hiếm khi dùng trực tiếp." },
      { type: "advanced", text: "**Make** cũng đi với tính từ hoặc danh từ: **This makes me happy.**, **They made him captain.** Đừng nhầm với **make + O + V**: ở đây không có động từ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **My parents let me to go out** thay vì **let me go out**. Tiếng Việt \"cho tôi đi\" không có từ nối nên người học hay thêm **to**, trong khi **let** phải đi trực tiếp với V-bare." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The news made me to be sad** hoặc **made me sadly** thay vì **made me sad**. Sau **make + O** diễn tả cảm xúc, dùng tính từ, không dùng trạng từ." }
    ]
  },
  { title: "Động từ theo sau bởi To-V hoặc V-ing thay đổi nghĩa", grammarId: "042", level: "B2", category: "Động từ",
    rule: "Một số động từ đổi nghĩa tùy theo theo sau là **to-V** hay **V-ing**. Quy tắc chung: **to-V** hướng về tương lai, mục đích hoặc việc chưa làm; **V-ing** nói về điều đã diễn ra hoặc đang diễn ra. **Stop to do** = dừng lại để làm việc khác; **stop doing** = ngừng hẳn việc đang làm. **Remember / forget to do** = nhớ / quên phải làm; **remember / forget doing** = nhớ / quên đã làm. **Try to do** = cố gắng; **try doing** = thử xem sao.",
    form: ["S + verb + to-V (hướng tới tương lai / mục đích)","S + verb + V-ing (việc đã làm hoặc đang làm; riêng stop: ngừng hẳn)","stop + to-V (dừng lại để làm việc khác) / stop + V-ing (ngừng hẳn)","remember / forget + to-V (phải làm) / + V-ing (đã làm)","try + to-V (cố gắng) / try + V-ing (thử xem sao)"],
    examples: ["I stopped working because I was feeling exhausted.","Please remember to lock the door.","She stopped to take a short break.","I will never forget meeting you in Hanoi.","Try pressing the red button if the screen is frozen."],
    wrong: "Please remember locking the door when you leave tomorrow.", right: "Please remember to lock the door when you leave tomorrow.",
    more: [
      { type: "extension", text: "**Regret to do** (tiếc phải làm, thường dùng khi thông báo tin xấu: **I regret to inform you...**) khác **regret doing** (hối hận vì đã làm: **I regret telling her.**)." },
      { type: "nuance", text: "**Try to do** nhấn mạnh sự cố gắng, có thể không thành công: **I tried to open the door.** (Tôi cố mở cửa.) **Try doing** là thử một cách để xem kết quả: **Try pressing the button.** (Thử bấm nút xem.)" },
      { type: "advanced", text: "**Go on to do** nghĩa là tiếp theo làm việc khác (**She went on to become a doctor.**), còn **go on doing** nghĩa là tiếp tục việc đang làm (**He went on talking.**)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I stopped to smoke** khi muốn nói \"tôi đã bỏ thuốc\", thay vì **I stopped smoking**. **Stopped to smoke** nghĩa là dừng lại để hút thuốc." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I forgot locking the door** khi muốn nói \"tôi quên khóa cửa\", thay vì **I forgot to lock the door**. **Forgot locking** nghĩa là quên mất việc mình đã khóa cửa." }
    ]
  },
  { title: "Câu hỏi với từ để hỏi đóng vai trò chủ ngữ", grammarId: "043", level: "A2", category: "Câu hỏi",
    rule: "Câu hỏi bình thường cần trợ động từ **do / does / did** (ví dụ: **What did you break?**). Nhưng khi từ để hỏi **Who**, **What**, **Which** chính là chủ ngữ, tức là hỏi xem AI hoặc CÁI GÌ làm hành động, ta không mượn trợ động từ. Ta đặt từ để hỏi ngay trước động từ chính và chia động từ như câu khẳng định. Ở hiện tại đơn, động từ chia theo ngôi thứ ba số ít (**Who lives here?**); ở quá khứ, dùng V2/ed (**Who called you?**).",
    form: ["Who / What / Which + V(s/es) + O?   (hiện tại đơn)","Who / What / Which + V2/ed + O?   (quá khứ đơn)","Which + N + V + O?   (ví dụ: Which team won?)","Câu hỏi tân ngữ: Who / What + do / does / did + S + V-bare?"],
    examples: ["Who broke this expensive glass window yesterday?","What caused the massive traffic jam?","Which team won the championship last year?","Who lives in that big house?","What happened to your bike?"],
    wrong: "Who live in that house?", right: "Who lives in that house?",
    more: [
      { type: "nuance", text: "Hãy phân biệt với câu hỏi tân ngữ (**object question**): khi từ để hỏi là tân ngữ thì phải mượn trợ động từ, ví dụ **Who did you see yesterday?** (bạn đã gặp ai?). So sánh: **Who saw you?** (ai đã nhìn thấy bạn?)." },
      { type: "extension", text: "Với **Who**, **What**, **Which** làm chủ ngữ, ta có thể có động từ **be** hoặc trợ động từ khác: **Who is calling?**, **What has happened?**, **Who can help me?** Trợ động từ **be / have / can** vẫn dùng bình thường, chỉ **do / does / did** là không cần." },
      { type: "nuance", text: "**Who** hỏi về người, **What** hỏi về vật hoặc sự việc, còn **Which** dùng khi có một nhóm lựa chọn rõ ràng: **Which student won the prize?** Cả ba đều dùng động từ số ít ở hiện tại đơn, kể cả khi câu trả lời có thể là nhiều người: **Who lives here?**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **Who does live here?** hoặc **What did cause the problem?** thay vì **Who lives here?** và **What caused the problem?** Tiếng Việt không có trợ động từ nên học viên hay thêm **do/does/did** cho \"đủ câu hỏi\"; thực ra từ để hỏi đã là chủ ngữ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Who live here?** thay vì **Who lives here?** Dù người hỏi nghĩ đến nhiều người, **Who** vẫn đi với động từ số ít ở hiện tại đơn, nên phải thêm **-s**." }
    ]
  },
  { title: "Câu cảm thán với What và How", grammarId: "044", level: "A2", category: "Cấu trúc câu",
    rule: "Câu cảm thán dùng để bày tỏ cảm xúc mạnh như ngạc nhiên, thích thú hay bực bội. Có hai mẫu chính. **What** đứng trước một cụm danh từ: **What a lovely day!** (Hôm nay đẹp quá!). **How** đứng trước tính từ hoặc trạng từ đứng một mình: **How lovely!** hoặc **How fast he runs!** Nhớ: có danh từ thì dùng **What**, chỉ có tính từ hoặc trạng từ thì dùng **How**. Chủ ngữ và động từ ở cuối câu có thể bỏ nếu người nghe đã hiểu.",
    form: ["What + a / an + adj + N (đếm được, số ít) + (S + V)!","What + adj + N (số nhiều / không đếm được) + (S + V)!","How + adj / adv + (S + V)!"],
    examples: ["What a wonderful day it is!","What delicious food!","How fast he runs!","What an interesting book!","How beautiful your village is!"],
    wrong: "How a beautiful girl she is!", right: "What a beautiful girl she is!",
    more: [
      { type: "nuance", text: "Với **What** + danh từ số nhiều hoặc không đếm được thì không có **a/an**: **What beautiful flowers!** (Những bông hoa đẹp quá!), **What terrible weather!** (Thời tiết tệ quá!). Chỉ danh từ đếm được số ít mới cần **a/an**." },
      { type: "extension", text: "Câu cảm thán thường được rút gọn trong lời nói: **What a pity!**, **How nice!**, **What a surprise!** Cả chủ ngữ và động từ đều có thể bỏ. Khi viết, ta thường kết thúc bằng dấu chấm than." },
      { type: "nuance", text: "**How** đi với tính từ và trạng từ, còn **What** đi với danh từ. Cùng một ý có thể nói hai cách: **What a tall boy!** và **How tall the boy is!** Ở mẫu **How**, chủ ngữ đứng trước động từ như câu khẳng định, không đảo." },
      { type: "mistake", text: "Lỗi hay gặp: nói **How a beautiful girl she is!** thay vì **What a beautiful girl she is!** hoặc **How beautiful she is!** Khi có danh từ (**girl**) thì phải dùng **What**; **How** chỉ đi trực tiếp với tính từ hoặc trạng từ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **What a beautiful weather!** hoặc **What beautiful flower!** thay vì **What beautiful weather!** và **What beautiful flowers!** **weather** là danh từ không đếm được nên không dùng **a**, còn danh từ đếm được số nhiều cần thêm **-s**." }
    ]
  },
  { title: "Cấu trúc Too... for someone to do something", grammarId: "045", level: "B1", category: "Cấu trúc câu",
    rule: "Cấu trúc **too... to** diễn tả mức độ QUÁ MỨC nên không thể làm được việc gì: **too + adj / adv + to-V** mang nghĩa phủ định dù câu không có **not**. Muốn nói rõ ai là người không làm được, thêm **for + người** trước **to-V**: **The tea is too hot for me to drink.** (Trà nóng quá, tôi không uống được.) Nếu người đó đã rõ qua ngữ cảnh thì có thể bỏ **for + người**: **It is too late to go.** Điểm quan trọng: sau **for** là tân ngữ (**me, him, her, us, them**), không phải chủ ngữ.",
    form: ["S + be + too + adj + (for + O) + to-V","S + V + too + adv + (for + O) + to-V","Tương đương: S + be + so + adj + that + S + cannot / could not + V-bare","Tương đương: S + be + not + adj + enough + (for + O) + to-V"],
    examples: ["This math problem is too difficult for me to solve.","The coffee was too hot for him to drink.","The box was too heavy for her to lift.","It is too late to call her now.","Lan speaks too quickly for us to understand."],
    wrong: "This box is too heavy for she to lift.", right: "This box is too heavy for her to lift.",
    more: [
      { type: "nuance", text: "**too** mang nghĩa tiêu cực là quá nhiều đến mức không thể, khác với **very** chỉ là rất. So sánh: **The tea is very hot.** (nóng, nhưng vẫn có thể uống được) và **The tea is too hot to drink.** (nóng đến mức không uống được)." },
      { type: "extension", text: "Có thể viết lại câu với **so... that** hoặc **enough** có nghĩa tương đương: **The box is too heavy for her to lift.** = **The box is so heavy that she cannot lift it.** Chú ý trong mẫu **so... that** ta phải có tân ngữ **it**, còn trong mẫu **too... to** thì không." },
      { type: "nuance", text: "Không lặp lại tân ngữ ở cuối câu **too... to**: nói **This box is too heavy to lift**, không nói **to lift it**. Vì **box** là chủ ngữ của câu nhưng cũng chính là vật được nâng, nên **it** thừa." },
      { type: "advanced", text: "**too** có thể đứng trước **much / many** hoặc danh từ: **There are too many people to count.** Còn **too + adj + a + N** là cách nói trang trọng: **It is too good a chance to miss.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **too heavy for she to lift** hoặc **for I to lift** thay vì **for her to lift**, **for me to lift**. Sau **for** phải dùng tân ngữ (**me, him, her, us, them**), không dùng đại từ chủ ngữ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **too much heavy** hoặc **very too heavy** thay vì **too heavy**. **too** đã đủ để nhấn mạnh, không thêm **much** hay **very** trước tính từ." }
    ]
  },
  { title: "Cấu trúc Enough... for someone to do something", grammarId: "046", level: "B1", category: "Cấu trúc câu",
    rule: "**Enough** có nghĩa là ĐỦ để làm được việc gì. Vị trí của **enough** phụ thuộc vào từ đi cùng: với tính từ và trạng từ thì **enough** đứng SAU (**tall enough**, **fast enough**), còn với danh từ thì **enough** đứng TRƯỚC (**enough money**, **enough time**). Sau đó ta có thể thêm **for + người** và **to-V** để nói đủ để làm gì: **The room is big enough for us to dance.** Nếu không có **to-V**, câu vẫn đúng: **He is old enough.**",
    form: ["S + be + adj + enough + (for + O) + (to-V)","S + V + adv + enough + (for + O) + (to-V)","S + V + enough + N + (for + O) + (to-V)","Phủ định: S + be + not + adj + enough + (for + O) + to-V"],
    examples: ["The weather is warm enough for us to go swimming.","He has enough money to buy the car.","The room is large enough for everyone.","She doesn't speak slowly enough for me to follow.","Is this soup hot enough for you?"],
    wrong: "He is enough tall for me to see.", right: "He is tall enough for me to see.",
    more: [
      { type: "nuance", text: "Hãy nhớ vị trí: tính từ đứng trước (**tall enough**), danh từ đứng sau (**enough time**). Tiếng Việt nói \"đủ cao\", \"đủ tiền\" đều có \"đủ\" ở trước, nên đây là chỗ học viên rất dễ nhầm." },
      { type: "extension", text: "Có thể chuyển sang dạng phủ định để diễn tả ý ngược lại với **too**: **The soup is not hot enough to burn you.** Ngoài ra **enough** còn đứng một mình làm đại từ: **Is that enough?** hoặc **I have had enough.** (Tôi chịu hết nổi rồi.)" },
      { type: "nuance", text: "**too** và **enough** thường có nghĩa tương đương nhau nếu đổi nghĩa tính từ: **He is too short to reach it.** = **He is not tall enough to reach it.** Lưu ý **enough** nghĩa khẳng định (đủ để làm), còn **too** nghĩa phủ định (quá nên không làm được)." },
      { type: "advanced", text: "Với **enough** làm đại từ, ta có thể dùng **of**: **enough of the food**, **not enough of them**. Cũng có thể gặp **sure enough**, **funnily enough**, **strangely enough** với nghĩa \"thật vậy\" hoặc \"thật lạ là\"." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He is enough tall** hoặc **I have time enough** thay vì **He is tall enough** và **I have enough time**. Tính từ đi trước **enough**, danh từ đi sau **enough**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **big enough for to dance** hoặc **enough for me to doing** thay vì **big enough to dance** hoặc **big enough for me to dance**. Sau **for + O** hoặc ngay sau **enough** chỉ dùng **to-V**, không dùng V-ing hay **for to**." }
    ]
  },
  { title: "Cấu trúc It takes / took someone time to do something", grammarId: "047", level: "A2", category: "Cấu trúc câu",
    rule: "**It takes** dùng để nói một việc cần bao nhiêu thời gian. **It** ở đây chỉ là chủ ngữ giả, không chỉ vật gì cụ thể. Ta thêm người thực hiện (**me, you, him, her...**) và khoảng thời gian, rồi **to + động từ nguyên mẫu**: **It takes me ten minutes to get to work.** (Tôi mất 10 phút để đến chỗ làm.) Ở quá khứ dùng **took**: **It took her two hours to finish.** Hỏi bao lâu dùng **How long does it take (+ O) to-V?**",
    form: ["It + takes / took + O + time + to-V","It + takes / took + time + to-V   (không nói rõ người)","It + doesn't take / didn't take + O + time + to-V","How long + does / did + it + take + (O) + to-V?"],
    examples: ["It takes me twenty minutes to walk to school every morning.","It took her two hours to finish the project.","How long does it take to fly to Paris?","It doesn't take long to cook rice.","It took Nam three years to learn the guitar."],
    wrong: "It takes me twenty minutes walk to school.", right: "It takes me twenty minutes to walk to school.",
    more: [
      { type: "extension", text: "Có thể viết lại bằng **spend**: **It takes me twenty minutes to walk to school.** = **I spend twenty minutes walking to school.** Chú ý chủ ngữ đổi từ **It** sang **I**, và sau **spend** dùng **V-ing**, không dùng **to-V**." },
      { type: "nuance", text: "**take** còn có thể dùng với thứ cần thiết, không chỉ thời gian: **It takes courage to say sorry.** (Cần có dũng khí để xin lỗi.) **It takes two to tango.** là một thành ngữ quen thuộc. Khi nói về thời gian, nhớ dùng thì đúng: **took** cho quá khứ, **takes** cho thói quen hoặc sự thật." },
      { type: "advanced", text: "Có thể bỏ người thực hiện khi nói chung chung: **It takes about an hour to get there.** Cũng có thể dùng thì hiện tại hoàn thành hoặc tương lai: **It will take me a week to finish.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **It takes me walking to school** hoặc **It takes me twenty minutes walking** thay vì **It takes me twenty minutes to walk to school**. Sau cụm thời gian phải dùng **to-V**, không dùng V-ing." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I take twenty minutes to walk** hoặc **It spends me twenty minutes** thay vì **It takes me twenty minutes** hoặc **I spend twenty minutes**. Chủ ngữ của **take** là **It**, chủ ngữ của **spend** là người." }
    ]
  },
  { title: "Cấu trúc Spend time / money", grammarId: "048", level: "A2", category: "Cấu trúc câu",
    rule: "**Spend** nghĩa là dành thời gian hoặc tiêu tiền. Ai đó **spend** thời gian hoặc tiền vào việc gì. Có hai cách nói điều đó: **spend + time / money + V-ing** (cho hành động) và **spend + time / money + on + N** (cho một vật hoặc hoạt động). Ví dụ: **I spend an hour reading.** và **I spend an hour on homework.** Quá khứ của **spend** là **spent**. Sau **spend** không dùng **to-V**.",
    form: ["S + spend(s) / spent + time + V-ing","S + spend(s) / spent + money + on + N / V-ing","S + spend(s) / spent + time / money + on + N","S + don't / doesn't / didn't + spend + time / money + V-ing / on + N"],
    examples: ["She spends two hours reading books every day.","They spent a lot of money on renovating their house.","He spends too much time playing video games.","I spent the whole weekend on my homework.","Minh doesn't spend much money on clothes."],
    wrong: "I spend two hours to read books.", right: "I spend two hours reading books.",
    more: [
      { type: "nuance", text: "Sau **spend** là **V-ing** trực tiếp (**spend hours reading**), không dùng **to-V**. Còn **on** thì theo sau là danh từ: **spend money on clothes**. Cả hai cách đều dùng được với tiền, nhưng với thời gian ta thường dùng **V-ing** trực tiếp." },
      { type: "extension", text: "**spend** còn đi với khoảng thời gian cụ thể và địa điểm: **We spent the weekend at the beach.** (Chúng tôi đã dành cuối tuần ở bãi biển.) Cũng dùng được trong câu bị động: **A lot of money was spent on this.**" },
      { type: "nuance", text: "Khác với **spend**, **waste** (lãng phí) có cùng cấu trúc: **I wasted two hours waiting.** Cũng nên nhớ **spend** dùng cho thời gian và tiền, còn **take** (ở cấu trúc **It takes**) chỉ dùng cho thời gian: **It takes me two hours to read.** = **I spend two hours reading.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **I spend two hours to read books** thay vì **I spend two hours reading books**. Tiếng Việt nói \"dành hai giờ để đọc\" nên học viên dịch thành **to read**; trong tiếng Anh phải dùng **V-ing**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I spend a lot of money buy clothes** hoặc **spend money for clothes** thay vì **spend a lot of money buying clothes** hoặc **spend money on clothes**. Sau **spend + money** cần **V-ing** hoặc **on + N**, không dùng động từ nguyên mẫu hay **for**." }
    ]
  },
  { title: "Cấu trúc Prefer A to B", grammarId: "049", level: "B1", category: "Cấu trúc câu",
    rule: "**Prefer A to B** dùng để nói thích A hơn B. Điều quan trọng nhất là dùng giới từ **to** để nối hai vế, không dùng **than** như trong so sánh hơn. Hai vế A và B phải cùng dạng: cùng là danh từ (**tea to coffee**) hoặc cùng là **V-ing** (**walking to driving**). Dạng quá khứ là **preferred**, ngôi thứ ba hiện tại là **prefers**.",
    form: ["S + prefer(s) + N + to + N","S + prefer(s) + V-ing + to + V-ing","S + would prefer + to-V + (rather than + V-bare)","S + would prefer + N + to + N"],
    examples: ["I prefer drinking tea to drinking coffee.","She prefers movies to books.","He prefers walking to driving in rush hour.","Do you prefer rice to noodles?","My parents prefer living in the countryside to living in Saigon."],
    wrong: "I prefer tea than coffee.", right: "I prefer tea to coffee.",
    more: [
      { type: "extension", text: "Với ý thích chung chung, dùng **prefer + V-ing + to + V-ing**. Với một lựa chọn cụ thể ở một thời điểm nhất định, dùng **would prefer + to-V**: **I would prefer to stay home tonight.** (Tối nay tôi muốn ở nhà hơn.) Có thể thêm **rather than + V-bare**." },
      { type: "nuance", text: "**prefer** diễn tả sở thích chung (**I prefer tea**), còn **would prefer** nói về lựa chọn lúc này và lịch sự hơn: **Would you prefer tea or coffee?** Có thể nói **prefer to-V** thay cho **V-ing** khi nói về một lựa chọn cụ thể: **I prefer to walk.**" },
      { type: "advanced", text: "Tương đương với **would rather**: **I would rather walk than drive.** Chú ý **would rather** đi với động từ nguyên mẫu không **to** và dùng **than**, còn **prefer** dùng **to** để nối hai vế; hai mẫu này không được trộn lẫn." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I prefer tea than coffee** thay vì **I prefer tea to coffee**. Tiếng Việt nói \"hơn\" cho mọi so sánh nên học viên dùng **than**; với **prefer** phải dùng **to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I prefer to walk to drive** hoặc **prefer walking to drive** thay vì **I prefer walking to driving**. Hai vế sau **prefer** phải cùng dạng, và vì **to** là giới từ nên sau nó là **V-ing**." }
    ]
  },
  { title: "Cấu trúc Would rather", grammarId: "050", level: "B2", category: "Cấu trúc câu",
    rule: "**Would rather** nghĩa là \"thà... còn hơn\" hoặc \"thích... hơn\" khi nói về sở thích ở hiện tại hoặc tương lai. Sau **would rather** là động từ nguyên mẫu KHÔNG có **to**. Nếu so sánh hai việc, nối bằng **than** (không dùng **to**): **I would rather stay home than go out.** Dạng rút gọn thường nói là **I'd rather**. Phủ định đặt **not** sau **rather**: **I'd rather not go.** Khi hai chủ ngữ khác nhau, mệnh đề sau lùi về quá khứ đơn nhưng vẫn nói về hiện tại hoặc tương lai: **I'd rather you stayed.**",
    form: ["S + would rather + V-bare + (than + V-bare)","S + would rather + not + V-bare","Would + S + rather + V-bare + (or + V-bare)?","Hai chủ ngữ (hiện tại / tương lai): S1 + would rather + S2 + V2/ed","Hai chủ ngữ (quá khứ): S1 + would rather + S2 + had + V3/ed"],
    examples: ["I would rather stay at home than go out tonight.","She would rather read a book than watch TV.","Would you rather have coffee or juice?","I'd rather not talk about it now.","I'd rather you stayed here tonight."],
    wrong: "I would rather to stay at home.", right: "I would rather stay at home.",
    more: [
      { type: "nuance", text: "Khi có hai chủ ngữ khác nhau, mệnh đề sau dùng quá khứ đơn để nói về hiện tại hoặc tương lai: **I'd rather you stayed home.** (Tôi muốn bạn ở nhà hơn.) Đây là dạng giả định; không có nghĩa quá khứ thật sự. Với quá khứ thật sự dùng quá khứ hoàn thành: **I'd rather you had stayed home.**" },
      { type: "extension", text: "Có thể dùng trong câu hỏi lịch sự hoặc đề nghị: **Would you rather have tea or coffee?** Câu trả lời ngắn: **I'd rather have tea.** Câu phủ định: **I'd rather not talk about it.** (Tôi không muốn nói về chuyện đó.)" },
      { type: "nuance", text: "**would rather** có nghĩa gần giống **would prefer** nhưng cấu trúc khác: **I would rather stay home than go out.** = **I would prefer to stay home rather than go out.** Một bên không có **to**, một bên có **to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I would rather to stay home** hoặc **I would rather staying home** thay vì **I would rather stay home**. **would rather** hoạt động như động từ khuyết thiếu nên theo sau là động từ nguyên mẫu không **to**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I would rather tea to coffee** hoặc **I'd rather walk to drive** thay vì **I'd rather walk than drive**. Ở đây dùng **than**, không dùng **to**; **to** chỉ dùng với **prefer**." }
    ]
  },
  { title: "Cấu trúc It is time", grammarId: "051", level: "B2", category: "Cấu trúc câu",
    rule: "**It is time** dùng để nói đã đến lúc làm gì đó. Có hai cách dùng. Khi nói chung, hoặc có người thực hiện với **for**, dùng **to-V**: **It is time to go.** hoặc **It is time for you to go.** Khi muốn có chủ ngữ riêng và nhấn mạnh rằng việc đó đáng ra phải làm rồi, dùng mệnh đề với động từ ở quá khứ đơn: **It is time you went.** Dù dùng quá khứ, nghĩa vẫn là hiện tại. Thêm **high** hoặc **about** để nhấn mạnh là đã trễ: **It is high time you went to bed.**",
    form: ["It is time + to-V","It is time + for + O + to-V","It is (high / about) time + S + V2/ed","It's time + S + didn't + V-bare   (phủ định, ít dùng)"],
    examples: ["It is high time you went to bed; it's almost midnight.","It is time we started our meeting.","It is about time he apologized to her.","It is time to go home.","It is time for you to take your medicine."],
    wrong: "It is time going to bed.", right: "It is time to go to bed.",
    more: [
      { type: "nuance", text: "**It is time you went** mang sắc thái hơi trách móc hoặc thúc giục: việc đó đáng ra đã phải làm rồi. Còn **It is time for you to go** chỉ đơn giản nói đã đến lúc. Thêm **high** (**high time**) làm câu mạnh hơn nữa, thường để phàn nàn." },
      { type: "extension", text: "Có thể bỏ **It is** trong văn nói: **Time to go!** **Time for bed!** Trong đó **time** có thể đứng đầu câu. Có thể dùng **was** khi kể lại: **It was time to leave.**" },
      { type: "advanced", text: "Cũng có thể dùng thể tiếp diễn ở mệnh đề sau: **It is time we were leaving.** Khi chỉ muốn nói đã đến lúc mà không trách móc, **It is time to leave.** hoặc **It is time for us to leave.** là lựa chọn trung tính nhất." },
      { type: "mistake", text: "Lỗi hay gặp: nói **It is time you go to bed** thay vì **It is time you went to bed**. Mệnh đề sau **It is time + S** phải dùng quá khứ đơn, dù đang nói về hiện tại." },
      { type: "mistake", text: "Lỗi hay gặp: nói **It is time to you go** hoặc **It is time you to go** thay vì **It is time for you to go**. Khi dùng **to-V** với người thực hiện, phải có **for** trước người đó." }
    ]
  },
  { title: "Mệnh đề trạng ngữ chỉ thời gian với When, While, As", grammarId: "052", level: "B1", category: "Mệnh đề",
    rule: "**When**, **while** và **as** nối hai hành động trong cùng một khoảng thời gian, tương ứng với \"khi\" hoặc \"trong khi\". Mệnh đề thời gian có thể đứng đầu câu (có dấu phẩy) hoặc cuối câu (không có dấu phẩy). Mẫu hay gặp nhất ở quá khứ: hành động dài đang diễn ra dùng quá khứ tiếp diễn, hành động ngắn xen vào dùng quá khứ đơn: **While I was cooking, the phone rang.** **While** và **as** thường đi với hành động kéo dài; **when** dùng linh hoạt hơn và có thể đi với cả hành động ngắn hoặc nối tiếp: **When she arrived, everyone was waiting.**",
    form: ["When / While / As + S + V, S + V","S + V + when / while / as + S + V","While / As + S + was / were + V-ing, S + V2/ed","When + S + V2/ed, S + was / were + V-ing"],
    examples: ["While I was cooking dinner, the phone rang.","When she arrived, everyone was waiting.","As he walked down the street, he met an old friend.","The lights went out while we were watching TV.","When I got home, my mother was cooking."],
    wrong: "While I cooking dinner, the phone rang.", right: "While I was cooking dinner, the phone rang.",
    more: [
      { type: "nuance", text: "**while** nhấn mạnh hai hành động kéo dài cùng lúc: **While I was studying, she was cooking.** **as** có thể nói về hai việc thay đổi dần cùng nhau: **As it got darker, it got colder.** **when** đơn giản nối hai thời điểm: **When I got home, I called her.**" },
      { type: "extension", text: "**when** có thể dùng cho cả thì hiện tại và tương lai, nhưng sau **when / while / as** không dùng **will** để nói về tương lai: **When she arrives, I will call you.** Dùng hiện tại đơn trong mệnh đề thời gian." },
      { type: "nuance", text: "Thứ tự hành động khác nhau tùy thì: **When I arrived, she left.** (tôi đến rồi cô ấy mới đi) và **When I arrived, she was leaving.** (cô ấy đang đi thì tôi đến). Thì của mệnh đề chính thay đổi nghĩa của câu." },
      { type: "mistake", text: "Lỗi hay gặp: nói **While I cooked, the phone rang** thay vì **While I was cooking, the phone rang** khi muốn nói hành động đang diễn ra thì bị cắt ngang. Với **while**, hành động kéo dài thường dùng quá khứ tiếp diễn." },
      { type: "mistake", text: "Lỗi hay gặp: nói **When she will arrive, I will call** thay vì **When she arrives, I will call**. Sau **when / while / as** không dùng **will** cho tương lai; dùng hiện tại đơn." }
    ]
  },
  { title: "Cấu trúc Hardly... when và No sooner... than", grammarId: "053", level: "C1", category: "Cấu trúc câu",
    rule: "**Hardly... when** và **No sooner... than** diễn tả một việc vừa xảy ra thì việc khác xảy ra ngay, nghĩa là \"vừa mới... thì...\". Cả hai thường đặt ở đầu câu để nhấn mạnh, và khi đó mệnh đề đầu phải đảo ngữ: trợ động từ **had** đứng trước chủ ngữ. Mệnh đề đầu dùng quá khứ hoàn thành (**had + V3/ed**), mệnh đề sau dùng quá khứ đơn. Cặp từ đi kèm cố định: **Hardly / Scarcely... when**, và **No sooner... than**.",
    form: ["Hardly / Scarcely + had + S + V3/ed + when + S + V2/ed","No sooner + had + S + V3/ed + than + S + V2/ed","Không đảo ngữ: S + had + hardly / scarcely + V3/ed + when + S + V2/ed","Không đảo ngữ: S + had + no sooner + V3/ed + than + S + V2/ed"],
    examples: ["Hardly had I opened the door when a cat jumped out.","No sooner had we reached the station than the train left.","Hardly had she sat down when the lights went out.","No sooner had he finished his meal than he fell asleep."],
    wrong: "Hardly I had opened the door when a cat jumped out.", right: "Hardly had I opened the door when a cat jumped out.",
    more: [
      { type: "nuance", text: "Cặp từ phải đúng: **Hardly / Scarcely** đi với **when**, còn **No sooner** đi với **than**. Nói **No sooner... when** hoặc **Hardly... than** là sai trong văn viết chuẩn, dù đôi khi nghe thấy trong lời nói." },
      { type: "advanced", text: "Cấu trúc này mang tính trang trọng và văn viết nhiều. Khi không đảo ngữ, trợ động từ đứng sau chủ ngữ: **I had hardly opened the door when a cat jumped out.** Cả hai dạng đều đúng; dạng đảo ngữ nhấn mạnh hơn." },
      { type: "extension", text: "Có thể gặp với **Barely** thay cho **Hardly**: **Barely had she sat down when the phone rang.** Ý nghĩa giống nhau. Trong lời nói hằng ngày, người ta thường nói **As soon as** hoặc **The moment**: **As soon as I opened the door, a cat jumped out.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **Hardly I had opened the door when...** thay vì **Hardly had I opened the door when...**. Khi **Hardly** ở đầu câu, bắt buộc phải đảo trợ động từ **had** lên trước chủ ngữ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **No sooner had I opened the door, a cat jumped out** thay vì **No sooner had I opened the door than a cat jumped out**. Thiếu từ nối **than** (hoặc **when** với **Hardly**) làm câu sai." }
    ]
  },
  { title: "Cấu trúc Not only... but also", grammarId: "054", level: "B2", category: "Liên từ",
    rule: "**Not only... but also** nghĩa là \"không những... mà còn...\", nhấn mạnh rằng có cả hai điều. Hai vế được nối phải cùng dạng ngữ pháp (cùng là tính từ, danh từ, động từ hoặc mệnh đề), đây gọi là cấu trúc song song: **She is not only smart but also kind.** Khi đặt **Not only** ở đầu câu để nhấn mạnh, mệnh đề đầu đảo ngữ như câu hỏi: **Not only did he pass, but he also won a prize.** Khi nối hai chủ ngữ, động từ chia theo chủ ngữ gần nhất: **Not only the students but also the teacher was late.**",
    form: ["S + V + not only + A + but also + B   (A, B cùng dạng)","S + be + not only + adj + but also + adj","Not only + trợ động từ + S + V, + but + S + also + V   (đảo ngữ)","Not only + N1 + but also + N2 + V (chia theo N2)"],
    examples: ["She is not only intelligent but also extremely hardworking.","Not only did he pass the exam, but he also got a scholarship.","The hotel was not only cheap but also very clean.","Not only the students but also the teacher was late."],
    wrong: "Not only he passed the exam, but he also won a prize.", right: "Not only did he pass the exam, but he also won a prize.",
    more: [
      { type: "advanced", text: "Khi đưa **Not only** lên đầu câu, mệnh đề đầu đảo trợ động từ: **Not only did he pass...** Với động từ **be**, đảo **be** lên trước: **Not only is she smart, but she is also kind.** Mệnh đề sau không đảo ngữ." },
      { type: "nuance", text: "Có thể bỏ **also** hoặc đổi thành **as well**: **He is not only smart but kind as well.** Cấu trúc này trang trọng hơn **both... and**: **She is both smart and kind.** Cả hai cùng nghĩa nhưng **not only... but also** nhấn mạnh hơn." },
      { type: "extension", text: "Cặp từ này có thể nối cụm động từ, danh từ hay trạng từ: **He not only sings but also dances.** **She speaks not only English but also French.** Điều quan trọng là A và B cùng loại từ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He not only is smart, but also kind** thay vì **He is not only smart, but also kind**. Đặt **not only** ngay trước phần được so sánh (tính từ **smart**), không đặt trước động từ **is**; hai vế phải song song." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Not only he passed, but he also won** thay vì **Not only did he pass, but he also won**. Khi **Not only** ở đầu câu phải đảo ngữ với trợ động từ **did**; học viên hay quên vì tiếng Việt không đảo ngữ." }
    ]
  },
  { title: "Cấu trúc Either... or và Neither... nor", grammarId: "055", level: "B1", category: "Liên từ",
    rule: "**Either... or** nghĩa là \"hoặc... hoặc...\", chọn một trong hai. **Neither... nor** nghĩa là \"không... cũng không...\", phủ định cả hai. Cả hai cặp nối hai thành phần cùng loại (hai chủ ngữ, hai động từ, hai tính từ...). Khi nối hai chủ ngữ, động từ chia theo chủ ngữ gần động từ nhất (**S2**): **Either you or I am wrong.** **Neither the teacher nor the students were present.** Chỉ dùng một lần phủ định: **Neither... nor** đã mang nghĩa phủ định nên không thêm **not**.",
    form: ["Either + S1 + or + S2 + V (chia theo S2)","Neither + S1 + nor + S2 + V (chia theo S2)","S + V + either + A + or + B","S + V + neither + A + nor + B   (không thêm not)"],
    examples: ["Either you or I am responsible for this mistake.","Neither the teacher nor the students were present.","You can either stay here or come with us.","Neither Lan nor Nam likes spicy food.","He speaks neither French nor German."],
    wrong: "Neither he nor I is ready.", right: "Neither he nor I am ready.",
    more: [
      { type: "nuance", text: "Động từ hòa hợp với chủ ngữ đứng gần nhất (**S2**): **Neither he nor I am ready.** nhưng **Neither I nor he is ready.** Trong văn nói thân mật, người bản ngữ đôi khi dùng động từ số nhiều với chủ ngữ số nhiều ở S2; tuy vậy luật hòa hợp theo S2 vẫn là chuẩn." },
      { type: "extension", text: "Ngoài việc nối chủ ngữ, có thể nối động từ, tính từ hoặc cụm giới từ: **You can either stay or leave.** **The soup was neither hot nor tasty.** **She lives either in Hanoi or in Hue.** Các thành phần song song phải cùng loại." },
      { type: "nuance", text: "**Neither** đã mang nghĩa phủ định, nên không thêm **not**: nói **I like neither tea nor coffee**, không nói **I don't like neither tea nor coffee**. Có thể diễn đạt khác: **I don't like either tea or coffee.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **Neither he nor I is ready** thay vì **Neither he nor I am ready**. Động từ phải khớp với chủ ngữ gần nhất; ở đây là **I** nên dùng **am**, không phải chủ ngữ đầu." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Either you and I** hoặc **Neither he or I** thay vì **Either you or I** và **Neither he nor I**. **Either** đi với **or**, **neither** đi với **nor**; không trộn lẫn với **and** hay nối sai cặp." }
    ]
  },
  { title: "Mệnh đề quan hệ rút gọn bằng V-ing và V3/ed", grammarId: "056", level: "B2", category: "Mệnh đề",
    rule: "Mệnh đề quan hệ rút gọn giúp câu gọn hơn bằng cách bỏ đại từ quan hệ (**who / which / that**) và dạng của **be**. Với nghĩa chủ động, ta giữ **V-ing**: **the girl who is standing there** thành **the girl standing there**. Với nghĩa bị động, ta giữ **V3/ed**: **the letter which was written by Mary** thành **the letter written by Mary**. Chỉ rút gọn được khi đại từ quan hệ là chủ ngữ của mệnh đề đó. Rút gọn xong, cụm đứng ngay sau danh từ mà nó bổ nghĩa.",
    form: ["N + who / which / that + V ...   →   N + V-ing ...   (chủ động)","N + who / which / that + be + V3/ed ...   →   N + V3/ed ...   (bị động)","N + who / which / that + be + adj / prep phrase   →   N + adj / prep phrase","N + that + have / has + V3/ed   →   N + having + V3/ed   (hoàn thành, trang trọng)"],
    examples: ["The girl standing next to my sister in the photograph is my cousin.","The letter written by Mary yesterday is on the table.","The man talking to Lan is her uncle.","Students living in the dormitory pay lower fees.","The books sold at this shop are very cheap."],
    wrong: "The girl stands next to my sister is my cousin.", right: "The girl standing next to my sister in the photograph is my cousin.",
    more: [
      { type: "nuance", text: "Chỉ rút gọn khi đại từ quan hệ là chủ ngữ. Khi nó là tân ngữ, ta có thể bỏ đại từ nhưng không đổi động từ thành V-ing: **the book (which) I read** là đúng, còn **the book reading by me** sai." },
      { type: "extension", text: "Cũng có thể rút gọn mệnh đề với **be + tính từ** hoặc **be + cụm giới từ**: **the man who is in the car** thành **the man in the car**. Với **to-V**, dùng sau **the first / the last / the only**: **the first person to arrive**." },
      { type: "nuance", text: "Rút gọn bằng **V-ing** hợp với hành động đang diễn ra hoặc trạng thái thường xuyên: **the man living next door**. Với hành động đã xong, nên giữ mệnh đề đầy đủ: **the man who lived here** thường tự nhiên hơn **the man living here**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The girl stands next to my sister** thay vì **The girl standing next to my sister** (hoặc **who stands**). Sau khi bỏ đại từ quan hệ, không giữ động từ chia thì mà phải dùng **V-ing**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The letter writing by Mary** thay vì **The letter written by Mary**. Nghĩa bị động (thư được viết) phải dùng **V3/ed**; **V-ing** chỉ dùng khi danh từ thực hiện hành động." }
    ]
  },
  { title: "Mệnh đề quan hệ rút gọn bằng To-V", grammarId: "057", level: "B2", category: "Mệnh đề",
    rule: "Ta dùng **to-V** để rút gọn mệnh đề quan hệ (bỏ who/that/which + động từ) khi danh từ đứng trước có **số thứ tự** (**the first**, **the second**, **the next**), **so sánh nhất** (**the best**, **the youngest**) hoặc **the only** / **the last**. Khi rút gọn, ta bỏ đại từ quan hệ và chuyển động từ sang dạng **to-V**: **the first man who walked** thành **the first man to walk**. Cấu trúc này gọn và hay gặp trong văn viết, tin tức, tiểu sử. Lưu ý: to-V cũng đứng sau danh từ để nói điều cần làm (**documents to sign**), nhưng đó là cách dùng khác.",
    form: ["N + the first / the second / the last / the only + to-V","N + so sánh nhất (the best / the youngest...) + to-V","N + the first / the only + to be + V3/ed (nghĩa bị động)"],
    examples: ["Neil Armstrong was the first man to walk on the moon.","Lan was the only student to pass the difficult test.","She was the last guest to leave the party.","Who was the first person to reach the top of Everest?","This is the best restaurant to try in Hanoi."],
    wrong: "He is the first person step on Mars.", right: "He is the first person to step on Mars.",
    more: [
      { type: "nuance", text: "Nếu mệnh đề gốc mang nghĩa bị động, rút gọn thành **to be + V3/ed**: **The first item to be sold was a painting** (= the first item that was sold). Dùng **to-V** khi danh từ là người/vật thực hiện hành động, dùng **to be V3/ed** khi danh từ là đối tượng bị tác động." },
      { type: "extension", text: "Cấu trúc này đi với nhiều từ chỉ thứ tự hoặc giới hạn: **the next**, **the second**, **the last**, **the only**, **the youngest**. Ví dụ: **She was the youngest player to win the title**, **He is the next person to speak**." },
      { type: "nuance", text: "Có thể rút gọn bằng to-V hoặc dùng mệnh đề đầy đủ mà nghĩa không đổi: **the first man to walk** = **the first man who walked**. Dạng to-V gọn và trang trọng hơn một chút. Dạng này thường dùng cho sự thật hoặc việc đã xảy ra, không cần chia thì." },
      { type: "mistake", text: "Lỗi hay gặp: nói **the only student who to pass** thay vì **the only student to pass**. Khi rút gọn phải bỏ hẳn **who / that / which**, không giữ lại cùng với to-V." },
      { type: "mistake", text: "Lỗi hay gặp: nói **the first man walked on the moon** thay vì **the first man to walk on the moon**. Tiếng Việt có thể bỏ từ nối, nhưng tiếng Anh cần **to-V** để nối danh từ với hành động." }
    ]
  },
  { title: "Cấu trúc đảo ngữ với Only", grammarId: "058", level: "C1", category: "Cấu trúc câu",
    rule: "Khi một cụm bắt đầu bằng **Only** (**only when**, **only after**, **only if**, **only by**, **only then**) đứng đầu câu để nhấn mạnh, mệnh đề chính phải **đảo ngữ**: trợ động từ hoặc động từ khuyết thiếu đứng trước chủ ngữ. Nếu câu gốc không có trợ động từ (thì hiện tại đơn hoặc quá khứ đơn), ta mượn **do / does / did**, và động từ chính trở về dạng **V-bare**. Chỉ đảo ở **mệnh đề chính**, không đảo trong mệnh đề phụ đi sau **only when / after / if**. Đây là cấu trúc trang trọng, hay gặp trong văn viết.",
    form: ["Only + when / after / if + S + V, + trợ động từ + S + V-bare","Only + after / by / with + N / V-ing + trợ động từ + S + V-bare","Only then / Only later + trợ động từ + S + V-bare","(thì đơn mượn do / does / did: Only after + ... + did + S + V-bare)"],
    examples: ["Only when she reached home did she realize her bag was missing.","Only after finishing his homework did he go out to play.","Only by working together can we solve this problem.","Only if you pay in advance will we reserve the room.","Only then did Minh understand the whole story."],
    wrong: "Only when she reached home she realized that her bag was missing.", right: "Only when she reached home did she realize that her bag was missing.",
    more: [
      { type: "nuance", text: "Đảo ngữ xảy ra ở **mệnh đề chính**, không phải ở mệnh đề phụ ngay sau **Only when / after / if**. Mệnh đề phụ giữ trật tự bình thường: **Only when she reached home** (không đảo), rồi mới **did she realize** (đảo)." },
      { type: "advanced", text: "Nếu **Only** bổ nghĩa cho chủ ngữ thì không đảo ngữ: **Only Lan knew the answer** (chỉ có Lan biết). Cũng có thể dùng **Only once**, **Only in this way**, **Only recently** ở đầu câu và đảo ngữ sau đó: **Only recently did the company reveal its plan**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Only after he finished did he went home** thay vì **Only after he finished did he go home**. Sau **did** động từ chính phải ở dạng nguyên mẫu, vì **did** đã mang thì quá khứ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Only when did she reach home, she realized...** thay vì **Only when she reached home did she realize...**. Học viên đảo nhầm ở mệnh đề phụ, trong khi chỗ cần đảo là mệnh đề chính." },
      { type: "nuance", text: "Đảo ngữ với **Only** mang sắc thái nhấn mạnh và trang trọng, thích hợp cho bài viết, bài thuyết trình. Trong hội thoại thường ngày, người ta hay nói bình thường như **She realized her bag was missing only when she got home**." }
    ]
  },
  { title: "Đảo ngữ với cụm từ phủ định tuyệt đối", grammarId: "059", level: "C1", category: "Cấu trúc câu",
    rule: "Các cụm phủ định tuyệt đối đứng đầu câu như **under no circumstances**, **on no account**, **in no way**, **at no time** làm câu mạnh và trang trọng hơn. Khi đặt chúng ở đầu câu, ta bắt buộc **đảo ngữ**: trợ động từ hoặc động từ khuyết thiếu đứng trước chủ ngữ, sau đó là V-bare. Nếu câu không có trợ động từ, mượn **do / does / did**. Câu thường dùng để cấm đoán, cảnh báo hoặc phủ nhận mạnh. Vì cụm đầu câu đã mang nghĩa phủ định, phần còn lại của câu không thêm **not** nữa.",
    form: ["Under no circumstances / On no account + modal + S + V-bare","In no way / At no time + do / does / did + S + V-bare","Under no circumstances + have / has / had + S + V3/ed","At no time + be (was / is / were) + S + ... (động từ be đảo trực tiếp)"],
    examples: ["Under no circumstances should you leave the room during the examination.","On no account must this information be leaked.","In no way did the manager mean to offend anyone.","At no time was the public in danger.","Under no circumstances will we accept late payments."],
    wrong: "Under no circumstances you should leave the room.", right: "Under no circumstances should you leave the room.",
    more: [
      { type: "advanced", text: "Vì cụm đầu câu đã mang nghĩa phủ định, mệnh đề sau không dùng thêm **not** hay dạng phủ định khác. Nói **Under no circumstances should you not leave** là sai, phải nói **Under no circumstances should you leave**." },
      { type: "extension", text: "Các cụm tương tự cũng đảo ngữ khi đứng đầu câu: **in no circumstances**, **by no means**, **nowhere**, **never**. Ví dụ: **By no means is this task easy**; **Nowhere have I seen such a beautiful garden**." },
      { type: "nuance", text: "Đảo ngữ chỉ xảy ra khi cụm phủ định đứng ở đầu câu. Nếu để cuối câu thì dùng trật tự bình thường và động từ phủ định: **You must not leave the room under any circumstances**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Under no circumstances you can open the door** thay vì **Under no circumstances can you open the door**. Tiếng Việt không đảo trật tự nên người học hay giữ nguyên chủ ngữ + động từ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **In no way did he meant it** thay vì **In no way did he mean it**. Sau **did** động từ chính phải là V-bare, vì **did** đã mang thì." }
    ]
  },
  { title: "Đảo ngữ câu điều kiện ẩn If", grammarId: "060", level: "C1", category: "Câu điều kiện",
    rule: "Trong văn phong trang trọng, ta có thể viết lại câu điều kiện bằng cách **bỏ if** và **đảo trợ động từ** lên trước chủ ngữ. Có ba dạng: **Should** thay cho If loại 1, **Were** thay cho If loại 2, **Had** thay cho If loại 3. Nghĩa không đổi, chỉ trang trọng hơn và thường gặp trong văn bản, thông báo, hợp đồng. Khi phủ định, **not** đứng sau chủ ngữ: **Had she not left...**. Không dùng **if** cùng lúc với dạng đảo ngữ này.",
    form: ["Loại 1: Should + S + V-bare, S + will / can / imperative","Loại 2: Were + S + adj / N / to-V, S + would + V-bare","Loại 3: Had + S + V3/ed, S + would have + V3/ed","Phủ định: Should / Were / Had + S + not + ..., clause"],
    examples: ["Should you need any assistance, please contact us.","Were I you, I would accept the offer.","Had I known the truth, I would have told you.","Had she not missed the bus, she would have arrived on time.","Should it rain tomorrow, the picnic will be moved indoors."],
    wrong: "If should you need any assistance, please contact us.", right: "Should you need any assistance, please contact us.",
    more: [
      { type: "nuance", text: "Ở loại 2, nếu động từ trong mệnh đề if là động từ thường, ta dùng **Were + S + to-V**: **Were I to win the lottery, I would travel the world**. Không nói **Were I win**, vì **were** là trợ động từ đảo và cần **to-V** theo sau." },
      { type: "extension", text: "Có thể dùng **Were it not for + N** (loại 2) và **Had it not been for + N** (loại 3) để nói 'nếu không nhờ...': **Had it not been for your help, we would have failed**." },
      { type: "advanced", text: "Với **Should**, mệnh đề chính linh hoạt: có thể là câu mệnh lệnh, **will**, **can** hoặc **may**. Ví dụ: **Should you have any questions, call me** hoặc **Should the weather improve, we will leave early**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Had I knew the truth** thay vì **Had I known the truth**. Sau **Had** ta cần dạng V3/ed, giống thì quá khứ hoàn thành." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Were I won the lottery** thay vì **Were I to win the lottery**. Với động từ thường phải thêm **to** + V-bare sau **Were + S**." }
    ]
  },
  { title: "Cấu trúc So... that và Such... that", grammarId: "061", level: "B1", category: "Cấu trúc câu",
    rule: "Cấu trúc **so... that** và **such... that** nói về mức độ làm nên một kết quả: 'quá... đến nỗi...'. **So** đi với tính từ hoặc trạng từ. **Such** đi với cụm danh từ, tức danh từ có hoặc không có tính từ đi kèm. Nếu danh từ là số ít đếm được thì có **a / an** sau such: **such a difficult test**. Với danh từ số nhiều hoặc không đếm được, **such** đi thẳng với tính từ + N, không dùng a/an. Mệnh đề sau **that** nêu kết quả. Trong văn nói, **that** thường được bỏ.",
    form: ["S + be + so + adj + that + clause","S + V + so + adv + that + clause","S + V + such + (a / an) + adj + N + that + clause","S + V + so many / so few + N (số nhiều) + that + clause","S + V + so much / so little + N (không đếm được) + that + clause"],
    examples: ["The tea was so hot that I couldn't drink it right away.","It was such a difficult test that nobody could get a high score.","Minh speaks so quickly that I can't follow him.","They are such nice people that everyone likes them.","There were so many people that we had to stand."],
    wrong: "It was so a difficult test that nobody passed.", right: "It was such a difficult test that nobody passed.",
    more: [
      { type: "extension", text: "Với danh từ số nhiều hoặc không đếm được, dùng **such** mà không có a/an: **such nice people**, **such good weather**. Danh từ trần không có tính từ cũng dùng **such a / an**: **It was such a surprise that I couldn't speak**." },
      { type: "nuance", text: "Trong văn nói, **that** thường được bỏ mà nghĩa không đổi: **It was so cold (that) we stayed inside**. Trong văn viết trang trọng thì nên giữ **that** để câu rõ ràng." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The test was such difficult that nobody passed** thay vì **The test was so difficult that nobody passed**. Nhớ: **so** + adj, còn **such** phải có danh từ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **so much people** thay vì **so many people**. **People** đếm được số nhiều nên dùng **many**, còn **much** chỉ đi với danh từ không đếm được như **so much water**." }
    ]
  },
  { title: "Đảo ngữ So... that và Such... that", grammarId: "062", level: "C1", category: "Cấu trúc câu",
    rule: "Để nhấn mạnh mức độ ở đầu câu, ta đưa **So + adj / adv** hoặc **Such + be + N** lên trước, rồi đảo động từ ra trước chủ ngữ. Với **so + adj**, động từ **be** đứng trước chủ ngữ: **So heavy was the rain that...**. Với **so + adv**, trợ động từ đứng trước chủ ngữ: **So quickly did he run that...**. Với **such**, **be** đứng ngay sau **such** và danh từ là chủ ngữ đứng sau: **Such was her beauty that...**. Mệnh đề **that** nêu kết quả. Đây là văn phong trang trọng, hay gặp trong văn viết và văn học.",
    form: ["So + adj + be + S + that + clause","So + adv + trợ động từ + S + V-bare + that + clause","Such + be + N (chủ ngữ) + that + clause","(thì đơn mượn do / does / did: So quickly did he run that...)"],
    examples: ["So heavy was the rain that all football matches were postponed.","Such was her beauty that everyone stared at her.","So quickly did the fire spread that nobody could escape.","So difficult was the exam that only two students passed.","Such was the force of the wind that several trees fell."],
    wrong: "So heavy the rain was that matches were postponed.", right: "So heavy was the rain that all football matches were postponed.",
    more: [
      { type: "nuance", text: "Với **such** đảo ngữ, **be** đứng ngay sau **such** và phải hòa hợp với danh từ chủ ngữ phía sau: **Such was the force of the wind...** nhưng **Such were the consequences that...** (consequences là số nhiều)." },
      { type: "extension", text: "Với trạng từ, cần trợ động từ đảo: **So carefully did she check the report that she found every error**. Nếu câu gốc là thì đơn, mượn **do / does / did** và động từ chính trở về V-bare." },
      { type: "mistake", text: "Lỗi hay gặp: nói **So the rain was heavy that matches were postponed** thay vì **So heavy was the rain that matches were postponed**. Tính từ phải đứng liền sau **so**, rồi mới đến **be** và chủ ngữ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **So quickly he ran that nobody could catch him** thay vì **So quickly did he run that nobody could catch him**. Thiếu **did** là lỗi phổ biến vì quên mượn trợ động từ." },
      { type: "advanced", text: "Đảo ngữ với **so / such** mang sắc thái trang trọng hoặc văn chương, ít dùng trong hội thoại. Nói thường ngày: **The rain was so heavy that all matches were postponed**." }
    ]
  },
  { title: "Mệnh đề chỉ nguyên nhân", grammarId: "063", level: "B1", category: "Mệnh đề",
    rule: "Để nêu nguyên nhân có hai nhóm. Nhóm đi với **mệnh đề** (có chủ ngữ + động từ): **because**, **as**, **since**. Nhóm đi với **danh từ hoặc V-ing**: **because of**, **due to**, **owing to**. Mệnh đề nguyên nhân có thể đứng đầu hoặc cuối câu: nếu đứng đầu câu, ta thêm dấu phẩy sau nó. **As** và **since** thường dùng khi lý do đã rõ, còn **because** trả lời trực tiếp câu hỏi 'Why?' và nhấn mạnh lý do hơn. Điểm quan trọng nhất: **because + clause**, **because of + N / V-ing**.",
    form: ["Because / As / Since + S + V, clause","Clause + because + S + V","Because of / Due to / Owing to + N / V-ing, clause","Clause + because of / due to + N / V-ing"],
    examples: ["The outdoor match was postponed because of the heavy rain.","Because it rained heavily, we stayed at home.","Since it was late, we took a taxi home.","She was absent from class due to being ill.","The flight was delayed owing to bad weather."],
    wrong: "Because of it rained heavily, we stayed at home.", right: "Because it rained heavily, we stayed at home.",
    more: [
      { type: "nuance", text: "Trong văn phong trang trọng truyền thống, **due to** thường đứng sau **be** như tính từ: **The delay was due to the storm**, còn **because of** bổ nghĩa cho động từ: **The flight was delayed because of the storm**. Trong thực tế nhiều người dùng **due to** ở cả hai vị trí." },
      { type: "nuance", text: "**As** và **since** thường đứng đầu câu và nêu lý do mà người nghe đã biết: **Since you are here, let's start**. Chỉ **because** mới dùng để trả lời câu hỏi: **Why were you late? Because the bus broke down**." },
      { type: "extension", text: "Muốn dùng mệnh đề sau **because of / due to**, thêm cụm **the fact that**: **We stayed home because of the fact that it was raining**. Nếu có thể, nói thẳng **because it was raining** cho gọn." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Because it rained, so we stayed at home** thay vì **Because it rained, we stayed at home**. Tiếng Việt có 'vì... nên...', nhưng tiếng Anh không dùng **so** cùng với **because**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **because of the weather was bad** thay vì **because the weather was bad** (hoặc **because of the bad weather**). **Because of** chỉ đi với danh từ, không đi với mệnh đề." }
    ]
  },
  { title: "Mệnh đề chỉ kết quả", grammarId: "064", level: "B1", category: "Liên từ",
    rule: "Để nêu kết quả của một việc vừa nói, ta dùng **so**, **therefore**, **consequently**, **as a result**. **So** là liên từ nối hai mệnh đề, đứng sau dấu phẩy: **He was ill, so he stayed home**. **Therefore**, **consequently**, **as a result** là trạng từ liên kết, trang trọng hơn: đứng sau dấu chấm phẩy hoặc dấu chấm, và theo sau bởi dấu phẩy. Không nối hai mệnh đề bằng dấu phẩy với therefore, vì sẽ thành câu sai dấu câu (comma splice).",
    form: ["Clause, so + clause","Clause; therefore / consequently, + clause","Clause. Therefore / As a result / Consequently, + clause","Clause; S + therefore + V (therefore đứng giữa câu)"],
    examples: ["He didn't study for the exam; therefore, he failed it.","He didn't study hard, so he failed the exam.","It was raining, so we cancelled the picnic.","The road was closed. As a result, many drivers were late.","Lan studied every day; consequently, she passed with a high score."],
    wrong: "He didn't study, therefore he failed.", right: "He didn't study; therefore, he failed.",
    more: [
      { type: "nuance", text: "**So** thông dụng trong văn nói và văn viết thân mật, còn **therefore**, **consequently** trang trọng hơn, hay gặp trong bài luận và báo cáo. Trong văn viết trang trọng, người ta thường tránh bắt đầu câu bằng **so**." },
      { type: "extension", text: "Ngoài ra còn có **thus**, **hence**, **for this reason** để nêu kết quả trong văn viết trang trọng: **The company lost money; thus, it closed two stores**." },
      { type: "advanced", text: "**Therefore** có thể đứng giữa mệnh đề, sau chủ ngữ hoặc trợ động từ, với hai dấu phẩy hoặc không dấu: **He did not study; he therefore failed the exam**. Vị trí này nghe tự nhiên và trang trọng." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He was tired, therefore, he went to bed** thay vì **He was tired; therefore, he went to bed** (hoặc **He was tired, so he went to bed**). Dấu phẩy không đủ để nối hai mệnh đề độc lập với **therefore**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He was tired so that he went to bed** thay vì **He was tired, so he went to bed**. **So that** nói về mục đích, không phải kết quả, nên khi dịch 'nên' hãy dùng **so**." }
    ]
  },
  { title: "Mệnh đề chỉ mục đích", grammarId: "065", level: "B1", category: "Mệnh đề",
    rule: "Để nói mục đích ('để làm gì'), ta có hai cách. Cách 1: dùng **to**, **in order to**, **so as to** + V-bare khi hai mệnh đề có cùng chủ ngữ: **He studied to pass the exam**. Cách 2: dùng **so that** hoặc **in order that** + mệnh đề có động từ khuyết thiếu (**can, could, will, would**), thường dùng khi chủ ngữ khác nhau hoặc muốn nhấn mạnh: **She spoke slowly so that we could understand**. Hiện tại hoặc tương lai dùng **can / will**, quá khứ dùng **could / would**. Phủ định của dạng to-V là **in order not to** hoặc **so as not to**.",
    form: ["S + V + to / in order to / so as to + V-bare","S + V + in order not to / so as not to + V-bare","S + V + so that / in order that + S + can / could / will / would + V-bare","S + V + so that + S + won't / wouldn't / couldn't + V-bare (phủ định)"],
    examples: ["He got up early in order to catch the first bus to work.","He woke up early so that he could catch the first bus.","She wrote the address down so as not to forget it.","I'm saving money so that I can travel to Japan next year.","Nam spoke quietly so that he wouldn't wake the baby."],
    wrong: "He got up early in order that catching the bus.", right: "He got up early in order to catch the bus.",
    more: [
      { type: "nuance", text: "**To / in order to / so as to** + V-bare thường dùng khi chủ ngữ của hai vế giống nhau. Khi chủ ngữ khác nhau, dùng **so that**: **I turned on the light so that everyone could see**. **In order to** và **so as to** trang trọng hơn **to** đơn." },
      { type: "extension", text: "Dạng phủ định nên dùng **in order not to** hoặc **so as not to** để rõ nghĩa: **He ran so as not to be late**. Với **so that**, dùng **won't / wouldn't**: **She whispered so that she wouldn't wake the baby**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He went to the market for buy vegetables** thay vì **He went to the market to buy vegetables**. Tiếng Việt dùng 'để', học viên hay dịch thành **for**, nhưng mục đích với động từ phải dùng **to + V-bare**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I study hard so that I can to pass** thay vì **I study hard so that I can pass**. Sau động từ khuyết thiếu như **can / could / will** luôn là V-bare, không thêm **to**." }
    ]
  },
  { title: "Mệnh đề chỉ sự nhượng bộ", grammarId: "066", level: "B1", category: "Mệnh đề",
    rule: "Để nói hai ý trái ngược nhau ('mặc dù... nhưng...'), ta dùng hai nhóm. **Although**, **even though**, **though** đi với **mệnh đề** (có S + V). **In spite of** và **despite** đi với **danh từ, cụm danh từ hoặc V-ing**. Dùng **in spite of / despite + the fact that + clause** nếu muốn nối một mệnh đề. Chú ý: tiếng Việt nói 'mặc dù... nhưng...' còn tiếng Anh chỉ dùng một từ nối, không thêm **but**. **Even though** nhấn mạnh sự trái ngược mạnh hơn **although**.",
    form: ["Although / Even though / Though + S + V, clause","Clause + although / even though / though + S + V","In spite of / Despite + N / V-ing, clause","In spite of / Despite + the fact that + S + V, clause"],
    examples: ["Although it was raining heavily, they went for a hike.","Despite the heavy rain, they went for a hike.","In spite of the traffic, we arrived on time.","Despite being tired, Lan finished the report.","He kept smiling even though he was in pain."],
    wrong: "Despite it was raining, they went hiking.", right: "Despite the rain, they went hiking.",
    more: [
      { type: "nuance", text: "**Even though** mạnh hơn **although**, dùng khi bạn muốn nhấn mạnh sự bất ngờ hoặc tương phản: **Even though he was exhausted, he kept running**. Không nói **even although**. **Though** thông dụng hơn trong văn nói và còn đứng cuối câu: **It was cold. We went out, though**." },
      { type: "advanced", text: "Có thể rút gọn mệnh đề sau **although** khi chủ ngữ giống nhau: **Although tired, she kept working** (= Although she was tired). Dạng này dùng nhiều trong văn viết, với tính từ hoặc V-ing." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Although it was raining, but they went hiking** thay vì **Although it was raining, they went hiking**. Tiếng Việt có 'mặc dù... nhưng...' nên học viên thêm **but**, nhưng tiếng Anh chỉ dùng một từ nối." },
      { type: "mistake", text: "Lỗi hay gặp: nói **despite of the rain** thay vì **despite the rain** (hoặc **in spite of the rain**). **Despite** không đi với **of**; **in spite of** thì phải có **of**." }
    ]
  },
  { title: "Cấu trúc nhượng bộ nâng cao với As và Though", grammarId: "067", level: "C1", category: "Cấu trúc câu",
    rule: "Cấu trúc nhượng bộ nâng cao đưa **tính từ, trạng từ hoặc danh từ** lên đầu câu, rồi đến **as** hoặc **though** + chủ ngữ + động từ, mang nghĩa 'mặc dù... đến mấy'. Ví dụ: **Hard as he tried, he failed** = Although he tried hard, he failed. Từ được nhấn mạnh phải đứng ngay trước **as / though**. Danh từ ở đầu không dùng **a / an**: **Child as he was...**. Chỉ dùng **as** hoặc **though**, không dùng **although** ở cấu trúc đảo này. Đây là văn phong trang trọng hoặc văn chương.",
    form: ["Adj + as / though + S + be, clause","Adv + as / though + S + V, clause","N (không a / an) + as + S + be, clause","Try / Much + as + S + V, clause (Try as he might, ...)"],
    examples: ["Hard as he tried, he couldn't lift the heavy weight.","Rich as they are, they live very simply.","Young though she was, she led the team with confidence.","Much as I admire her, I can't agree with that decision.","Child as he was, he understood the danger."],
    wrong: "Although hard as he tried, he failed.", right: "Hard as he tried, he failed.",
    more: [
      { type: "nuance", text: "Trong cấu trúc này **as** mang nghĩa 'mặc dù', không phải 'vì' hay 'như'. **Tired as he was, he kept working** nghĩa là 'dù mệt, anh ấy vẫn làm việc'. Ngữ cảnh và vế sau tương phản sẽ giúp bạn hiểu đúng nghĩa." },
      { type: "extension", text: "Có hai cụm cố định nên nhớ: **Try as he might, he couldn't open the door** (dù cố đến mấy) và **Much as I like him, I can't agree** (dù rất quý anh ấy). Cả hai đều theo mẫu đảo nhượng bộ." },
      { type: "advanced", text: "Danh từ ở đầu không dùng mạo từ: **Child as he was, he understood** (chứ không phải a child as he was). Dạng với **though** linh hoạt hơn: **Young though she was...** cũng được, và cũng có thể đặt **though** cuối mệnh đề." },
      { type: "mistake", text: "Lỗi hay gặp: nói **As hard he tried, he failed** thay vì **Hard as he tried, he failed**. Phải đưa tính từ hoặc trạng từ lên trước **as**, không đặt **as** lên đầu câu." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Hard as he tried, but he failed** thay vì **Hard as he tried, he failed**. Giống **although**, cấu trúc này không đi với **but** ở vế sau." }
    ]
  },
  { title: "Mệnh đề giả định với As if và As though", grammarId: "068", level: "B2", category: "Mệnh đề",
    rule: "**As if** và **as though** nói về một tình huống 'như thể' không có thật hoặc khó xảy ra. Với hiện tại không có thật, mệnh đề sau lùi về **quá khứ đơn** (**were** cho mọi ngôi): **He talks as if he knew everything**. Với quá khứ không có thật, dùng **quá khứ hoàn thành**: **She looked as if she had seen a ghost**. Nếu điều đó có thể là thật, ta dùng thì bình thường: **It looks as if it is going to rain**. **As if** và **as though** có nghĩa giống nhau. Chú ý động từ ở mệnh đề chính cũng có thể là **look, seem, sound, act, feel**.",
    form: ["S + V + as if / as though + S + V2/ed (hiện tại không có thật; were cho mọi ngôi)","S + V + as if / as though + S + had + V3/ed (quá khứ không có thật)","S + look / seem / sound + as if + S + V (điều có thể thật: thì bình thường)"],
    examples: ["He talks as if he knew everything about astrophysics.","She acted as though she didn't care at all.","She looked at me as if she had seen a ghost.","It looks as if it is going to rain this afternoon.","Minh behaves as if he were the boss of the company."],
    wrong: "He looked at me as if he has never seen me before.", right: "He looked at me as if he had never seen me before.",
    more: [
      { type: "nuance", text: "Thì quyết định ý nghĩa: **He looks as if he is ill** (có thể anh ấy thật sự ốm) khác với **He talks as if he were a doctor** (thực tế anh ấy không phải bác sĩ). Dùng thì quá khứ báo hiệu người nói cho rằng điều đó không thật." },
      { type: "extension", text: "Với quá khứ không có thật, dùng **had + V3/ed**: **He spoke as if nothing had happened**. Mệnh đề sau as if cũng có thể rút gọn thành **as if + to-V** hoặc **V-ing**: **She nodded as if to say yes**." },
      { type: "advanced", text: "Trong văn viết trang trọng, **were** được dùng cho mọi ngôi sau **as if** khi điều không thật: **He acts as if he were the owner**. Trong văn nói thân mật, nhiều người dùng **was**, nhưng **were** là dạng chuẩn được ưu tiên trong bài thi và văn viết." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She spends money as if she is a millionaire** (khi cô ấy không phải triệu phú) thay vì **as if she were a millionaire**. Tiếng Việt không đổi thì khi nói 'như thể', nên học viên giữ hiện tại; tiếng Anh chuẩn cần lùi về quá khứ." }
    ]
  },
  { title: "Thức giả định với Suggest / Recommend / Insist", grammarId: "069", level: "B2", category: "Thức giả định",
    rule: "Sau các động từ đề nghị, yêu cầu như **suggest**, **recommend**, **insist**, **demand**, **propose**, **request**, mệnh đề **that** dùng **thức giả định**: động từ ở dạng **nguyên mẫu không chia (V-bare)** cho mọi chủ ngữ, kể cả he / she / it, và không lùi thì. Ví dụ: **suggested that he eat**, không phải **eats** hay **ate**. Tiếng Anh-Mỹ thường dùng V-bare trực tiếp; tiếng Anh-Anh hay thêm **should**: **suggested that he should eat**. Phủ định: **that he not eat** hoặc **that he should not eat**.",
    form: ["S + suggest / recommend / insist / demand + that + S + V-bare","S + suggest / recommend + that + S + should + V-bare (Anh-Anh)","S + suggest / recommend + that + S + (should) + not + V-bare (phủ định)","S + suggest / recommend + V-ing (khi không có chủ ngữ thứ hai)"],
    examples: ["The doctor suggested that he eat more vegetables in his diet.","I insist that he be present at the meeting.","She recommended that we should book the tickets early.","The teacher demanded that every student hand in the essay by Friday.","They suggested that Lan not travel alone at night."],
    wrong: "The doctor suggested that he eats more vegetables.", right: "The doctor suggested that he eat more vegetables.",
    more: [
      { type: "nuance", text: "Không lùi thì và không thêm **-s** cho chủ ngữ ngôi thứ ba: dù động từ chính ở quá khứ (**suggested**), mệnh đề **that** vẫn là V-bare: **She suggested that he go** (không phải **went**). Với **be**, dùng **be**: **I insist that she be present**." },
      { type: "nuance", text: "**Insist** chỉ dùng thức giả định khi đòi hỏi ai đó làm gì: **He insisted that she apply**. Khi khẳng định một sự thật thì dùng thì bình thường: **He insisted that she was innocent**." },
      { type: "extension", text: "Thức giả định cũng đi với nhiều động từ và tính từ khác: **advise, ask, propose, request, require**, và **It is essential / important / vital that + S + V-bare**. Ví dụ: **It is essential that he arrive on time**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **suggest him to eat more vegetables** thay vì **suggest that he eat more vegetables** (hoặc **suggest eating more vegetables**). **Suggest** không đi với **tân ngữ + to-V**, khác với **advise** hay **tell**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The manager demanded that everyone arrived on time** thay vì **demanded that everyone arrive on time**. Người học hay chia theo thì của câu chính, nhưng thức giả định luôn giữ V-bare." }
    ]
  },
  { title: "So sánh bằng với As... as", grammarId: "070", level: "A2", category: "So sánh",
    rule: "Ta dùng **as... as** để nói hai người hoặc hai vật giống nhau ('bằng nhau') về tính chất hoặc cách làm một việc. Giữa hai từ **as**, ta đặt tính từ (**tall, big**) hoặc trạng từ (**fast, well**) và giữ nguyên, không thêm **-er** hay **more**. Sau **as** thứ hai là danh từ hoặc đại từ: **She is as tall as her sister**. Phủ định **not as... as** nghĩa là 'không bằng', tức là ít hơn: **This bag is not as heavy as that one** (túi này nhẹ hơn).",
    form: ["S + be + as + adj + as + N / pronoun","S + V + as + adv + as + N / pronoun","S + be + not + as / so + adj + as + N / pronoun","S + have + as many + N / as much + N + as + N / pronoun"],
    examples: ["She runs as fast as her older brother.","My house is as big as yours.","Lan speaks English as well as her teacher.","This test is not as difficult as the last one.","I have as many books as my brother."],
    wrong: "She runs as fast than her brother.", right: "She runs as fast as her brother.",
    more: [
      { type: "extension", text: "Có thể thêm **as many + danh từ đếm được** hoặc **as much + danh từ không đếm được** giữa hai **as**: **I have as many friends as you** (tôi có nhiều bạn bằng bạn). Cũng có thể nói **as soon as possible** (càng sớm càng tốt)." },
      { type: "nuance", text: "**Not as... as** có nghĩa là 'kém hơn', không phải 'bằng': **He is not as tall as me** (anh ấy thấp hơn tôi). Có thể dùng **not so... as** thay cho **not as... as** (**not so tall as me**), nhưng **not as... as** phổ biến hơn trong tiếng Anh hiện đại." },
      { type: "nuance", text: "Sau **as** thứ hai, trong văn nói người ta hay dùng **me / him / her**: **as tall as me** (thân mật). Trong văn viết trang trọng, dùng **as tall as I am** (đủ chủ ngữ và động từ). Cả hai đều đúng." },
      { type: "mistake", text: "Lỗi hay gặp: nói **as faster as** thay vì **as fast as**. Tính từ và trạng từ giữa hai **as** phải ở dạng gốc, không thêm **-er** như câu so sánh hơn (**faster than**)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **as tall like her** thay vì **as tall as her**. Tiếng Việt dịch 'như' nên học viên dùng **like**, nhưng so sánh bằng cần **as... as**." }
    ]
  },

  { title: "So sánh hơn với tính từ và trạng từ", grammarId: "071", level: "A1", category: "So sánh",
    rule: "So sánh hơn dùng để nói người/vật này hơn người/vật kia về một đặc điểm (cao hơn, nhanh hơn, khó hơn). Với tính từ/trạng từ ngắn (1 âm tiết) thêm **-er + than**: **tall -> taller than**. Với từ dài (2 âm tiết trở lên) dùng **more + adj/adv + than**: **more difficult than**. **Mẹo chính tả:** từ ngắn kết thúc bằng một nguyên âm + một phụ âm thì gấp đôi phụ âm cuối trước khi thêm **-er** (**big -> bigger**). Chỉ dùng MỘT cách: **-er** hoặc **more**, không dùng cả hai.",
    form: ["S + V + adj/adv-er + than + N / pronoun (từ ngắn)","S + V + more + adj/adv + than + N / pronoun (từ dài)","S + be + not + as + adj + as + N (ít hơn / không bằng)","Bất quy tắc: good / well -> better, bad / badly -> worse"],
    examples: ["This building is taller than that one.","This exercise is more difficult than the previous one.","He runs faster than me.","My sister is older than my brother.","Is the bus more expensive than the train?"],
    wrong: "This building is more tall than that one.", right: "This building is taller than that one.",
    more: [
      { type: "extension", text: "Tính từ 2 âm tiết tận cùng bằng **-y** đổi **y** thành **i** rồi thêm **-er**: **happy -> happier**, **easy -> easier** (dễ hơn). Một số từ bất quy tắc phải học thuộc: **good -> better** (tốt hơn), **bad -> worse** (tệ hơn), **far -> farther / further** (xa hơn)." },
      { type: "nuance", text: "Muốn nói hơn nhiều hay hơn một chút, đặt **much / far / a lot** hoặc **slightly / a bit** trước dạng so sánh: **much taller than** (cao hơn nhiều), **a bit more expensive** (đắt hơn một chút). Không dùng **very** trước dạng so sánh hơn." },
      { type: "nuance", text: "Sau **than** có thể dùng đại từ tân ngữ trong văn nói (**taller than me**) hoặc chủ ngữ + trợ động từ trong văn trang trọng (**taller than I am**). Cả hai đều được chấp nhận." },
      { type: "mistake", text: "Lỗi hay gặp: nói **more better** hoặc **more bigger** thay vì **better** / **bigger**. Dạng so sánh hơn đã có **-er** rồi thì không thêm **more** nữa (tiếng Việt hay nói thêm chữ 'hơn' cho chắc nghĩa)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **He runs fast than me** thay vì **He runs faster than me**. Quên đuôi **-er** vì tiếng Việt không biến đổi từ khi so sánh, chỉ thêm 'hơn'." }
    ]
  },
  { title: "So sánh nhất với tính từ và trạng từ", grammarId: "072", level: "A1", category: "So sánh",
    rule: "So sánh nhất dùng để nói một người/vật nổi bật nhất trong một nhóm từ 3 đối tượng trở lên (cao nhất, thông minh nhất). Với từ ngắn thêm **the + adj/adv-est**: **the tallest**. Với từ dài dùng **the most + adj/adv**: **the most intelligent**. Luôn có **the** đứng trước. Từ ngắn kết thúc bằng nguyên âm + phụ âm thì gấp đôi phụ âm (**big -> the biggest**), tận cùng **-y** đổi thành **-iest** (**happy -> the happiest**). Sau so sánh nhất thường có nhóm để so sánh, mở đầu bằng **in** hoặc **of**.",
    form: ["S + be + the + adj-est + (in / of ...) (từ ngắn)","S + V + the most + adj/adv + (in / of ...) (từ dài)","S + V + the + adv-est + (of all) (trạng từ ngắn)","Bất quy tắc: good -> the best, bad -> the worst, far -> the farthest"],
    examples: ["Mount Everest is the highest mountain in the world.","He is the most intelligent student in our class.","She ran the fastest of all.","This is the best phở in Hanoi.","Which is the cheapest hotel in Saigon?"],
    wrong: "He is the more intelligent student in our class.", right: "He is the most intelligent student in our class.",
    more: [
      { type: "nuance", text: "Chọn giới từ theo nhóm so sánh: dùng **in** với nơi chốn hoặc tập thể số ít (**in the world**, **in the class**, **in my family**); dùng **of** với danh từ số nhiều hoặc con số (**of the three**, **of all**, **of the students**)." },
      { type: "extension", text: "Rất hay đi cùng **ever** và hiện tại hoàn thành để nói kinh nghiệm: **This is the best film I have ever seen** (Đây là bộ phim hay nhất tôi từng xem). Cũng có **one of the + dạng nhất + danh từ số nhiều**: **one of the tallest buildings**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **She is tallest girl in the class** thay vì **She is the tallest girl in the class**. Tiếng Việt không có mạo từ nên người học hay quên **the** trước so sánh nhất." },
      { type: "mistake", text: "Lỗi hay gặp: nói **the most tall** hoặc **the most easy** thay vì **the tallest** / **the easiest**. Từ ngắn thì thêm **-est**, đừng dùng **most**." },
      { type: "advanced", text: "Khi so sánh chỉ giữa 2 đối tượng, dạng so sánh hơn được dùng chứ không phải so sánh nhất: **Lan is the taller of the two** (trong văn trang trọng). Trong giao tiếp, nhiều người cũng nói **the tallest of the two**, nhưng sách ngữ pháp coi đó là kém chuẩn." }
    ]
  },
  { title: "So sánh kép The comparative, the comparative", grammarId: "073", level: "B2", category: "So sánh",
    rule: "So sánh kép diễn tả hai sự thay đổi đi cùng nhau: cái này tăng/giảm thì cái kia cũng tăng/giảm theo ('càng... thì càng...'). Mỗi vế bắt đầu bằng **the + dạng so sánh hơn** (**the more**, **the harder**, **the better**), rồi mới đến chủ ngữ và động từ. Chữ **the** là bắt buộc ở cả hai vế. Vế đầu thường là điều kiện/nguyên nhân, vế sau là kết quả. Với tính từ/trạng từ dài dùng **the more + adj/adv**; với danh từ dùng **the more/less + N**.",
    form: ["The + comparative + S + V, the + comparative + S + V","The more + S + V, the + comparative + S + V","The more / less + N + S + V, the more / less + N + S + V","The + comparative, the + comparative (rút gọn)"],
    examples: ["The more you practice, the better you will play.","The higher we climbed, the colder it became.","The sooner you start, the earlier you will finish.","The less she worried, the happier she felt.","The more money he earns, the more he spends."],
    wrong: "More you practice, better you will play.", right: "The more you practice, the better you will play.",
    more: [
      { type: "extension", text: "Có thể rút gọn thành thành ngữ không cần chủ ngữ và động từ, rất hay gặp trong giao tiếp: **The more, the merrier** (Càng đông càng vui), **The sooner, the better** (Càng sớm càng tốt), **The bigger the better**." },
      { type: "nuance", text: "Thì của hai vế vẫn theo quy tắc thông thường: nói về tương lai thì vế phụ không dùng **will** mà dùng hiện tại đơn, ví dụ **The harder you work, the more you will earn**. Vế sau mới dùng **will**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The more you practice, the you will play better** thay vì **the better you will play**. Phải đưa dạng so sánh lên ngay sau **the**, không để nguyên vị trí như tiếng Việt ('càng... thì... giỏi hơn')." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The more you study, the more better you are** thay vì **the better you are**. Đã có **the better** thì không thêm **more**." },
      { type: "advanced", text: "Với động từ **be**, có thể lược bỏ ở dạng rút gọn: **The sooner the meeting is over, the better** hoặc **The sooner the better**. Văn viết trang trọng ưu tiên dạng đầy đủ để rõ nghĩa." }
    ]
  },
  { title: "So sánh lũy tiến", grammarId: "074", level: "B1", category: "So sánh",
    rule: "So sánh lũy tiến diễn tả một đặc điểm cứ tăng dần hoặc giảm dần theo thời gian ('ngày càng...'). Với tính từ/trạng từ ngắn, lặp lại dạng so sánh hơn và nối bằng **and**: **bigger and bigger**, **colder and colder**. Với từ dài, lặp lại **more**: **more and more expensive**. Nghĩa giảm dần dùng **less and less** cho mọi loại từ. Thường đi sau các động từ chỉ sự thay đổi như **get**, **become**, **grow**.",
    form: ["S + get / become / grow + adj-er + and + adj-er (từ ngắn)","S + get / become / grow + more and more + adj (từ dài)","S + V + adv-er + and + adv-er / more and more + adv","S + V + less and less + adj / adv (giảm dần)"],
    examples: ["Computers are getting smaller and cheaper every year.","Traffic is becoming more and more congested.","She worked harder and harder.","The weather is getting colder and colder.","More and more people are learning English online."],
    wrong: "Computers are getting smaller and cheap.", right: "Computers are getting smaller and cheaper every year.",
    more: [
      { type: "nuance", text: "Hai dạng so sánh được nối bằng **and** phải là cùng một từ: **bigger and bigger** (ngày càng to), không phải hai từ khác nhau. Còn **smaller and cheaper** là hai tính từ khác nhau, mỗi từ có dạng so sánh riêng, không phải so sánh lũy tiến của một từ." },
      { type: "extension", text: "Dùng được với danh từ: **more and more people / fewer and fewer jobs** (ngày càng nhiều người / ngày càng ít việc). Dạng giảm dần: **less and less clear** (ngày càng kém rõ), **less and less money**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **more and more cheap** hoặc **bigger and more big** thay vì **cheaper and cheaper** / **bigger and bigger**. Từ ngắn dùng **-er and -er**, từ dài mới dùng **more and more**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **It is getting more cold** thay vì **It is getting colder and colder**. Ngoài ra thiếu động từ chỉ thay đổi như **get** / **become** thì câu mất ý 'ngày càng'." },
      { type: "advanced", text: "Có thể dùng **better and better**, **worse and worse**, **farther and farther** cho các dạng bất quy tắc: **Her English is getting better and better**." }
    ]
  },
  { title: "Từ nối chỉ sự bổ sung", grammarId: "075", level: "B2", category: "Từ nối",
    rule: "Các từ nối bổ sung **moreover**, **furthermore**, **in addition**, **besides** dùng để thêm một ý mới cùng hướng với ý trước. Chúng là trạng từ nối câu chứ không phải liên từ, nên không thể nối hai mệnh đề chỉ bằng dấu phẩy. Cách dùng đúng: đứng đầu câu mới sau dấu chấm, hoặc sau dấu chấm phẩy; luôn có dấu phẩy ngay sau từ nối. **In addition to** và **besides** khi đứng trước danh từ/V-ing thì là giới từ.",
    form: ["Clause. Moreover / Furthermore / In addition / Besides, + clause","Clause; moreover / furthermore / in addition / besides, + clause","S, moreover / furthermore, + V (giữa câu, có hai dấu phẩy)","In addition to / Besides + N / V-ing, + clause"],
    examples: ["He is fluent in French; moreover, he speaks German and Italian.","The apartment is spacious; furthermore, it is centrally located.","In addition to his salary, he gets bonuses.","The plan is too expensive. Besides, it would take years to finish.","The company cut its costs. Moreover, it hired more staff."],
    wrong: "He is fluent in French moreover he speaks German.", right: "He is fluent in French; moreover, he speaks German.",
    more: [
      { type: "nuance", text: "**Moreover** và **furthermore** mang văn phong trang trọng, hay gặp trong bài luận và văn bản học thuật. **Besides** thân mật hơn và thường thêm lý do phụ có sức nặng, nhất là trong văn nói: **I don't want to go. Besides, it's late.**" },
      { type: "extension", text: "Trong giao tiếp còn có các lựa chọn thân mật hơn như **also**, **what is more**, **on top of that**: **He is smart, and on top of that, he is hard-working**." },
      { type: "mistake", text: "Lỗi hay gặp: nối hai mệnh đề bằng dấu phẩy: nói **He is fluent in French, moreover he speaks German** thay vì **He is fluent in French; moreover, he speaks German** (hoặc tách thành hai câu). Dùng dấu phẩy ở chỗ này gọi là lỗi nối câu bằng dấu phẩy (comma splice)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **In addition of his salary** thay vì **In addition to his salary**. Cụm cố định là **in addition to**, đi với danh từ hoặc V-ing." },
      { type: "advanced", text: "Khi đứng giữa câu, **moreover** / **furthermore** được đặt giữa hai dấu phẩy để làm nhẹ nhịp điệu: **The proposal, moreover, has the support of the board**. Cách này thường gặp trong văn viết trang trọng." }
    ]
  },
  { title: "Liên từ chỉ sự tương phản", grammarId: "076", level: "B2", category: "Từ nối",
    rule: "**However**, **nevertheless**, **on the other hand** là trạng từ nối câu, dùng để đưa ra ý tương phản với ý trước ('tuy nhiên', 'dù vậy'). Giống các từ nối bổ sung, chúng không phải liên từ như **but**, nên không nối hai mệnh đề chỉ bằng dấu phẩy. Cách dùng đúng: dấu chấm hoặc dấu chấm phẩy đứng trước, dấu phẩy đứng sau. **On the other hand** thường đi cặp với **on the one hand** để cân nhắc hai mặt của một vấn đề.",
    form: ["Clause. However / Nevertheless, + clause","Clause; however / nevertheless, + clause","S, however, + V (giữa câu, có hai dấu phẩy)","On the one hand, + clause; on the other hand, + clause"],
    examples: ["The team worked hard; however, they could not secure the contract.","It was raining; nevertheless, they went out for a walk.","The flat is cheap. On the other hand, it is far from the city centre.","On the one hand, cars are fast; on the other hand, they cause pollution.","The test was difficult. She, however, passed with a high score."],
    wrong: "The team worked hard, however they could not secure it.", right: "The team worked hard; however, they could not secure it.",
    more: [
      { type: "nuance", text: "**Nevertheless** trang trọng hơn **however** và có nghĩa gần như 'dù vậy / dù thế đi nữa' (**even so**). **On the other hand** không nhất thiết phủ định ý trước mà thêm một khía cạnh đối lập khi cân nhắc." },
      { type: "extension", text: "Còn có **nonetheless**, **even so**, **still**, **yet** (tương phản), và **in contrast** để đối chiếu hai đối tượng khác nhau. **However** cũng có thể đứng cuối câu hoặc giữa câu: **He was tired, however, and went on.**" },
      { type: "mistake", text: "Lỗi hay gặp: nối hai mệnh đề bằng dấu phẩy, nói **It was raining, nevertheless they went out** thay vì **It was raining; nevertheless, they went out**. Hoặc dùng **but** nếu muốn nối bằng dấu phẩy: **It was raining, but they went out**." },
      { type: "mistake", text: "Lỗi hay gặp: dùng hai từ nối cùng lúc: nói **Although it was raining, however they went out** hoặc **But however** thay vì chỉ một từ: **Although it was raining, they went out** hoặc **It was raining; however, they went out**." },
      { type: "advanced", text: "Khác với từ nối, **however + adj / adv + S + V** có nghĩa là 'dù... đến đâu': **However hard he tried, he could not open the door** (Dù cố gắng thế nào, anh ấy cũng không mở được cửa)." }
    ]
  },
  { title: "Cấu trúc In case và In case of", grammarId: "077", level: "B1", category: "Liên từ",
    rule: "**In case** diễn tả sự phòng ngừa: bạn làm một việc TRƯỚC, phòng khi có chuyện xảy ra sau đó. **In case** đi với một mệnh đề (S + V), thường dùng hiện tại đơn cho ý tương lai. **In case of** là giới từ nên chỉ đi với danh từ hoặc V-ing, không đi với mệnh đề; nghĩa là 'nếu có... xảy ra' và thường thấy trong biển báo, hướng dẫn an toàn. Phân biệt: **in case it rains** (có thể mưa), còn **in case of rain** (nếu có mưa) dùng với danh từ.",
    form: ["S + V + in case + S + V (hiện tại đơn)","In case + S + V (hiện tại đơn), S + V","In case of + N / V-ing, + clause","S + V2 + in case + S + V2 (tường thuật quá khứ)"],
    examples: ["Take an umbrella with you in case it rains later.","In case of emergency, please break the glass.","I brought extra money in case we need it.","She wrote down the address in case she forgot it.","In case of fire, use the stairs, not the lift."],
    wrong: "In case of it rains, take an umbrella.", right: "In case it rains, take an umbrella.",
    more: [
      { type: "nuance", text: "Phân biệt **in case** và **if**: **I'll take an umbrella in case it rains** là mang dù trước, phòng mưa; **I'll take an umbrella if it rains** là chỉ mang khi mưa đã xảy ra. Vì vậy **in case** diễn tả sự chuẩn bị làm trước, còn **if** diễn tả điều kiện." },
      { type: "extension", text: "Kể về quá khứ thì dùng quá khứ đơn: **I took a coat in case it got cold** (Tôi mang áo khoác phòng khi trời lạnh). Có cách nói quen thuộc **just in case** (cho chắc ăn): **Take some cash, just in case.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **in case it will rain** thay vì **in case it rains**. Giống **if**, **in case** không dùng **will** ở mệnh đề của nó khi nói về tương lai." },
      { type: "mistake", text: "Lỗi hay gặp: nói **in case of fire breaks out** thay vì **in case of fire** hoặc **in case a fire breaks out**. **In case of** cần danh từ; muốn dùng mệnh đề thì bỏ **of**." },
      { type: "advanced", text: "Trong tiếng Anh-Anh trang trọng, có thể dùng **should** để nhấn mạnh khả năng ít xảy ra: **Leave a number in case he should call** (phòng khi anh ấy gọi). Văn nói bình thường chỉ dùng hiện tại đơn." }
    ]
  },
  { title: "Cấu trúc Provided that và As long as", grammarId: "078", level: "B2", category: "Liên từ",
    rule: "**Provided that**, **providing that** và **as long as** nghĩa là 'miễn là / với điều kiện là': điều kiện phải được đáp ứng thì việc ở vế kia mới được phép hoặc mới xảy ra. Mệnh đề chứa từ nối ở thì hiện tại đơn khi nói về tương lai (không dùng **will**), còn mệnh đề chính dùng **will** hoặc **can**. Từ **that** có thể bỏ: **provided you...**. Các từ này mạnh hơn **if** ở chỗ nhấn mạnh rằng đó là điều kiện bắt buộc, duy nhất.",
    form: ["S + will / can + V-bare + as long as + S + V (hiện tại đơn)","As long as + S + V (hiện tại đơn), S + will + V-bare","Provided (that) / Providing (that) + S + V (hiện tại đơn), S + will + V-bare","S + would + V-bare + provided (that) + S + V2 (điều kiện giả định)"],
    examples: ["You can borrow my car as long as you return it with a full tank.","Provided that you study hard, you will pass the exam.","Providing that the weather is fine, we will leave tomorrow.","As long as you keep quiet, you can stay in the room.","I would lend you the money provided you paid it back soon."],
    wrong: "You can borrow my car as long as you will return it.", right: "You can borrow my car as long as you return it.",
    more: [
      { type: "nuance", text: "**Provided that** và **providing that** thường gặp trong văn viết, hợp đồng, quy định hoặc câu nói trang trọng. **As long as** là cách nói phổ biến nhất trong đời sống hằng ngày." },
      { type: "extension", text: "**As long as** còn có nghĩa chỉ thời gian: 'bao lâu mà' hoặc 'trong suốt khoảng thời gian': **You can stay as long as you like** (bạn có thể ở bao lâu tùy thích). Biến thể gần nghĩa là **so long as**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Provided that you will study hard, you will pass** thay vì **Provided that you study hard, you will pass**. Giống câu điều kiện **if**, mệnh đề điều kiện không dùng **will**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Provide that** hoặc **Provided to** thay vì **Provided that** / **Providing that**. Cụm cố định gồm dạng **-ed / -ing** của **provide** + **that**." },
      { type: "advanced", text: "Với điều kiện giả định không có thật ở hiện tại, mệnh đề điều kiện chuyển sang quá khứ đơn, giống câu điều kiện loại 2: **I would go provided they paid me well**." }
    ]
  },
  { title: "Mệnh đề trạng ngữ chỉ vị trí", grammarId: "079", level: "B1", category: "Mệnh đề",
    rule: "Mệnh đề trạng ngữ chỉ vị trí cho biết hành động xảy ra ở đâu. **Where** nghĩa là 'ở nơi mà', chỉ một nơi cụ thể đã biết. **Wherever** nghĩa là 'bất cứ nơi nào / dù ở đâu', chỉ nơi bất kỳ. Mệnh đề này có đủ chủ ngữ và động từ của riêng nó, và có thể đứng đầu hoặc cuối câu. Khi đứng đầu câu, thêm dấu phẩy sau mệnh đề. Lưu ý **where** và **wherever** đã mang nghĩa 'ở nơi' nên không cần giới từ **in / at** đứng trước.",
    form: ["S + V + where + S + V (nơi mà)","S + V + wherever + S + V (bất cứ nơi nào)","Where + S + V, S + V","Wherever + S + V (hiện tại đơn), S + will + V-bare"],
    examples: ["You can sit wherever you like in the auditorium.","Put the keys where everyone can see them.","Wherever she goes, she makes friends easily.","Lan lives where she can see the river.","This is the town where I was born."],
    wrong: "You can sit everywhere you like in the auditorium.", right: "You can sit wherever you like in the auditorium.",
    more: [
      { type: "nuance", text: "**Where** nói về chỗ xác định (**the school where I studied**), còn **wherever** nói về chỗ không xác định hoặc 'dù là chỗ nào' (**Wherever you are, call me**). **Wherever** cũng có sắc thái nhấn mạnh sự bao quát: ở đâu cũng đúng." },
      { type: "extension", text: "**Where** còn dùng cho tình huống, hoàn cảnh: **Where possible, use public transport** (Nếu có thể thì dùng phương tiện công cộng). Cũng có thành ngữ **Where there's a will, there's a way** (Có chí thì nên)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **This is the town where I was born in** thay vì **This is the town where I was born**. **Where** đã thay thế cho 'in the town' nên không lặp thêm giới từ ở cuối." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Wherever you will go, I will follow** thay vì **Wherever you go, I will follow**. Mệnh đề trạng ngữ về tương lai dùng hiện tại đơn, không dùng **will**." },
      { type: "advanced", text: "**Wherever** cũng dùng được để nói 'ở đâu đó (không rõ)' trong văn nói: **She lives in Da Lat or wherever** (Cô ấy sống ở Đà Lạt hay đâu đó). Với nghĩa 'bất cứ nơi nào' thì viết liền thành một từ." }
    ]
  },
  { title: "Câu mệnh lệnh kết hợp and hoặc or", grammarId: "080", level: "A2", category: "Cấu trúc câu",
    rule: "Câu mệnh lệnh nối bằng **and** hoặc **or** dùng để khuyên hoặc cảnh báo. Câu đầu là mệnh lệnh (động từ nguyên mẫu **V-bare**, giống như ra lệnh). Nối bằng **and** khi kết quả là điều tốt: **Study hard, and you will pass** (Học chăm đi, rồi bạn sẽ đỗ). Nối bằng **or** hoặc **or else** khi kết quả là điều xấu nếu không làm theo: **Hurry up, or you will miss the train** (Nhanh lên, không thì bạn sẽ lỡ tàu). Vế sau thường dùng **will** hoặc **'ll** cho kết quả trong tương lai.",
    form: ["V-bare ..., and + S + will + V-bare (kết quả tốt)","V-bare ..., or / or else + S + will + V-bare (hậu quả xấu)","Don't + V-bare ..., or + S + will + V-bare","V-bare ..., otherwise + S + will + V-bare (trang trọng hơn)"],
    examples: ["Study hard, and you will pass the upcoming examination.","Hurry up, or you will miss the train.","Listen carefully, and you will understand.","Don't touch that wire, or you will get a shock.","Leave now, or else we'll be late."],
    wrong: "Study hard, and you pass the exam.", right: "Study hard, and you will pass the exam.",
    more: [
      { type: "nuance", text: "Cấu trúc này tương đương câu điều kiện loại 1: **Study hard, and you will pass** = **If you study hard, you will pass** (Nếu bạn học chăm, bạn sẽ đỗ). **Hurry up, or you will miss it** = **If you don't hurry up, you will miss it**." },
      { type: "extension", text: "**Or else** nghe mạnh hơn **or**, như một lời đe dọa nhẹ: **Be quiet, or else!** Từ **otherwise** nghĩa tương tự và trang trọng hơn: **Take a taxi, otherwise you will be late**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Hurry up, and you will miss the train** thay vì **Hurry up, or you will miss the train**. Kết quả xấu khi không làm theo thì phải dùng **or**, không dùng **and** (tiếng Việt chỉ nói 'nếu không thì' nên dễ chọn nhầm)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Study hard, and you will to pass** hoặc **you passing** thay vì **you will pass**. Sau **will** là động từ nguyên mẫu không có **to**." }
    ]
  },
  { title: "Danh từ đếm được và không đếm được nâng cao", grammarId: "081", level: "A1", category: "Danh từ",
    rule: "Danh từ đếm được là những thứ ta đếm trực tiếp bằng số: **a book, two books**. Chúng có dạng số ít và số nhiều (thêm **-s / -es**). Danh từ không đếm được là những thứ không đếm trực tiếp được, như chất lỏng, vật liệu hoặc khái niệm trừu tượng: **water, rice, advice, information, furniture, homework, news**. Chúng không có dạng số nhiều và không dùng **a / an**. Muốn đếm, dùng đơn vị đo lường: **a glass of water**, **a piece of advice**. Danh từ không đếm được đi với động từ số ít: **The news is good.**",
    form: ["a / an + countable N (số ít); countable N-s (số nhiều)","some / much / a lot of + uncountable N (không thêm -s)","a piece of / a glass of / a bottle of + uncountable N","uncountable N + V số ít (The news is ...)"],
    examples: ["She gave me a great piece of advice.","How much water do you drink every day?","I need to buy some furniture for my new apartment.","The news is very good today.","Nam drinks two glasses of milk every morning."],
    wrong: "She gave me a great advice.", right: "She gave me a great piece of advice.",
    more: [
      { type: "nuance", text: "Một số danh từ có thể đếm được hoặc không đếm được tùy nghĩa. **Hair** chỉ cả mái tóc thì không đếm được (**Her hair is dark**), chỉ từng sợi thì đếm được (**There are two hairs on your shirt**). Tương tự: **paper** (giấy) và **a paper** (một bài báo/bài luận), **coffee** và **two coffees** (hai ly cà phê khi gọi món)." },
      { type: "extension", text: "Mỗi loại danh từ không đếm được có đơn vị riêng: **a slice of bread**, **a bar of chocolate**, **a bowl of rice**, **a piece of news / furniture / information**. Không dùng **a / an** trực tiếp trước chúng." },
      { type: "mistake", text: "Lỗi hay gặp: nói **informations**, **furnitures**, **advices**, **homeworks** thay vì **information**, **furniture**, **advice**, **homework**. Trong tiếng Việt các từ này đếm được ('những lời khuyên') nên người học tự thêm **-s**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The news are good** thay vì **The news is good**. **News** có đuôi **-s** nhưng là danh từ không đếm được nên dùng động từ số ít." }
    ]
  },
  { title: "Danh từ ghép và sở hữu cách", grammarId: "082", level: "A2", category: "Danh từ",
    rule: "Danh từ ghép là hai danh từ đứng cạnh nhau, danh từ đầu bổ nghĩa cho danh từ sau, cho biết loại: **a bus ticket** (vé xe buýt). Danh từ đầu thường ở dạng số ít. Sở hữu cách cho biết ai sở hữu gì, chủ yếu với người và động vật: danh từ số ít + **'s** (**my brother's laptop**); danh từ số nhiều đã có **-s** chỉ thêm dấu nháy đơn **'** (**the girls' dormitory**); danh từ số nhiều bất quy tắc thêm **'s** (**children's toys**). Vật sở hữu đứng sau.",
    form: ["Noun + Noun (danh từ ghép: bus ticket)","N (số ít) + 's + N (my brother's laptop)","N (số nhiều có -s) + ' + N (the girls' dormitory)","N (số nhiều bất quy tắc) + 's + N (children's toys)"],
    examples: ["This is my brother's laptop; he left it on the table.","We visited the girls' dormitory yesterday.","He bought a new bus ticket.","The children's toys are on the floor.","Is this Lan's phone or Nam's phone?"],
    wrong: "This is my brothers laptop.", right: "This is my brother's laptop.",
    more: [
      { type: "nuance", text: "Với đồ vật, ít dùng **'s**, thường dùng danh từ ghép hoặc **of**: **the table leg** hoặc **the leg of the table** (chân bàn) tự nhiên hơn **the table's leg**. Còn **'s** vẫn quen thuộc với thời gian và địa điểm: **today's news**, **yesterday's meeting**, **the world's population**." },
      { type: "extension", text: "Dùng **'s** không có danh từ sau để chỉ nơi: **I'm going to the doctor's** (đến phòng khám), **at my aunt's** (ở nhà dì). Hai người cùng sở hữu một thứ thì thêm **'s** ở người sau: **Lan and Nam's house**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **a buses ticket**, **a vegetables shop** thay vì **a bus ticket**, **a vegetable shop**. Trong danh từ ghép, danh từ đầu ở dạng số ít, dù nghĩa có thể là nhiều." },
      { type: "mistake", text: "Lỗi hay gặp: nói **childrens toys** hoặc **childrens' toys** thay vì **children's toys**. **Children** đã là số nhiều bất quy tắc, nên thêm **'s**, không thêm **s'**." }
    ]
  },
  { title: "Sử dụng mạo từ nâng cao", grammarId: "083", level: "A1", category: "Mạo từ",
    rule: "Mạo từ là những từ nhỏ đứng trước danh từ. Dùng **a / an** với danh từ đếm được số ít khi nhắc lần đầu hoặc nói về một thứ nào đó chưa xác định: **a car** (**an** trước âm nguyên âm: **an apple**). Dùng **the** khi người nghe biết đó là thứ nào: đã nhắc rồi, duy nhất (**the sun**, **the moon**) hoặc rõ từ ngữ cảnh. Không dùng mạo từ (zero article) với danh từ số nhiều hoặc không đếm được khi nói chung: **Children love games. Music is fun.**",
    form: ["a / an + N (đếm được số ít, chưa xác định)","the + N (đã xác định / duy nhất / người nghe biết)","Ø + N số nhiều (nói chung)","Ø + N không đếm được (nói chung)"],
    examples: ["She wants to buy a new car next month.","The moon orbits around the Earth.","Children love playing video games.","I saw a dog in the park. The dog was very big.","Life is short, so enjoy it."],
    wrong: "She wants to buy new car.", right: "She wants to buy a new car.",
    more: [
      { type: "nuance", text: "Chọn **a / an** theo ÂM, không theo chữ cái: **an hour** (h câm), **a university** (đọc /ju/), **an MBA**. Trong tiếng Anh-Anh, **go to hospital** nói chung về việc là bệnh nhân, còn **go to the hospital** là đến tòa nhà (thăm người bệnh). Tiếng Anh-Mỹ thường dùng **the hospital** cho cả hai nghĩa." },
      { type: "extension", text: "**The** còn dùng với dạng so sánh nhất (**the best**), tên sông, biển, dãy núi (**the Mekong**, **the Pacific**), và các nhóm người (**the rich**). Nhưng không dùng với bữa ăn, môn học, và các nơi chốn quen thuộc: **have breakfast**, **go to school**, **go to bed**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The life is beautiful** khi nói chung. Đúng là **Life is beautiful**, vì nói chung về một khái niệm thì không có mạo từ (người học thường thêm **the** theo tiếng Việt 'cuộc sống')." },
      { type: "mistake", text: "Lỗi hay gặp: nói **an university** hoặc **a hour** thay vì **a university**, **an hour**. Chữ cái đầu không quan trọng bằng âm đầu." }
    ]
  },
  { title: "Từ chỉ số lượng Much Many A lot of Plenty of", grammarId: "084", level: "A2", category: "Từ chỉ số lượng",
    rule: "**Many** đi với danh từ đếm được số nhiều (**many students**). **Much** đi với danh từ không đếm được (**much time**). Cả hai thường dùng trong câu phủ định và câu hỏi: **I don't have much time. Do you have many friends?** Trong câu khẳng định, nói **a lot of** (hoặc **lots of**, **plenty of**) cho tự nhiên hơn, vì dùng được với cả hai loại danh từ: **a lot of students**, **a lot of time**. Hỏi số lượng: **How many + N số nhiều?** và **How much + N không đếm được?**",
    form: ["many + countable N số nhiều (câu hỏi / phủ định)","much + uncountable N (câu hỏi / phủ định)","a lot of / lots of / plenty of + N (cả hai loại)","How many + plural N ...? / How much + uncountable N ...?"],
    examples: ["How much sugar did you put in my coffee?","There are many students in the library today.","We have a lot of time before the train departs.","I don't have much homework tonight.","Is there plenty of food for everyone?"],
    wrong: "How many sugar do you need?", right: "How much sugar do you need?",
    more: [
      { type: "nuance", text: "**Plenty of** nghĩa là 'đủ và còn dư', còn **a lot of** chỉ đơn giản là 'nhiều': **We have plenty of time** (còn rất dư thời gian) nghe thoải mái hơn **a lot of time**. Cả hai đều thân mật, nên dùng được trong giao tiếp hằng ngày." },
      { type: "extension", text: "Thêm **too** hoặc **so** để nhấn mạnh: **too many people** (quá nhiều người), **so much noise** (ồn quá). **A lot** không có **of** dùng khi không có danh từ phía sau: **I like it a lot** (Tôi rất thích nó)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I have much friends** hoặc **She has much homework** thay vì **I have many friends** / **She has a lot of homework**. Trong câu khẳng định, **much** nghe không tự nhiên; hãy dùng **a lot of**, và **friends** đếm được thì dùng **many**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **How many money do you have?** thay vì **How much money do you have?**. **Money** là danh từ không đếm được nên đi với **much**." }
    ]
  },
  { title: "Từ chỉ số lượng Few A few Little A little", grammarId: "085", level: "B1", category: "Từ chỉ số lượng",
    rule: "**Few** và **little** đều nghĩa là \"rất ít\", hàm ý không đủ, gần như không có (nghĩa tiêu cực). **A few** và **a little** nghĩa là \"một vài / một ít\", hàm ý vẫn có và đủ dùng (nghĩa tích cực). Chọn giữa hai nhóm theo loại danh từ: **few / a few** đi với danh từ đếm được số nhiều (friends, books), còn **little / a little** đi với danh từ không đếm được (time, money, water). Điểm cần nhớ: có mạo từ **a** thì ý tích cực, không có **a** thì ý tiêu cực.",
    form: ["Đếm được: a few + N (số nhiều) + V (số nhiều)","Đếm được: few + N (số nhiều) + V (số nhiều) (hầu như không có)","Không đếm được: a little + N (không đếm được) + V (số ít)","Không đếm được: little + N (không đếm được) + V (số ít) (hầu như không có)"],
    examples: ["I have a few friends in this city, so I rarely feel lonely.","He has little experience in marketing, so he failed to get the job.","We have a little time left before the deadline.","Few people in my village speak French.","Is there a little milk in the fridge, or should I buy some?"],
    wrong: "We have few time left, so we must hurry.", right: "We have little time left, so we must hurry.",
    more: [
      { type: "nuance", text: "Phân biệt thái độ người nói: **I have a little money** (vui vì vẫn còn tiền tiêu); **I have little money** (buồn/lo lắng vì sắp hết tiền). Tương tự, **a few** nhấn mạnh \"có\", còn **few** nhấn mạnh \"thiếu\"." },
      { type: "extension", text: "Có thể thêm **very**, **only** hoặc **quite** để đổi sắc thái: **very few / very little** (cực kỳ ít), **only a few / only a little** (chỉ có một chút thôi), **quite a few** (khá nhiều, nghĩa là nhiều hơn bạn nghĩ), ví dụ **quite a few students passed**." },
      { type: "advanced", text: "Trong văn phong trang trọng, **few** và **little** thường đứng một mình hoặc với **of**: **Few of the proposals were accepted.** Trong giao tiếp hằng ngày, người bản ngữ hay dùng **not many / not much** thay cho **few / little**: **I don't have much time.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **a few water** hoặc **a little books** thay vì **a little water** và **a few books**. Tiếng Việt không phân biệt đếm được/không đếm được, nên hãy kiểm tra danh từ trước: **water** không đếm được dùng **little**, **books** đếm được dùng **few**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I have few friends, so I feel happy** thay vì **I have a few friends, so I feel happy**. Nếu ý của bạn là tích cực, phải có **a**; thiếu **a** làm câu mang nghĩa \"gần như không có bạn\"." }
    ]
  },
  { title: "Đại từ phân bổ All Both Neither Either None", grammarId: "086", level: "B2", category: "Đại từ",
    rule: "Các từ này đứng trước **of + the/my/these + danh từ số nhiều** để nói về cả nhóm hoặc một phần của nhóm. **Both** (cả hai), **neither** (không ai trong hai) và **either** (một trong hai) dùng cho nhóm 2 đối tượng. **All** (tất cả) và **none** (không ai/không cái nào) dùng cho nhóm từ 3 đối tượng trở lên. Sau **both** và **all**, động từ chia số nhiều; sau **neither of**, **either of**, động từ trang trọng chia số ít; sau **none of**, có thể chia số ít hoặc số nhiều.",
    form: ["Both + of + the / my + N (số nhiều) + V (số nhiều)","Neither / Either + of + the / my + N (số nhiều) + V (số ít, trang trọng)","All + of + the / my + N (số nhiều) + V (số nhiều)","None + of + the / my + N (số nhiều) + V (số ít hoặc số nhiều)","Neither / Either + N (số ít) + V (số ít) (không có of)"],
    examples: ["Neither of the two candidates was qualified for the job.","Both of my parents are teachers.","None of the students failed the final examination.","Is either of these two phones cheaper than that one?","All of the guests have already arrived."],
    wrong: "Both of my parents is teachers.", right: "Both of my parents are teachers.",
    more: [
      { type: "nuance", text: "Với **neither of / either of / none of** + danh từ số nhiều, văn viết trang trọng dùng động từ số ít (**Neither of them was present**), nhưng trong giao tiếp thân mật người bản ngữ thường dùng động từ số nhiều (**Neither of them were present**) và cách này khá phổ biến. Khi đi thi, hãy chọn dạng số ít." },
      { type: "extension", text: "Có thể bỏ **of** khi chỉ có một danh từ thường, không có **the/my**: **Both parents work**, **All students must register**, **Either answer is correct**, **Neither team won**. Khi đi với đại từ thì vẫn cần **of**: **both of them**, **all of us**." },
      { type: "advanced", text: "**Both** có thể đứng sau chủ ngữ hoặc sau trợ động từ: **They both like jazz**, **We have all finished**. Với nhóm 2 đối tượng, người bản ngữ thích **both** hơn **all**; **all** chủ yếu dùng khi từ 3 đối tượng trở lên." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Both of them are not ready** hoặc **Neither of them isn't ready** thay vì **Neither of them is ready**. **Neither** và **none** đã mang nghĩa phủ định, nên động từ giữ ở dạng khẳng định; chỉ dùng một lần phủ định trong câu." },
      { type: "mistake", text: "Lỗi hay gặp: nói **All of students passed** thay vì **All of the students passed** (hoặc **All students passed**). Sau **of** phải có từ xác định như **the, my, these, them**." }
    ]
  },
  { title: "Phân biệt Every và Each", grammarId: "087", level: "B2", category: "Từ chỉ số lượng",
    rule: "**Each** và **every** đều đi với danh từ đếm được số ít và động từ số ít, nghĩa là \"mỗi / mọi\". **Each** nhìn từng cá thể một cách riêng lẻ và dùng được cho nhóm từ 2 đối tượng trở lên (**each of my hands**). **Every** nhìn cả tập hợp như một tổng thể và thường dùng cho nhóm từ 3 đối tượng trở lên, hàm ý \"tất cả, không sót ai\". **Each** có thể đứng một mình hoặc đi với **of**, còn **every** luôn cần danh từ theo sau.",
    form: ["Each / Every + N (đếm được số ít) + V (số ít)","Each + of + the / my / these + N (số nhiều) + V (số ít)","Each + V (đứng một mình, thay cho danh từ đã nhắc trước đó)","Every + one + of + the + N (số nhiều) + V (số ít)","Every + số + N (số nhiều) (every two weeks)"],
    examples: ["Each student in the class was given a unique project topic.","Every room in this hotel has an ocean view.","She spoke to each participant individually.","Each of the boys has his own bike.","Every child in Lan's village goes to school."],
    wrong: "Every student have a textbook.", right: "Every student has a textbook.",
    more: [
      { type: "nuance", text: "Chọn **each** khi bạn nghĩ đến từng người/vật riêng lẻ (giáo viên nói chuyện với từng em), chọn **every** khi nói chung cả nhóm (**Every student must wear a uniform**). Với số lượng đã xác định và nhỏ, **each** tự nhiên hơn: **She held a flower in each hand**." },
      { type: "extension", text: "**Every** còn dùng với các cụm thời gian lặp lại: **every day**, **every Monday**, **every two weeks**; và với **almost / nearly**: **almost every student**. Các đại từ **everyone, everybody, everything** cũng đi với động từ số ít: **Everyone is here.**" },
      { type: "advanced", text: "**Every one of** + danh từ số nhiều nhấn mạnh từng cá thể trong tập hợp: **Every one of the players was tired.** Sau **each** hoặc **every**, đại từ thay thế ở số ít (**Each student brought his or her own book**), nhưng trong tiếng Anh hiện đại **their** cũng rất phổ biến." },
      { type: "mistake", text: "Lỗi hay gặp: nói **every students** hoặc **each students** thay vì **every student** và **each student**. Tiếng Việt dùng \"mỗi/mọi\" trước danh từ mà không đổi dạng, nhưng tiếng Anh bắt buộc dùng danh từ số ít." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Every of the students** thay vì **Each of the students** hoặc **Every one of the students**. **Every** không đi trực tiếp với **of**; muốn dùng **of**, hãy đổi thành **each** hoặc thành **every one**." }
    ]
  },
  { title: "Đại từ phản thân", grammarId: "088", level: "A2", category: "Đại từ",
    rule: "Đại từ phản thân là các từ **myself, yourself, himself, herself, itself, ourselves, yourselves, themselves**. Ta dùng chúng khi chủ ngữ và tân ngữ là cùng một người hay vật, ví dụ **I cut myself**. Nếu hai người khác nhau, ta dùng đại từ thường: **He saw him** (hai người khác nhau). Cụm **by + đại từ phản thân** nghĩa là \"tự mình, không ai giúp\": **I did it by myself**. Chú ý: số ít kết thúc bằng **-self**, số nhiều kết thúc bằng **-selves**.",
    form: ["S + V + myself / yourself / himself / herself / itself","S + V + ourselves / yourselves / themselves (chủ ngữ số nhiều)","S + V + O + by + reflexive pronoun (tự mình làm, không ai giúp)","S (người A) + V + O (người B, đại từ thường, không dùng -self)"],
    examples: ["He built the bookshelf all by himself without any help.","She looked at herself in the mirror.","Children, you must take care of yourselves.","I burned myself while I was cooking dinner.","We enjoyed ourselves at the party."],
    wrong: "I cut me while I was cooking.", right: "I cut myself while I was cooking.",
    more: [
      { type: "nuance", text: "Phân biệt đại từ thường và đại từ phản thân: **He saw him** (anh ấy nhìn thấy một người đàn ông khác); **He saw himself** (anh ấy nhìn thấy chính mình, ví dụ trong gương). Chỉ cần đổi một từ là đổi người được nói đến." },
      { type: "extension", text: "Đại từ phản thân còn dùng để nhấn mạnh: **I made the cake myself** (chính tôi làm, nhấn mạnh) hoặc **The teacher himself was surprised** (chính thầy giáo cũng ngạc nhiên). Cụm hay gặp: **enjoy yourself** (chúc vui vẻ), **help yourself** (cứ tự nhiên lấy), **introduce myself** (giới thiệu bản thân)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **hisself** hoặc **themself**/**theirselves** thay vì **himself** và **themselves**. Hãy nhớ: **him** + self, **them** + selves, nhưng **his** không dùng. Số nhiều luôn là **-selves**: **ourselves, yourselves, themselves**." },
      { type: "mistake", text: "Lỗi hay gặp: thêm đại từ phản thân sau động từ không cần, như **I feel myself tired**, **I concentrated myself** thay vì **I feel tired**, **I concentrated**. Tiếng Việt hay nói \"tự thấy mình mệt\", nhưng tiếng Anh thường bỏ đại từ ở các động từ này, ví dụ **wake up, relax, feel, concentrate**." }
    ]
  },
  { title: "Đại từ sở hữu và tính từ sở hữu", grammarId: "089", level: "A1", category: "Đại từ",
    rule: "Tính từ sở hữu (**my, your, his, her, its, our, their**) luôn đứng ngay trước danh từ: **my book**. Đại từ sở hữu (**mine, yours, his, hers, ours, theirs**) đứng một mình, thay cho \"tính từ sở hữu + danh từ\" để khỏi nhắc lại: **This book is mine** (= my book). Hai loại này không dùng cùng nhau: không nói \"my mine book\". Lưu ý: **his** có cả hai vai trò, còn **its** chỉ là tính từ sở hữu và không có dạng đại từ thông dụng.",
    form: ["my / your / his / her / its / our / their + N","S + be + mine / yours / his / hers / ours / theirs","mine / yours / his / hers / ours / theirs (thay cho adj sở hữu + N)","a / this / that + N + of + mine / yours / his / hers (a friend of mine)"],
    examples: ["This isn't my jacket; mine is blue.","Her hair is long, but his is short.","Is this umbrella yours or ours?","Our house is small, but theirs is very big.","My phone is new, and Lan's is old."],
    wrong: "This jacket is my.", right: "This jacket is mine.",
    more: [
      { type: "nuance", text: "Phân biệt **its** và **it's**: **Its** là tính từ sở hữu (**The dog wagged its tail** - con chó vẫy đuôi của nó), còn **it's** là viết tắt của **it is** hoặc **it has** (**It's cold** - trời lạnh). Không bao giờ có dấu nháy trong tính từ sở hữu." },
      { type: "extension", text: "Với tên riêng, thêm **'s**: **Lan's bag**, và dùng một mình khi không cần nhắc lại: **That bag is Lan's** (túi đó của Lan). Cấu trúc **a friend of mine** (một người bạn của tôi) dùng đại từ sở hữu, không nói **a friend of me**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **This is mine book** hoặc **Where is yours bag?** thay vì **This is my book** và **Where is your bag?**. Trước danh từ phải dùng tính từ sở hữu (**my, your**), còn **mine, yours** không bao giờ đi cùng danh từ." },
      { type: "mistake", text: "Lỗi hay gặp: viết **her's**, **our's**, **their's** hoặc **yours'** thay vì **hers**, **ours**, **theirs**, **yours**. Đại từ sở hữu không có dấu nháy; dấu nháy chỉ dùng cho danh từ: **Lan's**." }
    ]
  },
  { title: "Trật tự của tính từ trước danh từ", grammarId: "090", level: "B1", category: "Tính từ",
    rule: "Khi có nhiều tính từ cùng bổ nghĩa cho một danh từ, tiếng Anh sắp xếp chúng theo thứ tự khá cố định, có thể nhớ bằng **OSASCOMP**: Opinion (ý kiến) -> Size (kích thước) -> Age (tuổi) -> Shape (hình dáng) -> Color (màu sắc) -> Origin (nguồn gốc) -> Material (chất liệu) -> Purpose (mục đích). Tính từ đứng trước danh từ, không cần dấu phẩy khi thuộc các nhóm khác nhau, và không đổi dạng theo số nhiều. Điểm khác tiếng Việt: tính từ đứng trước danh từ, không phải sau.",
    form: ["Det + Opinion + Size + Age + Shape + Color + Origin + Material + Purpose + N","a / the / my + adj + adj + N (thường dùng 2-3 tính từ)","S + be + adj + and + adj (sau động từ be, nối bằng and)","adj, adj + N (cùng nhóm nghĩa thì ngăn bằng dấu phẩy: a long, thin tail)"],
    examples: ["She was wearing a beautiful long red silk dress at the wedding.","He bought a small old wooden house.","They gave me a wonderful round golden ring.","My grandmother has a lovely little Vietnamese tea set.","I saw a huge black dog near the gate."],
    wrong: "She wore a red long beautiful silk dress.", right: "She wore a beautiful long red silk dress.",
    more: [
      { type: "nuance", text: "Tính từ chỉ quan điểm chủ quan (**beautiful, lovely, terrible**) luôn đứng trước tính từ miêu tả sự thật khách quan (**long, red, wooden**). Danh từ dùng như tính từ (**silk, tea, school**) thường đứng sát danh từ chính nhất: **a leather school bag**." },
      { type: "extension", text: "Khi tính từ đứng sau động từ **be**, ta thường nối bằng **and**, và thứ tự bớt chặt hơn: **The room was big and bright.** Với hai tính từ màu, dùng **and**: **a black and white photo**. Trong thực tế, người bản ngữ ít khi dùng hơn ba tính từ liền nhau." },
      { type: "mistake", text: "Lỗi hay gặp: đặt tính từ sau danh từ theo thói quen tiếng Việt, như **a dress red**, **a house big** thay vì **a red dress**, **a big house**. Tính từ tiếng Anh đứng trước danh từ." },
      { type: "mistake", text: "Lỗi hay gặp: thêm **s** cho tính từ khi danh từ số nhiều, như **reds roses**, **beautifuls girls** thay vì **red roses**, **beautiful girls**. Tính từ tiếng Anh không đổi dạng, chỉ danh từ mới có **-s**." }
    ]
  },
  { title: "Tính từ tận cùng bằng ED và ING", grammarId: "091", level: "B1", category: "Tính từ",
    rule: "Nhiều tính từ có hai dạng: đuôi **-ed** (**bored, interested, surprised**) và đuôi **-ing** (**boring, interesting, surprising**). Tính từ **-ed** diễn tả cảm xúc của người cảm nhận: **I am bored**. Tính từ **-ing** mô tả tính chất của sự vật, sự việc hay người gây ra cảm xúc đó: **The lecture is boring**. Mẹo nhớ: hỏi \"ai cảm thấy?\" thì dùng **-ed**, hỏi \"cái gì gây cảm xúc?\" thì dùng **-ing**.",
    form: ["S (người) + be / feel + adj-ed (cảm xúc của người đó)","S (sự vật / sự việc) + be + adj-ing (tính chất gây ra cảm xúc)","adj-ing + N (an exciting game) / adj-ed + N (an excited fan)","be + adj-ed + preposition (bored with, interested in, surprised at / by)"],
    examples: ["The long lecture was so boring that half the audience fell asleep.","I am bored with this routine.","She was surprised by the sudden news.","Minh is very interested in Vietnamese history.","Is the new movie exciting, or are you just excited about the holiday?"],
    wrong: "The lecture was so bored.", right: "The lecture was so boring.",
    more: [
      { type: "nuance", text: "Khi mô tả người, hai dạng có nghĩa khác nhau: **He is bored** (anh ấy đang cảm thấy chán) và **He is boring** (anh ấy là người tẻ nhạt, khiến người khác chán). Tương tự **She is annoyed** (cô ấy bực) và **She is annoying** (cô ấy gây khó chịu)." },
      { type: "extension", text: "Các cặp thường gặp: **excited / exciting**, **tired / tiring**, **confused / confusing**, **interested / interesting**, **worried / worrying**, **shocked / shocking**. Cả hai dạng đều đứng được trước danh từ: **a tiring day** (ngày mệt mỏi), **a tired child** (đứa trẻ mệt)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I am boring** hoặc **I am interesting in music** thay vì **I am bored** và **I am interested in music**. Khi nói về cảm giác của bản thân, dùng **-ed**; **interested** còn đi với giới từ **in**." },
      { type: "mistake", text: "Lỗi hay gặp: dùng **very** hoặc **much** không đúng trước tính từ cảm xúc, như **I am very interest** thay vì **I am very interested**. Phải có đuôi **-ed** vì đây là tính từ, không phải danh từ **interest**." }
    ]
  },
  { title: "Vị trí và dạng của trạng từ", grammarId: "092", level: "A2", category: "Trạng từ",
    rule: "Trạng từ thể cách cho biết hành động diễn ra như thế nào. Phần lớn được tạo bằng cách thêm **-ly** vào tính từ: **slow -> slowly**, **careful -> carefully**. Câu hỏi để kiểm tra: nếu bổ nghĩa cho động từ thì dùng trạng từ, nếu bổ nghĩa cho danh từ thì dùng tính từ. Trạng từ thường đứng cuối câu, sau động từ hoặc sau tân ngữ; không đặt giữa động từ và tân ngữ (không nói \"speaks fluently English\"). Cũng có thể đặt trước động từ chính: **He quickly finished his homework**.",
    form: ["S + V + adv (She sings beautifully)","S + V + O + adv (She speaks English fluently)","S + adv + V + O (He quickly finished his homework)","adj + ly = adv (careful -> carefully); y -> ily (happy -> happily)"],
    examples: ["She speaks English extremely fluently.","He quickly finished his homework before dinner.","Please drive carefully on this slippery road.","Nam works hard every day.","Does your brother play the guitar well?"],
    wrong: "She speaks English fluent.", right: "She speaks English fluently.",
    more: [
      { type: "nuance", text: "Một số từ không đổi dạng hoặc khác nghĩa khi thêm **-ly**: **fast** (nhanh, vừa là tính từ vừa là trạng từ), **hard** (chăm chỉ / cứng, trạng từ vẫn là **hard**), nhưng **hardly** nghĩa là \"hầu như không\" (**I hardly know him**). Trạng từ của **good** là **well**, không phải **goodly**." },
      { type: "extension", text: "Quy tắc chính tả: tính từ tận cùng **-y** đổi thành **-ily** (**easy -> easily**); tận cùng **-le** bỏ **e** thêm **-y** (**gentle -> gently**); tận cùng **-ic** thêm **-ally** (**basic -> basically**). Lưu ý: **friendly, lovely, lonely** tận cùng **-ly** nhưng là tính từ." },
      { type: "mistake", text: "Lỗi hay gặp: đặt trạng từ giữa động từ và tân ngữ, như **She speaks fluently English** thay vì **She speaks English fluently**. Ta có thể nói **She speaks fluently** (không có tân ngữ) hoặc **She speaks English fluently**." },
      { type: "mistake", text: "Lỗi hay gặp: dùng tính từ thay cho trạng từ vì tiếng Việt dùng chung một từ, như **He drives careful** hoặc **She sings beautiful** thay vì **He drives carefully** và **She sings beautifully**. Bổ nghĩa cho động từ phải dùng trạng từ." }
    ]
  },
  { title: "Trạng từ chỉ nơi chốn phủ định đứng đầu câu", grammarId: "093", level: "B2", category: "Trạng từ",
    rule: "Trong văn phong trang trọng hoặc văn viết, khi một trạng từ phủ định hoặc giới hạn (**Nowhere, Never, Rarely, Under no circumstances**) đứng đầu câu để nhấn mạnh, ta đảo trợ động từ lên trước chủ ngữ như trong câu hỏi: **Nowhere will you find such scenery.** Nếu không có sẵn trợ động từ, ta mượn **do / does / did**: **Nowhere did I feel more welcome.** Ngoài ra, khi cụm chỉ nơi chốn (**On the hill, Here, There**) đứng đầu câu, ta đảo thẳng động từ lên trước chủ ngữ, không cần trợ động từ: **On the hilltop stood a castle.**",
    form: ["Nowhere / Never / Under no circumstances + trợ động từ + S + V-bare","Nowhere + do / does / did + S + V-bare (khi câu thường không có trợ động từ)","Nowhere + be + S + ... (Nowhere is the food better than in Hanoi)","On the hill / In the corner / Here / There + V + N (đảo thẳng động từ, S là danh từ)"],
    examples: ["Nowhere will you find such breathtaking scenery as in the Alps.","On the hilltop stood an ancient castle.","Nowhere did I feel more welcome than in Hue.","Nowhere is the food better than in Hanoi.","Here comes the bus, so hurry up."],
    wrong: "Nowhere you will find such scenery.", right: "Nowhere will you find such scenery.",
    more: [
      { type: "nuance", text: "Đảo ngữ với cụm chỉ nơi chốn chỉ dùng khi chủ ngữ là danh từ: **Here comes the bus**, nhưng với đại từ thì không đảo: **Here it comes** (không nói **Here comes it**). Kiểu đảo thẳng động từ này thường dùng với **stand, sit, lie, come, go**, và mang sắc thái văn chương, miêu tả." },
      { type: "extension", text: "Các trạng từ phủ định khác cũng gây đảo ngữ: **Never have I seen such a view**, **Rarely does he complain**, **Under no circumstances should you open this door**. Cấu trúc này thường dùng trong văn viết trang trọng, hiếm gặp trong giao tiếp thường ngày." },
      { type: "mistake", text: "Lỗi hay gặp: không đảo, như **Nowhere you can find** thay vì **Nowhere can you find**. Tiếng Việt giữ nguyên trật tự chủ ngữ - động từ, nhưng tiếng Anh phải đảo trợ động từ lên trước chủ ngữ." },
      { type: "mistake", text: "Lỗi hay gặp: chia động từ chính sau khi đã mượn trợ động từ, như **Nowhere did she found** hoặc **Nowhere does he knows** thay vì **Nowhere did she find** và **Nowhere does he know**. Sau **do / does / did**, động từ chính luôn ở dạng nguyên mẫu." }
    ]
  },
  { title: "Giới từ chỉ thời gian In On At", grammarId: "094", level: "A1", category: "Giới từ",
    rule: "Ba giới từ **at, on, in** đều có nghĩa \"vào lúc\", nhưng mỗi từ dùng cho một loại thời gian khác nhau. Dùng **at** cho giờ và mốc thời gian cụ thể (at 7 o'clock, at noon, at night, at Christmas). Dùng **on** cho thứ và ngày (on Monday, on October 15th). Dùng **in** cho tháng, năm, mùa, thế kỷ và các buổi trong ngày (in July, in 2025, in summer, in the morning). Mẹo: **at** là một điểm nhỏ, **on** là một ngày, **in** là một khoảng dài.",
    form: ["at + giờ / mốc thời gian (at 7:30, at noon, at night)","on + thứ / ngày tháng (on Monday, on 15th October)","in + tháng / năm / mùa / thế kỷ (in July, in 2025, in summer)","in + the morning / afternoon / evening (nhưng at night)","không dùng giới từ: this / next / last / every + thời gian"],
    examples: ["The concert starts at 7:30 PM sharp tonight.","My birthday is on October 15th.","We love traveling in summer.","Lan has English class on Monday morning.","What do you usually do in the evening?"],
    wrong: "The concert starts in 7:30 PM.", right: "The concert starts at 7:30 PM.",
    more: [
      { type: "nuance", text: "Các buổi trong ngày dùng **in**: **in the morning** (vào buổi sáng), **in the afternoon**, **in the evening**, nhưng ban đêm lại dùng **at night** (vào ban đêm). Khi chỉ rõ ngày, dùng **on**: **on Monday morning** (sáng thứ Hai)." },
      { type: "extension", text: "Không dùng giới từ trước **this, next, last, every, tomorrow, yesterday**: **I will see you next Monday** (tôi sẽ gặp bạn thứ Hai tới), **We study every day** (chúng tôi học mỗi ngày). Anh-Anh nói **at the weekend**, còn Anh-Mỹ thường nói **on the weekend**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **in Monday** hoặc **at Sunday** thay vì **on Monday** và **on Sunday**. Tiếng Việt dùng \"vào\" cho mọi thời điểm, nhưng tiếng Anh phải chọn giữa **at, on, in**: thứ và ngày dùng **on**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **at the morning** hoặc **in 15th October** thay vì **in the morning** và **on 15th October**. Buổi trong ngày dùng **in**, còn ngày cụ thể có số ngày thì dùng **on**." }
    ]
  },
  { title: "Giới từ chỉ nơi chốn In On At", grammarId: "095", level: "A1", category: "Giới từ",
    rule: "Ba giới từ **at, on, in** cũng dùng để chỉ nơi chốn. Dùng **at** cho một điểm hoặc địa điểm cụ thể, số nhà, sự kiện (at the bus stop, at 25 Tran Phu Street, at a party). Dùng **on** cho bề mặt, tên đường, tầng nhà (on the wall, on Tran Phu Street, on the second floor). Dùng **in** cho không gian khép kín hoặc khu vực lớn như phòng, thành phố, quốc gia (in a room, in Hanoi, in Vietnam). Mẹo: **at** là một điểm, **on** là một mặt phẳng, **in** là bên trong.",
    form: ["at + điểm cụ thể / số nhà / sự kiện (at the station, at 25 Tran Phu Street)","on + bề mặt / tên đường / tầng (on the table, on Tran Phu Street)","in + không gian kín / thành phố / quốc gia (in the room, in Hanoi)","at home / at school / at work (cụm cố định, không có the)"],
    examples: ["She is currently studying at the library.","There is a poster on the wall.","They live in Hanoi, Vietnam.","My mother is at home, but my father is at work.","Nam lives on the third floor."],
    wrong: "She is studying on the library.", right: "She is studying at the library.",
    more: [
      { type: "nuance", text: "Phân biệt **at the corner** (ở góc đường, ngã tư bên ngoài) và **in the corner** (ở góc bên trong một căn phòng). Ví dụ: **The cafe is at the corner of the street** (quán cà phê ở góc phố), **The chair is in the corner of the room** (cái ghế ở góc phòng)." },
      { type: "extension", text: "Các cụm cố định nên học thuộc: **at home, at school, at work, at the airport, at the bus stop** (ở nhà, ở trường, ở chỗ làm, ở sân bay, ở trạm xe buýt); **in bed, in the car, in a taxi**; **on the bus, on the train, on the plane**. Cụm **at** thường gắn với chức năng của nơi đó, ví dụ **at school** nghĩa là đang đi học." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I am in home** hoặc **I am at the home** thay vì **I am at home**. **At home** là cụm cố định, không cần **the** và không dùng **in**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I live in 25 Tran Phu Street** thay vì **I live at 25 Tran Phu Street** (có số nhà) hoặc **I live on Tran Phu Street** (chỉ tên đường). Khi không có số nhà, dùng **on**; có số nhà, dùng **at**." }
    ]
  },
  { title: "Giới từ chỉ phương hướng và chuyển động", grammarId: "096", level: "A2", category: "Giới từ",
    rule: "Giới từ chuyển động cho biết người hoặc vật đi theo hướng nào. **To** chỉ điểm đến (go to school), **into** chỉ đi từ ngoài vào trong (walk into the room), **out of** chỉ đi từ trong ra ngoài (come out of the house), **through** chỉ đi xuyên qua (a tunnel), **across** chỉ đi ngang từ bên này sang bên kia (a river, a road). Còn **onto, along, up, down, over, past, towards** cũng thường gặp. Các giới từ này đứng ngay trước danh từ chỉ nơi chốn.",
    form: ["S + V (chuyển động) + to / towards + N (đến, hướng về)","S + V + into / onto + N (vào trong / lên trên)","S + V + out of / off + N (ra khỏi / xuống khỏi)","S + V + through / across / along / over / past + N (đi qua, đi dọc)"],
    examples: ["She walked into the dark room and switched on the lights.","They swam across the wide river.","The train went through a long tunnel.","Why did Minh run out of the classroom?","Please walk along this road until you reach the bridge."],
    wrong: "They swam cross the wide river.", right: "They swam across the wide river.",
    more: [
      { type: "nuance", text: "Phân biệt **in** và **into**: **in** chỉ vị trí đang ở bên trong (**She is in the room** - cô ấy đang ở trong phòng), còn **into** chỉ hướng đi từ ngoài vào trong (**She walked into the room** - cô ấy đi vào phòng). Với **out of**, ta nói **She walked out of the room** (đi ra khỏi phòng)." },
      { type: "extension", text: "Một số cặp đối lập hay gặp: **up / down** (lên / xuống), **onto / off** (lên / xuống khỏi bề mặt), **into / out of** (vào / ra), **towards / away from** (về phía / ra xa). Ví dụ: **The cat jumped onto the table and then off it.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **go to home** hoặc **come to home** thay vì **go home** và **come home**. **Home** ở đây là trạng từ, không cần **to**. Tương tự: **go abroad**, **go upstairs**, **go there**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **arrive to Hanoi** thay vì **arrive in Hanoi** (thành phố, nước) hoặc **arrive at the station** (địa điểm nhỏ). Động từ **arrive** không đi với **to**, mặc dù trong tiếng Việt ta nói \"đến\"." }
    ]
  },
  { title: "Giới từ chỉ phương tiện và công cụ", grammarId: "097", level: "B1", category: "Giới từ",
    rule: "**By** + phương tiện chung chung, không có mạo từ hay tính từ sở hữu: **by bus, by train, by car, by plane**. Khi có mạo từ hoặc tính từ sở hữu, đổi sang **in** hoặc **on**: **in my car, on the bus**. Dùng **in** cho xe nhỏ ngồi gọn (car, taxi) và **on** cho phương tiện lớn có thể đi lại bên trong (bus, train, plane) hoặc ngồi trên (bike, motorbike). Đi bộ nói **on foot**. Dụng cụ tay cầm dùng **with**: **with a pen, with a knife**.",
    form: ["by + phương tiện (không mạo từ): by bus, by train, by car, by plane","in + a / my + car / taxi (xe nhỏ)","on + the / a / my + bus / train / plane / bike","on foot (đi bộ, không dùng by foot)","with + a / the + công cụ (with a pen, with a knife)"],
    examples: ["He usually travels to work by train to avoid traffic jams.","She signed the official document with a golden pen.","They went there in my car.","Nam goes to school on his bike.","Do you go to work on foot or by bus?"],
    wrong: "He travels to work by the train.", right: "He travels to work by train.",
    more: [
      { type: "nuance", text: "Phân biệt **by** và **with**: **by** thường chỉ cách thức, phương tiện nói chung (**by email, by phone, by hand**), còn **with** chỉ công cụ cụ thể mà ta cầm hoặc dùng (**cut with a knife, write with a pencil**). Cũng dùng **by** để chỉ người làm trong câu bị động: **The book was written by Lan.**" },
      { type: "extension", text: "Các cụm cố định với **by** không có mạo từ: **by email, by phone, by post, by hand, by credit card, by mistake** (do nhầm). Khi nói về phương tiện riêng, có thể chọn **in my car** (xe tôi) hoặc **by car** (đi bằng ô tô nói chung); **by car** chỉ phương tiện đi lại, còn **in my car** nhấn mạnh xe cụ thể." },
      { type: "mistake", text: "Lỗi hay gặp: nói **by foot** thay vì **on foot**. Cụm cố định này không dùng **by**, dù nghĩa là \"bằng chân\"." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I cut the cake by a knife** hoặc **by my bike** thay vì **with a knife** và **on my bike**. Công cụ cầm tay dùng **with**; phương tiện có tính từ sở hữu dùng **on** hoặc **in**, không dùng **by**." }
    ]
  },
  { title: "Cụm động từ với Take Give Make Do", grammarId: "098", level: "B1", category: "Cụm động từ",
    rule: "Cụm động từ (**phrasal verb**) gồm động từ + một hoặc hai tiểu từ (**off, up, away, with**...) và thường tạo ra nghĩa mới khác nghĩa gốc: **take off** (cởi, cất cánh), **give up** (từ bỏ), **make up** (bịa ra, làm hòa), **do away with** (loại bỏ). Nhiều cụm có tân ngữ có thể tách: **take off your shoes** hoặc **take your shoes off**. Nhưng khi tân ngữ là đại từ (**it, them, him**), bắt buộc đặt đại từ ở giữa: **take them off**, không nói **take off them**.",
    form: ["V + particle + N (take off your shoes, give up smoking)","V + N + particle (take your shoes off) (tách được)","V + pronoun + particle (take them off, không nói take off them)","V + particle + preposition + N (do away with plastic bags) (không tách)","give up + V-ing (give up smoking)"],
    examples: ["Please take off your shoes before entering the temple.","She decided to give up smoking for good.","The plane took off on time despite the fog.","Did Minh make up the whole story?","Nam is trying to do away with plastic bags in his shop."],
    wrong: "Please take off them before entering the temple.", right: "Please take them off before entering the temple.",
    more: [
      { type: "nuance", text: "Nhiều cụm có nhiều nghĩa tuỳ ngữ cảnh. **Take off** có thể là cởi (quần áo, giày), máy bay cất cánh, hoặc việc kinh doanh bắt đầu phát triển nhanh (**Her career took off**). Khi gặp cụm mới, hãy đoán nghĩa từ ngữ cảnh rồi tra từ điển." },
      { type: "extension", text: "Thêm một số cụm hay gặp: **take after** (giống ai trong gia đình), **give back** (trả lại), **give in** (chịu thua), **make up one's mind** (quyết định), **do up** (cài, buộc chặt). Ví dụ: **She takes after her mother.**" },
      { type: "advanced", text: "Cụm động từ thường mang sắc thái thân mật hơn từ đơn trang trọng tương đương: **give up** gần với **abandon / quit**, **do away with** gần với **abolish**, **make up** (bịa chuyện) gần với **invent / fabricate**. Trong văn học thuật, người ta ưu tiên các động từ đơn." },
      { type: "mistake", text: "Lỗi hay gặp: nói **give up to smoke** hoặc **give up smoke** thay vì **give up smoking**. Sau **give up**, dùng danh động từ (V-ing), không dùng **to + V** hay động từ nguyên mẫu." },
      { type: "mistake", text: "Lỗi hay gặp: dịch từng từ rồi chọn sai tiểu từ, như **take away your shoes** hoặc **take out your shoes** thay vì **take off your shoes**. Mỗi cụm động từ phải học như một khối; đổi tiểu từ là đổi nghĩa." }
    ]
  },
  { title: "Cụm động từ với Look Bring Turn Put", grammarId: "099", level: "B1", category: "Cụm động từ",
    rule: "Cụm động từ (**phrasal verbs**) gồm động từ + tiểu từ (**on, off, up, down, out, after...**) và thường có nghĩa khác hẳn động từ gốc. Ví dụ: **look after** (chăm sóc), **look for** (tìm), **look forward to** (mong chờ), **bring up** (nuôi dạy; đưa ra một vấn đề), **turn on / off** (bật / tắt), **turn down** (vặn nhỏ; từ chối), **put on** (mặc vào), **put off** (hoãn lại). Điểm cần nhớ: nhiều cụm có thể tách (**turn the music down**) và khi tân ngữ là đại từ thì bắt buộc đặt ở giữa (**turn it down**); cụm không tách như **look after** thì giữ nguyên (**look after her**).",
    form: ["S + V + particle + N (cụm tách được: turn down the music)","S + V + N + particle (turn the music down)","S + V + pronoun + particle (turn it down, put it on; KHÔNG viết turn down it)","S + look after / look for + N / pronoun (cụm không tách: look after her)","S + look forward to + N / V-ing (to là giới từ)"],
    examples: ["Please put on your coat; the room is quite chilly.","Can you turn down the music, please?","She is looking forward to meeting you.","Nam is looking after his little sister this weekend.","They put off the trip because of the rain, so they put it off until Sunday."],
    wrong: "She is looking forward to meet you.", right: "She is looking forward to meeting you.",
    more: [
      { type: "nuance", text: "Trong **look forward to**, từ **to** là giới từ chứ không phải **to** của động từ nguyên mẫu, nên theo sau là danh từ hoặc **V-ing** (**I'm looking forward to the holiday**, **looking forward to seeing you**). Cách nhớ: sau giới từ luôn dùng danh từ hoặc **V-ing**." },
      { type: "nuance", text: "Một cụm có thể có nhiều nghĩa tùy ngữ cảnh: **turn down the music** là vặn nhỏ, còn **turn down a job offer** là từ chối. Tương tự **put on a coat** (mặc vào) khác **put off a meeting** (hoãn lại). Hãy học cụm cùng một câu ví dụ để nhớ đúng nghĩa." },
      { type: "extension", text: "Thêm các cụm hay gặp: **look up** (tra cứu), **look into** (điều tra), **bring back** (mang trả lại), **bring about** (gây ra), **turn into** (biến thành), **turn out** (hóa ra là), **put away** (cất đi), **put up with** (chịu đựng). Ví dụ: **I can't put up with this noise.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **Can you turn down it?** thay vì **Can you turn it down?** Khi tân ngữ là đại từ (**it, them, her**), nó phải đứng giữa động từ và tiểu từ với các cụm tách được." },
      { type: "mistake", text: "Lỗi hay gặp: dịch từng chữ từ tiếng Việt, nói **close the light** hoặc **open the TV** thay vì **turn off the light** và **turn on the TV**. Với thiết bị và đèn, dùng cụm **turn on / turn off**." }
    ]
  },
  { title: "Câu cảm thán với What và How nâng cao", grammarId: "100", level: "A2", category: "Câu cảm thán",
    rule: "Câu cảm thán dùng để bày tỏ cảm xúc mạnh như ngạc nhiên, thích thú, bực mình. Dùng **What** trước danh từ: **What a + adj + danh từ đếm được số ít** (What a lovely day!), còn danh từ số nhiều hoặc không đếm được thì không có **a/an** (What nice flowers! What delicious food!). Dùng **How** trước tính từ hoặc trạng từ: **How beautiful! How fast she runs!** Nhớ: **What** đi với danh từ, **How** đi với tính từ hoặc trạng từ.",
    form: ["What + a / an + adj + N số ít đếm được (+ S + V)!","What + adj + N số nhiều / không đếm được (+ S + V)!","How + adj (+ S + V)!","How + adv + S + V!"],
    examples: ["What a wonderful painting this is!","How brilliantly she played the piano tonight!","What delicious food they prepared!","What a lovely day it is!","How cold it is today!"],
    wrong: "How a wonderful painting this is!", right: "What a wonderful painting this is!",
    more: [
      { type: "nuance", text: "Không dùng **a/an** trước danh từ không đếm được hoặc danh từ số nhiều: nói **What bad weather!** (Thời tiết xấu quá!), **What nice shoes!** (Đôi giày đẹp quá!). Chỉ dùng **a/an** với danh từ số ít đếm được, như **What a surprise!**." },
      { type: "extension", text: "Phần **S + V** có thể bỏ khi ai cũng hiểu: **What a pity!** (Tiếc quá!), **How lovely!** (Dễ thương quá!). Cũng có thể nói **How tall he is!** thay cho **What a tall boy he is!** vì cả hai cùng nhấn mạnh sự cao." },
      { type: "mistake", text: "Lỗi hay gặp: nói **How beautiful girl she is!** thay vì **What a beautiful girl she is!** hoặc **How beautiful she is!** Có danh từ (**girl**) thì dùng **What**; chỉ có tính từ thì dùng **How**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **What a nice flowers!** thay vì **What nice flowers!** Danh từ **flowers** là số nhiều nên không có **a**." }
    ]
  },
  
  { title: "Câu hỏi đuôi nâng cao", grammarId: "101", level: "B2", category: "Cấu trúc câu",
    rule: "Câu hỏi đuôi (**tag questions**) thường lấy trợ động từ của câu chính và đảo dấu (khẳng định thì đuôi phủ định, và ngược lại). Có một số trường hợp đặc biệt cần nhớ: rủ rê với **Let's** dùng **shall we**; câu mệnh lệnh dùng **will you**; chủ ngữ là đại từ bất định (**everyone, someone, nobody**) dùng **they** ở vế đuôi. Bẫy tinh tế: câu có từ mang nghĩa phủ định ẩn (**hardly, seldom, never, nobody**) được coi là câu phủ định, nên vế đuôi phải ở dạng khẳng định (**She hardly ever complains, does she?**).",
    form: ["Let's + V-bare..., shall we?","Imperative (V-bare / Don't + V-bare)..., will you?","Everyone / Someone / Nobody + V..., ... + they?","Câu có hardly / seldom / never / nobody..., + tag khẳng định","I am ..., aren't I?  /  I am not ..., am I?"],
    examples: ["Let's organize a surprise birthday party for her, shall we?","Open the door, will you?","Nobody called while I was out, did they?","She hardly ever complains, does she?","I am late again, aren't I?"],
    wrong: "Let's go out, will we?", right: "Let's go out, shall we?",
    more: [
      { type: "nuance", text: "Với **I am...**, đuôi phủ định chuẩn là **aren't I?** (**I am late, aren't I?**); dạng **am I not?** đúng nhưng rất trang trọng. Còn với **I am not...**, đuôi giữ **am I?** (**I am not wrong, am I?**)." },
      { type: "advanced", text: "Với **I think / I believe + clause**, đuôi chia theo mệnh đề phụ (**I think she will pass, won't she?**). Nhưng nếu chủ ngữ không phải **I** (**She thinks he is smart, doesn't she?**), đuôi chia theo mệnh đề chính." },
      { type: "extension", text: "Với **there** làm chủ ngữ giả, đuôi dùng lại **there** (**There is a problem, isn't there?**). Với **this / that**, đuôi dùng **it** (**That was easy, wasn't it?**), còn **these / those** thì dùng **they**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Nobody called, didn't they?** thay vì **Nobody called, did they?** Vì **nobody** đã mang nghĩa phủ định, tiếng Anh không để hai phủ định liền nhau, nên đuôi phải khẳng định." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Everyone enjoyed the trip, didn't it?** thay vì **didn't they?** Dù **everyone** chia động từ số ít, vế đuôi vẫn dùng đại từ **they**." }
    ]
  },
  { title: "Thức giả định nâng cao sau tính từ mạnh", grammarId: "102", level: "C1", category: "Cấu trúc câu",
    rule: "Thức giả định (**subjunctive mood**) được dùng trong mệnh đề **that** sau các tính từ chỉ sự cấp thiết hoặc tầm quan trọng tối cao (**vital, essential, imperative, crucial, mandatory**). Động từ ở mệnh đề sau luôn ở dạng **nguyên mẫu không chia** (**bare infinitive**), bất kể thì hay chủ ngữ: không thêm **-s** với **he/she/it**, không lùi thì, và dùng **be** thay cho **is/are/was/were**. Đây là văn phong trang trọng, thường gặp trong văn bản pháp lý, hành chính và học thuật.",
    form: ["It is + vital / essential / imperative / crucial + that + S + V-bare","It is + adj + that + S + not + V-bare (phủ định: not đứng trước động từ)","It is + adj + that + S + be + V3/ed (bị động)","Anh - Anh: It is + adj + that + S + should + V-bare"],
    examples: ["It is vital that every single applicant complete the security clearance form.","It is crucial that he be present at the ceremony.","It is imperative that the decision be made today.","It is essential that she not miss the deadline.","It was vital that the patient receive treatment immediately."],
    wrong: "It is vital that every applicant completes the form.", right: "It is vital that every applicant complete the form.",
    more: [
      { type: "nuance", text: "Dạng phủ định chỉ cần đặt **not** ngay trước động từ nguyên mẫu, không dùng trợ động từ **do/does/don't** (**It is essential that he not arrive late**). Câu bị động dùng **be + V3/ed** (**It is vital that she be informed**)." },
      { type: "advanced", text: "Anh - Mỹ thường dùng nguyên mẫu trực tiếp như trên, còn Anh - Anh thường thêm **should** (**It is vital that every applicant should complete the form**). Cả hai đều đúng trong văn viết trang trọng, nhưng không nên trộn lẫn trong cùng một văn bản." },
      { type: "extension", text: "Cấu trúc này cũng dùng với các tính từ như **important, necessary, urgent, advisable**, và sau các động từ như **insist, demand, recommend** (**She demanded that he apologise**). Điểm chung là ý nghĩa yêu cầu hoặc đề xuất." },
      { type: "mistake", text: "Lỗi hay gặp: nói **It is essential that he doesn't arrive late** thay vì **It is essential that he not arrive late**. Thức giả định không mượn trợ động từ để phủ định." },
      { type: "mistake", text: "Lỗi hay gặp: nói **It was vital that the patient receives treatment** thay vì **It was vital that the patient receive treatment**. Dù mệnh đề chính ở quá khứ, động từ ở mệnh đề **that** vẫn không lùi thì và không thêm **-s**." }
    ]
  },
  { title: "Đảo ngữ nâng cao với Not until", grammarId: "103", level: "C1", category: "Đảo ngữ",
    rule: "Cấu trúc **Not until** + mốc thời gian hoặc mệnh đề thời gian đứng đầu câu nhấn mạnh rằng sự việc chỉ xảy ra khi mốc đó đã tới (nghĩa: mãi đến khi... thì mới...). Phần đảo ngữ (**inversion**) được thực hiện ở **mệnh đề chính** đứng sau: trợ động từ hoặc **be** đứng trước chủ ngữ. Với thì đơn thì mượn **did / does** (**Not until he opened the box did he realize the truth**). Câu tương đương không đảo ngữ: **He didn't realize the truth until he opened the box.**",
    form: ["Not until + clause / time phrase, + did / does + S + V-bare (thì đơn)","Not until + clause / time phrase, + was / were + S + ...","Not until + clause / time phrase, + will / can / had... + S + V"],
    examples: ["Not until the manager arrived were the employees allowed to leave.","Not until he opened the box did he realize the truth.","Not until next year will the new policy take effect.","Not until midnight did the guests finally go home.","Not until she saw the results did Lan believe she had passed."],
    wrong: "Not until the manager arrived the employees were allowed to leave.", right: "Not until the manager arrived were the employees allowed to leave.",
    more: [
      { type: "nuance", text: "Mệnh đề ngay sau **Not until** giữ trật tự chủ - vị bình thường (**Not until the manager arrived**); chỉ mệnh đề chính đứng sau mới đảo ngữ (**were the employees allowed...**). Nhiều người đảo nhầm cả hai mệnh đề." },
      { type: "extension", text: "Có thể diễn đạt tương đương bằng câu chẻ: **It was not until the manager arrived that the employees were allowed to leave**. Cấu trúc **Only when / Only after** cũng đảo ngữ tương tự (**Only after the manager arrived were the employees allowed to leave**)." },
      { type: "advanced", text: "Thì của động từ phụ thuộc vào thì thực tế: mệnh đề chính ở quá khứ đơn dùng **did + V-bare**, còn với **be**, động từ khuyết thiếu hoặc thì hoàn thành thì đảo chính trợ động từ đó (**Not until midnight had the work been finished**)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Not until she left did I realized** thay vì **Not until she left did I realize**. Sau **did** động từ luôn ở dạng nguyên mẫu, dù câu ở quá khứ." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Not until the manager arrived did the employees were allowed to leave** thay vì **were the employees allowed**. Với động từ **be**, đảo chính **be** lên trước chủ ngữ, không thêm **did**." }
    ]
  },
  { title: "Câu chẻ nhấn mạnh", grammarId: "104", level: "C1", category: "Cấu trúc câu",
    rule: "Câu chẻ (**cleft sentence**) dùng để tách và nhấn mạnh một thành phần cụ thể của câu (chủ ngữ, tân ngữ, trạng ngữ). Cấu trúc: **It is / was + thành phần nhấn mạnh + who / that + clause**. Dùng **who** hoặc **that** khi nhấn mạnh người ở vị trí chủ ngữ; các trường hợp còn lại (vật, thời gian, nơi chốn, nguyên nhân) dùng **that**. Nhờ đó người nghe biết ngay đâu là thông tin quan trọng nhất.",
    form: ["It is / was + subject / object + who / that + clause","It is / was + adverbial (time / place / reason) + that + S + V","It is / was + not + element + who / that + clause (đính chính)","Is / Was + it + element + who / that + ...?","What + S + V + is / was + focused element (Wh-cleft)"],
    examples: ["It was Mary who solved the difficult quantum physics puzzle.","It was in this quiet cafe that they first met.","It is his arrogance that annoys everyone.","It wasn't Nam who broke the window; it was Minh.","What I need right now is a long vacation."],
    wrong: "It was Mary whom solved the puzzle.", right: "It was Mary who solved the puzzle.",
    more: [
      { type: "nuance", text: "Khi thành phần nhấn mạnh là trạng ngữ (thời gian, nơi chốn, nguyên nhân), bắt buộc dùng **that**, không dùng **where** hay **when** (**It was in Hanoi that we met**). Chữ **who** chỉ dùng được để nhấn mạnh người." },
      { type: "advanced", text: "Câu chẻ với **What** (**Wh-cleft / pseudo-cleft**) có dạng **What + S + V + is / was + element** (**What I need right now is a long vacation**). Dạng này tạo nhịp điệu mạnh trong bài nói và bài viết trang trọng." },
      { type: "extension", text: "Câu chẻ có thể dùng ở dạng phủ định để đính chính (**It wasn't Nam who broke the window**) hoặc dạng nghi vấn (**Was it Minh who called you?**). Thì của **be** thường theo thì của sự việc: quá khứ dùng **was**, hiện tại dùng **is**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **It was yesterday when I met her** thay vì **It was yesterday that I met her**. Với mốc thời gian, nơi chốn trong câu chẻ chỉ dùng **that**." },
      { type: "mistake", text: "Lỗi hay gặp: bỏ **It** và viết **Was in this cafe that they met** (dịch từ 'Chính ở quán này mà...') thay vì **It was in this cafe that they met**. Câu chẻ luôn cần chủ ngữ giả **It**." }
    ]
  },
  { title: "Đảo ngữ câu điều kiện ẩn If nâng cao", grammarId: "105", level: "C2", category: "Đảo ngữ",
    rule: "Trong văn phong trang trọng hoặc học thuật, có thể bỏ liên từ **if** của câu điều kiện bằng cách đảo trợ động từ lên đầu mệnh đề: **Should** (loại 1, giả sử), **Were** (loại 2), **Had** (loại 3). Nghĩa không đổi nhưng câu trang trọng hơn. Khi đảo ngữ thì tuyệt đối không dùng **if** cùng lúc, và phần phủ định dùng **not** đặt sau chủ ngữ (**Had it not been for your help...**).",
    form: ["Loại 1: Should + S + V-bare, S + will / imperative","Loại 2: Were + S + to-V / N / adj, S + would + V-bare","Loại 3: Had + S + V3/ed, S + would have + V3/ed","Phủ định: Should / Were / Had + S + not + ... (not đứng sau chủ ngữ)","Were it not for + N / Had it not been for + N, clause"],
    examples: ["Should any further technical problems arise, please contact our support team immediately.","Were I in your shoes, I would accept the offer.","Had we known about the storm, we would not have set sail.","Should you not receive the email, please call our office.","Had it not been for your help, I would have failed the exam."],
    wrong: "If should any problems arise, please contact our support team.", right: "Should any problems arise, please contact our support team.",
    more: [
      { type: "nuance", text: "Với động từ thường ở loại 2, đưa **Were** lên đầu và chuyển động từ chính về dạng **to-V** (**Were the government to raise taxes, public protest would follow**). Không viết trực tiếp động từ thường sau **Were** như **Were I know**." },
      { type: "advanced", text: "Dạng phủ định không viết tắt trợ động từ ở đầu câu: viết **Had it not been for your help**, không viết **Hadn't it been for**. Cụm **Were it not for + N** nghĩa là 'nếu không có...' (**Were it not for the rain, we would go out**)." },
      { type: "extension", text: "**Should** còn dùng khi muốn nói khả năng xảy ra thấp hoặc đưa hướng dẫn lịch sự, mệnh đề chính thường là lệnh hoặc lời mời (**Should you need any help, call me**). Có thể trộn loại 3 và loại 2: **Had I studied harder, I would be a doctor now.**" },
      { type: "mistake", text: "Lỗi hay gặp: nói **Should you will need help** thay vì **Should you need help**. Sau **Should** đảo ngữ, động từ ở dạng nguyên mẫu, không thêm **will**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Had we knew about the storm** thay vì **Had we known about the storm**. Sau **Had** đảo ngữ loại 3 phải là quá khứ phân từ (**V3/ed**)." }
    ]
  },
  { title: "Lược bỏ cấu trúc và từ thay thế", grammarId: "106", level: "C2", category: "Văn phong",
    rule: "Lược bỏ (**ellipsis**) và từ thay thế (**substitution**) giúp tránh lặp lại và làm câu gọn, tự nhiên hơn. Các cách phổ biến: **so / not** thay cho cả một mệnh đề sau các động từ như **hope, think, expect, suppose, be afraid** (**I hope so / I hope not**); trợ động từ đứng một mình thay cho cả cụm động từ đã nhắc (**and so can her brother**); **do so** thay cho cụm hành động đã nói ở trước. Quan trọng: trợ động từ phải khớp với câu trước.",
    form: ["S + hope / think / expect / suppose + so (thay cho cả mệnh đề)","S + hope / be afraid + not  /  S + don't think + so","..., and so + auxiliary + S  /  ..., and neither / nor + auxiliary + S","S + V-phrase, but S + auxiliary (+ not) (lược cụm động từ)","S + V + O, and S + did / does / do so (thay cụm hành động)"],
    examples: ["Do you think the government will lower taxes next year? - I hope not.","She can play the piano brilliantly, and so can her younger brother.","He promised to clear the desk, and he did so.","Will it rain tomorrow? - I'm afraid so.","I wasn't invited to the meeting, and neither was Nam."],
    wrong: "She can play the piano brilliantly, and so does her younger brother.", right: "She can play the piano brilliantly, and so can her younger brother.",
    more: [
      { type: "nuance", text: "Phân biệt **I hope so** và **I guess so**: **I hope so** thể hiện mong muốn tích cực của người nói; **I guess so** là đồng ý miễn cưỡng hoặc không chắc chắn. Với **think**, dạng phủ định thông dụng là **I don't think so** (dạng **I think not** rất trang trọng)." },
      { type: "advanced", text: "**Do so** thay cho một cụm động từ hành động đã nhắc trước đó (**If you wish to apply, please do so before Friday**) và trang trọng hơn **do it**. Cụm này chủ yếu dùng với hành động chủ ý, không dùng với động từ chỉ trạng thái như **know** hay **like**." },
      { type: "extension", text: "Cách đáp lại ngắn bằng trợ động từ: **Yes, I do. / No, she isn't.** Khi đồng tình với câu khẳng định dùng **so + auxiliary + S** (**I like tea. - So do I.**), với câu phủ định dùng **neither / nor + auxiliary + S** (**I don't like tea. - Neither do I.**)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I don't hope so** thay vì **I hope not**. Với **hope**, ta phủ định bằng **not** đứng sau (**I hope not**), không dùng **don't hope**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **Nam doesn't like it, and neither doesn't Lan** thay vì **and neither does Lan**. Vì **neither** đã mang nghĩa phủ định nên trợ động từ phía sau ở dạng khẳng định." }
    ]
  },
  { title: "Đảo ngữ vị trí học thuật", grammarId: "107", level: "C2", category: "Đảo ngữ",
    rule: "Đảo ngữ vị trí (**locative inversion**) dùng trong văn miêu tả trang trọng hoặc văn học: khi một cụm giới từ chỉ vị trí hoặc trạng từ chỉ hướng đứng đầu câu, **động từ được đưa trực tiếp lên trước chủ ngữ** và không mượn trợ động từ **do / does / did**. Thông tin mới (chủ ngữ) được dồn xuống cuối câu để tạo hiệu ứng như đang tả một khung cảnh (**On the top of the mountain stood an ancient monastery**).",
    form: ["Prepositional phrase + V (stand / lie / sit / hang / be) + N (chủ ngữ là danh từ)","Down / Up / Out / Away + V (come / go / fall...) + N","Here / There + V (come / go / be) + N","Directional adv + pronoun + V (KHÔNG đảo ngữ: Down it came)"],
    examples: ["On the top of the snow-capped mountain stood an ancient monastery.","Down came the heavy rain after a long dry spell.","Next to the main entrance lies the administrative building.","In the corner of the room was a small wooden table.","Here comes the bus!"],
    wrong: "On the top of the snow-capped mountain did stand an ancient monastery.", right: "On the top of the snow-capped mountain stood an ancient monastery.",
    more: [
      { type: "nuance", text: "Động từ thường là nội động từ chỉ vị trí hoặc chuyển động (**stand, lie, sit, hang, come, go**) và **be**. Câu này mang sắc thái văn chương, miêu tả: câu bình thường **An ancient monastery stood on the top of the mountain** nói cùng ý nhưng ít kịch tính hơn." },
      { type: "advanced", text: "Cụm phân từ cũng có thể đứng đầu và kéo theo đảo ngữ tương tự: **Standing in the doorway was a tall man**, **Seated at the head of the table was the director**. Cấu trúc này thường gặp trong văn viết, ít khi gặp trong hội thoại." },
      { type: "mistake", text: "Lỗi hay gặp: đảo ngữ khi chủ ngữ là đại từ, nói **Down came it** thay vì **Down it came**. Chỉ đảo ngữ với chủ ngữ là danh từ; với **he, she, it, they** thì giữ trật tự bình thường." },
      { type: "mistake", text: "Lỗi hay gặp: dịch 'Ở góc phòng có một cái bàn' thành **In the corner has a table** thay vì **In the corner stood a table** hoặc **In the corner there was a table**. Không dùng **have** theo nghĩa 'có' khi nói về vị trí." }
    ]
  },
  { title: "Thức giả định hiện tại trong câu trang trọng", grammarId: "108", level: "C2", category: "Thức giả định",
    rule: "Thức giả định hiện tại (**present subjunctive**) dùng trong văn bản pháp lý, nghị quyết, thông cáo chính thức và văn phong ngoại giao. Sau các động từ chỉ yêu cầu, mệnh lệnh, đề xuất như **decree, mandate, stipulate, move, insist, demand, order, require, recommend** + **that** thì động từ ở mệnh đề sau ở dạng **nguyên mẫu không chia**, bất kể ngôi hay thì của mệnh đề chính. Không thêm **-s**, không lùi thì; dùng **be** thay cho **is/are/was/were**.",
    form: ["S + decree / mandate / stipulate / insist / demand + that + S + V-bare","S + order / require / recommend / move + that + S + V-bare","... that + S + not + V-bare (phủ định)","... that + S + be + V3/ed (bị động)"],
    examples: ["The board of directors insisted that the chief executive officer resign immediately.","The judge ordered that the suspect be remanded in custody.","The law stipulates that every citizen pay taxes.","The committee recommended that he not be allowed to vote.","It is required that the documents be submitted on time."],
    wrong: "The board insisted that the CEO resigns.", right: "The board insisted that the CEO resign.",
    more: [
      { type: "nuance", text: "Phân biệt nghĩa với động từ như **insist** và **suggest**: khi mang nghĩa yêu cầu hoặc đề xuất thì dùng giả định (**She insisted that he be present**); khi nêu một sự thật thì dùng dạng thường (**She insisted that he was innocent**)." },
      { type: "extension", text: "Cấu trúc này cũng dùng sau danh từ cùng nghĩa (**the recommendation that he resign**, **the requirement that fees be paid**). Anh - Anh thường thêm **should** (**insisted that the CEO should resign**); Anh - Mỹ hay dùng nguyên mẫu trực tiếp như trên." },
      { type: "advanced", text: "Một số thành ngữ giả định cố định: **Be that as it may** (dù vậy đi nữa), **Far be it from me to...** (tôi đâu dám...), **God forbid** (mong sao điều đó đừng xảy ra), **Come what may** (dù có chuyện gì xảy ra đi nữa)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The judge ordered that he is released** thay vì **The judge ordered that he be released**. Bị động của thức giả định dùng **be + V3/ed**, không chia **is/was**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **The committee recommended that he doesn't vote** thay vì **that he not vote**. Phủ định chỉ cần **not** trước động từ nguyên mẫu, không mượn **do/does**." }
    ]
  },
  { title: "Mệnh đề phân từ độc lập", grammarId: "109", level: "C2", category: "Rút gọn mệnh đề",
    rule: "Mệnh đề phân từ độc lập (**absolute clause**) là mệnh đề rút gọn có chủ ngữ riêng, khác chủ ngữ của mệnh đề chính. Cấu trúc: danh từ / đại từ + phân từ (**V-ing** cho chủ động, **V3/ed** cho bị động), đứng trước hoặc sau mệnh đề chính, ngăn cách bằng dấu phẩy, thường diễn tả điều kiện, lý do hoặc thời gian (**Weather permitting, the festival will take place**). Đây là cấu trúc trang trọng, hay gặp trong văn viết.",
    form: ["N / pronoun + V-ing, main clause (chủ động)","N / pronoun + V3/ed, main clause (bị động)","N / pronoun + having + V3/ed, main clause (hoàn thành, xảy ra trước)","N / pronoun + having been + V3/ed, main clause (bị động hoàn thành)","With + N + V-ing / V3/ed / prep phrase, main clause"],
    examples: ["Weather permitting, the annual open-air festival will take place tomorrow afternoon.","All tickets having been sold out, we couldn't enter the concert hall.","The task finished, they walked out of the room happily.","Time being short, the chairman skipped the final question.","With night coming on, we decided to set up camp."],
    wrong: "Weather permits, the annual open-air festival will take place tomorrow afternoon.", right: "Weather permitting, the annual open-air festival will take place tomorrow afternoon.",
    more: [
      { type: "nuance", text: "Khác với rút gọn mệnh đề thông thường (hai vế phải cùng chủ ngữ, như **Walking home, I met Nam**), mệnh đề độc lập có **chủ ngữ riêng** (**Weather** khác **the festival**). Ngoài ra nhiều cụm trở thành cố định: **weather permitting, time permitting, all things considered**." },
      { type: "extension", text: "Với **With**, cấu trúc **With + N + V-ing / V3/ed / prep phrase** diễn tả nguyên nhân hoặc hoàn cảnh kèm theo (**With night coming on, we decided to set up camp**). Dạng này phổ biến hơn trong văn nói so với dạng không có **with**." },
      { type: "advanced", text: "Khi mệnh đề độc lập là bị động hoàn thành, có thể bỏ **having been** mà nghĩa không đổi: **The task (having been) finished, they walked out**. Dạng đầy đủ nhấn mạnh rằng sự việc đã hoàn tất trước hành động chính." },
      { type: "mistake", text: "Lỗi hay gặp: viết **Finishing dinner, the waiter brought the bill** thay vì **Dinner finished, the waiter brought the bill**. Nếu chủ ngữ của phân từ khác chủ ngữ mệnh đề chính, phải nêu chủ ngữ riêng, không để phân từ 'treo' (**dangling participle**)." },
      { type: "mistake", text: "Lỗi hay gặp: bỏ chủ ngữ và nói **Permitting, the match will go ahead** thay vì **Weather permitting, the match will go ahead**. Mệnh đề độc lập luôn cần danh từ hoặc đại từ đứng trước phân từ." }
    ]
  },
  { title: "Đảo ngữ nhượng bộ với As và Though", grammarId: "110", level: "C2", category: "Mệnh đề",
    rule: "Đảo ngữ nhượng bộ đưa tính từ, trạng từ hoặc phân từ lên đầu câu, theo sau là **as** hoặc **though**, để nhấn mạnh ý nhượng bộ (nghĩa: dù... nhưng; tương đương **Although + S + be + adj**). Cấu trúc này trang trọng và có sắc thái văn chương. Quan trọng: khi dùng cấu trúc này thì **không** dùng thêm **although**, vì **as / though** đã mang nghĩa nhượng bộ.",
    form: ["Adj / Adv + as / though + S + be / V, main clause","V3/ed + as / though + S + be, main clause","N (không mạo từ) + as / though + S + be, main clause","Much as + S + V, main clause","V-bare + as + S + may / might, main clause (Try as he might)"],
    examples: ["Exhausted as she was after the long journey, she managed to finish her report.","Defeated though they were, the team never lost their fighting spirit.","Much as I respect him, I cannot agree with his decision.","Strange though it may seem, the plan actually worked.","Try as he might, he could not open the old window."],
    wrong: "Although exhausted as she was after the long journey, she managed to finish her report.", right: "Exhausted as she was after the long journey, she managed to finish her report.",
    more: [
      { type: "nuance", text: "Với **as**, phải đảo thành phần lên đầu mới có nghĩa nhượng bộ: **Tired as she was, she kept working** (dù mệt). Còn **As she was tired, she went to bed** (không đảo) mang nghĩa nguyên nhân (vì mệt). Với **though** thì có thể nói bình thường: **Though she was tired, she kept working**." },
      { type: "advanced", text: "Khi đảo danh từ đếm được số ít lên đầu, bỏ **a/an**: **Child as he is, he speaks like an adult** (dù chỉ là một đứa trẻ), không viết **A child as he is**. Với **Much as**, nghĩa là 'dù rất...': **Much as I would like to help, I have no time.**" },
      { type: "extension", text: "Động từ nguyên mẫu cũng có thể đảo lên đầu, thường đi với **may / might**: **Try as I might, I could not remember his name.** Mẫu này nhấn mạnh rằng dù cố gắng đến đâu kết quả vẫn không như mong muốn." },
      { type: "mistake", text: "Lỗi hay gặp: dùng thêm **but** ở mệnh đề chính vì dịch 'Mặc dù... nhưng...': **Tired as she was, but she kept working** thay vì **Tired as she was, she kept working**. Tiếng Anh không dùng hai liên từ nhượng bộ cùng lúc." },
      { type: "mistake", text: "Lỗi hay gặp: giữ nguyên mạo từ khi đảo danh từ, nói **A child as he is** thay vì **Child as he is**. Danh từ đếm được số ít đứng đầu trong cấu trúc này không có **a/an**." }
    ]
  },
  { title: "Danh từ hóa trong tiếng Anh học thuật", grammarId: "111", level: "C2", category: "Văn phong",
    rule: "Danh từ hóa (**nominalization**) là biến động từ, tính từ hoặc cả mệnh đề thành cụm danh từ trừu tượng. Ví dụ: **expanded rapidly** thành **the rapid expansion of**, **analyze carefully** thành **a careful analysis of**. Trong văn học thuật, danh từ hóa giúp câu súc tích, khách quan và trang trọng, vì hành động và sự việc trở thành chủ đề của câu thay vì người thực hiện. Cách làm: đổi động từ sang danh từ cùng gốc, đổi trạng từ thành tính từ, rồi dùng **of** để nối với đối tượng.",
    form: ["S + V + O -> The + N (từ V) + of + O","S + V + adv -> The + adj + N (từ V) + of + S","S + be + adj -> The + N (từ adj) + of + S","Because + clause, clause -> N phrase + led to / resulted in + N phrase"],
    examples: ["The rapid expansion of the city caused severe environmental issues.","A careful analysis of the data was conducted over six months.","The failure of the government to act led to widespread distrust.","The introduction of stricter regulations reduced air pollution in many cities.","The importance of early education is widely recognized."],
    wrong: "The rapid expand of the city caused severe environmental issues.", right: "The rapid expansion of the city caused severe environmental issues.",
    more: [
      { type: "nuance", text: "Danh từ hóa giảm đại từ ngôi thứ nhất và thứ hai (**I, we, you**) và chuyển trọng tâm từ người thực hiện sang bản thân sự việc: **We discovered a new planet** thành **The discovery of a new planet**. Nhờ vậy văn bản nghe khách quan hơn." },
      { type: "extension", text: "Hậu tố thường gặp: **-tion / -sion** (**expand - expansion**), **-ment** (**develop - development**), **-al** (**refuse - refusal**), **-ure** (**fail - failure**); tính từ thành danh từ với **-ce / -cy / -ity / -ness** (**important - importance**, **stable - stability**)." },
      { type: "advanced", text: "Đừng lạm dụng: nhiều cụm danh từ chồng lên nhau làm câu nặng nề và khó đọc (**zombie nouns**), như **The implementation of the evaluation of the reduction...** Hãy kết hợp danh từ hóa với động từ mạnh để câu rõ ràng và có lực." },
      { type: "mistake", text: "Lỗi hay gặp: nói **the important of education** thay vì **the importance of education**. Sau **the** phải là danh từ, nên cần đổi tính từ **important** sang danh từ **importance**." },
      { type: "mistake", text: "Lỗi hay gặp: nói **the expansion city** (theo trật tự tiếng Việt 'sự mở rộng thành phố') thay vì **the expansion of the city**. Danh từ hóa nối với đối tượng bằng giới từ **of**." }
    ]
  }
  
  
];