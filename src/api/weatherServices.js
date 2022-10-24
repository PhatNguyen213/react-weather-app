import { get } from './apiClient';
import { API_URLS } from '../features/WeatherForecast/constants';

const { GET_FORECASTS } = API_URLS;

export const getWeatherForecastForLocation = locationKey =>
  get(GET_FORECASTS, {
    params: {
      q: locationKey,
      days: 5,
    },
  });
