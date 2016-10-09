/**
 * Main application file
 */

'use strict';

const path = require('path');
const express = require('express');
const port = process.env.PORT || 3030;

// Setup server
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


require('./config/express')(app);


// set up sockets
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('got the message', msg)
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
});




// Start server
server.listen(port, function () {
  console.log('Express server listening to', port);
});

// Expose app
exports = module.exports = app;
