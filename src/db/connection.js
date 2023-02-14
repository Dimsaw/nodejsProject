const MongoClient = require("mongodb").MongoClient;

const connectMongo = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();

  const Posts = db.collection("posts");
  console.log("everithing good");
  return { Posts };
};

module.exports = { connectMongo };
