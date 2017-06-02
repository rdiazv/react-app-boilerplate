var Config = require('webpack-config').default
var environment = require('webpack-config').environment
var path = require('path')

environment.setAll({
  env: () => process.env.NODE_ENV
});

module.exports = new Config().extend(path.resolve('webpack/webpack.config.[env].js'))
