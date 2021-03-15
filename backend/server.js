const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
  res.status(200).send('Simple get request on route /');
});

module.exports = app;
