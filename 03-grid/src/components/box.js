const styles = require('./box.css')
const renderChildren = require('../util/render-children')

module.exports = function (children) {
  return `<div class="${styles.root}">
  ${renderChildren(children)}
</div>`
}
