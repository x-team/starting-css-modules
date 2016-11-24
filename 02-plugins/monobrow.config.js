'use strict'

var babelify = require('babelify')
var cssModulesify = require('css-modulesify')

module.exports = {
  entry: 'src/main.js',
  outfile: 'dist/main.js',
  verbose: true,

  watch: !!process.env.WATCH,
  minify: !!process.env.MINIFY,

  setup: function (b) {
    b.transform(babelify)

    b.plugin(cssModulesify, {
      rootDir: __dirname,
      output: './dist/main.css',
      postcssAfter: [
        require('postcss-import')({path: ['src/styles']}),
        require('postcss-nested'),
        require('postcss-css-variables')(),
        require('postcss-australian-stylesheets'),
        require('postcss-custom-media'),
        require('autoprefixer')
      ]
    })
  }
}
