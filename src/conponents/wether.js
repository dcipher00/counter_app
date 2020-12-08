import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


function Wetherapp() {
    const [wether, setWether] = useState(null);
    useEffect(() => {
        // const URL =`http://api.openweathermap.org/data/2.5/weather?q=patna&appid=d0f85e26df7c7a0773b2b695bed6fc0e`
        const URL =`http://ursoch.com/api/RestController/user/1`        
        let response = axios.get(URL);
        let data  = response.data; 
        console.log(data)
      });

    return (
      <div>     
    
      </div>
      
    );
  }
export default Wetherapp;