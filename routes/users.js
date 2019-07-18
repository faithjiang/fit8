var express = require('express');
var router = express.Router();

// Bring in models
var users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get all users');
});

router.get('/one', function(req, res, next) {
  res.send('get one user');
});

/* POST Creates new User*/
router.post('/', function(req, res, next) {
  var new_user = req.body;
  users.create(new_user, function (err, new_user_instance){
    if (err) return handleError(err);
  });
});

module.exports = router;
