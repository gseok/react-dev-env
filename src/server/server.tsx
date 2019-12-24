import path from 'path';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import "core-js/stable";
import "regenerator-runtime/runtime";

import App from '../client/App';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  console.log('Server started development!');

  const webpack = require('webpack');
  const webpackConfig = require('../../build-conf/webpack.config.ssr-client.js')(process.env);

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      logLevel: 'silent',
      publicPath: webpackConfig.output.publicPath,
    }),
  );

  app.use(webpackHotMiddleware(compiler));

  (async () => {
    const open = require('open');
    await open('http://localhost:3100');
  })();
}

app.use(express.static(path.resolve(__dirname)));

app.get('*', (req, res) => {
  const context = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );

  const helmet = Helmet.renderStatic();

  res.set('content-type', 'text/html');
  res.send(`
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="google" content="notranslate" />
        ${helmet.title.toString()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="text/javascript" src="main.js"></script>
      </body>
    </html>
  `);
});

app.listen(3100, () => console.log('Server started http://localhost:3100'));
