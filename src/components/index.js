import {html} from 'htm/preact'

export const Header = () => html`<header>Hacker News</header>`

export const Footer = props => html`<footer ...${props} />`

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

export const ListOfArticles = ({news}) => html`<ul>
  ${news.map(article => html`<${ArticleLink} ...${article} />`)}
</ul>`

export const LoadingIndicator = _ => html`<center><i>🌀</i></center>`