module.exports = function(app, io) {

  var module = {};
  var connections = [];
  var loggedIn = [];
  var drawHistory = [];
  var chatHistory = [];

  io.on('connection', function (socket) {

    for (var i in drawHistory) {
      socket.emit('draw_line', { line: drawHistory[i] } );
    }

    socket.on('draw_line', function (data) {
      drawHistory.push(data.line);
      io.emit('draw_line', { line: data.line });
    });

    connections.push(socket);
    console.log('connected: %s sockets connected', connections.length);

    socket.on('disconnect', function(socket) {
      connections.splice(connections.indexOf(socket), 1);
      console.log('disconnected: %s sockets connected', connections.length)
    });

    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

  return module;
}