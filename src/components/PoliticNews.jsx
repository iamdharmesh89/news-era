import React, { useState, useEffect } from "react";

const PoliticNews = (props) => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.code}&category=entertainment&apiKey=fa062b978a2940ce9078a936ded80950`;
  const [news, setNews] = useState([]);
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return setNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(news);
  return (
    <div className="container-cards">
      {news.map((item) => (
        <div className="card">
          <a href={item.url} rel="noreferrer" target="_blank">
            <img className="news-image" src={item.urlToImage} alt="" />
          </a>
          <h2 className="news-title">{item.title}</h2>
          <span className="date">Published on: {item.publishedAt}</span>
        </div>
      ))}
    </div>
  );
};

export default PoliticNews;
