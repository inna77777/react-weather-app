import "./styles/App.css";
import axios from "axios";
import WeatherToday from "./WeatherToday";
import { useState } from "react";
import DateTime from "./functions/DateTime";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  function handleSubmit(response) {
    setError(false);
    if (response.data.message) {
      setError(response.data.message);
      return;
    }
    setWeatherData({
      city: response.data.city,
      date:DateTime(),
      hum: response.data.temperature.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,
      temp: Math.round(response.data.temperature.current),
      desc: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
    });
  }

  function getCity(event) {
    event.preventDefault();

    const city = event.target[0].value;
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=7928b8fafat7344abbe4f90d8711dbbo`;
    axios.get(url).then(handleSubmit);
  }

  return (
    <div className="WeatherApp">
      <section className="city-weather">
        <form onSubmit={getCity}>
          <div className="search-line-button">
            <input
              type="search"
              name="enter-city"
              id="search-city"
              placeholder="Enter your city"
            />
            <button className="btn btn-primary submit-city" type="submit">
              SEARCH
            </button>
            <button
              id="current-location"
              className="btn btn-primary"
              type="button"
            >
              CURRENT
            </button>
          </div>
        </form>
        <WeatherToday weatherData={weatherData} error={error} />
      </section>
      <p id="gitLink">
        <a href="https://github.com/inna77777/project-shecodesplus">
          Open-source code
        </a> 
         {" "}by Inna Kobets
      </p>
    </div>
  );
}

export default App;
