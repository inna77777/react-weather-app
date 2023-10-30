import React from "react";
import "./styles/TempTodayDet.css";
import TemperatureTodayFull from "./TemperatureTodayFull";

export default function TempTodayDet({ temp, icon, desc, feelsLike }) {


  return (
    <div className="temperature-container">
      <img id="img-today" src={icon} alt="icon-weather" />
      <div>
        <TemperatureTodayFull temp={temp} />
        <div className="feels-like">
          <span id="description">{desc}</span>
          <br />
          Feels like: <span className="feels-like">{feelsLike}°C</span>
        </div>
      </div>
    </div>
  );
}
