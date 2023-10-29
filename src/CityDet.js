import React from "react";


export default function CityDet({ city ,date, hum , windSpeed }){
return (
  <>
    <h1>{city}</h1>
    <ul>
      <li>{date}</li>
      <li>Humidity: {hum} %</li>
      <li>Wind speed: {windSpeed} km/h</li>
    </ul>
  </>
);
}