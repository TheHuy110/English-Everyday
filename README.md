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
