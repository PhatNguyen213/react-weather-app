import { API_URLS } from './constants';

const { GET_5DAYS_DAILY_FORECASTS } = API_URLS;

export const weatherSlice = {
  endpoints: builder => ({
    getForecaseByLocationKey: builder.query({
      query: locationKey => `${GET_5DAYS_DAILY_FORECASTS}/${locationKey}`,
    }),
  }),
};
