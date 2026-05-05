import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("CommunityHub API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// DB Connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});