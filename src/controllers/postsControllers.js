const {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
} = require("../services/postsService");

const getPostsController = async (req, res) => {
  console.log(req.user);
  const { _id: userId } = req.user;
  const posts = await getPosts(userId);
  res.json({ posts });
};

const getPostByIdController = async (req, res) => {
  const { id: postId } = req.params;
  const { _id: userId } = req.user;
  const post = await getPostsById(postId, userId);
  res.json({ post, status: "success" });
};

const addPostController = async (req, res) => {
  const { topic, text } = req.body;
  const { _id: userId } = req.user;
  await addPost({ topic, text }, userId);
  res.json({ status: "success" });
};

const changePostController = async (req, res) => {
  const { id: postId } = req.params;
  const { _id: userId } = req.user;
  const { topic, text } = req.body;
  await changePostById(postId, { topic, text }, userId);
  res.json({ status: "success" });
};

const deletePostController = async (req, res) => {
  const { id: postId } = req.params;
  const { _id: userId } = req.user;
  await deletePostById(postId, userId);
  res.json({ status: "success" });
};

module.exports = {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController,
};
