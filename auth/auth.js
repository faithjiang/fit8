
var sessions = require('../models/sessions');
var users = require('../models/users');
var Error = require('../objects/error')
var authorize_user = function(req, res, next){
  var cookie = req.cookies.sessionID;
  console.log(cookie);
  if (cookie === undefined){
    res.status(401);
    res.json(
      new Error("Authentication Failed")
    );
  } else{
    sessions.findById(cookie, function(err, id){
      if (err){
        res.status(401);
        res.json(
          new Error("Authentication Failed")
        );
      }
      req.userid = id.userid
      next();
    });
  }

}


module.exports = authorize_user
