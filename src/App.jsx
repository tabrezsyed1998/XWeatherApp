import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCards from './components/WeatherCards'
import { getCurrentWeather } from './services/weatherApi'
import './App.css'

function App() {
  const [cityName, setCityName] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSearch() {
    const city = cityName.trim()

    if (!city) {
      window.alert('Failed to fetch weather data')
      return
    }

    setIsLoading(true)
    setWeatherData(null)

    try {
      const data = await getCurrentWeather(city)
      setWeatherData(data)
    } catch {
      window.alert('Failed to fetch weather data')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="weather-app">
      <section className="weather-panel" aria-label="Weather search">
        <SearchBar
          cityName={cityName}
          isLoading={isLoading}
          onCityNameChange={setCityName}
          onSearch={handleSearch}
        />

        {isLoading && <p className="loading-message">Loading data…</p>}

        {weatherData && !isLoading && <WeatherCards weatherData={weatherData} />}
      </section>
    </main>
  )
}

export default App
