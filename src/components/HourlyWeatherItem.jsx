import React from 'react'

const HourlyWeatherItem = () => {
  return (
    <li className="weather-item">
        <p className="time"> 00:00 </p>
        <img src="src/assets/icons/clouds.svg" alt="" className="weather-icon" />
        <p className="temperature">20°</p>
    </li>
  )
}

export default HourlyWeatherItem