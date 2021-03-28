const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

let router = express.Router();

router.route('/auth').get(async (req, res) => {
  const token = req.headers['x-auth-token'];
  // console.log(token);
  if (!token)
    return res.json({
      status: 'Failed!',
      message: 'Token Not Found!',
    });
  const privateKey = process.env.KEY;

  try {
    let payload = await jwt.verify(token, privateKey);

    let { user } = payload;

    let result = await User.findById(user);

    res.status(200).json({
      status: 'Success',
      data: result,
    });
  } catch (err) {
    res.status(401).json({
      status: 'Failed!',
      message: 'Not authorized!',
    });
  }
});

module.exports = router;
