/* HOW TO EDIT: Grammar rules. Copy an existing { ... } entry and change it. Fields: title, level (A1-C2), category, rule (use **bold** for key words), form, examples (list), wrong, right. */
window.OEL = window.OEL || {};
var OEL = window.OEL;

/* ---------- Ngữ pháp ---------- */
OEL.grammar = [
  
  
  { title: "Thì hiện tại đơn", grammarId: "001", level: "A1", category: "Thì",
    rule: "Thì hiện tại đơn dùng để nói về thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình cố định. Ví dụ: **She walks to work every day.** (Cô ấy đi bộ đi làm mỗi ngày.) Với chủ ngữ số ít (**he**, **she**, **it**, tên một người, danh từ không đếm được), động từ thêm **-s** hoặc **-es**. Với **I**, **you**, **we**, **they** thì giữ nguyên động từ. Mẹo chính tả: động từ tận cùng bằng phụ âm + **y** đổi thành **-ies** (**fly** -> **flies**), nhưng nguyên âm + **y** chỉ thêm **-s** (**play** -> **plays**). Câu phủ định và câu hỏi dùng **do / does**, và động từ chính trở về dạng nguyên mẫu.",
    form: ["S + V(s/es)", "S + do / does + not + V-bare", "Do / Does + S + V-bare?"],
    examples: ["She walks to work every day.", "Water boils at 100 degrees Celsius.", "The train leaves at 7:15."],
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
    form: ["S + am / is / are + V-ing", "S + am / is / are + not + V-ing", "Am / Is / Are + S + V-ing?"],
    examples: ["I'm reading a book right now.", "They are staying with friends this week.", "Is it raining?"],
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
    form: ["a + N (bắt đầu bằng âm phụ âm)", "an + N (bắt đầu bằng âm nguyên âm)", "the + N (xác định / duy nhất)"],
    examples: ["I saw a dog. The dog was huge.", "She is an engineer.", "I love music."],
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
    form: ["S + V-ed / V2", "S + did + not + V-bare", "Did + S + V-bare?"],
    examples: ["We visited my grandparents last summer.", "I didn't see him yesterday.", "Did you call her?"],
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
    form: ["many / few + N (số nhiều)", "much / little + N (không đếm được)", "a lot of / plenty of + N (cả hai loại)"],
    examples: ["How many bottles do we need?", "How much water is left?", "She gave me some good advice."],
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
    form: ["S + V + adj-er + than + N", "S + V + the + adj-est", "S + V + more + adj + than + N", "S + V + the most + adj"],
    examples: ["This bag is cheaper than that one.", "It was the most interesting film of the year.", "She is taller than her brother."],
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
    form: ["S + have / has + V3/ed", "S + have / has + not + V3/ed", "Have / Has + S + V3/ed?"],
    examples: ["I have lived here for five years.", "She has just left.", "Have you ever tried sushi?"],
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
    form: ["S + modal verb + V-bare", "S + ought to + V-bare"],
    examples: ["You should rest.", "It might rain later.", "You must wear a seat belt."],
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
    form: ["Loại 1: If + S + hiện tại đơn, S + will + V-bare", "Loại 2: If + S + quá khứ đơn (were cho mọi ngôi), S + would + V-bare"],
    examples: ["If it rains, we'll stay home.", "If I had more time, I would learn the piano.", "If I were you, I would apologise."],
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
    form: ["S + be (chia đúng thì) + V3/ed + (by + tác nhân)"],
    examples: ["The bridge was built in 1998.", "English is spoken in many countries.", "The report is being written now."],
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
    form: ["N + who / which / that / whose / where + clause"],
    examples: ["The woman who called is my aunt.", "My aunt, who lives abroad, is visiting.", "The book that I bought was expensive."],
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
    form: ["S + said (that) + clause (lùi thì)", "S + asked + wh-word / if / whether + S + V"],
    examples: ["“I am tired,” she said. -> She said she was tired.", "He asked me where I lived.", "They said they had finished."],
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
    form: ["If + S + had + V3/ed, S + would / could / might have + V3/ed"],
    examples: ["If I had studied, I would have passed.", "If she hadn't missed the bus, she would have arrived on time."],
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
    form: ["Negative adverb + trợ động từ / be + S + V-bare"],
    examples: ["Never have I seen such a beautiful sunset.", "Not only did she win, but she also broke the record.", "Hardly had we arrived when it started to rain."],
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
    form: ["S + have / has + been + V-ing"],
    examples: ["It has been raining since this morning.", "They have been working here for three hours.", "How long have you been waiting?"],
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
    form: ["S + was / were + V-ing"],
    examples: ["I was reading a book at 8 PM last night.", "They were playing tennis when it started to rain.", "What were you doing at this time yesterday?"],
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
    form: ["S + had + V3/ed"],
    examples: ["By the time we arrived, the train had left.", "She had already eaten before her friends came.", "He passed the exam because he had studied hard."],
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
    form: ["S + had + been + V-ing"],
    examples: ["They had been playing football for two hours before it started to rain.", "She was tired because she had been working all night.", "He had been living in Hanoi for five years before he moved."],
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
    form: ["S + will + V-bare"],
    examples: ["I will help you with your heavy bag.", "I think it will rain tomorrow.", "Don't worry, I will call you later."],
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
    form: ["S + will + be + V-ing"],
    examples: ["At this time tomorrow, I will be flying to Tokyo.", "Don't call me at 8 PM because I will be having dinner.", "Will you be using your computer this afternoon?"],
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
    form: ["S + will + have + V3/ed"],
    examples: ["By next month, I will have finished this book.", "They will have built the bridge by the end of this year.", "Will you have completed the report by 5 PM?"],
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
    form: ["S + will + have + been + V-ing"],
    examples: ["By next year, I will have been living here for ten years.", "By the time you arrive, we will have been waiting for two hours.", "She will have been working at this company for five years by June."],
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
    form: ["If + S + hiện tại đơn, S + hiện tại đơn"],
    examples: ["If you heat ice, it melts.", "Water boils if it reaches 100 degrees Celsius.", "If plants don't get enough water, they die."],
    wrong: "If you heat ice, it will melt.", right: "If you heat ice, it melts.",
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
    form: ["If + S + had + V3/ed, S + would / could / might + V-bare"],
    examples: ["If I had studied medicine, I would be a doctor now.", "If she had saved money, she could buy the car today.", "If we had left last night, we would be home now."],
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
    form: ["N + who / which / that + clause"],
    examples: ["The man who stole my bag was caught by the police.", "This is the book that I bought yesterday.", "She likes the teacher who teaches English."],
    wrong: "The man, who stole my bag, was caught.", right: "The man who stole my bag was caught.",
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
    form: ["N (xác định), + who / which / where + clause, + ..."],
    examples: ["Hanoi, which is the capital of Vietnam, is very bustling.", "My father, who is a doctor, loves reading books.", "Mr. Smith, whom you met yesterday, is our new manager."],
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
    form: ["S + must / have to + V-bare"],
    examples: ["You must wear a helmet when riding a motorbike.", "I have to submit this report by 5 PM today.", "You don't have to pay; it's free."],
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
    form: ["S + should / ought to + V-bare"],
    examples: ["You should study harder for the final exam.", "You ought to apologize to her for your mistake.", "Should we book the tickets in advance?"],
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
    form: ["S + can / could / be able to + V-bare"],
    examples: ["She can speak three languages fluently.", "When I was young, I could run very fast.", "He will be able to finish the task tomorrow."],
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
    form: ["S + must / might / can't + V-bare"],
    examples: ["He has a new car and a big house; he must be very rich.", "She isn't answering her phone; she might be busy.", "That can't be true; I saw it with my own eyes."],
    wrong: "He must is very rich.", right: "He must be very rich.",
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
    form: ["S + verb (enjoy/mind/finish) + V-ing"],
    examples: ["She enjoys listening to classical music in her free time.", "Would you mind closing the door, please?", "He is good at playing football."],
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
    form: ["S + want / hope / decide + to-V"],
    examples: ["I want to buy a new smartphone next week.", "She decided to study abroad in Canada.", "He went to the library to borrow some books."],
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
    form: ["S + let / make / see + object + V-bare"],
    examples: ["Her parents let her stay out late on weekends.", "The teacher made us rewrite the whole essay.", "I saw him cross the street and enter the shop."],
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
    form: ["S + have / get + object (thing) + V3/ed"],
    examples: ["I need to have my laptop repaired before tomorrow.", "She got her house cleaned by a professional service last week.", "He had his passport renewed yesterday."],
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
    form: ["S + wish(es) + S + V-ed/V2 (were cho mọi ngôi)"],
    examples: ["I wish I knew the answer to this question.", "She wishes she lived closer to her workplace.", "He wishes he had more free time today."],
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
    form: ["S + wish(es) + S + had + V3/ed"],
    examples: ["I wish I had studied harder for yesterday's test.", "She wishes she hadn't said those rude words to him.", "They wish they had bought the tickets earlier."],
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
    form: ["S + V(s/es) (chỉ lịch trình/thời gian biểu cố định)"],
    examples: ["The plane departs at 6:00 AM tomorrow.", "Our classes start next Monday.", "What time does the movie finish tonight?"],
    wrong: "The plane will depart at 6:00 AM tomorrow.", right: "The plane departs at 6:00 AM tomorrow.",
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
    form: ["S + am/is/are + V-ing (có mốc thời gian tương lai)"],
    examples: ["I am seeing my dentist at 3 PM tomorrow.", "We are flying to Tokyo next week.", "What are you doing this Saturday evening?"],
    wrong: "I see my dentist tomorrow.", right: "I am seeing my dentist tomorrow.",
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
    form: ["S + am/is/are + going to + V-bare"],
    examples: ["Look at those dark clouds! It is going to rain.", "We are going to buy a new house next year.", "Are you going to watch the match tonight?"],
    wrong: "I will buy a new car, I planned it.", right: "I am going to buy a new car, I planned it.",
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
    form: ["S + stative verb (thường dùng thì đơn, không dùng V-ing)"],
    examples: ["I understand your problem right now.", "This jacket belongs to my brother.", "She loves listening to classical music."],
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
    form: ["S + make / let + object + V-bare"],
    examples: ["My parents let me stay out late on weekends.", "The teacher made us rewrite the whole essay.", "Nothing can make me change my mind."],
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
    form: ["S + verb + to-V (hướng tới tương lai / mục đích)", "S + verb + V-ing (việc đã làm hoặc đang làm; riêng stop: ngừng hẳn)"],
    examples: ["I stopped working because I was feeling exhausted.", "Please remember to lock the door.", "She stopped to take a short break."],
    wrong: "I stopped to work because I was tired.", right: "I stopped working because I was tired.",
    more: [
      { type: "extension", text: "**Regret to do** (tiếc phải làm, thường dùng khi thông báo tin xấu: **I regret to inform you...**) khác **regret doing** (hối hận vì đã làm: **I regret telling her.**)." },
      { type: "nuance", text: "**Try to do** nhấn mạnh sự cố gắng, có thể không thành công: **I tried to open the door.** (Tôi cố mở cửa.) **Try doing** là thử một cách để xem kết quả: **Try pressing the button.** (Thử bấm nút xem.)" },
      { type: "advanced", text: "**Go on to do** nghĩa là tiếp theo làm việc khác (**She went on to become a doctor.**), còn **go on doing** nghĩa là tiếp tục việc đang làm (**He went on talking.**)." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I stopped to smoke** khi muốn nói \"tôi đã bỏ thuốc\", thay vì **I stopped smoking**. **Stopped to smoke** nghĩa là dừng lại để hút thuốc." },
      { type: "mistake", text: "Lỗi hay gặp: nói **I forgot locking the door** khi muốn nói \"tôi quên khóa cửa\", thay vì **I forgot to lock the door**. **Forgot locking** nghĩa là quên mất việc mình đã khóa cửa." }
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
      { type: "nuance", text: "Khi viết lại câu với **too... to**, tuyệt đối không lặp lại tân ngữ ở cuối mệnh đề (**This box is too heavy to lift**, không viết **lift it**)." }
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
      { type: "nuance", text: "Sau **spend** là **V-ing** trực tiếp (**spend hours reading**), không dùng **to-V**." }
    ]
  },
  { title: "Cấu trúc Prefer A to B", grammarId: "049", level: "B1", category: "Cấu trúc câu",
    rule: "Dùng để diễn tả sự yêu thích một sự vật hay hoạt động này hơn một sự vật hay hoạt động khác. Bắt buộc dùng giới từ **to** để nối hai đối tượng so sánh.",
    form: ["S + prefer + N / V-ing + to + N / V-ing"],
    examples: ["I prefer drinking tea to drinking coffee.", "She prefers movies to books.", "He prefers walking to driving in rush hour."],
    wrong: "I prefer tea than coffee.", right: "I prefer tea to coffee.",
    more: [
      { type: "extension", text: "Khi dùng cấu trúc **would prefer**, đi kèm với **to-V** thay vì **V-ing**: **S + would prefer + to-V + rather than + V-bare**." }
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
      { type: "nuance", text: "Dạng phủ định chỉ dùng **in order not to** hoặc **so as not to** + V-bare, tuyệt đối không dùng **not to V** ở đầu câu để chỉ mục đích." }
    ]
  },
  { title: "Mệnh đề chỉ sự nhượng bộ", grammarId: "066", level: "B1", category: "Mệnh đề",
    rule: "**Although**, **even though**, **though** đi với mệnh đề (S + V). **In spite of** và **despite** đi với danh từ, cụm danh từ hoặc **V-ing**.",
    form: ["Although / Even though / Though + clause", "In spite of / Despite + N / V-ing"],
    examples: ["Although it was raining heavily, they went for a hike.", "Despite the heavy rain, they went for a hike."],
    wrong: "Despite it was raining, they went for a hike.", right: "Despite the heavy rain, they went for a hike.",
    more: [
      { type: "nuance", text: "Tuyệt đối không dùng **despite of** (chỉ dùng **despite** hoặc **in spite of**). Nếu muốn dùng mệnh đề sau **despite**, dùng cụm **despite the fact that + clause**." }
    ]
  },
  { title: "Cấu trúc nhượng bộ nâng cao với As và Though", grammarId: "067", level: "C1", category: "Cấu trúc câu",
    rule: "Đưa tính từ hoặc trạng từ lên đầu câu, theo sau bởi **as** hoặc **though** để diễn tả ý nghĩa 'mặc dù... thế nào đi nữa'.",
    form: ["Adj / Adv + as / though + S + V, clause"],
    examples: ["Hard as he tried, he couldn't lift the heavy weight.", "Rich as they are, they live very simply."],
    wrong: "Although hard as he tried, he failed.", right: "Hard as he tried, he couldn't lift the heavy weight.",
    more: [
      { type: "nuance", text: "Chỉ dùng **as** hoặc **though** trong cấu trúc đảo nhượng bộ này, không dùng **although**." }
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
    rule: "Thêm đuôi **-er + than** cho tính từ/trạng từ ngắn (1 âm tiết) và **more + adj/adv + than** cho từ dài (2 âm tiết trở lên). **Mẹo chính tả:** Tính từ ngắn kết thúc bằng một phụ âm đứng sau một nguyên âm thì gấp đôi phụ âm cuối trước khi thêm **-er** (**big** -> **bigger**).",
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
      { type: "nuance", text: "Phân biệt **In case** và **If**: **In case** là hành động chuẩn bị làm trước **để phòng ngừa** (mang dù trước); **If** là hành động chỉ thực hiện **sau khi** điều kiện xảy ra (mưa mới mở dù)." }
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
      { type: "nuance", text: "Phân biệt **Where** và **Wherever**: **Where** chỉ một địa điểm xác định cụ thể (**where I was born**); **Wherever** mang tính mở rộng, vô định (**bất kỳ chỗ nào**)." }
    ]
  },
  { title: "Câu mệnh lệnh kết hợp and hoặc or", grammarId: "080", level: "A2", category: "Cấu trúc câu",
    rule: "Đưa ra lời khuyên hoặc cảnh báo bằng cách dùng câu mệnh lệnh đứng đầu (**V-bare**), nối với vế sau bằng **and** (kết quả tích cực) hoặc **or / or else** (hậu quả tiêu cực).",
    form: ["V-bare..., and + S + will + V-bare", "V-bare..., or / or else + S + will + V-bare"],
    examples: ["Study hard, and you will pass the upcoming examination.", "Hurry up, or you will miss the train.", "Listen carefully, and you will understand."],
    wrong: "Study hard, and you pass the exam.", right: "Study hard, and you will pass the upcoming examination.",
    more: [
      { type: "nuance", text: "Phân biệt tương đương với câu điều kiện: **V-bare..., and...** tương đương mệnh đề **If + khẳng định**; **V-bare..., or...** tương đương mệnh đề **If + phủ định** (**If you don't hurry...**)." }
    ]
  },
  { title: "Danh từ đếm được và không đếm được nâng cao", grammarId: "081", level: "A1", category: "Danh từ",
    rule: "Danh từ đếm được có thể đếm bằng số và có dạng số nhiều; danh từ không đếm được không thể đếm trực tiếp mà phải thông qua các cụm từ định lượng (**a piece of**, **a glass of**).",
    form: ["Countable N (singular/plural)", "Uncountable N (+ a piece of / a bottle of / a cup of)"],
    examples: ["She gave me a great piece of advice.", "How much water do you drink every day?", "I need to buy some furniture for my new apartment."],
    wrong: "She gave me a great advice.", right: "She gave me a great piece of advice.",
    more: [
      { type: "nuance", text: "Phân biệt các từ có hai dạng nghĩa: **Hair** chỉ toàn bộ mái tóc là không đếm được (**Her hair is dark**), nhưng chỉ các sợi tóc riêng lẻ là đếm được (**There are two hairs on your shirt**)." }
    ]
  },
  { title: "Danh từ ghép và sở hữu cách", grammarId: "082", level: "A2", category: "Danh từ",
    rule: "Dùng danh từ ghép để chỉ tên loại đối tượng (**noun + noun**). Dùng sở hữu cách (**'s** cho danh từ số ít hoặc số nhiều bất quy tắc; **'** cho danh từ số nhiều tận cùng bằng s) để chỉ quyền sở hữu của người/động vật.",
    form: ["Noun + Noun (danh từ ghép)", "N (số ít) + 's + N", "N (số nhiều có s) + ' + N"],
    examples: ["This is my brother's laptop; he left it on the table.", "We visited the girls' dormitory yesterday.", "He bought a new bus ticket."],
    wrong: "This is my brothers laptop.", right: "This is my brother's laptop.",
    more: [
      { type: "nuance", text: "Phân biệt sở hữu với vật/thực thể vô sinh: Với đồ vật, dùng cấu trúc **N + of + N** (**the leg of the table**) chứ ít khi dùng sở hữu cách **'s** (**the table's leg**)." }
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
      { type: "nuance", text: "Phân biệt hòa hợp chủ vị: **Neither of / Either of** theo sau bởi danh từ số nhiều nhưng động từ trong ngữ pháp trang trọng luôn chia ở **số ít** (**Neither of them was present**)." }
    ]
  },
  { title: "Phân biệt Every và Each", grammarId: "087", level: "B2", category: "Từ chỉ số lượng",
    rule: "**Each** dùng cho nhóm từ 2 đối tượng trở lên, nhấn mạnh tính riêng biệt từng cá thể. **Every** dùng cho nhóm từ 3 đối tượng trở lên, nhấn mạnh tính tổng thể của cả tập hợp.",
    form: ["Each / Every + N (đếm được số ít) + V (số ít)"],
    examples: ["Each student in the class was given a unique project topic.", "Every room in this hotel has an ocean view.", "She spoke to each participant individually."],
    wrong: "Every students received a gift.", right: "Each student received a gift.",
    more: [
      { type: "nuance", text: "Phân biệt cấu trúc: **Each** có thể đứng một mình hoặc đi với **of** (**Each of the boys**), nhưng **Every** bắt buộc phải có danh từ đứng ngay sau (không dùng **Every of**)." }
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
      { type: "nuance", text: "Phân biệt **its** và **it's**: **Its** là tính từ sở hữu (**The dog wagged its tail**); **It's** là dạng viết tắt của **It is** hoặc **It has**." }
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
      { type: "nuance", text: "Phân biệt **in** và **into**: **In** chỉ vị trí tĩnh bên trong (**She is in the room**); **Into** chỉ hướng di chuyển từ ngoài vào trong (**She walked into the room**)." }
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
      { type: "nuance", text: "Phân biệt cấu trúc đặc biệt: **Look forward to** bắt buộc theo sau bởi danh từ hoặc danh động từ **V-ing** (**looking forward to seeing you**), không dùng **to V-bare**." }
    ]
  },
  { title: "Câu cảm thán với What và How nâng cao", grammarId: "100", level: "A2", category: "Câu cảm thán",
    rule: "Dùng **What** trước cụm danh từ đếm được số ít, số nhiều hoặc không đếm được; dùng **How** trước tính từ hoặc trạng từ để thể hiện cảm xúc mạnh mẽ.",
    form: ["What + (a/an) + adj + N + S + V!", "How + adj / adv + S + V!"],
    examples: ["What a wonderful painting this is!", "How brilliantly she played the piano tonight!", "What delicious food they prepared!"],
    wrong: "How a wonderful painting this is!", right: "What a wonderful painting this is!",
    more: [
      { type: "nuance", text: "Phân biệt mạo từ với danh từ không đếm được trong câu cảm thán **What**: Tuyệt đối không thêm **a/an** trước danh từ không đếm được (**What bad weather!**, không viết **What a bad weather!**)." }
    ]
  },
  
  { title: "Câu hỏi đuôi nâng cao", grammarId: "101", level: "B2", category: "Cấu trúc câu",
    rule: "Các trường hợp ngoại lệ trong câu hỏi đuôi (**tag questions**): Rủ rê với **Let's** dùng **shall we**; câu mệnh lệnh dùng **will you**; chủ ngữ là đại từ bất định chỉ người (**everyone**, **nobody**) dùng **they** ở vế đuôi. **Lỗi tinh tế hay gặp:** Khi câu có các từ mang nghĩa phủ định ẩn (**hardly**, **seldom**, **never**, **nobody**), vế đuôi bắt buộc phải ở dạng **khẳng định**.",
    form: ["Let's + V-bare..., shall we?", "Imperative sentence..., will you?", "Everyone / Nobody + V..., ... + they?"],
    examples: ["Let's organize a surprise birthday party for her, shall we?", "Open the door, will you?", "Nobody called while I was out, did they?"],
    wrong: "Let's go out, will us?", right: "Let's go out, shall we?",
    more: [
      { type: "nuance", text: "Với mệnh đề **I am...**, câu hỏi đuôi phủ định chuẩn xác là **aren't I?** (**I am late, aren't I?**). Tuy nhiên, nếu ở thể phủ định **I am not...**, câu hỏi đuôi lại giữ nguyên dạng **am I?** (**I am not wrong, am I?**)." },
      { type: "advanced", text: "Khi phát biểu ý kiến với **I think / I believe + clause**, câu hỏi đuôi được chia theo mệnh đề phụ đằng sau (**I think she will pass, won't she?**). Nhưng nếu chủ ngữ không phải là **I** (**She thinks...**), vế đuôi lại tính theo mệnh đề chính (**She thinks he is smart, doesn't she?**)." }
    ]
  },
  { title: "Thức giả định nâng cao sau tính từ mạnh", grammarId: "102", level: "C1", category: "Cấu trúc câu",
    rule: "Dùng thức giả định (**subjunctive mood**) trong mệnh đề **that** đi sau các tính từ chỉ tính cấp thiết hoặc tầm quan trọng tối cao (**vital**, **essential**, **imperative**, **crucial**, **mandatory**). Động từ ở mệnh đề sau bắt buộc luôn ở dạng **nguyên mẫu không chia** (**bare infinitive**), bất kể thì hay chủ ngữ.",
    form: ["It is vital / essential / imperative / crucial + that + S + V-bare"],
    examples: ["It is vital that every single applicant complete the security clearance form.", "It is crucial that he be present at the ceremony.", "It is imperative that the decision be made today."],
    wrong: "It is vital that every applicant completes the form.", right: "It is vital that every applicant complete the form.",
    more: [
      { type: "nuance", text: "Dạng phủ định của thức giả định chỉ đơn giản là đặt **not** ngay trước động từ nguyên mẫu (**not complete**, **not be**), tuyệt đối không dùng trợ động từ **doesn't** hay **don't** (**It is essential that he not arrive late**)." },
      { type: "advanced", text: "Trong Anh - Anh trang trọng, người nói có thể thêm **should** trước động từ nguyên mẫu (**It is vital that every applicant should complete the form**). Tuy nhiên, văn phong học thuật chuẩn mực quốc tế (Anh - Mỹ) ưu tiên dùng trực tiếp động từ nguyên mẫu câm." }
    ]
  },
  { title: "Đảo ngữ nâng cao với Not until", grammarId: "103", level: "C1", category: "Đảo ngữ",
    rule: "Khi cấu trúc **Not until** + mốc thời gian hoặc mệnh đề chỉ thời gian đứng ở đầu câu nhằm nhấn mạnh thời điểm xảy ra sự việc, hiện tượng đảo ngữ trợ động từ (**inversion**) bắt buộc phải thực hiện ở **mệnh đề chính** đằng sau.",
    form: ["Not until + time / clause + trợ động từ / be + S + V-bare"],
    examples: ["Not until the manager arrived were the employees allowed to leave.", "Not until he opened the box did he realize the truth.", "Not until 2025 will the new policy take effect."],
    wrong: "Not until the manager arrived the employees were allowed to leave.", right: "Not until the manager arrived were the employees allowed to leave.",
    more: [
      { type: "nuance", text: "Bẫy ngữ pháp cực kỳ phổ biến: Mệnh đề ngay sau **Not until** giữ nguyên trật tự chủ-vị bình thường (**Not until the manager arrived**), chỉ đảo ngữ ở mệnh đề đứng đằng sau (**were the employees allowed...**)." },
      { type: "extension", text: "Cấu trúc này tương đương với cấu trúc câu chẻ nhấn mạnh: **It was not until + time/clause + that + S + V** (**It was not until the manager arrived that the employees were allowed to leave**)." }
    ]
  },
  { title: "Câu chẻ nhấn mạnh", grammarId: "104", level: "C1", category: "Cấu trúc câu",
    rule: "Câu chẻ (**cleft sentences**) dùng để cô lập và xoáy sâu sự chú ý vào một thành phần cụ thể trong câu (chủ ngữ, tân ngữ, trạng ngữ). Cấu trúc chuẩn: **It is / was + thành phần nhấn mạnh + who / that + clause**.",
    form: ["It is / was + focused element + who / that + clause"],
    examples: ["It was Mary who solved the difficult quantum physics puzzle.", "It was in this quiet café that they first met.", "It is his arrogance that annoys everyone."],
    wrong: "It was Mary whom solved the puzzle.", right: "It was Mary who solved the puzzle.",
    more: [
      { type: "nuance", text: "Dùng **who** hoặc **that** khi nhấn mạnh chủ ngữ chỉ người. Tuy nhiên, khi thành phần nhấn mạnh là trạng ngữ (chỉ thời gian, địa điểm, nguyên nhân), bắt buộc dùng **that**, tuyệt đối không dùng **where** hay **when** (**It was in Hanoi THAT we met**, không dùng **where**)." },
      { type: "advanced", text: "Dạng câu chẻ mở rộng với **Wh-** (**Wh-cleft / Pseudo-cleft**): **What + S + V + is/was + focused element** (**What I need right now is a long vacation**). Dạng này giúp tạo nhịp điệu diễn thuyết cực kỳ ấn tượng trong bài viết C1/C2." }
    ]
  },
  { title: "Đảo ngữ câu điều kiện ẩn If nâng cao", grammarId: "105", level: "C2", category: "Đảo ngữ",
    rule: "Trái ngược với văn phong thông thường, trong văn phong học thuật C2, liên từ **if** hoàn toàn bị triệt tiêu bằng cách đảo trực tiếp các trợ động từ/động từ giả định lên đầu câu: **Should** (loại 1), **Were** (loại 2), **Had** (loại 3).",
    form: ["Should + S + V-bare, clause", "Were + S + to-V / N / adj, clause", "Had + S + V3/ed, clause"],
    examples: ["Should any further technical problems arise, please contact our support team immediately.", "Were I in your shoes, I would accept the offer.", "Had we known about the storm, we would not have set sail."],
    wrong: "If should any problems arise, contact us.", right: "Should any further technical problems arise, please contact our support team immediately.",
    more: [
      { type: "nuance", text: "Với đảo ngữ loại 2 của động từ thường: Đưa **Were** lên đầu câu và chuyển động từ chính về dạng **to-V** (**Were the government to raise taxes, public protest would follow**)." },
      { type: "advanced", text: "Đảo ngữ câu điều kiện phủ định: Khi phủ định câu đảo ngữ, từ **not** đứng ngay sau chủ ngữ, tuyệt đối không viết tắt trợ động từ lên đầu (**Had it not been for your help...**, không viết **Hadn't it been...**)." }
    ]
  },
  { title: "Lược bỏ cấu trúc và từ thay thế", grammarId: "106", level: "C2", category: "Văn phong",
    rule: "Hiện tượng lược bỏ (**ellipsis**) và từ thay thế (**substitution**) giúp loại bỏ sự trùng lặp từ ngữ, tăng tính súc tích, tinh tế cho câu. Sử dụng các đại từ/trạng từ thay thế như **so**, **not**, **do so**, hoặc lược bỏ mệnh đề trùng lặp đằng sau trợ động từ.",
    form: ["S + verb + so / not", "S + auxiliary verb (ellipsis)", "S + do so (action substitution)"],
    examples: ["Do you think the government will lower taxes next year? - I hope not.", "She can play the piano brilliantly, and so can her younger brother.", "He promised to clear the desk, and he did so."],
    wrong: "I hope that they will not lower taxes.", right: "I hope not.",
    more: [
      { type: "nuance", text: "Phân biệt **I hope so** và **I guess so**: **I hope so** thể hiện mong muốn tích cực của người nói; **I guess so** thể hiện sự đồng ý miễn cưỡng hoặc thiếu chắc chắn." },
      { type: "advanced", text: "Sử dụng cụm **do so** để thay thế cho một cụm động từ hành động đã được nhắc đến ở vế trước (**If you wish to apply, please do so before Friday**). **Do so** trang trọng hơn nhiều so với việc chỉ dùng **do it**." }
    ]
  },
  { title: "Đảo ngữ vị trí học thuật", grammarId: "107", level: "C2", category: "Đảo ngữ",
    rule: "Trong văn phong miêu tả trang trọng, văn học hoặc phân tích không gian, khi trạng từ/cụm giới từ chỉ vị trí (**locative inversion**) hoặc phương hướng đứng đầu câu, **động từ chính được đảo trực tiếp lên trước chủ ngữ** mà không mượn trợ động từ do/does/did.",
    form: ["Prepositional phrase / Directional adv + verb (chia trực tiếp) + S"],
    examples: ["On the top of the snow-capped mountain stood an ancient monastery.", "Down came the heavy rain after a long dry spell.", "Next to the main entrance lies the administrative building."],
    wrong: "On the top of the mountain did stand a monastery.", right: "On the top of the snow-capped mountain stood an ancient monastery.",
    more: [
      { type: "nuance", text: "Điều kiện bắt buộc: Động từ chính phải là nội động từ chỉ trạng thái hoặc chuyển động (**stand**, **lie**, **sit**, **come**, **go**), và chủ ngữ phải là **danh từ**." },
      { type: "advanced", text: "Lỗi bẫy C2: Nếu chủ ngữ là một **đại từ nhân xưng** (**he**, **she**, **it**, **they**), tuyệt đối KHÔNG thực hiện đảo ngữ (**Down it came**, không viết **Down came it**)." }
    ]
  },
  { title: "Thức giả định hiện tại trong câu trang trọng", grammarId: "108", level: "C2", category: "Thức giả định",
    rule: "Sử dụng trong văn bản pháp lý, nghị quyết, thông cáo chính thức hoặc văn phong ngoại giao. Đứng sau các động từ như **decree**, **mandate**, **stipulate**, **move**, **command** + **that** + S + động từ nguyên mẫu không chia (**present subjunctive**).",
    form: ["S + decree / mandate / stipulate / move + that + S + V-bare"],
    examples: ["The board of directors insisted that the chief executive officer resign immediately.", "The judge ordered that the suspect be remanded in custody.", "The law stipulates that every citizen pay taxes."],
    wrong: "The board insisted that the CEO resigns.", right: "The board insisted that the CEO resign.",
    more: [
      { type: "nuance", text: "Dạng bị động của thức giả định hiện tại có cấu trúc là **be + V3/ed** (**It is required that the documents be submitted on time**), không chia **is/are/was/were**." },
      { type: "advanced", text: "Thức giả định cố định trong các thành ngữ cổ trang trọng (**fixed subjunctive phrases**): **Be that as it may** (Dù có như thế đi nữa), **Far be it from me to...** (Tôi đâu dám...), **God forbid** (Trời phật phù hộ / Đừng để xảy ra), **Come what may** (Dù có chuyện gì xảy ra)." }
    ]
  },
  { title: "Mệnh đề phân từ độc lập", grammarId: "109", level: "C2", category: "Rút gọn mệnh đề",
    rule: "Mệnh đề phân từ độc lập (**absolute participial clauses**) là mệnh đề rút gọn có chủ ngữ riêng biệt (không trùng với chủ ngữ mệnh đề chính). Hai mệnh đề ngăn cách bằng dấu phẩy và nối với nhau bằng danh từ/đại từ + phân từ (**V-ing** cho chủ động, **V3/ed** cho bị động).",
    form: ["Noun / Pronoun + V-ing / V3/ed / Adj, + main clause"],
    examples: ["Weather permitting, the annual open-air festival will take place tomorrow afternoon.", "All tickets having been sold out, we couldn't enter the concert hall.", "The task finished, they walked out of the room happily."],
    wrong: "Weather permits, the festival will take place.", right: "Weather permitting, the annual open-air festival will take place tomorrow afternoon.",
    more: [
      { type: "nuance", text: "Phân biệt với rút gọn mệnh đề thông thường: Rút gọn thông thường bắt buộc hai vế phải **chủ ngữ trùng nhau**. Mệnh đề độc lập dùng khi hai vế có **hai chủ ngữ hoàn toàn khác nhau** (**Weather** vs **The festival**)." },
      { type: "advanced", text: "Cấu trúc độc lập đi với giới từ **With**: **With + N + V-ing / V3/ed / Prep phrase** diễn tả nguyên nhân hoặc hoàn cảnh kèm theo (**With night coming on, we decided to set up camp**)." }
    ]
  },
  { title: "Đảo ngữ nhượng bộ với As và Though", grammarId: "110", level: "C2", category: "Mệnh đề",
    rule: "Đưa tính từ, trạng từ, hoặc động từ phân từ lên đầu câu đi liền với **as** hoặc **though** nhằm tạo sự nhấn mạnh cực đại vào tính chất nhượng bộ (tương đương với **Although + S + be + adj**).",
    form: ["Adj / Adv / Participle + as / though + S + be / verb, + main clause"],
    examples: ["Exhausted as she was after the long journey, she managed to finish her report.", "Defeated though they were, the team never lost their fighting spirit.", "Much as I respect him, I cannot agree with his decision."],
    wrong: "Although exhausted as she was, she finished her report.", right: "Exhausted as she was after the long journey, she managed to finish her report.",
    more: [
      { type: "nuance", text: "Khi đảo ngữ với danh từ đếm được số ít, mạo từ **a/an** phải bị loại bỏ tuyệt đối (**Child as he is, he speaks like an adult**, không dùng **A child as he is**)." },
      { type: "advanced", text: "Biến thể nhượng bộ với trạng từ **Much**: **Much as + S + V** mang nghĩa 'Mặc dù rất...' (**Much as I would like to help, I have no time**). Cấu trúc này xuất hiện dày đặc trong bài thi Writing C1/C2." }
    ]
  },
  { title: "Danh từ hóa trong tiếng Anh học thuật", grammarId: "111", level: "C2", category: "Văn phong",
    rule: "Danh từ hóa (**nominalization**) là quá trình biến đổi động từ, tính từ hoặc cả mệnh đề thành các cụm danh từ trừu tượng. Đây là tiêu chuẩn cốt lõi trong văn phong học thuật C2 nhằm tăng độ trang trọng, tính khách quan và súc tích cho bài viết.",
    form: ["Clause (S + V + O) -> Abstract Noun Phrase (The + N + of + N)"],
    examples: ["Because the city expanded rapidly, it caused severe environmental issues. -> The rapid expansion of the city caused severe environmental issues.", "We analyzed the data carefully. -> A careful analysis of the data was conducted."],
    wrong: "The city expanding rapidly caused issues.", right: "The rapid expansion of the city caused severe environmental issues.",
    more: [
      { type: "nuance", text: "Lợi ích của danh từ hóa: Loại bỏ bớt các đại từ xưng hô cá nhân (**I**, **we**, **you**), chuyển góc nhìn từ 'người thực hiện hành động' sang 'bản thân sự việc/nguyện lý' (**We discovered... -> The discovery of...**)." },
      { type: "advanced", text: "Bẫy lạm dụng danh từ hóa (**zombie nouns**): Mặc dù danh từ hóa nâng tầm văn phong học thuật, việc lạm dụng quá nhiều cụm danh từ phức tạp liên tiếp có thể khiến câu văn trở nên nặng nề, trì trệ và khó đọc. Cần phối hợp hài hòa giữa danh từ hóa và động từ mạnh." }
    ]
  }
  
  
];