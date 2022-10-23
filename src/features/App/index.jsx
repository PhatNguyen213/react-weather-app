import { useState } from 'react';

import './App.css';
import LocationSearch from '../LocationSearch';
import WeatherForecast from '../WeatherForecast';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [city, setCity] = useState('');
  const onChange = value => setSearchTerm(value);
  return (
    <div className="flex flex-col gap-8 mx-8 mt-20">
      <LocationSearch
        onSelect={setCity}
        searchTerm={searchTerm}
        onChange={onChange}
      />
      <WeatherForecast city={city} />
    </div>
  );
}

export default App;
