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

//HTML Endpoints
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//API ENDPOINTS VIA CONTROLLERS
//get API index
app.get('/api', controllers.api.index);
//user API Endpoints
app.get('/api/users', controllers.users.index);


/*************
*START SERVER*
*************/

//LISTEN ON PORT 3000
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('I can hear you breathe...on port:' + port);
});
