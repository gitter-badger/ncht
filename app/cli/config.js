// ---
// ncht: app/cli/config.js
// created by @kxy
// Opens the config.json file
// ---

var program = require('commander');
var editor = require('editor');
var fs = require('fs');

var CONF_PATH = process.cwd() + '/app/config.json';

program
  .command('config')
  .description("Edit the config file: " + CONF_PATH)
  .action(function () {
    fs.exists(CONF_PATH, function (exists) {
      if (exists) {
        editor(CONF_PATH, function (code, sig) {
          console.log('finished editing config.json, closing...');
          process.exit(0);
        })
      } else {
        process.stdout.write("ERROR: Config file not found!");
        process.exit(0);
      }
    })
  });
