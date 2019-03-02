import { html, Component, render } from 'htm/preact'

const Header = () => html`<header>Hacker News</header>`
const Footer = props => html`<footer ...${props} />`
const ArticleLink = props => html`<li>
  <a href=${props.url}>
    <h2>${props.title}</h2>
    <p>${props.domain}</p>
    <div>
      <date>🕓 ${props.time_ago}</date>
      <span>🗳 ${props.points} points</span>
    </div>
  </a>
</li>`

class App extends Component {
  state = { news: [] }

  async componentDidMount () {
    const {getHackerNews} = await import('./domain/getHackerNews')
    const news = await getHackerNews()
    this.setState({news})
  }

  render(_, { news = [] }) {
    return html`
      <div id="app">
        <${Header} />
        <ul>
          ${news.map(article => html`<${ArticleLink} ...${article} />`)}
        </ul>
        <${Footer}>📦 Usando parcel como bundler<//>
      </div>
    `;
  }
}

render(html`<${App} />`, document.body)