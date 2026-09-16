function WeatherCards({ weatherData }) {
  const { current } = weatherData
  const cards = [
    { label: 'Temperature', value: `${current.temp_c}°C` },
    { label: 'Humidity', value: `${current.humidity}%` },
    { label: 'Condition', value: current.condition.text },
    { label: 'Wind Speed', value: `${current.wind_kph} kph` },
  ]

  return (
    <div className="weather-cards" aria-label="Current weather">
      {cards.map((card) => (
        <div className="weather-card" key={card.label}>
          <h2>{card.label}</h2>
          <p>{card.value}</p>
        </div>
      ))}
    </div>
  )
}

export default WeatherCards
