import React, { useEffect, useState } from 'react'

function WeatherCard() {
    const [weather, setWeather] = useState(null);

    useEffect( ()=> {
        //const apiKey = "d8a2cdfbb7c94ff39a3105131251307";
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const city = "Manila";
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setWeather(data);
        })
        .catch((err) => console.error("Error: ", err));
    }, []);

    if (!weather) return <p className="text-white">Loading weather...</p>;

  return (
    <div className="text-textLight dark:text-textDark bg-primary px-4 pt-4 rounded-2xl">
        <h1 className="text-3xl font-bold mb-2">{weather.location.name}</h1>
        <p className="text-xl">{weather.current.temp_c}°C</p>
        <p className="capitalize">{weather.current.condition.text}</p>
        <img
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          className="mx-auto mt-2"
        />
      </div>
  )
}

export default WeatherCard
