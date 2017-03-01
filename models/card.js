/*CREATES CARD MODEL*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  question: String,
  answer: String
});

//EXPORTS DECK MODEL
var Card = mongoose.model('Card', cardSchema);
module.exports = Card;
