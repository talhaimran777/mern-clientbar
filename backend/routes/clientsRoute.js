const express = require('express');
const Client = require('../models/Client');

let router = express.Router();

router.route('/clients').post(async (req, res) => {
  //   console.log(req.body);
  try {
    let response = await Client.create(req.body);
    console.log(response);

    res.status(201).json({
      status: 'Success',
      data: response,
    });
  } catch (err) {
    res.status(500).send('Failed!');
  }
});

module.exports = router;
