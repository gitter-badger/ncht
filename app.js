var express = require('express');
var app = express();

var config = require('./app/config.json');

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/app/views')
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('load', { title: config.general.appName });
});

app.listen(process.env.PORT || 1337);