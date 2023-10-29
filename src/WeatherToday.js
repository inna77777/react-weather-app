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
      <div className="general-city">
        <div className="city-date">
          <div className="WeatherInfo">
            <div className="row">
              <div className="col-6">
                <CityDet
                  city={weatherData.city}
                  date={weatherData.date}
                  hum={weatherData.hum}
                  windSpeed={weatherData.windSpeed}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-8">
                <TempTodayDet
                  icon={weatherData.icon}
                  temp={weatherData.temp}
                  desc={weatherData.desc}
                  feelsLike={weatherData.feelsLike}
                />
              </div>
            </div>
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
