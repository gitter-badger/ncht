// ---
// ncht: app/cli/start.js
// created by @kxy
// Starts the server.
// ---

var fs = require('fs');
var program = require('commander');
var ncht = require('../server');
var conf = require('../config.json');

var CONF_PATH = process.cwd() + '/app/config.json';

program
  .option('-p --port <port>', 'port')
  .command("start")
  .description("Starts the server")
  .action(function () {
    fs.exists(CONF_PATH, function (exists) {
      if (!exists) {
        process.stdout.write("ERROR: Config file not found!");
        process.exit(0);
      } else {
        var conf = require('../config.json');
        var port = program.port || process.env.PORT || conf.port;
        ncht(port, conf);
      }
    })
  })