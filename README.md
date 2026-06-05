# Web Mức 2 - Frontend (Lab 2TH2)

Đây là Frontend cho Lab 2TH2 của ứng dụng chia sẻ ảnh, xây dựng bằng ReactJS, gọi API tới Backend MongoDB ở Mức 2.

## Hướng dẫn chạy dự án trên máy (Local)

**Bước 1:** Cài đặt thư viện
```bash
npm install
```

**Bước 2:** Chạy ứng dụng
```bash
npm start
```
Ứng dụng sẽ tự động kết nối với Backend đang chạy ở `http://localhost:8081`.

---

## Hướng dẫn cấu hình khi chạy trên CodeSandbox

CodeSandbox hỗ trợ chạy hoàn hảo dự án React này, nhưng vì Frontend và Backend của bạn nằm ở 2 thư mục/repository khác nhau (tức là chúng sẽ nằm ở 2 Sandbox riêng biệt), bạn cần kết nối chúng lại với nhau:

1. Import thư mục **Back** vào CodeSandbox và copy đường link URL (trên thanh địa chỉ trình duyệt thu nhỏ của CodeSandbox) của Backend. VD: `https://abcdxyz.csb.app`
2. Import thư mục **Font** vào CodeSandbox.
3. Để Frontend biết cần gọi API đến đâu, hãy tạo một file có tên `.env` ở **thư mục gốc** của Frontend (ngang hàng với `package.json`), và nhập nội dung sau:
   ```env
   REACT_APP_API_URL=https://<đường-link-backend-của-bạn>
   ```
   *(Thay `<đường-link-backend-của-bạn>` bằng URL bạn vừa copy ở Bước 1, **Lưu ý: bỏ dấu `/` ở cuối đường link**)*
4. CodeSandbox sẽ tự động tải lại và Frontend của bạn sẽ kết nối thành công với Backend!
