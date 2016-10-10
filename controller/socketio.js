module.exports = function(app, io) {

  var module = {};
  var connections = [];
  var nicknames = [];
  var drawHistory = [];
  var chatHistory = [];

  io.on('connection', function (socket) {

    for (var i in drawHistory) {
      socket.emit('drawLine', { line: drawHistory[i] } );
    }

    socket.on('drawLine', function (data) {
      drawHistory.push(data.line);
      io.emit('drawLine', { line: data.line });
    });

    connections.push(socket);
    console.log('connected: %s sockets connected', connections.length);

    socket.on('disconnect', function(socket) {
      nicknames.splice(nicknames.indexOf(socket.nickname), 1)
      updateNicks()
      connections.splice(connections.indexOf(socket), 1);
      console.log('disconnected: %s sockets connected', connections.length)
    });

    socket.on('chat message', function(msg){
      console.log(msg)
      var message = msg;
      // var newMsg = new Chat({msg: msg, nick: socket.nickname})
      // newMsg.save(function(err){
      //   if(err) throw err
      // })
      io.emit('chat message', { data: [ message, socket.nickname ] });
    });

    socket.on('nick submit', function(data, callback){
      if(nicknames.indexOf(data) != -1){
        callback(false);
      } else {
        callback(true);
        socket.nickname = data; // using the data from nickname form to add a nickname to the socket
        nicknames.push(socket.nickname);
        console.log('socket.nickname = ', socket.nickname);
        updateNicks();
      }
    })

    function updateNicks(){
      socket.emit('usernames', nicknames)
    }

    // function removeChip(){
    //   var discUser = socket.nickname;
    //   var elementid = '#<!--id-->';
    //   elementid = elementid.replace('<!--id-->', discUser);
    //   $(elementid).remove();
    // }

  });

  return module;
}