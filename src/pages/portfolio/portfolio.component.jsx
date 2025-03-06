import React from "react";
import PortfolioCard from "../../components/portfolio-card/portfolio-card.component";
import covidProject from "../../assets/covid19-ireland.png";
import mssingBusProject from "../../assets/missing-bus-reporter.jpg";
import Temp from "../../assets/temp.png";
import ArrowDown from "../../components/arrow/arrow-down.component";
import "./portfolio.style.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-container">
      <div className="row">
        <PortfolioCard
          link={`https://github.com/RossGartland?tab=repositories&q=siopa&type=&language=&sort=`}
          image={Temp}
          title={`Siopa`}
          about={`A platform for shops to sell and advertise their products built on microserive architecture .`}
          tech={[`Java`, `Spring`, `Angular`, `PostgreSQL`, `MongoDB`]}
        />
        <PortfolioCard
          link={`https://github.com/RossGartland/missing-bus-ni`}
          image={mssingBusProject}
          title={`Missing Bus NI`}
          about={`A website for reporting missing or late busses.`}
          tech={[`Python`, `Flask`, `DynamoDB`, `Docker`, `EC2`, `AWS`, `ECR`]}
        />
        <PortfolioCard
          link={`https://github.com/RossGartland?tab=repositories&q=videolocker&type=&language=&sort=`}
          image={Temp}
          title={`VideoLocker`}
          about={`Video streaming and uploading platform.`}
          tech={[`Azure`, `Python`, `React`]}
        />
        <PortfolioCard
          link={`https://github.com/RossGartland/covid19-ireland`}
          image={covidProject}
          title={`Covid-19 Ireland`}
          about={`A website that tracks Covid-19 across the island of Ireland.`}
          tech={[`React`, `HTML`, `CSS`, `JS`, `Firebase`]}
        />
      </div>
      <ArrowDown link={"#contact"} title={"contact"} />
    </div>
  );
};
export default Portfolio;
