var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flashy');

var User = require('./user');

module.exports.User = User;
