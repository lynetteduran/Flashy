var db = require('./models');

var sampleUsers = [
  {
    userName: 'Sherri',
    email: 'sherri@user.com',
    password: 'Sherri'
  },
  {
    userName: 'Chris',
    email: 'chris@user.com',
    password: 'Chris'
  },
  {
    userName: 'Teddy',
    email: 'teddy@user.com',
    password: 'Teddy'
  },
  {
    userName: 'Kenny',
    email: 'kenny@user.com',
    password: 'Kenny'
  },
  {
    userName: 'Bill',
    email: 'bill@user.com',
    password: 'Bill'
  },
  {
    userName: 'Natalia',
    email: 'natalia@user.com',
    password: 'Natalia'
  },
  {
    userName: 'Lily',
    email: 'lily@user.com',
    password: 'Lily'
  },
  {
    userName: 'Brandon',
    email: 'brandon@user.com',
    password: 'Brandon'
  },
  {
    userName: 'Toby',
    email: 'toby@user.com',
    password: 'Toby'
  },
  {
    userName: 'Ryan',
    email: 'ryan@user.com',
    password: 'Ryan'
  },
  {
    userName: 'Alivia',
    email: 'alivia@user.com',
    password: 'Alivia'
  },
  {
    userName: 'Lynette',
    email: 'lynette@user.com',
    password: 'Lynette'
  }
];

var sampleDecks = [
  {
    deckName: 'Geometry',
    subject: 'Math',
  },
  {
    deckName: 'Fractions',
    subject: 'Math',
  },
  {
    deckName: 'Impressionism',
    subject: 'Art History',
  },
  {
    deckName: 'Nouns',
    subject: 'English',
  },
  {
    deckName: 'JavaScript',
    subject: 'Web Development',
  },
  {
    deckName: 'Cells',
    subject: 'Biology',
  },
  {
    deckName: 'Electrons',
    subject: 'Chemistry',
  },
  {
    deckName: 'Gravity',
    subject: 'Physics',
  },
  {
    deckName: 'Parabolas',
    subject: 'Algebra',
  },
  {
    deckName: 'Angles',
    subject: 'Geometry',
  },
  {
    deckName: 'DNA',
    subject: 'Genetics',
  },
  {
    deckName: 'Streches',
    subject: 'Physical Education',
];

// Remove all users from db
db.User.remove({}, function(err, users){
  console.log('removed all users');
  // Create new users from sampleUsers array
  db.User.create(sampleUsers, function(err, users){
    if(err){
      console.log(err);
      return;
    }
    console.log('created all users: ', users.length, 'users', users);
    // Remove all Deck docs from db
    db.Deck.remove({}, function(err, decks){
      if (err){
        console.log(err);
        return;
      }
      console.log('removed all decks');
      // Create Decks from sampleDecks
      db.Deck.create(sampleDecks, function(err, decks){
        if (err){
          console.log(err);
          return;
        }
        console.log('created all decks without creator ref: ', decks.length, 'decks', decks);
        for (var i = 0; i < decks.length; i++) {
          var user = users[i];
          var deck = decks[i];
          deck._creator = user._id;
          deck.save(function(err, updatedDeck){
              if(err){console.log(err)}
              console.log(updatedDeck);
          });
        }
      });
    });
  });
});
