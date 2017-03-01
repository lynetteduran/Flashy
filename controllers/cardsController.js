var db = require('../models');

// GET ALL CARDS @ ('/api/decks/:deckId/cards')
function index(req, res){
  db.Deck.findById(req.params.deckId, function(err, foundDeck){
    if(err){
      console.log('could not find cards');
    }
    console.log('responding with cards: ', foundDeck.cards);
    res.json(foundDeck.cards);
  });
}

module.exports = {
  index: index
}
