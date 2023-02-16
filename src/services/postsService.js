const { Post } = require("../db/postModel");
const { WrongsParametersError } = require("../helpers/errors");

const getPosts = async () => {
  const posts = await Post.find({});
  return posts;
};

const getPostsById = async (id) => {
  const post = await Post.findById(id);
  if (!post) {
    throw new WrongsParametersError(`failure, no post with this id: ${id}`);
  }
  return post;
};

const addPost = async ({ topic, text }) => {
  const post = new Post({ topic, text });
  await post.save();
};

const changePostById = async (id, { topic, text }) => {
  await Post.findByIdAndUpdate(id, { $set: { topic, text } });
};

const deletePostById = async (id) => {
  await Post.findByIdAndRemove(id);
};

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
};
