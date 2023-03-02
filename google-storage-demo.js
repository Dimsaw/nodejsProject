const { Storage } = require("@google-cloud/storage");

const storage = new Storage();
const bucketName = test - nodejs - dima;
const filePath = "./tmp/8777a8bb-b5b8-410b-833f-58b8542e8c79.jpg";
const destFileName = "8777a8bb-b5b8-410b-833f-58b8542e8c79.jpg";
async function launchDemo() {
  await storage.bucket(bucketName).upload(filePath, {
    destination: destFileName,
  });
  console.log(`${filePath} uploaded to ${bucketName}`);
}

launchDemo().catch(console.error);
