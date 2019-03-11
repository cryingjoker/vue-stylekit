const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require(`path`);
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const env = process.env.NODE_ENV;
const local_dirname = path.join(__dirname,'..');

const config = {
  entry: {
    'vue-rt-style-develop':[path.join(local_dirname, `src`, `develover-lib`, `index.js`)],
  },
  mode: env,
  output: {
    path: local_dirname + '/lib',
    filename: 'vue-rt-dev-style.js',
    library: 'vue-rt-dev-style',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: `vue-loader`,
            exclude: /node_modules/,
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
          MiniCssExtractPlugin.loader,
          {loader: `css-loader`},
            ],
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
        include: [path.join(local_dirname, `src`)],
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ]
};

module.exports = config;
