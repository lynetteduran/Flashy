/*CREATES USER MODEL*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Deck = require('./deck');

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  deck: {
    type: Schema.Types.ObjectId,
    ref: 'Deck'
  },
  userSince: {type: Date, default: Date.now},
});

//EXPORTS USER MODEL TO INDEX.JS
var User = mongoose.model('User', UserSchema);
module.exports = User;
