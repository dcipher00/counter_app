import React, { useState, useEffect } from 'react';
import axios from "axios"
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


function Wetherapp() {
    const [wether, setWether] = useState(null);
    const [loding, setLoding] = useState(false);


    const getData = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=patna&appid=d0f85e26df7c7a0773b2b695bed6fc0e`);
      return response.data;
    };

    useEffect(() => {
      setTimeout(() => {
        getData().then((text) => console.log(text));
      }, 3000);
      },[]);

    return (
      <div>
        <h1>Weather</h1>
      </div>
      
    );
  }

export default Wetherapp;