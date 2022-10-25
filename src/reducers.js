import { combineReducers } from '@reduxjs/toolkit';
import location from './features/LocationSearch/redux/reducer';
import forecast from './features/WeatherForecast/redux/reducer';
import app from './features/App/redux/reducer';

export default combineReducers({
  app,
  location,
  forecast,
});
