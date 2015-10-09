import React from 'react';
import Express from 'express';
import Jsx from 'node-jsx';
import http from 'http';
import Routes from './assets/js/routes';
import Webpack from 'webpack';
import WebpackMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import DevConfig from './webpack/development.config.js';
import path from 'path';

let app = Express();
let port = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV !== 'production';
const isProduction = process.env.NODE_ENV === 'production';

app.engine('ejs', require('ejs').__express)
app.set('view engine', 'ejs')

if (isProduction) {
  app.set('views', path.join(__dirname, 'dist'));
  app.use(Express.static(path.join(__dirname, 'dist')))
}

if (isDevelopment) {
  const compiler = Webpack(DevConfig);
  app.use(WebpackMiddleware(compiler, {
    publicPath: DevConfig.output.publicPath,
    noInfo: true
  }));
  app.use(WebpackHotMiddleware(compiler));
}

app.get('/*', (req, res) => {
    res.render('index', {
      isDevelopment: isDevelopment,
      app: React.renderToString(Routes)
    })
  }
)

http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

