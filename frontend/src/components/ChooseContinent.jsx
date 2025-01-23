import React from "react";
import { Link } from "react-router-dom";

const ChooseContinent = () => {
  return (
    <div className="choose-continent">
      <h1>Select a Continent</h1>
      <p>Choose a continent to start the quiz: 👇</p>
        <div className="continent-links">
          <Link to="/Europe" className="continent-button">Europe</Link>
          <Link to="/Asia" className="continent-button">Asia</Link>
          <Link to="/Africa" className="continent-button">Africa</Link>
          <Link to="/America" className="continent-button">America</Link>
          <Link to="/Oceania" className="continent-button">Oceania</Link>
          <Link to="/Rest" className="continent-button-1">1%</Link>
        </div>
    </div>
  )
}

export default ChooseContinent;