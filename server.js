//REQUIRES NODE MODULES & CONTROLLERS
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var controllers = require('./controllers');

//SERVE STATIC FILES FROM PUBLIC FOLDER
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

//ENABLES REQUEST PAYLOAD ACCEPTANCE
app.use(bodyParser.json());

//SERVE BOWER_COMPONENTS FROM VENDOR FOLDER
app.use('/vendor', express.static(__dirname + '/bower_components'));


/*******
*ROUTES*
*******/

/*
 * HTML ENDPOINTS
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res){
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

/*
 * JSON API ENDPOINTS
 */

//GET API INDEX
app.get('/api', controllers.api.index);

//USER MODEL API ENPOINTS
app.get('/api/users', controllers.users.index);
app.get('/api/users/:userId', controllers.users.show);
app.post('/api/users', controllers.users.create);
app.put('/api/users/:userId', controllers.users.update);
app.delete('/api/users/:userId', controllers.users.destroy);

//DECK MODEL API ENDPOINTS
app.get('/api/decks', controllers.decks.index);
app.get('/api/decks/:deckId', controllers.decks.show);

//ALL OTHER ROUTES (ANGULAR HANDLES)
//redirects all other paths to index
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*************
*START SERVER*
*************/

//LISTEN ON PORT 3000
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Looking hella cute, dawg...on port:' + port);
});
