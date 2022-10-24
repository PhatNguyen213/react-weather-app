import { get } from '../apiClient';
import { API_URLS } from '../../features/LocationSearch/constants';

const { CITY_SEARCH } = API_URLS;

export const getLocationsFromText = searchText =>
  get(CITY_SEARCH, {
    params: {
      q: searchText,
    },
  });
