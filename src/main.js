import styles from './styles/media-item.css'

const data = {
  image: 'https://avatars2.githubusercontent.com/u/12612655?v=3&s=200',
  description: 'you can css modules too!'
}

const html = `
  <div class="${styles.root}">
    <img class="${styles.image}" src="${data.image}" />
    <p class="${styles.description}">${data.description}</p>
  </div>
`

document.querySelector('.container').innerHTML = html
