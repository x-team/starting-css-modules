const row = require('./components/grid/row')
const column = require('./components/grid/column')
const box = require('./components/box')

const html = [
  row([
    column({ xs: 3 }, '<img src="https://avatars2.githubusercontent.com/u/12612655?v=3&s=200">'),
    column({ xs: 9 }, box('CSS Modules with Responsive Grids!'))
  ]),
  row([
    column({ xs: 12 }, box('<p>This is a full-width column in all screen sizes.</p> <p>Columns below are half-width for wider screens, and full-width in smaller screens.</p>')),
    column({ xs: 12, md: 6 }, box('Column 1')),
    column({ xs: 12, md: 6 }, box('Column 2'))
  ])
]

document.querySelector('.container').innerHTML = html.join('\n')
