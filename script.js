// script.js

const apiKey = CONFIG.WEATHER_API_KEY;
const apiUrl = 'https://openweathermap.org';

async function checkWeather () {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);
}

checkWeather();

