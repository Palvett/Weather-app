// script.js

const apiKey = "deda01dac68f7c8399cbc11da6ec3711";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Yaounde";

async function checkWeather () {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();