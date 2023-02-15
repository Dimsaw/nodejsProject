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
  await req.db.Posts.insert({ topic, text });
  res.json({ status: "success" });
};

const changePost = async (req, res) => {
  const { topic, text } = req.body;

  res.json({ status: "success" });
};

const patchPost = async (req, res) => {
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

const deletePost = async (req, res) => {
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
