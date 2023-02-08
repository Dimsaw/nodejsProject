const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");

const posts = [
  { id: "1", topic: "test1", text: "test text1" },
  { id: "2", topic: "test2", text: "test text2" },
  { id: "3", topic: "test3", text: "test text3" },
  { id: "4", topic: "test4", text: "test text4" },
  { id: "5", topic: "test5", text: "test text5" },
  { id: "6", topic: "test6", text: "test text6" },
];

router.get("/", (req, res) => {
  res.json({ posts, status: "success" });
});

router.get("/:id", (req, res) => {
  const [post] = posts.filter((item) => item.id === req.params.id);
  res.json({ post, status: "success" });
});

router.post("/", (req, res) => {
  const { topic, text } = req.body;
  posts.push({
    id: uniqid(),
    topic,
    text,
  });
  res.json({ status: "success" });
});

// router.push("/:id", (req, res) => {});

// router.delete("/:id", (req, res) => {});

module.exports = { postsRouter: router };
