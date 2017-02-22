//GET ALL DECKS @ ('/api/decks')
function index(req, res){
  db.Deck.find({}, function (err, allDecks){
    if (err){console.log('Error getting all the decks');}
    res.json(allDecks);
  });
}

//GET A DECK ('/api/decks/:deckId')
function show(req, res){
  db.Card.findById(req.params.deckId, function(err, foundDeck){
    if (err){console.log('Error getting deck' + req.params.deckId);}
    console.log('deckController.show responding with' + foundDeck);
    res.json(foundDeck);
  });
}

//EXPORTS PUBLIC METHODS
module.exports = {
  index: index,
  show: show,
};
