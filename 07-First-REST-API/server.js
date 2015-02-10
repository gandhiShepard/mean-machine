// BASE SETUP
// CALL THE PACKAGES

var express = require('express');
var app = express(); // define our ap using express
var bodyParser = require('body-parser');
var morgan = require('morgan'); // used to see requests
var mongoose = require('mongoose'); //for working w/ db
var port = process.env.PORT || 8080; //set the port for our app
var User = require('./app/models/user');

// connect to our database (hosted on modulus.io)
mongoose.connect('mongodb://node:noder@novus.modulusmongo.net:27017/Iganiq8o');
// port: 27017
// db: Iganiq8o

// or local set up
// mongoose.connect(localhost:27017/db_name)

// APP CONFIG
// use body parser so we can grab info from POST requests

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With, content-type, \ Authorization');
  next();
});

// log all requests to the console
app.use(morgan('dev'));

// ROUTES FOR OUR API
// basic route for the home page
app.get('/', function(req, res) {
  res.send('Welcome to the home page!');
});

// get an instance of the Express router
var apiRouter = express.Router();

// test route to make sure everything is working
// accessed at GET http://localhost:8080/api
apiRouter.get('/', function(req, res) {
  res.json({ message: 'Horray! Welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);

// START THE SERVER
app.listen(port);
console.log('magic happends on  port' + port);
