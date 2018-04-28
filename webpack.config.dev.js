const webpack = require('webpack');

const config = require('./webpack.config.base');

const baseConfig = Object.assign({}, config);

const sourceCodePath = baseConfig.module.rules[0].include;

baseConfig.entry.app.splice(1, 0, ...[
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:3000',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates
]);

baseConfig.devtool = 'eval';

baseConfig.module.rules.push({
  test: /\.scss$/,
  use: [{
    loader: 'style-loader' // creates style nodes from JS strings
  }, {
    loader: 'css-loader' // translates CSS into CommonJS
  }, {
    loader: 'sass-loader', // compiles Sass to CSS
    options: {
      includePaths: sourceCodePath,
    },
  }],
});

baseConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  // enable HMR globally

  new webpack.NamedModulesPlugin(),
  // prints more readable module names in the browser console on HMR updates

  new webpack.NoEmitOnErrorsPlugin()
  // do not emit compiled assets that include errors
);

Object.assign(baseConfig.output, {
  publicPath: '/',
  // necessary for HMR to know where to load the hot update chunks
});

baseConfig.devServer = {
  host: 'localhost',
  port: 3000,

  historyApiFallback: true,
  // respond to 404s with index.html

  hot: true,
  // enable HMR on the server

  overlay: true,
  // overlay errors on the application
};

module.exports = baseConfig;
