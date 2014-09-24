module.exports = function (app, conf) {
  app.get('/', function (req, res) {
    res.render('load', { 'title': conf.appName });
  });
}
