import {
  selectDaysForecasts,
  selectForecastLocationInfo,
  selectIsFetching,
} from './selectors';
import { fetchWeatherForecastForLocation } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import WeatherForecast from './WeatherForecast';

const select5DaysForecasts = selectDaysForecasts(5);

const WeatherForecastContainer = ({ city }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (city) dispatch(fetchWeatherForecastForLocation(city));
  }, [dispatch, city]);

  const forecasts = useSelector(select5DaysForecasts);
  const isFetching = useSelector(selectIsFetching);
  const location = useSelector(selectForecastLocationInfo);
  return (
    <WeatherForecast
      forecasts={forecasts}
      isFetching={isFetching}
      location={location}
      city={city}
    />
  );
};

export default WeatherForecastContainer;
