const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
