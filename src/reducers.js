import { combineReducers } from '@reduxjs/toolkit';
import location from './features/LocationSearch/reducer';
import forecast from './features/WeatherForecast/reducer';

export default combineReducers({
  location,
  forecast,
});
