// get the http and filesystem modules
var express = require('express');
var app = express();
var path = require('path');

//Send our index.html file to the user for the home page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Create routes for the admin secion
// Get an instance of the router
var adminRouter = express.Router();


// route middleware that will happen on every request
adminRouter.use(function(req, res, next) {
  // loge each request to the console
  console.log( req.method, req.url );
  // continue doing what we are doing and go to the route
  next();
});


// amdin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
  res.send('I am the dashboard!');
});

// users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
  res.send('I show all the users!');
});

// route with parameters
adminRouter.get('/users/:name', function(req, res) {
  res.send('hello ' + req.params.name + '!');
});


// route middleware to validate :name
adminRouter.param('name', function(req, res, next, name) {
  // do validation on the name here
  // blah blah validation
  // log something so we know it's working
  console.log( 'doing name validation on ' + name );

  // once validation is done save the new item in the req
  req.name - name;
  // go to the next thing
  next();
});

// router with parameters (http://localhost:1337/admin/hello/:name)
adminRouter.get('hello/:name', function(req, res) {
  res.send('hello ' + req.name + '!')
});


// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
  res.send('I show all the posts!');
});



app.route('/login')
  // show the form (GET http://localhost:1337/login)
  .get(function(req, res) {
    res.send('this is the login form');
  })

  // process the for (POST http://localhost:1337/login)
  .post(function(req, res) {
    console.log( 'processing' );
    res.send('processing the login');
  });



// apply the routes to our application
app.use('/admin', adminRouter);

// Start server
app.listen(1337);

// tell ourselves what's happening
console.log('1377 is the magic port!');
