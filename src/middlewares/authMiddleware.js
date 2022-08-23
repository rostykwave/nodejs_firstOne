const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../helpers/errors');

const authMiddleware = (req, res, next) => {
  const [tokenType, token] = req.headers['autorization'];

  if (!token) {
    next(new NotAuthorizedError('Please, provide a token'));
  }

  try {
    const user = jwd.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    next(new NotAuthorizedError('Invalid token'));
  }
};

module.exports = {
  authMiddleware,
};
