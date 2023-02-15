const express = require("express");

const router = new express.Router();

const {
  addPostValidation,
  pathPostValidation,
} = require("../middlewares/validationMiddleware");

const { asyncWrapper } = require("../helpers/apiHelpers");

const {
  getPost,
  getPostById,
  addPost,
  changePost,
  deletePost,
} = require("../controllers/controllers");

router.get("/", asyncWrapper(getPost));

router.get("/:id", asyncWrapper(getPostById));

router.post("/", asyncWrapper(addPost));

router.put("/:id", addPostValidation, asyncWrapper(changePost));

router.delete("/:id", asyncWrapper(deletePost));

module.exports = { postsRouter: router };
