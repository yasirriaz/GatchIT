// Load modules
var socket = require('socket.io');
var express = require('express');
var http = require('http');
var init = require('./init.js');

// initialization
var app = express();
var server = http.createServer(app);
var port = init.port;
var io = socket.listen(server);

// Start Spika as stand alone server
var spika = require('./index.js');

var SpikaServer = new spika(app,io,init);
    
server.listen(init.port, function(){
    console.log('Server listening on port ' + init.port + '!');
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:2222');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});