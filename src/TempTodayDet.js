import React, { useEffect, useState } from "react";
import "./styles/TempTodayDet.css";

export default function TempTodayDet({ temp, icon, desc, feelsLike }) {
  const [tempValue, setTemp] = useState(temp);

  useEffect(() => {
    setTemp(temp);
  }, [temp]);

  function CelsiusToFahren(event) {
    event.preventDefault();
    const tempFahren = Math.round((temp * 9) / 5 + 32);
    setTemp(tempFahren);
  }

  function FahrenheitToCels(event) {
    event.preventDefault();
    setTemp(temp);
  }

  return (
    <div className="temperature-container">
      <img id="img-today" src={icon} alt="icon-weather" />
      <div>
        <span id="temperature-today">{tempValue} </span>
        <span className="units">
          <a onClick={FahrenheitToCels} href="/" id="celsius-link">
            °C
          </a>
          <a onClick={CelsiusToFahren} href="/" id="fahrenheit-link">
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
