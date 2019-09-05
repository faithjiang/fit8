var mongoose = require('mongoose')

var users_schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

var users = module.exports = mongoose.model('users', users_schema)
