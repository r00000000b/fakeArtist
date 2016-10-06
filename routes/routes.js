module.exports = function(app, passport){

  // Routes
  // router middleware
  function isLoggedIn(req, res, next) {

    if(req.isAuthenticated()) {
      console.log(req.user);
      console.log('hi' + req.user.local.username)
      return next();
    }

    res.redirect('/')
  }

  // Sign up
  app.get('/', function(req, res){
    res.render('signup', { message: req.flash('loginMessage') });
  });

  // Signed up
  app.post('/', passport.authenticate('local-signup', {
    successRedirect : '/social',
    failureRedirect : '/',
    failureFlash: true
  }));

  // Login
  app.get('/login', function(req, res){
    res.render('login', { message: req.flash('loginMessage') });
  });

  // Login
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/social',
    failureRedirect : '/login',
    failureFlash: true
  }));

    // social
  app.get('/social', isLoggedIn, function(req, res){
    res.render('social', { message: req.flash('loginMessage') });
  });

  // logout
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  // test
  app.get('/test', function(req, res){
    res.send('Hi' + req.user);
  });


}