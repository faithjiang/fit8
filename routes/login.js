var express = require('express');
var router = express.Router();

// Bring in models
var users = require('../models/users');

router.post('/', function(req, res, next) {
  console.log("User: " + req.body.username)
  var query = { "username": req.body.username}
  users.find(query, 'password', function(err, queried_user){
    if(err){
      console.log(err);
    } else {
      if(queried_user){
        if(queried_user[0].password == req.body.password){
          res.json({status: 'success'});
        } else {
          res.json({status:'fail'});
        }
      } else {
        res.json({status:'fail'});
      }
    }
  });
});

module.exports = router;
