var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// var MongoDBStore = require('connect-mongodb-session')(session);
// var passportSocketIo = require('passport.socketio');

// Init app
var app = express();

// Connect with Mongo DB
mongoose.connect('mongodb://localhost/artist');

//Setup Socket.io
var server = require('http').Server(app);
var io = require('socket.io')(server);


// var store = new MongoDBStore(
//       {
//         uri: 'mongodb://localhost/session',
//         collection: 'mySessions'
//       },
//       function(error){
//         if(error) throw error;
//       });

// store.on('error', function(error) {
//   assert.ifError(error);
//   assert.ok(false);
// });

// Init middle-ware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set( 'views', path.join(__dirname, 'views'));
app.set( 'view engine', 'pug');

// Setup sessions
app.use(session( {
  secret: 'wasabimami',
  // cookie: {
  //   maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  // },
  resave: false,
  saveUninitialized: false
  // store: store,
  // key: 'connect.sid'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Setup local-strategy
require('./config/passport')(passport);

// io.use(passportSocketIo.authorize({
//   key: 'connect.sid',
//   secret: "secret something",
//   store: store,
//   passport: require('passport'),
//   cookieParser: require('cookie-parser')
// }));

// function onAuthorizeSuccess(data, accept){
//   console.log('successful connection to socket.io');
//   accept();
// };

// function onAuthorizeFail(data, message, error, accept){
//   if(error)
//     throw new Error(message);
//   console.log('failed connection to socket.io:', message);
//     accept(new Error(message));
// }

//Socket controller
var socketio = require('./controller/socketio')(app, io);

// Routes
require('./routes/routes')(app, passport);

// listen
server.listen( 3000, function(){
    console.log('listening on port 3000');
});