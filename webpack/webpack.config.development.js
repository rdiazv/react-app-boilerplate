var Config = require('webpack-config').default
var path = require('path')
var PORT = process.env.PORT || 8080

module.exports = new Config().extend(path.resolve('webpack/webpack.config.base.js')).merge({
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: PORT,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
})
