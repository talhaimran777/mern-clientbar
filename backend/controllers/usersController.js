const User = require('../models/User');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

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

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      let errors = [];

      let errorObj = {
        value: email,
        msg: 'Invalid email/password',
        param: 'email',
        location: 'body',
      };

      errors.push(errorObj);

      return res.status(401).json({ errors });
    } else {
      // NOW CHECK FOR THE PASSWORD

      if (password === user.password) {
        // WE WILL GENEREATE A JWT
        let key = process.env.KEY;

        let token = await jwt.sign({ user: user._id }, key, {
          expiresIn: '1hr',
        });

        res.status(200).json({
          status: 'Success',
          token,
        });
      } else {
        let errors = [];

        let errorObj = {
          value: email,
          msg: 'Invalid email/password',
          param: 'email',
          location: 'body',
        };

        errors.push(errorObj);

        return res.status(401).json({ errors });
      }
    }
    // if (user === null) {
    //   let createdUser = await User.create(req.body);

    //   // WE WILL GENEREATE A JWT

    //   let key = process.env.KEY;

    //   let token = await jwt.sign({ user: createdUser._id }, key, {
    //     expiresIn: '1hr',
    //   });

    //   res.status(201).json({ status: 'Success', token: token });
    // } else {
    //   let errors = [];

    //   let errorObj = {
    //     value: email,
    //     msg: 'This email is already taken',
    //     param: 'email',
    //     location: 'body',
    //   };

    //   errors.push(errorObj);

    //   res.status(400).json({ errors });
    // }
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: 'Internal server error!',
      data: err,
    });
  }
};

const getLoggedInUserDetails = (req, res) => {
  res.status(200).send('hello!');
};

module.exports = {
  signup,
  login,
  getLoggedInUserDetails,
};
