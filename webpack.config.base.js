const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Extend this base webpack configuration in
 * webpack.config.* for different environments.
 */

module.exports = {
  entry: {
    vendor: [
      'prop-types',
      'react',
      'react-dom',
      'react-hot-loader',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-saga'
    ],
    app: [
      'babel-polyfill',

      './src/index.js'
      // the entry point of our app
    ]
  },

  output: {
    filename: '[name].js',
    // the output bundle

    chunkFilename: '[id].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
      // filename: "vendor.js"
      // (Give the chunk a different name)

      minChunks: 2
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    }),

    new HtmlWebpackPlugin({
      title: 'Boilerplate Redux App',
      template: 'index.html'
    })
  ]
};
