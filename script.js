// Functionality

const apiKey = "deda01dac68f7c8399cbc11da6ec3711";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector('.city')
const temperature = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('wind')
const searchBtn = document.querySelector('.search-btn')
const cityInput = document.querySelector('.city-input')

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
}

checkWeather("yaounde");


// const weatherform = document.querySelector(weatherform);