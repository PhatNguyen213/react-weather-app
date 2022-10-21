import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { stringify } from 'query-string';

import { BASE_API_URL } from './constants';
import { locationSlice } from './features/LocationSearch/locationSlice';
import { weatherSlice } from './features/WeatherForecast/weatherSlice';

const baseSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    paramsSerializer: params =>
      stringify({ ...params, apikey: 'XEWA6lInf3wIbztYKLUSGkU6AvXv1Y2B' }),
  }),
  endpoints: () => ({}),
});

export const apiSlice = baseSlice
  .injectEndpoints(locationSlice)
  .injectEndpoints(weatherSlice);
