// ---
// ncht: app/server.js
// created by @kxy
// Main server file.
// ---

var xpr = require('express');
var app = xpr();
var http = require('http').Server(app);

module.exports = function (port, conf) {
  //express config stuff
  app.use(xpr.static(__dirname + '/public'));
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');

  app.get('/', function (req, res) {
    res.render('load', { title: conf.appName });
  });

  http.listen(port, function () {
    process.stdout.write(conf.appName + " is now listening at port " + port + " :3");
  })
}