import React, { useState, useEffect } from 'react';
import axios from "axios"

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

function Wetherapp() {
    const [wether, setWether] = useState([]);
    const [name, setName] = useState("");

    const getData = async () => {
        let setName="patna";
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${setName}&appid=d0f85e26df7c7a0773b2b695bed6fc0e`);
      return response.data;
    };

    // const handleChange=(e)=>{
    //     console.log(e.target.value);
    // }

    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(e.target.value);
      alert(`Submitting Name ${name}`)
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
            <label>
              City Name:
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
        </form>
          {/* <h1>{wether.base}</h1>
          <h1>{wether.name}</h1> */}
      </div>
    );
  }

export default Wetherapp;