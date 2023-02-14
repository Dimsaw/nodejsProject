const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

const PORT = process.env.PORT || 8081;

const { postsRouter } = require("./src/routers/postsRouter");

app.use("/api/posts", postsRouter);

const start = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();

  const Posts = db.collection("posts");
  const posts = await Posts.find({}).toArray();
  console.log(posts);
  app.listen(PORT, (error) => {
    if (error) console.error("Error at server launch", error);
    console.log(`Server works at port ${PORT}`);
  });
};

start();

// app.listen(PORT, (error) => {
//   if (error) console.error("Error at server launch", error);
//   console.log(`Server works at port ${PORT}`);
// });
