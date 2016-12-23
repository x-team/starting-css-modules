const flexboxgrid = require('flexboxgrid')
const styles = require('./grid.css')
const renderChildren = require('../../util/render-children')

const gridCx = require('classnames/bind').bind(flexboxgrid)

module.exports = function (props, children) {
  const variants = {}
  Object.keys(props).forEach((k) => variants[`col-${k}-${props[k]}`] = true)

  return `<div class="${styles.column} ${gridCx(variants)}">
  ${renderChildren(children)}
</div>`
}
