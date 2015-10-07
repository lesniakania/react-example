import React from 'react';
import Express from 'express';
import Jsx from 'node-jsx';
import http from 'http';
import Routes from './assets/js/routes';
import Webpack from 'webpack';
import WebpackMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import Config from './webpack.config.js';
import path from 'path';

let app = Express();
let port = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV !== 'production';

app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(Express.static(path.join(__dirname, 'public')))

if (isDevelopment) {
  const compiler = Webpack(Config);
  app.use(WebpackMiddleware(compiler, {
    publicPath: Config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));
  app.use(WebpackHotMiddleware(compiler));
}

app.get('/', (req, res) => {
    res.render('index', {
      app: React.renderToString(Routes)
    })
  }
)

http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

