const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

const { connectMongo } = require("./src/db/connection");

const { postsRouter } = require("./src/routers/postsRouter");

const { errorHandler } = require("./src/helpers/apiHelpers");

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/posts", postsRouter);

app.use(errorHandler);

const start = async () => {
  try {
    await connectMongo();
    app.listen(PORT, (error) => {
      if (error) console.error("Error at server launch", error);
      console.log(`Server works at port ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to lauch apllication with error ${error.message}`);
  }
};

start();
