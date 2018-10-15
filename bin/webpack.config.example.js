const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const webpack = require('webpack');
const MonacoWebpackPlugin = require(`monaco-editor-webpack-plugin`);
const local_dirname = path.join(__dirname,'..');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var vueLoaderConfig = require('./vue-loader.config')
const HappyPack = require('happypack');

const config = {
  entry: {
    app:[path.join(local_dirname, `src`,`example-pages`,`index.js`)],
  },
  mode: 'development',
  output: {
    publicPath: `/`,
  },
  optimization: {
    splitChunks: {
      chunks: `all`
    },
  },
  devtool: false,

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader:`css-loader`},
        ],
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,

        include: [path.join(local_dirname, `src`)],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: `style-loader`,
          },
          {loader:`css-loader`},
          {
            loader: `less-loader`,
          },
        ],
      },
      {
        test: /\.styl/,
        use: [
          {
            loader: `style-loader`,
          },
          {loader:`css-loader`},
          {
            loader: `stylus-loader`,
          },
        ],
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
        loader: `url-loader`,
        options: {
          name: `[name].[hash:20].[ext]`,
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: 'babel-loader',
      threads: 4,
      loaders: [{
        loader: 'babel-loader',
        options: { babelrc: true, cacheDirectory: true }
      }]
    }),

    new HappyPack({
      id: 'vue-loader',
      threads: 4,
      verbose: true,
      loaders: ["vue-loader"],


    }),
    new HappyPack({
      loaders: [{
        path: 'vue-loader',
        query: {
          vueLoaderConfig
        }
      }]
    }),
    new MonacoWebpackPlugin(webpack,{
      languages: ['html'],
    }),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(local_dirname, `static`, `index.html`),
      inject: true,
    }),
  ]
};



config.entry.app.unshift('webpack-hot-middleware/client');
config.plugins.push(
  new VueLoaderPlugin(),
  new HardSourceWebpackPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
