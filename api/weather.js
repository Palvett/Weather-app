export default async function handler (req, res) {
  const { city } = req.query

  if (!city) {
    return res.status(400).json({ error: 'City is required' })
  }

  const apiKey = process.env.OPENWEATHER_API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.status(response.status).json(data)
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong fetching weather data' })
  }
}
