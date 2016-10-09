var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for user
var userSchema = mongoose.Schema({

    local            : {
        username     : String,
        email        : String,
        password     : String,
        color        : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        username     : String,
        color        : String
    },
    twitter          : {
        id           : String,
        token        : String,
        tokenSecret  : String,
        displayName  : String,
        username     : String,
        img          : String,
        color        : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        username     : String,
        color        : String
    }

});

// methods ======================

/**
 * Password hash middleware.
 */
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('local.password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.local.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      user.local.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.validPassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.local.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

// create the model for users and expose it to our app
var User = mongoose.model('User', userSchema);
module.exports = User;