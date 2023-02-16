const {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
} = require("../services/postsService");

const getPostsController = async (req, res) => {
  res.json({ posts });
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) {
    return res
      .status(400)
      .json({ status: `failure, no post with this id: ${id}` });
  }
  res.json({ post, status: "success" });
};

const addPostController = async (req, res) => {
  const { topic, text } = req.body;
  const post = new Post({ topic, text });
  await post.save();
  res.json({ post, status: "success" });
};

const changePostController = async (req, res) => {
  const { id } = req.params;
  const { topic, text } = req.body;
  await Post.findByIdAndUpdate(id, { $set: { topic, text } });
  res.json({ status: "success" });
};

const deletePostController = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndRemove(id);
  res.json({ status: "success" });
};

module.exports = {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController,
};
