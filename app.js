var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
});

//use heroku's port if it is specified.
//otherwise use our own local port.
var port = process.env.PORT || 9439;
var server = app.listen(9439, function() {
	console.log('Express server listening on port ' + server.address().port);
});
