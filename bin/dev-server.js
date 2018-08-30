#!/usr/bin/env node
const serve = require(`webpack-serve`);

const openBrowser = require(`./lib/open-browser`);
const config = require(`../webpack.config`);
console.info('config',config);
serve({ config, clipboard: false }).then((server) => {
  server.on(`listening`, () => {
    openBrowser(`http://${server.options.host}:${server.options.port}`);
  });
});
