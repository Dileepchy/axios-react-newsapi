import axios from "axios";
import React, { useState } from "react";

function FetchNews() {
  const [news, setNews] = useState([]);

  //news api call using reactjs 
  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-06-13&sortBy=publishedAt&apiKey={name}")
    .then((response) => {
       console.log(response);
      setNews(response.data.articles);
    });
    console.log("Clicked");
  };

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              FetchNews
            </button>
          </div>
        </div>
      </div>

{/* maps from news using useState */}
      <div className="containner">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchNews;
