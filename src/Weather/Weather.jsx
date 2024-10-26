import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './weather.css'
//import { useState } from 'react'
const Weather = () => {
    const [Weather,setWeather] = useState(null)
    const [city,setCity] = useState('New York')
    //const api = penv.REACT_APP_WEATHER_API_KEY
    const getWeather = async() =>{
        try{
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=3c2c532e74af44aaabf81817242210&q=London&aqi=no`)

            setWeather(response.data)
            console.log(response.data)
        } catch(error){
            console.error("Error fetching weather data:",error)
        }
    }
    useEffect(()=>{
        getWeather()
    },[])
  return (
    <div className='weather-main'>
        <h2 className='weather-title'>Weather in{Weather?.location?.name}</h2>
        <p className='weather-temp'>Temperature:{Weather?.current?.temp_c}C</p> 
        <p className='weather-cond'>Condition:{Weather?.current?.condition?.text}</p>
        <input 
        type="text"
         value={city}
         onChange={(e) => setCity(e.target.value)}
         placeholder="Enter City"
         />
         <button onClick={getWeather}>Search</button>
    </div>
  )
}

export default Weather