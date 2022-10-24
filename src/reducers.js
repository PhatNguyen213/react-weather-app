import { combineReducers } from '@reduxjs/toolkit';
import location from './features/LocationSearch/reducer';
import forecast from './features/WeatherForecast/reducer';
import app from './features/App/reducer';

export default combineReducers({
  app,
  location,
  forecast,
});
