const express = require("express");

const router = new express.Router();

const {
  addPostValidation,
  pathPostValidation,
} = require("../middlewares/validationMiddleware");

const { asyncWrapper } = require("../helpers/apiHelpers");
const modelsMiddleware = require("../middlewares/models");

const {
  getPost,
  getPostById,
  addPost,
  changePost,
  deletePost,
} = require("../controllers/controllers");

router.use(modelsMiddleware);

router.get("/", asyncWrapper(getPost));

router.get("/:id", asyncWrapper(getPostById));

router.post("/", addPostValidation, asyncWrapper(addPostController));
router.put("/:id", addPostValidation, asyncWrapper(changePost));

router.delete("/:id", asyncWrapper(deletePost));

module.exports = { postsRouter: router };
