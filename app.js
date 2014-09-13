var fs = require('fs');
var conf = require('nconf');

//Load the Config file into nconf
conf.file({ file: './app/config.json' });

if (conf.get('system:firstRun') === true) {
  require('./app/install/index').install(conf, function () {
    conf.set('system:firstRun', false);
    conf.save(function (err) {
      if (err) throw err;   
    });
  });
}