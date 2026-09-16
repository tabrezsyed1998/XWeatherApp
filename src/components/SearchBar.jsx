function SearchBar({ cityName, isLoading, onCityNameChange, onSearch }) {
  return (
    <div className="search-controls">
      <input
        className="city-input"
        type="text"
        value={cityName}
        placeholder="Enter city name"
        aria-label="City name"
        autoComplete="address-level2"
        onChange={(event) => onCityNameChange(event.target.value)}
      />
      <button
        className="search-button"
        type="button"
        disabled={isLoading}
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
