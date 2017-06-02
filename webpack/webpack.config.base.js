var path = require('path')
var webpack = require('webpack')
var Config = require('webpack-config').default
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
var Dotenv = require('dotenv-webpack')

module.exports = new Config().merge({
  entry: {
    app: [
      path.resolve('src/lib/promise.js'),
      path.resolve('src/theme/entry.css'),
      path.resolve('src/entry.js'),
    ],
    vendors: [
      'deep-assign',
      'promise-polyfill',
      'prop-types',
      'react',
      'react-dom',
      'react-router-dom',
      'whatwg-fetch',
    ],
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve('src'),
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: true,
        honorPackage: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendors'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['runtime'],
    }),
    new webpack.NamedChunksPlugin(),
    new webpack.NamedModulesPlugin(),
    new Dotenv({
      path: path.resolve('.env'),
    }),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
  },
})
