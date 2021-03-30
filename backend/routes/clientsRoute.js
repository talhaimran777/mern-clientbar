const express = require('express');
const Client = require('../models/Client');
const auth = require('../middlewares/auth');
const mongoose = require('mongoose');
let router = express.Router();

router
  .route('/clients')
  .post(auth, async (req, res) => {
    const { firstName, lastName, email, phone, address, user } = req.body;

    let client = { firstName, lastName, email, phone, address, admin: user };

    try {
      let response = await Client.create(client);
      res.status(201).json({
        status: 'Success',
        data: response,
      });
    } catch (err) {
      res.status(500).json({
        status: 'Failed!',
        message: err.message,
      });
    }
  })
  .get(auth, async (req, res) => {
    const { user } = req.body;

    try {
      const clients = await Client.find({
        admin: user,
      });

      if (clients) {
        return res.json({
          status: 'Success',
          data: clients,
        });
      }
    } catch (err) {
      res.status(501).json({
        status: 'Failed!',
        message: 'Internal Server Error!',
      });
    }

    // if (user) return res.json({ status: 'Success!', data: user });
  });

module.exports = router;
