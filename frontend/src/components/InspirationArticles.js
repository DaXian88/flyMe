import React from "react";
import backpacking from "../assets/backpacking.webp";
import cheapest from "../assets/cheapest.webp";
import vacc from "../assets/vacc.webp";
import getlost from "../assets/howtogetlost.webp";
import bestbooks from "../assets/bestbooks.webp";
import "../styles/inspirationarticles.css";

const InspirationArticles = () => {
  return (
    <>
      <h2>Need help picking a destination? Get inspiration!</h2>
      <div className="inspiration-articles">
        <div className="backpacking-container">
          <a href="https://www.bucketlistly.blog/posts/best-backpacking-adventure-blogs">
            <img src={backpacking} alt="backpacking" />
          </a>
          <h3 className="backpacking-text">
            10 Best Adventure & Backpacking Blogs to Follow in 2022
          </h3>
        </div>
        <div className="cheapest-container">
          <a href="https://www.bucketlistly.blog/posts/cheap-countries-to-visit">
            <img src={cheapest} alt="cheapest" />
          </a>
          <h3 className="cheapest-text">
            10 Cheapest Countries to Visit in 2022
          </h3>
        </div>
        <div className="vacc-container">
          <a href="https://www.bucketlistly.blog/posts/countries-open-to-vaccinated-travelers">
            <img src={vacc} alt="vaccine safe" />
          </a>
          <h3 className="vacc-text">
            27 Countries That Are Open to Vaccinated Travelers
          </h3>
        </div>
        <div className="getlost-container">
          <a href="https://www.bucketlistly.blog/posts/how-to-get-lost-more-comfortably-while-traveling">
            <img src={getlost} alt="how to get lost article" />
          </a>
          <h3 className="getlost-text">How to Get Lost...</h3>
        </div>
        <div className="bestbooks-container">
          <a href="https://www.bucketlistly.blog/posts/best-travel-adventure-books">
            <img src={bestbooks} alt="best travel books article" />
          </a>
          <h3 className="bestbooks-text">
            8 Great Travel Books to Read in 2022
          </h3>
        </div>
      </div>
    </>
  );
};

export default InspirationArticles;
