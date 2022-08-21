const express = require('express');
const router = new express.Router();

const { addPostsValidation } = require('../middlewares/validationMiddleware');
const { asyncWrapper } = require('../helpers/apiHelpers');
const {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController,
} = require('../controllers/postsController');

router.get('/', asyncWrapper(getPostsController));
router.get('/:id', asyncWrapper(getPostByIdController));
router.post('/', addPostsValidation, asyncWrapper(addPostController));
router.put('/:id', addPostsValidation, asyncWrapper(changePostController));
router.delete('/:id', asyncWrapper(deletePostController));
module.exports = { postsRouter: router };
