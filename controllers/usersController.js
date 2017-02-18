var db = require('../models');

//GET ALL USERS ('/api/users')
function index(req, res) {
  db.User.find({}, function(err, allUsers) {
    res.json(allUsers);
  });
}

//GET A USER ('/api/users/:userId')
function show(req, res) {
  db.User.findById(req.params.userId, function(err, foundUser) {
    if (err) {console.log('ERROR getting user:' + req.params.userId)}
    console.log('userController.show responding with', foundUser);
    res.json(foundUser);
  });
}

//EXPORTS PUBLIC METHODS
module.exports = {
  index: index,
  show: show,
}
