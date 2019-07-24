var express = require('express');
var router = express.Router();
var Error = require('../objects/error');
var Session = require('../objects/session');
// Bring in models
var users = require('../models/users');
var sessions = require('../models/sessions');

router.post('/', function(req, res, next) {
  console.log("User: " + req.body.username)
  users.findOne({ "username": req.body.username}, function(err, queried_user){
    let error = new Error("Login Failed");
    res.status(401);
    if(err){return res.json(error)};
    if(queried_user == null){return res.json(error)};
    if(queried_user.password != req.body.password){return res.json(error)};

    //let session = new Session("12345");
    let session = new Session(queried_user._id.toString());
    sessions.create(session, function (err,  created_session){
      if (err) return res.json(err);
      console.log(created_session);
      res.status(200);
      res.cookie('sessionID',created_session._id.toString(), { maxAge: 900000, httpOnly: true });
      res.json({status: 'success'});
    });
  });
});

module.exports = router;
