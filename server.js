var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression')
var request = require('request')

app.use(compress());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.post('/run', function(req,res){
	var options = { 
		method: 'POST',
		url: 'http://run.cs50.net:80/run',
		headers: { 'content-type': 'application/json' },
		body: req.body,
		json: true 
	};

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	  res.send(body);
	});
})

app.get('*', function(req, res){
	res.sendFile(__dirname + '/dist/index.html');
})

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('Listening on port %s', server.address().port);
});