import axios from 'axios';

import { BASE_API_URL } from '../constants';

const API_KEY = '46c0b24f2a1c4ce196a43103202910';

const client = (
  endpoint,
  { method, data, headers: customHeaders, params, ...customConfigs }
) => {
  const config = {
    baseURL: BASE_API_URL,
    url: endpoint,
    headers: {
      'Content-Type': 'application/json',
      ...customHeaders,
    },
    method,
    data,
    params: { ...params, key: API_KEY },
    ...customConfigs,
  };
  return axios(config);
};

export const get = (endpoint, { ...customConfigs }) =>
  client(endpoint, {
    method: 'GET',
    ...customConfigs,
  });
