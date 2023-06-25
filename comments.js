// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var port = 8000;
var comments = require('./comments.json');

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use('/', express.static(__dirname + '/public'));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});
