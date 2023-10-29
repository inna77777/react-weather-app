import React from "react";
import "./styles/TempTodayDet.css";

export default function TempTodayDet({ temp, icon, desc, feelsLike }) {
  return (
    <div className="temperature-container">
      <img id="img-today" src={icon} alt="icon-weather" />
      <div>
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
