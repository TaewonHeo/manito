//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var sql = require('./custom/sqlite');
var manitto = require('./custom/manitto');
var indexRouter = require('./routes/index');
var dbRouter = require('./routes/dbcontrol');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.resolve(__dirname, 'client')));
app.use('/', indexRouter);
app.use('/db', dbRouter);



sql.init();
manitto.createtable();


server.listen(process.env.PORT || 3001, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
});
