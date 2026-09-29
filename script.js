const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const apiKey = window.WEATHER_API_KEY

const cityName = document.querySelector('#city')
const temperature = document.querySelector('#temp')
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#wind-speed')
const feelsLike = document.querySelector('#feels-like')
const description = document.querySelector('#description')
const weatherIcon = document.querySelector('#weather-icon')
const weatherForm = document.querySelector('.weather-form')
const errorBox = document.querySelector('.error')
const cityInput = document.querySelector('.city-input')

async function checkWeather (city) {
  if (!apiKey) {
    console.error('API Key missing. check if config.js is loaded properly.')
    showError()
    return
  }

  try {
    const response = await fetch(`${apiBaseUrl}&q=${encodeURIComponent(city)}&appid=${apiKey}`)

    if (!response.ok) {
      showError()
      return
    }

    const data = await response.json()
    showWeather(data)
  } catch (err) {
    console.error(err)
    showError()
  }
}

function showWeather (data) {
  errorBox.style.display = 'none'
  cityName.textContent = data.name
  temperature.textContent = Math.round(data.main.temp) + '°C'
  humidity.textContent = data.main.humidity + '%'
  wind.textContent = Math.round(data.wind.speed * 3.6) + ' km/h'
  feelsLike.textContent = Math.round(data.main.feels_like) + '°C'
  description.textContent = data.weather[0].description
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  localStorage.setItem('lastCity', data.name)
}

function showError () {
  errorBox.style.display = 'block'
  cityName.textContent = ''
  temperature.textContent = ''
  humidity.textContent = ''
  wind.textContent = ''
  feelsLike.textContent = ''
  description.textContent = ''
  weatherIcon.src = ''
}

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const city = cityInput.value.trim()
  if (city === '') return
  checkWeather(city)
})

const savedCity = localStorage.getItem('lastCity') || 'London'
if (savedCity) {
  cityInput.value = savedCity
  checkWeather(savedCity)
}
