const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://localhost:7888',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '' //相当于取代了项目名
    }
  }));
};