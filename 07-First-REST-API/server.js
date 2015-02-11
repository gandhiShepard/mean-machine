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

// ROUTES FOR OUR API
// get an instance of the Express router
var apiRouter = express.Router();

// REGISTER OUR ROUTES
apiRouter.use(function(req, res, next) {
  // do logging
  console.log('Somebody just came to our app!');

  // we'll add more to the middleware chapter

  // this is where we will authenticate users

  next(); // make sure we go to the next routes and don't stop here

});

// test route to make sure everything is working
// accessed at GET http://localhost:8080/api
apiRouter.get('/', function(req, res) {
  res.json({ message: 'Horray! Welcome to our api!' });
});


// more routes for our API will happen here



apiRouter.route('/users')
  // create a user (accessed at POST http://localhost:8080/api/users)
  .post(function(req, res) {

    // CREATE a new instance of the User model
    var user = new User();

    // set the users info (comes from the request)
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;

    // save the user and check for errors
    user.save(function(err) {
      if (err) {
        // duplicate entry
        if (err.code == 11000)
          return res.json({
            success: false, message: 'A user with that\ username already exists.'
          });
        else
          return res.send(err);
      }
      res.json({message: 'User created!'});
    });
  })

  // GET all the users (accessed at GET http://localhost:8080/api/users)
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) res.send(err);

      // return the users
      res.json(users);
    });
  });


// On routes that end in /users/:user_id

apiRouter.route('/users/:user_id')
  // get the user with that id
  // (accessed at GET http://localhost:8080/api/users/:user_id)
  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) res.send(err);

      // return that user
      res.json(user);
    });
  })


// REGISTER OUR ROUTES


// all of our routes will be prefixed with /api
app.use('/api', apiRouter);


// START THE SERVER
app.listen(port);
console.log('magic happends on  port' + port);
