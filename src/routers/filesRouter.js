const express = require('express');
const multer = require('multer');
const path = require('path');

const router = new express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve('../../tmp'));
  },
  filename: (req, file, cb) => {
    const [filename, extension] = file.originalname.split('.');
    cb(null, `${filename}.${extension}`);
  },
});

const { asyncWrapper } = require('../helpers/apiHelpers');
const { uploadController } = require('../controllers/filesController');
const uploadMiddleware = multer({ storage });

router.post(
  '/upload',
  uploadMiddleware.single('avatar'),
  asyncWrapper(uploadController)
);

module.exports = { filesRouter: router };
