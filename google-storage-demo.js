const { Storage } = require("@google-cloud/storage");

const storage = new Storage();
const bucketName = "test-nodejs-dima";
// const filePath = "./tmp/8777a8bb-b5b8-410b-833f-58b8542e8c79.jpg";
// const destFileName = "8777a8bb-b5b8-410b-833f-58b8542e8c79.jpg";

const downloadFilePath = "8777a8bb-b5b8-410b-833f-58b8542e8c79.jpg";
const downloadFileName = "./tmp/new-file.jpg";

async function launchDemo() {
  ///Downloading
  await storage.bucket(bucketName).file(downloadFilePath).download({
    destination: downloadFileName,
  });

  console.log(
    `gs://${bucketName}/${downloadFilePath} downloaded to ${downloadFileName}.`
  );

  /// Uploading
  //   await storage.bucket(bucketName).upload(filePath, {
  //     destination: destFileName,
  //   });
  //   console.log(`${filePath} uploaded to ${bucketName}`);

  // GOOGLE_APPLICATION_CREDENTIALS=/Users/vladimirdushatsky/Desktop/MyDIsk/goit/nodeJs/nodeJsProject/gcp.json node google-storage-demo.js
}

launchDemo().catch(console.error);
