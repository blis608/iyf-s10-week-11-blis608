# CommunityHub API

A RESTful API for managing users and posts with authentication using JWT.

---

## 🚀 Features
- User Registration & Login
- JWT Authentication
- Protected Routes
- Create, Read, Update, Delete Posts
- MongoDB Database Integration

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcryptjs

---

## 📂 Project Structure
config/
models/
routes/
middleware/

---

## ⚙️ Installation

1. Clone the repository:
git clone https://github.com/blis608/iyf-s10-week-11-blis608.git

2. Navigate into the project:
cd communityhub

3. Install dependencies:
npm install

4. Create a `.env` file:
PORT=5001
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your_secret_key

5. Run the server:
npm run dev

---

## 🌐 Base URL
http://localhost:5001

---

## 🔑 API Endpoints

### Auth Routes
POST /api/auth/register  
POST /api/auth/login  

---

### Posts Routes
GET /api/posts  
POST /api/posts (Protected)  
PUT /api/posts/:id (Protected)  
DELETE /api/posts/:id (Protected)  

---

## 🔐 Authentication

Protected routes require a Bearer token.

Example:
Authorization: Bearer YOUR_TOKEN_HERE

---

## 🧪 Testing

Use Postman to test endpoints.

Steps:
1. Register a user  
2. Login to receive token  
3. Use token in protected routes  

---

## 📌 Author
blis608
