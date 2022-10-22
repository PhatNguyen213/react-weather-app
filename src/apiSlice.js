import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { stringify } from 'query-string';

import { BASE_API_URL } from './constants';
import { locationSlice } from './features/LocationSearch/locationSlice';
import { weatherSlice } from './features/WeatherForecast/weatherSlice';

const API_KEY = '46c0b24f2a1c4ce196a43103202910';

const baseSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    paramsSerializer: params => stringify({ ...params, key: API_KEY }),
  }),
  endpoints: () => ({}),
});

export const apiSlice = baseSlice
  .injectEndpoints(locationSlice)
  .injectEndpoints(weatherSlice);
