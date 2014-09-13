// ---
// ncht: app/install/index.js
// created by @kxy
// Main installer file.
// ---

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

module.exports = {
  install: function (conf, callback) {
    console.log("ncht installer v1 \n~by @kxy & @pixeldesu~");
    rl.question('What do you want to name your app? ', function (answer) {
      conf.set('general:appName', answer);
      console.log("Set App Name as " + answer);
      callback();
    });
  }
}