var express = require('express');
var router = express.Router();
var Error = require('../objects/error');
var Session = require('../objects/session');

var users = require('../models/users');
var sessions = require('../models/sessions');

router.delete('/', function(req, res, next) {
  var session = req.cookies.sessionID;
  res.clearCookie('sessionID');

  sessions.findByIdAndRemove(session, function(err, removed){
    let error = new Error("Logout failed.")
    if(err){return res.json(error)};
    res.json({status: 'success'})
  });
});

module.exports = router;
