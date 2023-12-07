const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = '98740f4ebc0d63bc0f8ba70090e5a091';
    const cityInput = document.querySelector('.search-box input');
    const city = cityInput.value;

    if (city === '') {
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            // Set other weather details
            temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
            description.innerHTML = `${data.weather[0].description}`;
            humidity.innerHTML = `${data.main.humidity}%`;
            wind.innerHTML = `${parseInt(data.wind.speed)} Km/h`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Handle the error (e.g., display an error message to the user)
        });
});
