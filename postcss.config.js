var autoprefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var postcssNested = require('postcss-nested')
var postcssMixins = require('postcss-mixins')
var postcssSimpleVars = require('postcss-simple-vars')
var postcssColorFunction = require('postcss-color-function')
var postcssHexrgba = require('postcss-hexrgba')
var postcssMath = require('postcss-automath')
var path = require('path')

require('postcss-comment/hookRequire')

module.exports = {
  plugins: [
    postcssImport({
      addModulesDirectories: [
        path.resolve('src'),
        path.resolve('node_modules'),
      ],
    }),
    postcssMixins(),
    postcssSimpleVars(),
    postcssColorFunction(),
    postcssHexrgba(),
    postcssNested(),
    postcssMath(),
    autoprefixer({
      browsers: ['defaults', 'last 2 versions'],
    }),
  ],
}
