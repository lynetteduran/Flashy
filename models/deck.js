/*CREATES DECK MODEL*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');
var Card = require('./card');

var deckSchema = new Schema({
  _creator: {type: Schema.Types.ObjectId, ref: 'User'},
  deckName: String,
  subject: String,
  cards: [Card.schema],
  deckCreated: {type: Date, default: Date.now}
});

//EXPORTS DECK MODEL TO INDEX.JS
var Deck = mongoose.model('Deck', deckSchema);
module.exports = Deck;
