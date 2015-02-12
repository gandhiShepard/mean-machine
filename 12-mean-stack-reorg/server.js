// BASE SETUP, CALL THE PACKAGES

var express = require('express');
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var morgan = require('morgan'); // used to see requests
var mongoose = require('mongoose'); //for working w/ db
//var port = process.env.PORT || 8080; //set the port for our app
//var User = require('./app/models/user');
//var jwt = require('jsonwebtoken');
var config = require('./config');
var path = require('path');


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


// connect to our database (hosted on modulus.io)
mongoose.connect(config.database);

// set statis files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));


// Routes for our API

var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes); // all of our routes will be prefixed with /api

// Main catch all router, send users to frontend
// has to be registered after API routes
// If it isn't a node route, then let angular handle it
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});


// START THE SERVER
app.listen(config.port);
console.log('Magic happend on port ' + config.port + ' - http://localhost:' + config.port);
