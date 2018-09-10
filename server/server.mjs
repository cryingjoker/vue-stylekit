
import express from 'express';
import path from 'path';
import open from 'open';
import config from '../webpack.config.js';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
const port = 3000;
const app = express();
const compiler = webpack(config);
const rootPath = process.cwd();
app.use(express.static('public'));
app.use(webpackDevMiddleware(compiler, {
    writeToDisk: true
    // publicPath: config.output.publicPath,
    // filename: config.output.filename,
    // path: config.output.path,
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(rootPath, './src/tpl/index.html'));
});

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});
