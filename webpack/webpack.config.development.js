var Config = require('webpack-config').default
var path = require('path')
var DashboardPlugin = require('webpack-dashboard/plugin')
var PORT = process.env.PORT || 8080

module.exports = new Config().extend(path.resolve('webpack/webpack.config.base.js')).merge({
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      },
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
  plugins: [
    new DashboardPlugin(),
  ],
})
