const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: {
      '^/EasyBook': '' //相当于取代了项目名
    }
  }));
};