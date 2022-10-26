import { useState } from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import LocationSearch from '../LocationSearch';
import WeatherForecast from '../WeatherForecast';
import ErrorToast from '../shared/ErrorToast';
import { selectCurrentError } from './redux/selectors';

function App() {
  const [city, setCity] = useState('');
  const currentError = useSelector(selectCurrentError);
  return (
    <div className="flex flex-col gap-8 mx-8 mt-20">
      {currentError ? <ErrorToast error={currentError} /> : null}
      <LocationSearch onSelect={setCity} />
      <WeatherForecast city={city} />
    </div>
  );
}

export default App;
