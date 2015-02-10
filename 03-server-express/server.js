// get the http and filesystem modules
var express = require('express');
var app = express();
var path = require('path');

//Send our index.html file to the user for the home page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start server
app.listen(1337);

// tell ourselves what's happening
console.log('1377 is the magic port!');
