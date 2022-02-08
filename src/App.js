import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import loading from './loading.gif'

const App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${term}&from=2022-02-06&to=2022-02-06&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        const articles = await res.json()
        setArticles(articles.articles)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchArticles()
  }, [term])

  return (
    <>
      <div className="showcase">
        <div className="overlay">
          <h1 className="heading">
            Viewing articles about <span>{term}</span>
          </h1>
          <SearchForm searchText={(text) => setTerm(text)} />
        </div>
      </div>

      {isLoading ? (
        <img className='load' src={loading} alt="Loading..." />
      ) : (
        <section className="grid">
          {articles.map((article) => {
            const {
              description,
              title,
              url,
              urlToImage,
            } = article

            return (
              <article className="card" key={url}>
                <a href={url}>
                <img
                  className="news-img"
                  src={urlToImage}
                  alt="Preview Unavailable"
                  ></img>
                </a>

                <h3 className="title">
                  <a className='title-url' href={url} target="_blank"
                  rel="noopener noreferrer">
                    {title}
                  </a>
                </h3>

                <p className='description'>{description}</p>
                <a href={url}><button className='btn'>Read More</button></a>
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default App
