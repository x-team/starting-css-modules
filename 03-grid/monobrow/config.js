const cssModulesify = require('css-modulesify')
const path = require('path')

module.exports = {
  entry: 'src/main.js',
  outDir: 'dist',

  // disable browserify-incremental as css-modulesify is not yet compatible
  inc: false,

  setup: function setup (b, opts) {
    b.plugin('css-modulesify', {
      output: `${opts.outDir}/main.css`,

      // using global plugin so we can transform styles from node_modules
      global: true,
      postcssBefore: [

      ],
      postcssAfter: [
        require('autoprefixer')
      ]
    })
  }
}
