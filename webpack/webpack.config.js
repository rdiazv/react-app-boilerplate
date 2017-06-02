var path = require('path')

module.exports = {
  entry: {
    app: path.resolve('src/entry.js'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
}
