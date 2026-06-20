// script.js

const apiKey = 'c4c4cb66f3b63c314af9da2fb20de686';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Yaounde';

async function checkWeather () {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();