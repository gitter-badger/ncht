// ---
// ncht: app/server.js
// created by @kxy
// Main server file.
// ---

var xpr = require('express');
var app = xpr();
var http = require('http').Server(app);
var bp = require('body-parser');

module.exports = function (port, conf) {
  //express config stuff
  app.use(xpr.static(__dirname + '/public'));
  app.use(bp.urlencoded({ extended: false }));
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');

  require('./lib/routes')(app, conf);

  http.listen(port, function () {
    process.stdout.write(conf.appName + " is now listening at port " + port + " :3");
  });
};
