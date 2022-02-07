import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import loading from './loading.gif'
// import { uuid4 } from uuid4

const App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${term}&from=2022-02-06&to=2022-02-06&sortBy=popularity&apiKey=788703c5467e43ecb2011237ad66d369`
        )
        const articles = await res.json()
        console.log(articles.articles)
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
              author,
              description,
              title,
              url,
              urlToImage,
            } = article

            return (
              <article className="card" key={url}>
                <img
                  className="news-img"
                  src={urlToImage}
                  alt="Preview Unavailable"
                ></img>

                <h2 className="title">
                  <a href={url} target="_blank"
                  rel="noopener noreferrer">
                    {title}
                  </a>
                </h2>
                <h4>By: {author}</h4>
                <p>{description}</p>
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default App
