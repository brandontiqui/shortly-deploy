 var mongoose = require('mongoose');
// var mongodb = require('mongodb');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(kitty);
  }
});

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
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

// mongoose.connection.close();
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