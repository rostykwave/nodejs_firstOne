const express = require('express');
const router = new express.Router();

// const { addPostsValidation } = require('../middlewares/validationMiddleware');
const { asyncWrapper } = require('../helpers/apiHelpers');
// const {
//   getPostsController,
//   getPostByIdController,
//   addPostController,
//   changePostController,
//   deletePostController,
// } = require('../controllers/postsController');

router.post('/', asyncWrapper(postPostsController));
router.post('/:id', asyncWrapper(getPostByIdController));

module.exports = { authRouter: router };
