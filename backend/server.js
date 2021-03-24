const express = require('express');
const app = express();
const dotenv = require('dotenv');

// ROUTES
const usersRoute = require('./routes/usersRoute');

dotenv.config();

app.use(express.json());

// USING USERS ROUTES
app.use(usersRoute);

app.get('/', (req, res) => {
  res.status(200).send('Simple get request on route /');
});

module.exports = app;
