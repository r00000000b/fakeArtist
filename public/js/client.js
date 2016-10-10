// Chat Client
// var chatSchema = mongoose.Schema({
//   nick: String,
//   msg: String,
//   created: {type: Date, default: Date.now}
// })

var socket = io();

$('#chatmsg').submit(function(e){
  e.preventDefault();
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
})

socket.on('chat message', function(msg){
  var info = msg.data;
  $('#messages').append('<li><strong>'+info[1]+': </strong>'+info[0]+'</li>');
  $('#messages').scrollTop();
});

// socket.on('disableColor', function(data){
//   data.setAttribute('disabled');
// })

$('#nameInput').submit(function(e){
  e.preventDefault();
  socket.emit('nick submit', $('#nick').val(), function(data){
    if(data){
      document.getElementById('nickWrapper').style.display = 'none';
    } else {
      document.getElementById('nickValid').html('Enter another nickname!');
    }
  })
})

socket.on('usernames', function(data){
  for (var i = 0; i < data.length; i++) {
    var chipTPL = contactTemplate;
    chipTPL = chipTPL.replace("<!--nick-->", data[i]);
    chipTPL = chipTPL.replace("<!--id-->", data[i]);
    $('#userlist').append(chipTPL);
  }
});

// var Chat = mongoose.model('Message', chatSchema);

// var query = Chat.find({usernameFieldInSchema: username});
// query.sort('-created').limit(8).exec(function(err, docs){
//   if err throw err;
//   socket.emit('loadMsgs', docs);
// }) - can then cycle through docs to show history on client side, but in the for loop go backwards docs.length-1(length of query) and i--