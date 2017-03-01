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

//POST A CARD @ ('/api/decks/:deckId/cards/')
function create(req, res){
  db.Deck.findById(req.params.deckId, function(err, foundDeck){
    console.log(req.body);
    var newCard = new db.Card(req.body);
    foundDeck.cards.push(newCard);
    foundDeck.save(function(err, savedDeck){
      console.log('new card created: ', newCard);
      res.json(newCard);
    });
  });
}

module.exports = {
  index: index,
  create: create
}
