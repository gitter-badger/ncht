// ---
// ncht: app/cli/index.js
// created by @kxy
// CLI Index handler.
// ---

var program = require('commander');
var pack = require('../../package.json');

program.version(pack.version, "-v, --version");

require('./install');
require('./config');

program.parse(process.argv);

if (!program.args.length) {
  program.parse(process.argv.concat("start"));
}