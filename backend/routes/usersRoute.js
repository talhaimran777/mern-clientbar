const { body } = require('express-validator');
const express = require('express');

// CONTROLLERS
const { signup, login } = require('../controllers/usersController');

// MIDDLEWARES
const { checkSignup, checkLogin } = require('../middlewares/users');

let router = express.Router();

router
  .route('/signup')
  .post(
    body('name').exists().withMessage('You must enter a valid name!'),
    body('email').isEmail().withMessage('You must enter a valid email!'),
    body('password')
      .isAlphanumeric()
      .withMessage('Password must contain digits and alphabets!')
      .isLength({ min: 6, max: 10 })
      .withMessage(
        'Password length should be atlest 6 chars and a maximum of 10 chars!'
      ),
    checkSignup,
    signup
  );

router
  .route('/login')
  .post(
    body('email').isEmail().withMessage('You must enter a valid email!'),
    checkLogin,
    login
  );

module.exports = router;
