var express = require('express');
var auth = require('../auth/auth');
var Error = require('../objects/error')
var router = express.Router();

// Bring in models
var users = require('../models/users');

/* GET users listing. */
router.get('/', auth, function(req, res, next) {
  res.json({userid: req.userid});
});

/* POST Creates new User*/
router.post('/', function(req, res, next) {
  var new_user = req.body;
  users.create(new_user, function (err, new_user_instance){
    if (err) return handleError(err);
  });
});

router.put('/', function(req, res, next) {
  var username = req.body.username;
  users.update(new_user, function (err, new_user_instance){
    if (err) return handleError(err);
  });
});

module.exports = router;
