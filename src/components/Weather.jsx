import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'

const Weather = () => {
  return (
    <div className="weather">
        <div className='search-bar'>
        <img src={search_icon} width='28px' height='30px'></img>
            <input type='text' placeholder='Search Weather by city'></input>
        </div>
        <img src={search_icon}></img>
    </div>
  )
}

export default Weather
