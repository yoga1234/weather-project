import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="location-container">
      <div className="search-input">
        <input type="text" placeholder="Search Location" />
        <button>Search</button>
      </div>
      <div className="search-result">
        <p>Location Found</p>
        <p>Location Found</p>
        <p>Location Found</p>
        <p>Location Found</p>
      </div>
    </div>
  );
};

export default Location;
