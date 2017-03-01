var db = require('../models');

//GET ALL DECKS @ ('/api/decks')
function index(req, res){
  db.Deck.find({}, function(err, decks){
      if (err){
        console.log('Error getting all the decks');
        res.status(500).send(err);
        return;
      }
      console.log("found and populated all decks with their respective owner ", decks);
      res.json(decks);
  });
}

//GET A DECK ('/api/decks/:deckId')
function show(req, res){
  db.Deck.findById(req.params.deckId, function(err, foundDeck){
    if (err){console.log('Error getting deck' + req.params.deckId);}
    console.log('deckController.show responding with' + foundDeck);
    res.json(foundDeck);
  });
}

//CREATE A DECK ('/api/decks')
function create(req, res){
  console.log('body', req.body);
  db.Deck.create(req.body, function(err, deck){
    if(err){console.log(err);}
    console.log(deck);
    res.json(deck);
  });
}

//EXPORTS PUBLIC METHODS
module.exports = {
  index: index,
  show: show,
  create: create
}
