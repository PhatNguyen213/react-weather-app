import DayForecast from './DayForecast';

const LocationSummary = (props = {}) => {
  const { location } = props;
  if (!location) return null;
  const { name, country, region, tz_id, localTime } = location;
  return (
    <div className="flex flex-col">
      <div>Name: {name}</div>
      <div>Country: {country}</div>
      <div>Region: {region}</div>
      <div>Timezone: {tz_id}</div>
      <div>Local time: {localTime}</div>
    </div>
  );
};

const Loading = () => <span>Loading...</span>;

const WeatherForecast = ({ forecasts, isFetching, location, city }) => {
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
