var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flashy');

module.exports.User = require('./user.js');
module.exports.Deck = require('./deck.js');
module.exports.Card = require('./card.js');
