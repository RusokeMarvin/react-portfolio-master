import React from "react";
import "./style.css"; // Custom CSS file
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <div className="portfolio-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <div className="portfolio-header">
          <h1 className="portfolio-title">Portfolio</h1>
          <hr className="portfolio-border" />
        </div>
        
        <div className="portfolio-items-container">
          {dataportfolio.map((data, i) => (
            <div key={i} className="portfolio-item">
              <img src={data.img} alt="" className="portfolio-img" />
              <div className="portfolio-content">
                <p>{data.description}</p>
                <a href={data.link} className="portfolio-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};
