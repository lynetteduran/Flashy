/*CREATES DECK MODEL*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var DeckSchema = new Schema({
  _creator : [{type: Number, ref: 'Person'}],
  deckName: String,
  subject: String,
});

//EXPORTS DECK MODEL
var Deck = mongoose.model('Deck', DeckSchema);
module.exports = Deck;
