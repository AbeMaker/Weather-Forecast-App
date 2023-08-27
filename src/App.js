import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=32203a01cd7525adbe16508e2b7f4a3a`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
    }
  }, [city]);

  return (
    <div className="App">
      <h1>Weather Forecast App By Abraham Maker</h1>
      <SearchForm setCity={setCity} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
