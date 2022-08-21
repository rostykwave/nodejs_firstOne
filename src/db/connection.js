// const { MongoClient } = require('mongodb');
// const collections = {};

// const getCollections = () => {
//   return collections;
// };
const mongoose = require('mongoose');

const connectMongo = async () => {
  return main().catch(err => console.log(err));

  async function main() {
    await mongoose.connect(process.env.MONGO_url);
  }
  // const client = await MongoClient.connect(process.env.MONGO_url, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  // const db = client.db();
  // collections.Posts = db.collection('posts');
};

module.exports = { connectMongo };
