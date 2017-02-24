var db = require('./models');

var sampleUsers = [
  {
    userName: 'Sherri',
    email: 'sherri@user.com',
    password: 'Sherri',
    deck: 'Geometry'
  },
  {
    userName: 'Chris',
    email: 'chris@user.com',
    password: 'Chris',
    deck: 'Fractions'
  },
  {
    userName: 'Teddy',
    email: 'teddy@user.com',
    password: 'Teddy',
    deck: 'Impressionism'
  },
  {
    userName: 'Kenny',
    email: 'kenny@user.com',
    password: 'Kenny',
    deck: 'Nouns'
  },
  {
    userName: 'Bill',
    email: 'bill@user.com',
    password: 'Bill',
    deck: 'JavaScript'
  },
  {
    userName: 'Natalia',
    email: 'natalia@user.com',
    password: 'Natalia',
    deck: 'Cells'
  },
  {
    userName: 'Lily',
    email: 'lily@user.com',
    password: 'Lily',
    deck: 'Electrons'
  },
  {
    userName: 'Brandon',
    email: 'brandon@user.com',
    password: 'Brandon',
    deck: 'Gravity'
  },
  {
    userName: 'Toby',
    email: 'toby@user.com',
    password: 'Toby',
    deck: 'Parabolas'
  },
  {
    userName: 'Ryan',
    email: 'ryan@user.com',
    password: 'Ryan',
    deck: 'Angles'
  },
  {
    userName: 'Alivia',
    email: 'alivia@user.com',
    password: 'Alivia',
    deck: 'DNA'
  },
  {
    userName: 'Lynette',
    email: 'lynette@user.com',
    password: 'Lynette',
    deck: 'Streches'
  }
];

var sampleDecks = [
  {
    deckName: 'Geometry',
    subject: 'Math'
  },
  {
    deckName: 'Fractions',
    subject: 'Math'
  },
  {
    deckName: 'Impressionism',
    subject: 'Art History'
  },
  {
    deckName: 'Nouns',
    subject: 'English'
  },
  {
    deckName: 'JavaScript',
    subject: 'Web Development'
  },
  {
    deckName: 'Cells',
    subject: 'Biology'
  },
  {
    deckName: 'Electrons',
    subject: 'Chemistry'
  },
  {
    deckName: 'Gravity',
    subject: 'Physics'
  },
  {
    deckName: 'Parabolas',
    subject: 'Algebra'
  },
  {
    deckName: 'Angles',
    subject: 'Geometry'
  },
  {
    deckName: 'DNA',
    subject: 'Genetics'
  },
  {
    deckName: 'Streches',
    subject: 'Physical Education'
  },
];

db.Deck.remove({}, function(err, decks){
  console.log('removed all decks');
  db.Deck.create(sampleDecks, function(err, decks){
    if (err){
      console.log(err);
      return;
    }
    console.log('recreated all decks');
    console.log('created', decks.length, "decks");

    db.User.remove({}, function(err, users){
      console.log('removed all users');
      sampleUsers.forEach(function(userData){
        var user = new db.User({
          userName: userData.userName,
          email: userData.email,
          password: userData.password
        });
        console.log(userData.deck);
        db.Deck.findOne({deckName: userData.deck}, function(err, foundDeck){
          console.log('found deck "' + foundDeck.deckName + '" for user ' + user.userName);
          if (err){
            console.log(err);
            return;
          }
          user.deck = foundDeck;
          user.save(function(err, savedUser){
            if (err){
              return console.log(err);
            }
            console.log('saved ' + savedUser.userName + "'s deck by name of " + foundDeck.deckName);
          });
        });
      });
    });
  });
});
