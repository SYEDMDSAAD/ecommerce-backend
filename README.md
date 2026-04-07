# 🛒 E-Commerce Backend System

A scalable backend system for an e-commerce platform built using Node.js and Express. It provides RESTful APIs for managing products, users, authentication, and payments, ensuring secure and efficient operations.

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- 📦 Product management (Add, Update, Delete)
- 🛒 Order management system
- 💳 Payment integration (Razorpay)
- ⚡ RESTful API architecture
- 🔄 Secure and efficient data handling

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Payment:** Razorpay  
- **Environment:** dotenv  

---

## 📂 Project Structure

```bash
.
├── server.js          # Main server entry point
├── package.json       # Dependencies and scripts
├── package-lock.json
├── .env               # Environment variables
└── README.md
```

---

## ⚙️ Installation & Setup
📥 Clone Repository
```bash
git clone https://github.com/SYEDMDSAAD/ecommerce-backend.git
cd ecommerce-backend
```
📦 Install Dependencies
```bash
npm install
```
▶️ Run Server
```bash
npm start
```
---

## 🔐 Environment Variables

Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

---

## 🌐 API Usage

Test APIs using tools like:
- Postman  
- Thunder Client  

---

## 📘 Example Endpoints

- `POST /api/auth/register` → Register user  
- `POST /api/auth/login` → Login user  
- `GET /api/products` → Get products  
- `POST /api/order` → Create order  

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
⭐ If you like this project, give it a star!


