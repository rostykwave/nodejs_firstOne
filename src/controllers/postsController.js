const {
  getPosts,
  getPostById,
  addPost,
  changePostById,
  deletePostById,
} = require('../services/postService');

const getPostsController = async (req, res) => {
  const { _id: userId } = req.user;

  let { skip = 0, limit = 5 } = req.query;
  skip = parseInt(skip);
  limit = parseInt(limit) > 10 ? 10 : parseInt(limit);

  const posts = await getPosts(userId, { skip, limit });

  res.json({ posts, skip, limit });
};

const getPostByIdController = async (req, res) => {
  const { id: postId } = req.params;
  const { _id: userId } = req.user;

  const post = await getPostById(postId, userId);

  res.json({ post, status: 'success' });
};

const addPostController = async (req, res) => {
  const { topic, text } = req.body;
  const { _id: userId } = req.user;

  await addPost({ topic, text }, userId);

  res.json({ status: 'success' });
};

const changePostController = async (req, res) => {
  const { id: postId } = req.params;
  const { topic, text } = req.body;
  const { _id: userId } = req.user;
  await changePostById(postId, { topic, text }, userId);

  res.json({ status: 'success' });
};

const deletePostController = async (req, res) => {
  const { id: postId } = req.params;
  const { _id: userId } = req.user;
  await deletePostById(postId, userId);
  res.json({ status: 'success' });
};

module.exports = {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController,
};
