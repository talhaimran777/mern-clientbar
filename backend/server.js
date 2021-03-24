const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Simple get request on route /');
});

app.post('/signup', (req, res) => {
  res.status(201).send('User Created!');
});

module.exports = app;
