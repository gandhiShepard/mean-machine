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

// amdin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
  res.send('I am the dashboard!');
});

// users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
  res.send('I show all the users!');
});

// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
  res.send('I show all the posts!');
});

// apply the routes to our application
app.use('/admin', adminRouter);

// Start server
app.listen(1337);

// tell ourselves what's happening
console.log('1377 is the magic port!');
