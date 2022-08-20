const express = require('express');
const router = new express.Router();

const { addPostsValidation } = require('../middlewares/validationMiddleware');
const modelsMiddleware = require('../middlewares/models');
const {
  getPosts,
  getPostById,
  addPost,
  changePost,
  deletePost,
} = require('../controllers/postsController');

router.use(modelsMiddleware);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', addPostsValidation, addPost);
router.put('/:id', addPostsValidation, changePost);
router.delete('/:id', deletePost);
module.exports = { postsRouter: router };
