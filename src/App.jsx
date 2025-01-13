import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Fetch weather data
  async function getWeather() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4448ba14cb38fc131a490716e8b93b25"
      );
      if (!response.ok) {
        throw new Error("Unable to fetch");
      }
   
      const data = await response.json();
      
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      //in order to do search functionality we should recieve the input city and change the lon and lat accordingly

      const city = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const feelslike=data.main.feels_like;
      const tempmin=data.main.temp_min;
      const tempmax=data.main.temp_max;
      const pressure=data.main.pressure;
      const humidity=data.main.humidity;
      const windspeed=data.wind.speed;
      const sea=data.main.sea_level;
      const g=data.main.grnd_level;
      


      setWeatherData({ city, temp, desc, feelslike, tempmin,tempmax,pressure,humidity,windspeed,icon,sea,g,});
      setLoading(false);
    } catch (err) {
      setError(err.message); 
      setLoading(false);
    }
  }


  useEffect(() => {
    getWeather();
  }, []);

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app">
      <Weather data={weatherData} /> 
    </div>
  );
};

export default App;