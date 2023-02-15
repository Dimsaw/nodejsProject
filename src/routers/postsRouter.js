const express = require("express");

const router = new express.Router();

const {
  addPostValidation,
  pathPostValidation,
} = require("../middlewares/validationMiddleware");

const modelsMiddleware = require("../middlewares/models");

const {
  getPost,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
} = require("../controllers/controllers");

router.use(modelsMiddleware);

router.get("/", getPost);

router.get("/:id", getPostById);

router.post("/", addPostValidation, addPost);

router.put("/:id", addPostValidation, changePost);

router.patch("/:id", pathPostValidation, patchPost);

router.delete("/:id", deletePost);

module.exports = { postsRouter: router };
