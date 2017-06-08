const config = require('../config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const env = config.build.env
const webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: './src/server.js'
  },
  devtool: false,
  output: {
    path: config.build.assetsRoot,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
module.exports = webpackConfig