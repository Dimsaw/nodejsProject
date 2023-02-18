const express = require("express");

const router = new express.Router();

const { asyncWrapper } = require("../helpers/apiHelpers");

const {
  getPostsController,
  getPostByIdController,
} = require("../controllers/controllers");

router.post("/registration", asyncWrapper(getPostsController));
router.post("/login", asyncWrapper(getPostByIdController));

module.exports = { authRouter: router };
