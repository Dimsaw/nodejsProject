const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8081;

const { postsRouter } = require("./routers/postsRouter.js");

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/posts", postsRouter);

app.listen(PORT, (error) => {
  if (error) console.error("Error at server launch", error);
  console.log(`Server works at port ${PORT}`);
});
