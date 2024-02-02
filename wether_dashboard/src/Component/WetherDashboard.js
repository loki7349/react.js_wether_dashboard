// Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = ({ city, eventDate }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '7b996ab0342ec520f78cdb7f6bbcc64b';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getEventForecast = () => {
    // Logic to get event-specific forecast if needed
  };

  const getOptimalTravelDays = () => {
    // Logic to determine optimal travel days if needed
  };

  return (
    <div>
      <h2>{`Weather in ${city}`}</h2>
      {eventDate && <p>{`Forecast for ${eventDate}`}</p>}
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
