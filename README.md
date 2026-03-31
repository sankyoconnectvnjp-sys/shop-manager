# 🛍️ Cửa Hàng Của Mẹ - Hướng Dẫn Setup

## Cấu trúc file
```
shop-manager/
├── index.html          # Trang đăng nhập
├── server.js           # Express server (Railway)
├── package.json
├── manifest.json       # PWA
├── css/
│   └── main.css
├── js/
│   ├── firebase-config.js  ⚠️ Cần cập nhật config
│   └── utils.js
└── pages/
    ├── dashboard.html  # Tổng quan
    ├── sales.html      # Bán hàng
    ├── inventory.html  # Kho hàng
    ├── debt.html       # Công nợ
    └── report.html     # Báo cáo
```

---

## Bước 1: Tạo Firebase Project

1. Vào [firebase.google.com](https://firebase.google.com) → **Add project**
2. Tên project: `shop-manager-me` (hoặc tuỳ ý)
3. Bật **Authentication** → Sign-in method → **Email/Password** → Enable
4. Bật **Firestore Database** → Create database → **Start in production mode**
5. Vào **Project Settings** → Your apps → **Web** → Copy config

---

## Bước 2: Cập nhật Firebase Config

Mở file `js/firebase-config.js` và thay toàn bộ giá trị:

```js
const FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc"
};
```

---

## Bước 3: Tạo tài khoản cho mẹ đăng nhập

Trong Firebase Console:
- **Authentication** → **Users** → **Add user**
- Nhập email + mật khẩu cho mẹ

---

## Bước 4: Cấu hình Firestore Rules

Vào Firestore → Rules → thay bằng:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## Bước 5: Deploy lên Railway

```bash
# Push code lên GitHub trước
git init
git add .
git commit -m "shop manager"
git push origin main

# Trên Railway:
# New Project → Deploy from GitHub → chọn repo
# Railway tự detect Node.js và chạy npm start
```

---

## Tính năng

| Module | Chức năng |
|--------|-----------|
| 📦 Kho hàng | Thêm/sửa/xóa sản phẩm, theo dõi tồn kho, cảnh báo hết hàng |
| 🛒 Bán hàng | Chọn hàng → tạo đơn → cập nhật tồn kho tự động |
| 📋 Công nợ | Ghi nợ khách, đánh dấu đã thu, tổng hợp công nợ |
| 📊 Báo cáo | Doanh thu theo ngày/tháng, top sản phẩm, lịch sử đơn |

---

## Ghi chú

- App hỗ trợ cả **điện thoại** và **máy tính**
- Có thể cài như app (PWA) trên điện thoại: vào trang web → "Thêm vào màn hình chính"
