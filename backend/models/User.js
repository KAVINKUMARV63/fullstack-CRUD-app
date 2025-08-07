const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // no duplicate users
  },
  password: {
    type: String,
    required: true
  },
  phone: String
});

module.exports = mongoose.model('User', userSchema);
