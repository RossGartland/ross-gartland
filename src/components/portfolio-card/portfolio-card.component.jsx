import React from 'react';
import './portfolio-card.style.css';

const Portfolio = (props) => {
    return (
        <div className="col-xl-5 col-md-7 mb-4 portfolio-box">
            <div className="card border-0 shadow">
                <img src={props.image} className="card-img-top" alt="Developers" />
                <div className="card-body text-center">
                    <h5 className="card-title mb-0">{props.title}</h5>
                    <div className="card-text">{props.about}</div>
                    <h6 className="card-title mb-0">Technologies Used</h6>
                    <ul>
                        {
                            props.tech && props.tech.length ?
                                props.tech.map(item =>

                                    <li>{item}</li>
                                )
                                :
                                null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;