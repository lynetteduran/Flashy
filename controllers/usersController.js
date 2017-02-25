var db = require('../models');

//GET ALL USERS @ ('/api/users')
function index(req, res){
  db.User.find({}, function(err, allUsers){
      if(err){
        res.status(500).send(err);
        return;
      }
      res.json(allUsers);
  });
}

//GET A USER @ ('/api/users/:userId')
function show(req, res){
  db.User.findById(req.params.userId, function(err, foundUser){
    if(err){console.log('albumsController.show error', err);}
    console.log('usersController.show responding with', foundUser);
    res.json(foundUser);
  });
}

//POST A USER @ ('/api/users')
function create(req, res){
  console.log('body', req.body);
  db.User.create(req.body, function(err, user){
    if (err) {console.log('error', err);} console.log(user);
    res.json(user);
  });
}

//UPDATE A USER @ ('/api/users/:userId')
function update(req, res){
  console.log('updating user with data: ', req.body);
  db.User.findById(req.params.userId, function(err, foundUser){
    if(err){console.log("userController.update", err);}
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
  db.User.findOneAndRemove({_id: req.params.userId}, function(err, deletedUser){
    console.log('deleted: ', deletedUser);
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
