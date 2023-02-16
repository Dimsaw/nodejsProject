const express = require("express");

const router = new express.Router();

const {
  addPostValidation,
  pathPostValidation,
} = require("../middlewares/validationMiddleware");

const { asyncWrapper } = require("../helpers/apiHelpers");

const {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController,
} = require("../controllers/controllers");

router.get("/", asyncWrapper(getPostsController));

router.get("/:id", asyncWrapper(getPostByIdController));

router.post("/", asyncWrapper(addPost));

router.put(
  "/:id",
  addPostValidation,
  asyncWrapper(changePostControllerController)
);
router.delete("/:id", asyncWrapper(deletePostController));

module.exports = { postsRouter: router };
