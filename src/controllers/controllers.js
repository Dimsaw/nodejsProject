const ObjectId = require("mongodb").ObjectId;

const getPost = async (req, res) => {
  const posts = await req.db.Posts.find({}).toArray();
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
  await addPost({ topic, text });
  res.json({ post, status: "success" });
};

const changePost = async (req, res) => {
  const { topic, text } = req.body;

  await req.db.Posts.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { topic, text } }
  );

  res.json({ status: "success" });
};

const deletePost = async (req, res) => {
  await req.db.Posts.deleteOne({ _id: new ObjectId(req.params.id) });
  res.json({ status: "success" });
};

module.exports = {
  getPost,
  getPostById,
  addPost,
  changePost,
  deletePost,
};

// const {
//   getPosts,
//   getPostsById,
//   addPost,
//   changePostById,
//   deletePostById,
// } = require("../services/postsService");

// const getPostsController = async (req, res) => {
//   const posts = await getPosts();
//   res.json({ posts });
// };

// const getPostByIdController = async (req, res) => {
//   const { id } = req.params;
//   const post = await getPostsById(id);
//   res.json({ post, status: "success" });
// };

// const addPostController = async (req, res) => {
//   const { topic, text } = req.body;
//   await addPost({ topic, text });
//   res.json({ status: "success" });
// };

// const changePostController = async (req, res) => {
//   const { id } = req.params;
//   const { topic, text } = req.body;
//   await changePostById(id, { topic, text });
//   res.json({ status: "success" });
// };

// const deletePostController = async (req, res) => {
//   const { id } = req.params;
//   await deletePostById(id);
//   res.json({ status: "success" });
// };

// module.exports = {
//   getPostsController,
//   getPostByIdController,
//   addPostController,
//   changePostController,
//   deletePostController,
// };
