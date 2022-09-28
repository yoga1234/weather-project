import React from "react";
import "./WeatherMain.css";

const WeatherMain = () => {
  return (
    <div className="main-container">
      <div className="left">
        <p>26°</p>
      </div>
      <div className="middle">
        <p className="location">London</p>
        <p>10:36 - Friday, 22 Oct 2022</p>
      </div>
      <div className="right">
        <p>Sunny</p>
      </div>
    </div>
  );
};

export default WeatherMain;
