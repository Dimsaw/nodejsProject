const { Post } = require("../db/postModel");
const { WrongsParametersError } = require("../helpers/errors");

const getPosts = async (userId) => {
  const posts = await Post.find({ userId });
  return posts;
};

const getPostsById = async (postId, userId) => {
  const post = await Post.findOne({ _id: postId, userId });
  if (!post) {
    throw new WrongsParametersError(`failure, no post with this id: ${id}`);
  }
  return post;
};

const addPost = async ({ topic, text }, userId) => {
  const post = new Post({ topic, text, userId });
  await post.save();
};

const changePostById = async (postId, { topic, text }, userId) => {
  await Post.findOneAndUpdate(
    { _id: postId, userId },
    { $set: { topic, text } }
  );
};

const deletePostById = async (postId, userId) => {
  await Post.findOneAndRemove({ _id: postId, userId });
};

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
};
