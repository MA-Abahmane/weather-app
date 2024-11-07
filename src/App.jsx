import SearchSection from "./components/SearchSection"
import CurrentWeather from "./components/CurrentWeather"
import HourlyWeatherItem from "./components/HourlyWeatherItem"

const App = () => {
  return (
    <div className="container">
        <SearchSection/>

        {/* The Weather Section */}
        <div className="weather-section">
            <CurrentWeather/>

            {/* Hourly Weather List */}
            <div className="hourly-forecast">
                <ul className="weather-list">
                    <HourlyWeatherItem/>
                    <HourlyWeatherItem/>
                    <HourlyWeatherItem/>
                    <HourlyWeatherItem/>
                    <HourlyWeatherItem/>
                    <HourlyWeatherItem/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default App