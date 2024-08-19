import React from "react";
import WeatherSearch from "./WeatherSearch";
import "../src/Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tampa",
    temperature: 89,
    date: "Monday, 00:00",
    description: "partly cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 50,
    wind: 10,
  };
  return (
    <div className="Weather">
      <WeatherSearch />
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-details">
              <strong>
                <span>{weatherData.date}</span>
              </strong>
              <br />
              <span>{weatherData.description}</span>
            </p>
          </div>
          <div className="temperature-container">
            <div className="weather-app-icon">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
            </div>
            <div className="weather-temp-value">{weatherData.temperature}</div>
            <div className="weather-unit">°F | °C</div>
          </div>
          <div className="current-conditions">
            <p>
              <span>Humidity: {weatherData.humidity}%</span>
              <br />
              <span>Wind: {weatherData.wind} mph</span>
            </p>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
      <footer>
        Coded by
        <a
          href="https://github.com/vivianncodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vivian Nguyen
        </a>
        and is
        <a
          href="https://github.com/vivianncodes/final-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github
        </a>
        and
        <a
          href="https://skycast-vivianncodes.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
        <br />
        Feature background by
        <a
          href="https://www.facebook.com/PdM.Ilustraciones"
          target="_blank"
          rel="noopener noreferrer"
        >
          @_shunior
        </a>
      </footer>
    </div>
  );
}
