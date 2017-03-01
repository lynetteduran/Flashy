/*CREATES DECK MODEL*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var deckSchema = new Schema({
  _creator: {type: Schema.Types.ObjectId, ref: 'User'},
  deckName: String,
  subject: String,
  deckCreated: {type: Date, default: Date.now},
});

//EXPORTS DECK MODEL
var Deck = mongoose.model('Deck', deckSchema);
module.exports = Deck;
