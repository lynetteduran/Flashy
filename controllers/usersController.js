var db = require('../models');

//GET /api/albums
function index(req, res) {
  db.User.find({}, function(err, allUsers) {
    res.json(allUsers);
  });
}

//EXPORTS PUBLIC METHODS
module.exports = {
  index: index
}
