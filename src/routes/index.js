const newsRoute = require('./news');
const siteRoute = require('./site');
const courseRoute = require('./course');

function router(app) {
  app.use('/news', newsRoute);
  app.use('/', siteRoute);
  app.use('/course', courseRoute);
}
module.exports = router;
