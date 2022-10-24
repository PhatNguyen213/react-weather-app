import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherForecastForLocation } from '../../api/services/weatherServices';

export const fetchWeatherForecastForLocation = createAsyncThunk(
  'weather/fetchWeatherForecastForLocation',
  async locationKey => {
    const { data } = await getWeatherForecastForLocation(locationKey);
    return data;
  }
);
