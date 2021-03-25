const mongoose = require('mongoose');

let schcema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
});

let model = mongoose.model('User', schcema);
module.exports = model;
