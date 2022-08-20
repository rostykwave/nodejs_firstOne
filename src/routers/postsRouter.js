const express = require('express');
const router = new express.Router();

const { addPostsValidation } = require('../middlewares/validationMiddleware');
const { asyncWrapper } = require('../helpers/apiHelpers');
const modelsMiddleware = require('../middlewares/models');
const {
  getPosts,
  getPostById,
  addPost,
  changePost,
  deletePost,
} = require('../controllers/postsController');

router.use(modelsMiddleware);

router.get('/', asyncWrapper(getPosts));
router.get('/:id', asyncWrapper(getPostById));
router.post('/', addPostsValidation, asyncWrapper(addPost));
router.put('/:id', addPostsValidation, asyncWrapper(changePost));
router.delete('/:id', asyncWrapper(deletePost));
module.exports = { postsRouter: router };
