import { get } from '../apiClient';
import { API_URLS } from '../../features/WeatherForecast/constants';
import { toForecastModel } from '../adapters/weatherAdapter';

const { GET_FORECASTS } = API_URLS;

export const getWeatherForecastForLocation = locationKey =>
  get(GET_FORECASTS, {
    params: {
      q: locationKey,
      days: 5,
    },
    transformResponse: response =>
      response && toForecastModel(JSON.parse(response)),
  });
