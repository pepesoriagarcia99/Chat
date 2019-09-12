var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {

  let t = 'titulo';
  io.emit('titulo', t);

  socket.on('chat', msg => {
    console.log("--> " + msg);
    io.emit('chat', msg);
  });

});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
