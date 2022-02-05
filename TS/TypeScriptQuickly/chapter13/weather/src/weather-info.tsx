import * as React from 'react';
import {Weather} from './weather';

const WeatherInfo: React.FC<{weather: Weather, parentChannel: (msg: string) => void }> = ({ weather, children, parentChannel }) => {

  const {city, humidity, pressure, temp, temp_max, temp_min} = weather;
 
    return (
      <div>
        {children}
        <h2>City: {city}</h2>
        <h2>Temperature: {temp}</h2>
        <h2>Max temperature: {temp_max}</h2>
        <h2>Min temperature: {temp_min}</h2>
        <h2>Humidity: {humidity}</h2> 
        <h2>Pressure: {pressure}</h2>
        <button onClick ={() => parentChannel ("Hello from child!")}>Say hello to parent</button>
      </div>
    );
}

export default WeatherInfo;
