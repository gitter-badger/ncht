// ---
// ncht: app.js
// created by @kxy
// Kickstarts the application.
// ---

var fs = require('fs');
var conf = require('nconf');

//Load the Config file into nconf
conf.file({ file: './app/config.json' });

//Checks whether it's the first time running and opens installer
if (conf.get('system:firstRun') === true) {
  require('./app/install/index').install(conf, function () {
    conf.set('system:firstRun', false);
    conf.save(function (err) {
      if (err) throw err;   
    });
  });
}