var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var peacockRouter = require('./routes/peacock');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var peacock = require("./models/peacock");
var resourceRouter = require('./routes/resource');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/peacock', peacockRouter);
app.use('/board', boardRouter);
app.use('/selector',selectorRouter);
app.use('/resource', resourceRouter);


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
  res.render('error');
});

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await peacock.deleteMany();
  let instance1 = new peacock({peacock_species:"Indian peafoul", feather_color:'brightblue',age:4});
  instance1.save().then(() => {
    console.log("First object saved");
  })
  .catch((error) => {
    console.error("Error", error);
  })
  let instance2 = new peacock({peacock_species:"Green peafoul", feather_color:'Green',age:2});
  instance2.save().then(() => {
    console.log("Second object saved");
  })
  .catch((error) => {
    console.error("Error", error);
  })
  let instance3 = new peacock({peacock_species:"black peafoul", feather_color:'black peafoul',age:3});
  instance3.save().then(() => {
    console.log("Third object saved");
  })
  .catch((error) => {
    console.error("Error", error);
  })
  }


let reseed = false;
if (reseed) { recreateDB();}


module.exports = app;
