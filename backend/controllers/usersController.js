const { body, validationResult } = require('express-validator');

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
