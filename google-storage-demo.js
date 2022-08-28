const { Storage } = require('@google-cloud/storage');

const storage = new Storage();
const bucketName = 'goitnodejs-firstone';
// const filePath = './tmp/a2aacbce-be18-4ecb-9b5c-a2594b64edaf.png';
// const destFileName = 'a2aacbce-be18-4ecb-9b5c-a2594b64edaf.png';

const downloadDestination = './tmp/downloaded_image.png';
const downloadFileName = 'a2aacbce-be18-4ecb-9b5c-a2594b64edaf.png';

// Creates a client from a Google service account key
// const storage = new Storage({keyFilename: 'key.json'});

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

async function launchDemo() {
  //UPLOADING
  //   const options = {
  //     destination: destFileName,
  //     // preconditionOpts: { ifGenerationMatch: generationMatchPrecondition },
  //   };
  //   await storage.bucket(bucketName).upload(filePath, options);
  //   console.log(`${filePath} uploaded to ${bucketName}`);
  const options = {
    destination: downloadDestination,
  };

  // Downloads the file
  await storage.bucket(bucketName).file(downloadFileName).download(options);

  console.log(
    `gs://${bucketName}/${downloadFileName} downloaded to ${downloadDestination}.`
  );
}

launchDemo().catch(console.error);
