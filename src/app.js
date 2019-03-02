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
const ListOfArticles = ({news}) => html`<ul>
  ${news.map(article => html`<${ArticleLink} ...${article} />`)}
</ul>`
const LoadingIndicator = _ => html`<center><i>🌀</i></center>`

class App extends Component {
  state = { loading: true, news: [] }

  async componentDidMount () {
    const {getHackerNews} = await import('./domain/getHackerNews')
    const news = await getHackerNews()
    this.setState({loading: false, news})
  }

  render(_, { loading, news }) {
    return html`
      <div id="app">
        <${Header} />
        ${loading
          ? html`<${LoadingIndicator} />`
          : html`<${ListOfArticles} news={${news}} />`
        }
        <${Footer}>📦 Usando parcel como bundler<//>
      </div>`
  }
}

render(html`<${App} />`, document.body)