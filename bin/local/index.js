'use strict';

const config = require('../../build/config/index');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'develop';
}
require("@babel/polyfill");
const opn = require('opn');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('../webpack.config.example.js');
const Ora = require('ora');
const local_dirname = path.join(__dirname,'..','..');

const port = process.env.PORT || config.dev.port;

const proxyTable = config.dev.proxyTable;

const app = express();
console.log('webpackConfig',webpackConfig)
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  path: '/__webpack_hmr',
  quiet: true,
  stats: {
    colors: false,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});
let spinner;
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: function(text){
    spinner.succeed();
    spinner = new Ora({
      text: 'webpack-hot-middleware : '+text+'\n'
    }).start();
  }
});
webpackConfig.entry.app.unshift('webpack-hot-middleware/client');
webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

app.use(hotMiddleware);


Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);


app.use('/static/', express.static(local_dirname+'/static'));
app.use('/mode-html.js', express.static(local_dirname+'/static/mode-html.js'));

const url = 'http://localhost:' + port;
spinner = new Ora({
  text: 'Starting dev server on port '+port+'\n'
}).start();
spinner.succeed();
let _resolve;
const readyPromise = new Promise(resolve => {
  _resolve = resolve;
});

devMiddleware.waitUntilValid(() => {
  spinner.succeed();
  spinner = new Ora({
    text: 'webpack-hot-middleware : start'
  }).start();

  opn(url);
  _resolve();
});

const server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  }
};
