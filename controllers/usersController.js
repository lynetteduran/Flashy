var db = require('../models');

//GET ALL USERS @ ('/api/users')
function index(req, res) {
  db.User.find({}, function(err, allUsers) {
    res.json(allUsers);
  });
}

//GET A USER @ ('/api/users/:userId')
function show(req, res) {
  db.User.findById(req.params.userId, function(err, foundUser) {
    if (err) {console.log('ERROR getting user:' + req.params.userId)}
    console.log('userController.show responding with', foundUser);
    res.json(foundUser);
  });
}

//POST A USER @ ('/api/users')
function create(req, res) {
  console.log('body', req.body);
  db.User.create(req.body, function(err, newUser) {
    console.log('just created: ' + newUser.userName);
    res.json(newUser);
  });
}

//UPDATE A USER @ ('/api/users')
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
//EXPORTS PUBLIC METHODS
module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
}
