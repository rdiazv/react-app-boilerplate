var Config = require('webpack-config').default
var path = require('path')

module.exports = new Config().extend(path.resolve('webpack/webpack.config.base.js')).merge({
  devtool: 'source-map',
})
