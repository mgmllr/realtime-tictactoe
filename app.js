
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
routes.create(app, io);


//Socket.io test
io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });

	socket.on('playerX', function (data) {
		console.log('Player X position: '+data);
	});

	socket.on('playerY', function (data) {
		console.log('Player Y position: '+data);
	})
});



server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
