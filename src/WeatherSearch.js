import React, { useState } from "react";
import "../src/Weather.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  //   const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 90°F in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-form-input"
            placeholder="Enter a city..."
            onChange={changeCity}
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      {/* <h2>{message}</h2> */}
    </div>
  );
}
