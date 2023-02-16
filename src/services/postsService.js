const { Post } = require("../db/postModel");

const getPosts = async () => {
  const posts = await Post.find({});
};

const getPostsById = async () => {};

const addPost = async () => {};

const changePostById = async () => {};

const deletePostById = async () => {};

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
};
