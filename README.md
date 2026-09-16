# Weather App

A React and Vite weather application that fetches current conditions from WeatherAPI when the user clicks **Search**.

## Setup

1. Create a WeatherAPI key at [weatherapi.com](https://www.weatherapi.com/).
2. Copy `.env.example` to a new `.env` file.
3. Set `VITE_WEATHER_API_KEY` in `.env` to your key.
4. Start the app with `npm run dev`.

## Project structure

- `src/components/` — reusable UI components.
- `src/services/` — external API access.
- `src/App.jsx` — application state and search workflow.

The WeatherAPI key is read from `VITE_WEATHER_API_KEY`. Vite exposes variables prefixed with `VITE_` to the browser, so use a server-side proxy for a production app where the key must remain private.
