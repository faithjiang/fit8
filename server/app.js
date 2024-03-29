var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./routes/login');
var logout = require('./routes/logout');


// DB Connection
mongoose.connect('mongodb://localhost:27017/fit8', { useNewUrlParser: true});
var db = mongoose.connection
// Check for db errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Check for db connection
db.once('open', function() {
  console.log("Connected to DB.")
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// Add middleware libraries
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login)
app.use('/logout', logout)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});



module.exports = app;
