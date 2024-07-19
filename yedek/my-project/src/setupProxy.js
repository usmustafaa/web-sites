const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://siparis.terzi.online',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
