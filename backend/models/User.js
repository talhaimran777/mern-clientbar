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
  // clients: [
  //   {
  //     type: mongoose.SchemaTypes.ObjectId,
  //     ref: 'Client',
  //   },
  // ],
});

let model = mongoose.model('User', schcema);
module.exports = model;
