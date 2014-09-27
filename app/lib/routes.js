var id = require('shortid');

var u = require('./users');

module.exports = function (app, conf) {
  app.get('/', function (req, res) {
    res.render('load', { 'title': conf.appName });
  });
  
  app.post('/', function (req, res) {
    u.appendUser(req.body.username, id.generate());
    console.log(u.getUser(req.body.username));
  });
};
