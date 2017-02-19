/*CREATES DECK MODEL*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deckSchema = new Schema({
  deckName: String,
  subject: String,
});

//EXPORTS DECK MODEL
var Deck = mongoose.model('Deck', deckSchema);
module.exports = Deck;
