const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const auth = async (req, res, next) => {
  const token = req.headers['x-auth-token'];
  if (!token)
    return res.status(401).json({
      status: 'Failed!',
      message: 'Token not found!',
    });

  const privateKey = process.env.KEY;

  try {
    let payload = await jwt.verify(token, privateKey);

    let { user } = payload;

    req.body.user = user;
  } catch (err) {
    res.status(401).json({
      status: 'Failed!',
      message: 'Not authorized!',
    });
  }

  next();
};

module.exports = auth;
