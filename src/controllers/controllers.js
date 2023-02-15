const { Post } = require("../db/postModel");

const getPost = async (req, res) => {
  const posts = await Post.find({});
  res.json({ posts });
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await req.db.Posts.findOne({ _id: new ObjectId(id) });
  if (!post) {
    return res
      .status(400)
      .json({ status: `failure, no post with this id: ${id}` });
  }
  res.json({ post, status: "success" });
};

const addPost = async (req, res) => {
  const { topic, text } = req.body;
  const post = new Post({ topic, text });
  await post.save();
  res.json({ post, status: "success" });
};

const changePost = async (req, res) => {
  // const { topic, text } = req.body;
  // await req.db.Posts.updateOne(
  //   { _id: new ObjectId(req.params.id) },
  //   { $set: { topic, text } }
  // );
  // res.json({ status: "success" });
};

const deletePost = async (req, res) => {
  // await req.db.Posts.deleteOne({ _id: new ObjectId(req.params.id) });
  // res.json({ status: "success" });
};

module.exports = {
  getPost,
  getPostById,
  addPost,
  changePost,
  deletePost,
};
