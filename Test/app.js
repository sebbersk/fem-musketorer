/*jslint node: true */
/* eslint-env node */
'use strict';

// Require express, socket.io, and vue
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

// Pick arbitrary port for server
var port = 8000;
app.set('port', (port || process.env.PORT));

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public/')));
// Serve vue from node_modules as vue/
app.use('/vue', express.static(path.join(__dirname, '/node_modules/vue/dist/')));
// Serve index.html directly as root page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'source/index.html'));
});
app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'source/contact.html'));
});
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'source/login.html'));
});
/*app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'source/index.html'));
});*/

var server = http.listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});
