const request = () => {
  return window
    .fetch(
      'https://api.hnpwa.com/v0/news/1.json'
    )
    .then(res => res.json())
}

const map = json => {
  return json
}

export const getHackerNews = () => {
  return request().then(map)
}
