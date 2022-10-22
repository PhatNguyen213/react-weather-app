import { API_URLS } from './constants';

const { GET_FORECASTS } = API_URLS;

export const weatherSlice = {
  endpoints: builder => ({
    getForecastsByLocationKey: builder.query({
      query: locationKey => ({
        url: `${GET_FORECASTS}`,
        params: {
          q: locationKey,
          days: 5,
        },
      }),
    }),
  }),
};
