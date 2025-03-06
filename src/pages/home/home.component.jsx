import React from "react";
import Hero from "../../components/hero/hero.component";
import ArrowDown from "../../components/arrow/arrow-down.component";
import "./home.style.css";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <Hero />
      <ArrowDown link={"#about"} title={"about"} />
    </div>
  );
};
export default Home;
