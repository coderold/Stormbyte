import React, { useEffect, useState } from 'react'

function WeatherCard() {
    const [weather, setWeather] = useState(null);

    useEffect( ()=> {
        //const apiKey = import.meta.env.REACT_APP_WEATHER_API_KEY;
        const apiKey = "d8a2cdfbb7c94ff39a3105131251307";
        const city = "Manila";
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        console.log(apiKey);

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setWeather(data);
        })
        .catch((err) => console.error("Error: ", err));
    }, []);

    if (!weather) return <p className="text-white">Loading weather...</p>;
    
    var weatherImg = "https:" + weather.current.condition.icon

  return (
    <>
      <div className='flex flex-col items-center bg-secondary/40 px-6 rounded-2xl text-textLight
      dark:text-textDark'>
          <div className='flex flex-col items-center md:flex-row md:items-center'>

            <div className='px-6'>
              <h2 className='font-bold'>{weather.location.name}</h2>
              <h4 className='p-0 m-0'>{weather.current.temp_c}</h4>
            </div>

          <div className='pb-5'>
            <img src={weatherImg} alt="asdas" className='size-36'/>
          </div>

        </div>

        <div className='pb-5'>
            <h3>{weather.current.condition.text}</h3>
        </div>

      </div>
    </>
    
  )
}

export default WeatherCard
