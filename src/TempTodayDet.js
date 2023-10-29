import React from "react";
import "./styles/TempTodayDet.css";

export default function TempTodayDet({temp,icon,desc, feelsLike}){
  return (
    <div className="temperature-container d-flex align-items-center justify-content-end">
      <span>
        <img
          id="img-today"
          src={icon}
          alt="icon-weather"
        />
      </span>
      <div className="col-6">
        <span id="temperature-today">{temp} </span>
        <span className="units">
          <a href="/" id="celsius-link">
            °C
          </a>
          <a href="/" id="fahrenheit-link">
            {" "}
             °F
          </a>
        </span>
        <div className="feels-like">
          <span id="description">{desc}</span>
          <br />
          Feels like: <span className="feels-like">{feelsLike}°C</span>
        </div>
      </div>
    </div>
  );
}