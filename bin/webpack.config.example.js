const { VueLoaderPlugin } = require(`vue-loader`);
const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const webpack = require('webpack');
const MonacoWebpackPlugin = require(`monaco-editor-webpack-plugin`)
const local_dirname = path.join(__dirname,'..');

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
  devtool: `cheap-module-eval-source-map`,
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: `vue-loader`,
            options: {
              transformAssetUrls: {
                source: './src/',
              },
            },
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
    new VueLoaderPlugin(),
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
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
