var Config = require('webpack-config').default
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = new Config().extend(path.resolve('webpack/webpack.config.base.js')).merge({
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name]-[contenthash].css',
    }),
  ],
})
