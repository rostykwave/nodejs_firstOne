const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { User } = require('../db/userModel');
const { NotAuthorizedError } = require('../helpers/errors');

const registration = async (email, password) => {
  const user = new User({ email, password });

  await user.save();

  const msg = {
    to: email,
    from: 'jakeko2012@gmail.com',
    subject: 'Thank you for registration!',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<h1>and easy to do anywhere, even with Node.js</h1>',
  };

  await sgMail.send(msg);
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new NotAuthorizedError(`No user with email '${email}' found`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError(`Wrong password`);
  }

  const token = jwt.sign(
    {
      _id: user._id,
      createdAt: user.createdAt,
    },
    process.env.JWT_SECRET
  );

  return token;
};

module.exports = {
  registration,
  login,
};
