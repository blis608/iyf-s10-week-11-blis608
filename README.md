# CommunityHub API

A RESTful API for managing users and posts with authentication using JWT.

## 🚀 Features
- User Registration & Login
- JWT Authentication
- Protected Routes
- Create, Read, Update, Delete Posts
- Role-based Authorization (User/Admin)
- MongoDB Database Integration

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcryptjs (Password Hashing)

## 📂 Project Structure
config/
models/
controllers/
routes/
middleware/

## ⚙️ Installation

1. Clone the repository
git clone https://github.com/blis608/iyf-s10-week-11-blis608.git

2. Install dependencies
npm install

3. Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
JWT_EXPIRES_IN=7d

4. Run the server
npm run dev

## 🔑 API Endpoints

### Auth
POST /api/auth/register  
POST /api/auth/login  
GET /api/auth/me  

### Posts
GET /api/posts  
POST /api/posts (Protected)  
PUT /api/posts/:id (Protected)  
DELETE /api/posts/:id (Protected)  

## 🧪 Testing
Use Postman to test endpoints with Bearer Token authentication.

## 📌 Author
blis608