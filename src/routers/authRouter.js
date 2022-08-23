const express = require('express');
const router = new express.Router();

// const { addPostsValidation } = require('../middlewares/validationMiddleware');
const { asyncWrapper } = require('../helpers/apiHelpers');
const {
  registrationController,
  loginController,
} = require('../controllers/authController');

router.post('/registration', asyncWrapper(registrationController));
router.post('/login', asyncWrapper(loginController));

module.exports = { authRouter: router };
