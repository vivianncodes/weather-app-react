import React, { useState } from "react";
import "../src/Weather.css";

export default function WeatherSearch() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function changeCity(event) {
    event.preventDefault();
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
    </div>
  );
}
