const User = require('../models/User');
const registerUser = async (user) => {};

const signup = (req, res) => {
  let { name, email, password } = req.body;
  res.status(201).json({
    status: 'Success',
    data: { name, email, password },
  });
};

module.exports = {
  signup,
};
