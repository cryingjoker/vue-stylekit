const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require(`path`);

const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const webpack = require('webpack');
const MonacoWebpackPlugin = require(`monaco-editor-webpack-plugin`)
const local_dirname = path.join(__dirname,'..');
const env = process.env.NODE_ENV;
function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  entry: {
    main:[path.join(local_dirname, `src`, `example-pages`, `index.js`)],
  },
  mode: env,
  output: {
    publicPath: `/`,
  },
  resolve: {
    alias: {
      '@': resolve('src/app/dist/components'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: `all`
    },
  },
  devtool:  undefined,
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
      filename: path.join(local_dirname, `dist`, `index.html`),
      template: path.join(local_dirname, `static`, `index.html`),
      inject: true,
      minify:{
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        }
    }),
  ]
};



config.plugins.push(new MiniCssExtractPlugin());


module.exports = config;
