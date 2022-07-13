import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("Delhi");
  const [country, setCountry] = useState("IN");
  const [temp, setTemp] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [showMyComponent, setShowMyComponent] = useState("false");
  const getWeatherData = async (city, country) => {
    await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=f3073a4c9ace1e491d7b56c8b3d00e7f`,
    })
      .then((res) => {
        console.log(res.data.main.temp);
        setTemp(res.data.main.temp - 273.15);
        setIcon(res.data.weather[0].icon);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City name"
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country name"
      />
      <button
        onClick={() => getWeatherData(city, country)}
        className="btn btn-primary"
      >
        Get Weather
      </button>
      <div className="data_container p-4 my-5">
        <h1>{city},{country}</h1>
        <img src={'http://openweathermap.org/img/wn/10d@2x.png'} alt="weather-icon" style={{width:200, height:200}} />
      </div>
      <h1>{Math.floor(temp)}℃</h1>
    </div>
  );
};

export default Weather;
