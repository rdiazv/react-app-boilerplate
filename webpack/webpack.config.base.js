var path = require('path')
var Config = require('webpack-config').default

module.exports = new Config().merge({
  entry: {
    app: path.resolve('src/entry.js'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
})
