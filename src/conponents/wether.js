import React, { useState, useEffect } from 'react';
import axios from "axios"
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

function Wetherapp() {
    const [wether, setWether] = useState([]);
    const [inputval, setInputVal] = useState("");

    const getData = async () => {
        let city_name="patna";
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=d0f85e26df7c7a0773b2b695bed6fc0e`);
    //   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=patna&appid=d0f85e26df7c7a0773b2b695bed6fc0e`);
      return response.data;
    };
    
    const handleChange=(e)=>{
        console.log(e.target.value);
    }

    useEffect(() => {
      setTimeout(() => {
        // getData().then((text) => console.log(text));
        getData().then((text) => setWether(text));
      }, 3000);
      },[]);

    return (
      <div>
         <form onSubmit={handleSubmit}>
          <input type="text" value={inputVal} onChange={handleChange} />
            <input type="submit" value="Submit" />
           </form>
        <h1>{wether.base}</h1>
        <h1>{wether.name}</h1>
      </div>
    );
  }

export default Wetherapp;
