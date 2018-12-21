const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: './client/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty',
  },
});
