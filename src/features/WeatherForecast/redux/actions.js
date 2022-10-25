import { getWeatherForecastForLocation } from '../../../api/services/weatherServices';
import { createAsyncActionCreator } from '../../../utils';

const createAsyncAction = createAsyncActionCreator(
  'Something is wrong with Weather services'
);

export const fetchWeatherForecastForLocation = createAsyncAction(
  'weather/fetchWeatherForecastForLocation',
  async locationKey => {
    const { data } = await getWeatherForecastForLocation(locationKey);
    return data;
  }
);
