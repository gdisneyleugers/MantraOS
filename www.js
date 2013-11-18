var express = require('express'), app = express.createServer();
var io = require('socket.io').listen(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: true });
app.configure(function() {
   app.use(express.static(__dirname + '/views'));
});
app.get('/', function(req, res){
  res.render('index.jade');
});
app.listen(3000);
io.sockets.on('connection', function (socket) {
	socket.on('setPseudo', function (data) {
   socket.set('pseudo', data);
	socket.on('searchInput', function (data) {
   socket.set('search', data);

});
});  
});
