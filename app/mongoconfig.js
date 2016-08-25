var mongoose = require('mongoose');
// var mongodb = require('mongodb');
//var connection = mongoose.connection;
mongoose.connect('mongodb://localhost/shortly');

// connection.once('open', function() {
//   console.log('database has opened');
// });

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(kitty);
//   }
// });

var Schema = mongoose.Schema;

var linkSchema = new Schema({
  url:  String,
  baseUrl: String,
  code:   String,
  title: String,
  visits: Number,
  time : { type : Date, default: Date.now }
});

var userSchema = new Schema({
  username: String,
  password: String,
  time : { type: Date, default: Date.now }
});

var Links = mongoose.model('Links', linkSchema);
var Users = mongoose.model('Users', userSchema);

var newUser = new Users({ username: 'test', password: 'test1'});
var link = new Links({ url: 'test', baseUrl: 'test2', code: 'test3', title: 'test4', visits: 5});

link.save(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(link);
    mongoose.connection.close();
  }
});

// newUser2.save(function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newUser2);
//   }
//   mongoose.connection.close();
// });

//mongoose.connection.close();

// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
 
// // Connection URL 
// var url = 'mongodb://localhost:27017/myproject';
// // Use connect method to connect to the Server 
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
 
//   db.close();
// });