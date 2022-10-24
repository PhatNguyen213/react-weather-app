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
