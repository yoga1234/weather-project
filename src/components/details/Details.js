import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details-container">
      <h3>Weather Details</h3>
      <div>
        <p>
          Cloud: <span>20%</span>
        </p>
        <p>
          Humidity: <span>78%</span>
        </p>
        <p>
          Wind: <span>1km/h</span>
        </p>
        <p>
          Rain: <span>0mm</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
