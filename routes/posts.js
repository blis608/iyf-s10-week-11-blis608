import express from "express";
import Post from "../models/Post.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// CREATE
router.post("/", verifyToken, async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      user: req.user.id
    });

    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "username email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;