const { validationResult } = require('express-validator');

const checkSignup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'Failed',
      data: errors,
    });
  }
  next();
};

module.exports = {
  checkSignup,
};
