import { apiSlice } from '../../apiSlice';
import { selectDaysForecasts, selectForecastLocationInfo } from './selectors';
import DayForecast from './DayForecast';

const { useGetForecastsByLocationKeyQuery } = apiSlice;
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
  const { data, isFetching } = useGetForecastsByLocationKeyQuery(city, {
    skip: !city,
  });
  if (isFetching) return <Loading />;
  const forecasts = select5DaysForecasts(data);
  const location = selectForecastLocationInfo(data);
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
