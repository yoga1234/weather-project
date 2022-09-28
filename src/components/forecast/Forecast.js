import React from "react";
import "./Forecast.css";

const Forecast = () => {
  return (
    <div className="forecast-container">
      <h3>Forecast</h3>
      <div>
        <div className="forecast-item">
          <p>Friday 09</p>
          <p>Rain</p>
        </div>
        <div className="forecast-item">
          <p>Friday 09</p>
          <p>Rain</p>
        </div>
        <div className="forecast-item">
          <p>Friday 09</p>
          <p>Rain</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
