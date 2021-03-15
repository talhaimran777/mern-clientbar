const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
  res.status(200).send('/Route');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server started listening!');
});
