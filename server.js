var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression')

app.use(compress());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res){
	res.sendFile(__dirname + '/dist/index.html');
})

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('Listening on port %s', server.address().port);
});