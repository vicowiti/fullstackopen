/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { getCurrentWeather } from "../services/weather";
import { useState } from "react";

const Weather = ({ capital, lat, long }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getCurrentWeather(lat, long);

      setWeather(data);
    }
    fetchData();
  }, [lat, long]);

  return (
    <div>
      <h1>Weather in {capital}</h1>
      {weather && (
        <div>
          <p>temperature: {weather.main.temp}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>wind: {weather.wind.speed}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
