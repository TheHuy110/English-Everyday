# Tiếng Anh mỗi ngày

Học tiếng Anh miễn phí: ngữ pháp, từ vựng Oxford A1–C1, bài kiểm tra trình độ và mẹo học.

Danh sách từ: Oxford (phiên âm và âm thanh theo Oxford Learner’s Dictionaries).

## Cập nhật từ vựng
1. Đặt `oxford.csv` và `meanings.csv` (cột: `id,meaning`, id là số thứ tự trong `oxford.csv`) vào `content/`.
2. Chạy `node tools/build-vocab.js` để tạo lại `content/vocab.js` và `content/vocab-def.js`. Từ nào chưa có dòng trong `meanings.csv` thì chưa có nghĩa. Tệp `content/word-notes.csv` chỉ là ghi chú cho bạn (số thứ tự, từ, loại từ, cấp độ), trang web không đọc tệp này.
3. Đặt âm thanh vào `audio/uk_audio/` và `audio/us_audio/`.
4. Chạy `node tools/check-content.js` để kiểm tra.

## Tải nội dung theo trang
Trang chủ chỉ tải các tệp nhỏ. `grammar.js`, `questions.js`, `vocab.js`, `vocab-def.js` và `ipa.js` chỉ được tải khi mở trang cần đến chúng (xem `GROUPS` trong `app.js`).
Số liệu trên trang chủ lấy từ `content/manifest.js`. Sau khi sửa ngữ pháp, câu hỏi, bài kiểm tra, IPA hoặc từ vựng, chạy `node tools/build-manifest.js` để cập nhật tệp này.

## Câu trích dẫn cho bài “Phiên âm sang câu”
Sửa danh sách ở `tools/quotes-source.txt` (mỗi dòng: `tác giả | câu | bản dịch tiếng Việt`; độ khó theo số từ: dễ đến 5, vừa 6 đến 13, khó từ 14), rồi chạy `pip install cmudict` (một lần) và `python3 tools/build-quotes.py` để tạo lại `content/quotes.js` kèm phiên âm. Phiên âm tạo tự động nên cần đọc lại; có thể sửa tay trong `content/quotes.js`.

## Phông chữ
Đăng nhập chế độ quản trị rồi mở mục “Phông chữ” để thử 23 phông cho tiêu đề, nội dung và nhãn nhỏ. Lựa chọn chỉ lưu trong trình duyệt của bạn.

## Bài “Chọn từ khác trọng âm”
Dữ liệu ở `content/stress.js` (từ nhóm theo số âm tiết và vị trí trọng âm), tạo bằng `python3 tools/build-stress.py` từ danh sách từ và từ điển CMU, có đối chiếu với phiên âm Oxford. Chạy lại sau khi đổi `content/vocab.js`.
