import React from "react";
import "./styles/WeatherToday.css";
import CityDet from "./CityDet";
import TempTodayDet from "./TempTodayDet";
import { ProgressBar } from "react-loader-spinner";

export default function WeatherToday({ weatherData, error }) {
  if (error) {
    return (
      <>
        <h1 className="message text-center mt-3">{error}</h1>
      </>
    );
  }
  if (weatherData?.city) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5 city-container">
            <CityDet
              city={weatherData.city}
              date={weatherData.date}
              hum={weatherData.hum}
              windSpeed={weatherData.windSpeed}
            />
          </div>
          <div className="col-7 pe-0 pt-3 temp-container">
            <TempTodayDet
              icon={weatherData.icon}
              temp={weatherData.temp}
              desc={weatherData.desc}
              feelsLike={weatherData.feelsLike}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {" "}
      <h1 id="search-city-h1">Search for a city </h1>
      <div className="loader">
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="white"
          barColor="#51E5FF"
        />
      </div>
    </>
  );
}
