const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user === null) {
      let createdUser = await User.create(req.body);

      // WE WILL GENEREATE A JWT

      let key = process.env.KEY;

      let token = await jwt.sign({ user: createdUser._id }, key, {
        expiresIn: '1hr',
      });

      res.status(201).json({ status: 'Success', token: token });
    } else {
      let errors = [];

      let errorObj = {
        value: email,
        msg: 'This email is already taken',
        param: 'email',
        location: 'body',
      };

      errors.push(errorObj);

      res.status(400).json({ errors });
    }
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: 'Internal server error!',
      data: err,
    });
  }
};

module.exports = {
  signup,
};
