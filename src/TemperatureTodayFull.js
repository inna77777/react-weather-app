import React, { useEffect, useState } from "react";
import "./styles/TemperatureTodayFull.css";

export default function TemperatureTodayFull({ temp }) {
  const [tempValue, setTemp] = useState(temp);
  const [unit, setUnit] = useState("celsius");

  useEffect(() => {
    setTemp(temp);
  }, [temp]);
  function CelsiusToFahren(event) {
    event.preventDefault();
    const tempFahren = Math.round((temp * 9) / 5 + 32);
    setTemp(tempFahren);
    setUnit("fahrenheit");
  }

  function FahrenheitToCels(event) {
    event.preventDefault();
    setTemp(temp);
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <>
        {" "}
        <span id="temperature-today">{tempValue} </span>
        <span className="units">
          °C
          <a onClick={CelsiusToFahren} href="/" id="fahrenheit-link">
            {"|"}°F
          </a>
        </span>
      </>
    );
  }
  return (
    <>
      {" "}
      <span id="temperature-today">{tempValue} </span>
      <span className="units">
        <a onClick={FahrenheitToCels} href="/" id="celsius-link">
          °C |
        </a>
        °F
      </span>
    </>
  );
}
