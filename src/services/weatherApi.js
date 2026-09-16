const CURRENT_WEATHER_URL = 'https://api.weatherapi.com/v1/current.json'

export async function getCurrentWeather(city) {
  const apiKey = 'fdaaee7a251d41e7ae6160815261609'

  if (!apiKey) {
    throw new Error('Missing WeatherAPI key')
  }

  const query = new URLSearchParams({ key: apiKey, q: city })
  const response = await fetch(`${CURRENT_WEATHER_URL}?${query}`)

  if (!response.ok) {
    throw new Error('Weather request failed')
  }

  const data = await response.json()

  if (data.error) {
    throw new Error(data.error.message)
  }

  return data
}
