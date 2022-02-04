import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './newsitem.css'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=788703c5467e43ecb2011237ad66d369")
            console.log(response)
        }
        getArticles()
    },[])
    return (
        <div className='article-container'>
            {articles.map(article =>  {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
};

export default NewsList;
