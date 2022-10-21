import { API_URLS } from './constants';

const { CITY_SEARCH } = API_URLS;

export const locationSlice = {
  endpoints: builder => ({
    searchCity: builder.query({
      query: searchTerm => ({
        url: CITY_SEARCH,
        params: {
          q: searchTerm,
        },
      }),
    }),
  }),
};
