// ---
// ncht: app/install/index.js
// created by @kxy
// Main installer file.
// ---

var ch = require('chalk');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

module.exports = {
  install: function (conf, callback) {
    console.log(ch.underline("ncht installer v2 \n~by @kxy & @pixeldesu~"));
    rl.question(ch.blue('What do you want to name your app? '), function (answer) {
      conf.set('general:appName', answer);
      console.log(ch.green("Set App Name as ") + ch.green(answer));
      callback();
    });
  }
}