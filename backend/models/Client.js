const mongoose = require('mongoose');

let schcema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
});

let model = mongoose.model('Client', schcema);
module.exports = model;
