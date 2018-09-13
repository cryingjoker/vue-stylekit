const { VueLoaderPlugin } = require(`vue-loader`)
// const nodeSassMagicImporter = require(`node-sass-magic-importer`);
const path = require(`path`)

const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`)
// const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)

const env = process.env.NODE_ENV
const minify = env === `production`
const sourceMap = env === `development`
const convert = require("koa-connect")
const history = require("connect-history-api-fallback")
function resolve(dir) {
  return path.join(__dirname, dir)
}

const config = {
  entry: path.join(__dirname, `src`, `index.js`),
  mode: env,
  output: {
    publicPath: `/`
    // filename: 'bundle.js',
    // path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    alias: {
      "@": resolve("src")
    }
  },
  optimization: {
    splitChunks: {
      // Must be specified for HtmlWebpackPlugin to work correctly.
      // See: https://github.com/jantimon/html-webpack-plugin/issues/882
      chunks: `all`
    }
  },
  devtool: sourceMap ? `cheap-module-eval-source-map` : undefined,
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: `vue-loader`,
            options: {
              transformAssetUrls: {
                source: "./src/"
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [path.join(__dirname, `src`)]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: `style-loader`
          },
          {
            loader: `css-loader`
          },
          {
            loader: `less-loader`
          }
        ]
      },
      {
        test: /\.styl/,
        use: [
          {
            loader: `style-loader`
          },
          {
            loader: `css-loader`
          },
          {
            loader: `stylus-loader`
          }
        ]
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
        loader: `url-loader`,
        options: {
          name: `[name].[hash:20].[ext]`,
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, `dist`, `index.html`),
      template: path.join(__dirname, `static`, `index.html`),
      inject: true,
      minify: minify
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // More options:
            // https://github.com/kangax/html-minifier#options-quick-reference
          }
        : false
    })
  ],
  serve: {
    content: [__dirname],
    add: app => {
      app.use(convert(history()))
    },
    port: 8080
  }
}
//
// if (minify) {
//   config.optimization.minimizer = [
//     new OptimizeCSSAssetsPlugin(),
//     // Enabled by default in production mode if
//     // the `minimizer` option isn't overridden.
//     new UglifyJsPlugin({
//       cache: true,
//       parallel: true
//     })
//   ]
// }

if (env !== `development`) {
  config.plugins.push(new MiniCssExtractPlugin())

  // const sassLoader = config.module.rules.find(({ test }) => test.test(`.scss`));
  // Replace the `vue-style-loader` with
  // the MiniCssExtractPlugin loader.
  // sassLoader.use[0] = MiniCssExtractPlugin.loader;
}

module.exports = config
