import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) {
        setError("City not found. Try again!");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
    setLoading(false);
  };

  const getBackground = () => {
    if (!weather) return "app";
    const main = weather.weather[0].main;
    if (main === "Clear") return "app sunny";
    if (main === "Rain" || main === "Drizzle") return "app rainy";
    if (main === "Clouds") return "app cloudy";
    if (main === "Snow") return "app snowy";
    return "app";
  };

  const getIcon = () => {
    if (!weather) return "🌍";
    const main = weather.weather[0].main;
    if (main === "Clear") return "☀️";
    if (main === "Rain" || main === "Drizzle") return "🌧️";
    if (main === "Clouds") return "☁️";
    if (main === "Snow") return "❄️";
    if (main === "Thunderstorm") return "⛈️";
    if (main === "Mist" || main === "Fog") return "🌫️";
    return "🌡️";
  };

  return (
    <div className={getBackground()}>
      <div className="card">
        <h1>🌤️ Weather App</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && getWeather()}
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {loading && <div className="loading">Fetching weather... ⏳</div>}

        {error && <p className="error">❌ {error}</p>}

        {weather && !loading && (
          <div className="weather-box">
            <div className="icon">{getIcon()}</div>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <h3>{Math.round(weather.main.temp)}°C</h3>
            <p className="desc">{weather.weather[0].description}</p>

            <div className="details">
              <div className="detail-item">
                <span>💧 Humidity</span>
                <strong>{weather.main.humidity}%</strong>
              </div>
              <div className="detail-item">
                <span>💨 Wind</span>
                <strong>{weather.wind.speed} m/s</strong>
              </div>
              <div className="detail-item">
                <span>🌡️ Feels Like</span>
                <strong>{Math.round(weather.main.feels_like)}°C</strong>
              </div>
              <div className="detail-item">
                <span>👁️ Visibility</span>
                <strong>{(weather.visibility / 1000).toFixed(1)} km</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;