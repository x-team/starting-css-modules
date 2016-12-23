module.exports = function renderChildren (children) {
  if (!children) { return '' }
  const output = Array.isArray(children) ? children : [children]
  return output.join('\n')
}
