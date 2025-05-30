import "./App.css";
import React from 'react';
import Search from "./components/search/search";
import Forecast from './components/search/forecast/forecast';
import CurrentWeather from "./components/search/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";




function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );


    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);
 

  return (
    <div className="container">
      {/* <h1>Weather App</h1> */}
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <br></br>
      <a href="/weatherinput" className = "link-style">Go to weatherinput</a>
    </div>
  );
}


export default App;
