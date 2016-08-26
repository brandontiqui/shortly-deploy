//var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var db = require('../mongoconfig');

var aUser = require('../app/mongoconfig').Users;

// now we have to adjust its methods 

var User = db.Model.extend({
  tableName: 'users',
  //hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },
  hashPassword: function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }
});





//var User = db.Users;
module.exports = User;

