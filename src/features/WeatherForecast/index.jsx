import {
  selectDaysForecasts,
  selectForecastLocationInfo,
  selectIsFetching,
} from './selectors';
import DayForecast from './DayForecast';
import { fetchWeatherForecastForLocation } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const select5DaysForecasts = selectDaysForecasts(5);

const LocationSummary = (props = {}) => {
  const { location } = props;
  if (!location) return null;
  const { name, country, region, tz_id, localtime } = location;
  return (
    <div className="flex flex-col">
      <div>Name: {name}</div>
      <div>Country: {country}</div>
      <div>Region: {region}</div>
      <div>Timezone: {tz_id}</div>
      <div>Local time: {localtime}</div>
    </div>
  );
};

const Loading = () => <span>Loading...</span>;

const WeatherForecast = ({ city }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (city) dispatch(fetchWeatherForecastForLocation(city));
  }, [dispatch, city]);

  const forecasts = useSelector(select5DaysForecasts);
  const isFetching = useSelector(selectIsFetching);
  const location = useSelector(selectForecastLocationInfo);
  if (isFetching) return <Loading />;
  return (
    <>
      <LocationSummary location={location} />
      <div className="flex flex-row gap-4">
        {forecasts?.map(day => (
          <DayForecast key={day.date} forecast={day} />
        ))}
      </div>
    </>
  );
};

export default WeatherForecast;
