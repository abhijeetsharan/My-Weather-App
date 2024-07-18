function getWeather(){
    const city = document.getElementById("cityInput").value;
    const apiKey = "28da6fb51amsh0eb40c61b841565p14f8eejsn96a427bf9651";
    const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    })
    .catch(error => {
        console.error("Error fetching weather data :",error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = "<p>Failed to fetch weather data. Please try again later.</p>";
    });
}