/*CREATES DECK MODEL*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var DeckSchema = new Schema({
  user_id: {type: Number, ref: 'User'},
  deckName: String,
  subject: String,
  deckCreated: {type: Date, default: Date.now},
});

//EXPORTS DECK MODEL
var Deck = mongoose.model('Deck', DeckSchema);
module.exports = Deck;
