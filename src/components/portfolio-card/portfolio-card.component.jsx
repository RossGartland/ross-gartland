import React from "react";
import "./portfolio-card.style.css";

const Portfolio = (props) => {
  return (
    <div className="col-md-5 mb-4 portfolio-box">
      <div className="card border-0 shadow">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.image} className="card-img-top" alt="Developers" />
        </a>
        <div className="card-body text-center">
          <h5 className="card-title mb-0">{props.title}</h5>
          <div className="card-text">{props.about}</div>
          <ul>
            {props.tech && props.tech.length
              ? props.tech.map((item) => <li>{item}</li>)
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
