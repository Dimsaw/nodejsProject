const { Post } = require("../db/postModel");

const getPosts = () => {
  const posts = await Post.find({});
};

const getPostsById = () => {};

const addPost = () => {};

const changePostById = () => {};

const deletePostById = () => {};

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
};
