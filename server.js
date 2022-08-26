const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

const { connectMongo } = require('./src/db/connection');

const { postsRouter } = require('./src/routers/postsRouter');
const { authRouter } = require('./src/routers/authRouter');
const { filesRouter } = require('./src/routers/filesRouter');
const { errorHandler } = require('./src/helpers/apiHelpers');

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
app.use('/api/files', filesRouter);

//custom error
app.use(errorHandler);

const start = async () => {
  try {
    await connectMongo();

    app.listen(PORT, err => {
      if (err) {
        console.error('Error at a servers launch: ', err);
      }
      console.log(`Server works at port ${PORT}!`);
    });
  } catch (error) {
    console.error(`Failed to launch application with error: ${error.message}`);
  }
};

start();
