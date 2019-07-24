var mongoose = require('mongoose')

var sessions_schema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true
  }
});

var users = module.exports = mongoose.model('sessions', sessions_schema)
