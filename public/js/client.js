// Chat Client

var socket = io();

$('#chatmsg').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
})

socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg))
});

socket.on('disableColor', function(data){
  console.log('disable color', data)
  data.setAttribute('disabled');
})



// var Chat = mongoose.model('Message', chatSchema or whateverSchema)
// var newMsg = new Chat({msgFieldInSchema: msg, usernameFieldInSchema: username, or socket.username will have to be declared})
// newMsg.save(function(err){
//   if(err) throw err
// })


// var query = Chat.find({usernameFieldInSchema: username});
// query.sort('-created').limit(8).exec(function(err, docs){
//   if err throw err;
//   socket.emit('loadMsgs', docs);
// }) - can then cycle through docs to show history on client side, but in the for loop go backwards docs.length-1(length of query) and i--