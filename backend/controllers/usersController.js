const User = require('../models/User');
const registerUser = async (user) => {};

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user === null) {
      let createdUser = await User.create(req.body);
      res.status(201).json({
        status: 'Success',
        data: createdUser,
      });
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
