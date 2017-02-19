var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flashy');

var User = require('./user');
var Deck = require('./deck');

module.exports.User = User;
module.exports.Deck = Deck;
