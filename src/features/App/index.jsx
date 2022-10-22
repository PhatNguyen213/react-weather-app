import { useState } from 'react';

import './App.css';
import LocationSearch from '../LocationSearch';
import WeatherForecast from '../WeatherForecast';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [city, setCity] = useState('');
  const onChange = value => setSearchTerm(value);
  return (
    <div className="App">
      <LocationSearch
        setCity={setCity}
        searchTerm={searchTerm}
        onChange={onChange}
      />
      <WeatherForecast city={city} cityName="AAA" />
    </div>
  );
}

export default App;
