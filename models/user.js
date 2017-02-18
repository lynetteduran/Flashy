/*CREATES USER MODEL*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  userSince: {type: Date, default: Date.now},
});

//EXPORTS USER MODEL TO INDEX.JS
var User = mongoose.model('User', userSchema);
module.exports = User;