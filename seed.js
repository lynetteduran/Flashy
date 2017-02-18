var db = require('./models');

var sampleUsers = [];
sampleUsers.push({
  userName: 'Sherri',
  email: 'sherri@user.com',
  password: 'Sherri'
});
sampleUsers.push({
  userName: 'Chris',
  email: 'chris@user.com',
  password: 'Chris'
});
sampleUsers.push({
  userName: 'Teddy',
  email: 'teddy@user.com',
  password: 'Teddy'
});
sampleUsers.push({
  userName: 'Kenny',
  email: 'kenny@user.com',
  password: 'Kenny'
});
sampleUsers.push({
  userName: 'Bill',
  email: 'bill@user.com',
  password: 'Bill'
});
sampleUsers.push({
  userName: 'Natalia',
  email: 'natalia@user.com',
  password: 'Natalia'
});
sampleUsers.push({
  userName: 'Lily',
  email: 'lily@user.com',
  password: 'Lily'
});
sampleUsers.push({
  userName: 'Brandon',
  email: 'brandon@user.com',
  password: 'Brandon'
});
sampleUsers.push({
  userName: 'Toby',
  email: 'toby@user.com',
  password: 'Toby'
});
sampleUsers.push({
  userName: 'Ryan',
  email: 'ryan@user.com',
  password: 'Ryan'
});
sampleUsers.push({
  userName: 'Alivia',
  email: 'alivia@user.com',
  password: 'Alivia'
});
sampleUsers.push({
  userName: 'Lynette',
  email: 'lynette@user.com',
  password: 'Lynette'
});

db.User.remove({}, function(err, users) {
  db.User.create(sampleUsers, function(err, users) {
    if (err) {return console.log('ERROR', err);}
    console.log("all users:", users);
    console.log("created", users.length, "users");
    process.exit();
  });
});
