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

//UPDATE A CARD @ ('/api/decks/:deckId/cards/:cardId')
function update(req, res){
  db.Deck.findById(req.params.deckId, function (err, foundDeck){
    console.log(foundDeck);
    var cardToUpdate = foundDeck.cards.id(req.params.cardId);
    if (cardToUpdate){
      cardToUpdate.question = req.body.question;
      cardToUpdate.answer = req.body.answer;
      var updatedCard = cardToUpdate;
      foundDeck.save(function(err, savedDeck){
        console.log('UPDATED', updatedCard, 'IN', savedDeck.cards);
        res.json(updatedCard);
      });
    } else {
      res.send(404);
    }
  });
}

module.exports = {
  index: index,
  create: create,
  update: update
}
