const { Post } = require('../db/postModel');
const {
  WromgParametersError,
  NotAuthorizedError,
} = require('../helpers/errors');

const getPosts = async userId => {
  const posts = await Post.find({ userId });
  return posts;
};

const getPostById = async postId => {
  const post = await Post.findOne({ _id: postId, userId });
  if (!post) {
    // return res
    //   .status(400)
    //   .json({ status: `failure, no post with id ${id} found` });
    throw new WromgParametersError(`failure, no post with id ${postId} found`);
  }
  return post;
};

const addPost = async ({ topic, text }, userId) => {
  const post = new Post({ topic, text, userId });
  await post.save();
};

const changePostById = async (postId, { topic, text }, userId) => {
  await Post.findOneAndUpdate(
    { _id: postId, userId },
    { $set: { topic, text } }
  );
  // await Post.findByIdAndUpdate(postId, { $set: { topic, text } });
};

const deletePostById = async (postId, userId) => {
  await Post.findOneAndRemove({ _id: postId }, userId);
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  changePostById,
  deletePostById,
};
