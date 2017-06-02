var path = require('path')
var Config = require('webpack-config').default
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new Config().merge({
  entry: {
    app: path.resolve('src/entry.js'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
    }),
  ],
})
