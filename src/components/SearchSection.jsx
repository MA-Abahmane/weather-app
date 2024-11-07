
const SearchSection = () => {
    const handleCitySearch = (x) => {
        x.preventDefault();
        const searchInput = x.target.querySelector(".search-input").value
        // console.log(searchInput);
        
        const API_KEY = "973328026feadaa4ff54db9365885394"
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}&units=metric`

        const xhr = new XMLHttpRequest();

        xhr.open("GET", API_URL, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log("Weather data:", response);
                // Process the response data here
            } else if (xhr.readyState === 4) {
                console.error("Error fetching weather data:", xhr.status, xhr.statusText);
            }
        };

        xhr.send();


    }
  return (
    <div className="search-section">
        {/* The Search Section */}
        <form action="#" className="search-form" onSubmit={handleCitySearch}>
            <span class="material-symbols-outlined">search</span>
            <input type="search" placeholder="Enter a city name"
            className="search-input" required />
        </form>
        <button className="location-button">
            <span class="material-symbols-outlined">location_searching</span>
        </button>
    </div>
  )
}

export default SearchSection