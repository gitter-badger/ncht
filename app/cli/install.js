// ---
// ncht: app/cli/install.js
// created by @kxy
// Installs ncht.
// ---

var program = require('commander');
var conf = require('nconf');
var fs = require('fs');
var ch = require('chalk');
var pack = require('../../package.json');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

conf.file({ file: '../config.json' });

program
  .command("install")
  .description("Install and configure ncht.")
  .action(function () {
    fs.exists('../config.json', function (exists) {
      if (!exists) {
        console.log('ohai! looks like this is your first time booting ncht, opening the installer...\n');
        console.log(ch.underline("ncht installer for version " + pack.version + "\n~by @kxy & @pixeldesu~"));
        rl.question(ch.blue('What do you want to name your app? '), function (answer) {
          conf.set('general:appName', answer);
          console.log(ch.green("Set App Name as ") + ch.green(answer));
          conf.save(function (err) {
            if (err) { throw err; }
            console.log('\nsuccess, please restart the application now!');
            process.exit(0);
          });
        });
      }
    });
  })