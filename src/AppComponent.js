import {html, Component} from 'htm/preact'
import {Header, Footer, LoadingIndicator, ListOfArticles} from './components'

export default class AppComponent extends Component {
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