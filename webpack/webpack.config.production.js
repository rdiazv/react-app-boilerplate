var Config = require('webpack-config').default
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CompressionPlugin = require('compression-webpack-plugin')

module.exports = new Config().extend(path.resolve('webpack/webpack.config.base.js')).merge({
  devtool: 'source-map',
  output: {
    filename: '[name]-[chunkhash].js',
  },
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
                sourceMap: true,
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
    new CleanWebpackPlugin(['dist/*.*'], {
      root: path.resolve('.'),
      verbose: false,
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/,
    }),
  ],
})
