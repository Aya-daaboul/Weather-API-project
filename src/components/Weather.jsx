import React from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import bal from '../assets/temp.png'
import wind from '../assets/image 2.png'
import humid from '../assets/image 6.png'
const Weather = ({ data }) => {
  return (
    <div className='weather-card'>
      <div className='search-bar'>
        <img src={search_icon} width='28px' height='30px' alt="Search Icon" />
        <input type='text' placeholder='Search Weather by city' />
      </div>

      <div className='blocks'>
      <div className="weather-n-city-info">
        <h2>{data.city}</h2>
        <p className='temp-bold'>{data.temp} K</p>
        <p className='desc'>{data.desc}</p>
        <img src={data.icon} alt='weather icon' width='200px' height='200px'></img>
        
        <div className='humidity_pr'>
        <img src={humid} width='20px' height='20px'></img>
        <h3>Humidity: </h3>
        <h4>{data.humidity}</h4>
        <img src={wind} width='30px' height='38px'></img>
        <h3>Wind: </h3>
        <h4>{data.windspeed}</h4>
      </div>

      </div>
      


      <div className='temp-info'>
        <img src={bal}></img>
        <h4>Feels like: <br></br></h4>
        <h4>{data.feelslike}</h4>

        <h4>Minimum temperature <br></br></h4>
        <h4>{data.tempmin}</h4>

        <h4>Maximum Temperature <br></br></h4>
        <h4>{data.tempmax}</h4>
      </div> 
      <div className="more_info">
        <div className="details">
          <h3>Pressure</h3>
          <h4>{data.pressure}</h4>
        </div>
        <div className="details">
          <h3>Sea level</h3>
          <h4>{data.sea}</h4>
        </div>
        <div className="details">
          <h3>ground level</h3>
          <h4>{data.g}</h4>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Weather;