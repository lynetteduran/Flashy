//REQUIRES NODE MODULES
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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

//API ENDPOINTS
/*endpoints will go here*/


/*************
*START SERVER*
*************/

//LISTEN ON PORT 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('I can hear you breathe on http://localhost:3000/');
});
