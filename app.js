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
fs.exists('./app/config.json', function (exists) {
  if (!exists) {
    console.log('ohai! looks like this is your first time booting ncht, opening the installer...\n')
    require('./app/install/index').install(conf, function () {
      conf.set('system:version', '0.0.3');
      conf.save(function (err) {
        if (err) throw err;
        console.log('\nsuccess, please restart the application now!')
        process.exit(0);
      });
    });
  }
});