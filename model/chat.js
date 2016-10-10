var mongoose = require('mongoose');

// define the schema for chat
var chatSchema = mongoose.Schema({
  nick: String,
  msg: String,
  created: {type: Date, default: Date.now}
})

// create the model for users and expose it to our app
var Chat = mongoose.model('Message', chatSchema);
module.exports = User;