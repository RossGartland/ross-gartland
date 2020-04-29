import React from 'react';
import PortfolioCard from '../../components/portfolio-card/portfolio-card.component';
import covidProject from '../../assets/covid19-ireland.png';
import Temp from '../../assets/temp.png';
import './portfolio.style.css';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-container">
            <div className="row">
            <PortfolioCard image={covidProject} title={`Covid-19 Ireland`} about={`A website that tracks Covid-19 across the island of Ireland.`} 
            tech={[`HTML`,`CSS`,`JS`,`Node`,`React`,`JSX`,`Firebase`]}/>
            <PortfolioCard image={Temp} title={`Placeholder`} about={`Text will go here.`} 
            tech={[`HTML`,`CSS`,`JS`,`Node`,`React`,`JSX`,`Firebase`]}/>
            <PortfolioCard image={Temp} title={`Placeholder`} about={`Text will go here.`} 
            tech={[`HTML`,`CSS`,`JS`,`Node`,`React`,`JSX`,`Firebase`]}/>
            <PortfolioCard image={Temp} title={`Placeholder`} about={`Text will go here.`} 
            tech={[`HTML`,`CSS`,`JS`,`Node`,`React`,`JSX`,`Firebase`]}/>
            </div>
        </div>
    )
}
export default Portfolio;