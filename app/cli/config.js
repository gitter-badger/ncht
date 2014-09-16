// ---
// ncht: app/cli/config.js
// created by @kxy
// Opens the config.json file
// ---

var program = require('commander');
var child = require('child_process');
var fs = require('fs');

var CONF_PATH = process.cwd() + '/app/config.json';

program
  .command('config')
  .description("Edit the config file: " + CONF_PATH)
  .action(function () {
    fs.exists(CONF_PATH, function (exists) {
      if (exists) {
        child.spawn(
          "sudo",
          ["nano", CONF_PATH],
          { stdio: "inherit" }
        );
      } else {
        process.stdout.write("ERROR: Config file not found! Did you install ncht yet?");
        process.exit(0);
      }
    })
  });