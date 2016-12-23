const styles = require('./grid.css')
const renderChildren = require('../../util/render-children')

module.exports = function (children) {
  return `<div class="${styles.row}">
  ${renderChildren(children)}
</div>`
}
