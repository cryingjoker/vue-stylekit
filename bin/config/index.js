'use strict';

// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');
module.exports = {
  build: {

    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    index: path.resolve(__dirname, '../../static/index.html'),
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
};
