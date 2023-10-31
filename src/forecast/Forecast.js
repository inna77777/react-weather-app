import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import GetDayName from "../functions/GetDayName";

export default function Forecast({ city }) {
  const [weatherDataForecast, setWeatherDataForecast] = useState([]);
  useEffect(() => {
    function getData(response) {
      const days = response.data.daily.slice(1);
      const mapDays = days.map((day) => {
        return {
          tempMin: Math.round(day.temperature.minimum),
          tempMax: Math.round(day.temperature.maximum),
          day: GetDayName(day.time),
          icon: day.condition.icon_url,
        };
      });
      setWeatherDataForecast(mapDays);
    }

    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=7928b8fafat7344abbe4f90d8711dbbo`;
    if (city) {
      axios.get(apiUrl).then(getData);
    }
  }, [city]);
  return (
    <div className="container" id="days6">
      <div className="row">
        {weatherDataForecast.map(({ tempMin, tempMax, day, icon }) => {
          return (
            <div className="col one-day">
              <div className="day">{day}</div>
              <img className="icons-forecast" src={icon} />
              <div className="temperature-max">
                {tempMax}°C
                <div className="temperature-min">{tempMin}°C</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
