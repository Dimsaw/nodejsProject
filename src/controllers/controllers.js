const { connectMongo } = require("../db/connection");

const getPost = async (req, res) => {
  const { Posts } = await connectMongo();
  const posts = await Posts.find({}).toArray();
  res.json({ posts });
};

const getPostById = (req, res) => {
  //   const { id } = req.params;
  //   const [post] = posts.filter((item) => item.id === id);
  //   if (!post) {
  //     return res
  //       .status(400)
  //       .json({ status: `failure, no post with this id: ${id}` });
  //   }
  //   res.json({ post, status: "success" });
};

const addPost = (req, res) => {
  //   const { topic, text } = req.body;
  //   posts.push({
  //     id: uniqid(),
  //     topic,
  //     text,
  //   });
  //   res.json({ status: "success" });
};

const changePost = (req, res) => {
  //   const { topic, text } = req.body;
  //   posts.forEach((post) => {
  //     if (post.id === req.params.id) {
  //       post.topic = topic;
  //       post.text = text;
  //     }
  //   });
  //   res.json({ status: "success" });
};

const patchPost = (req, res) => {
  //   const { topic, text } = req.body;
  //   posts.forEach((post) => {
  //     if (post.id === req.params.id) {
  //       if (topic) {
  //         post.topic = topic;
  //       }
  //       if (text) {
  //         post.text = text;
  //       }
  //     }
  //   });
  //   res.json({ status: "success" });
};

const deletePost = (req, res) => {
  //   posts = posts.filter((item) => item.id !== req.params.id);
  //   res.json({ status: "success" });
};

module.exports = {
  getPost,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
};
