var db = require('../models');

//GET ALL USERS @ ('/api/users')
function index(req, res){
  db.User.find()
    .populate('deck')
    .exec(function(err, users){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(users);
    });
}

//GET A USER @ ('/api/users/:userId')
function show(req, res){
  db.User.findById(req.params.userId, function(err, foundUser){
    if (err){console.log('ERROR getting user:' + req.params.userId);}
    console.log('userController.show responding with', foundUser);
    res.json(foundUser);
  });
}

//POST A USER @ ('/api/users')
function create(req, res){
  console.log('body', req.body);
  var newUser = new db.User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  db.Deck.findOne({name: req.body.deck}, function(err, deck){
    if (err){
      return console.log(err);
    }
    newUser.deck = deck;
    newUser.save(function(err, user){
      if (err){
        console.log('create error: ' + err);
      }
      console.log('created ', user.userName);
      res.json(user);
    });
  });
}

//UPDATE A USER @ ('/api/users/:userId')
function update(req, res) {
  console.log('updating user with data: ' + req.body);
  db.User.findById(req.params.userId, function(err, foundUser) {
    if(err) {console.log("Error updating user", err);}
    foundUser.userName = req.body.userName;
    foundUser.email = req.body.email;
    foundUser.password = req.body.password;
    foundUser.save(function(err, updatedUser) {
      if(err) {console.log('saving updated user failed');}
      res.json(updatedUser);
    });
  });
}

//DELETE A USER @ ('/api/users/:userId')
function destroy(req, res) {
  console.log('deleting user: ', req.params);
  var userId = req.params.id;
  db.User.findOneAndRemove({_id: bookId}, function(err, deletedUser) {
    if (err) {console.log('error deleting user: ' + deletedUser.userName)};
    console.log(deletedUser.userName + ' deleted successfully');
    res.json(deletedUser);
  });
}

//EXPORTS PUBLIC METHODS
module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy,
};
