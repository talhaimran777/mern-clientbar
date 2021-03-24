const express = require('express');

// CONTROLLERS
const { signup } = require('../controllers/usersController');

let router = express.Router();

router.route('/signup').post(signup);

module.exports = router;
