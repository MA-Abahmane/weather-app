import React from 'react'

const CurrentWeather = () => {
  return (
    <div className="current-weather">
        <img src="src/assets/icons/snow.svg" alt="snow" className="weather-icon" />
        <h2 className="temperature">
            21 <span> °C </span>
        </h2>
        <p className="description"> It's Snowing!</p>
    </div>
  )
}

export default CurrentWeather