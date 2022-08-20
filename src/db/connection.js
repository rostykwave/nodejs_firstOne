const { MongoClient } = require('mongodb');
const collections = {};

const getCollections = () => {
  return collections;
};

const connectMongo = async () => {
  const client = await MongoClient.connect(process.env.MONGO_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();

  collections.Posts = db.collection('posts');
};

module.exports = { connectMongo, getCollections };
