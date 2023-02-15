const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
const { connectMongo } = require("./src/db/connection");

const PORT = process.env.PORT || 8081;

const { postsRouter } = require("./src/routers/postsRouter");

app.use("/api/posts", postsRouter);

const start = async () => {
  await connectMongo();
  app.listen(PORT, (error) => {
    if (error) console.error("Error at server launch", error);
    console.log(`Server works at port ${PORT}`);
  });
};

start();
