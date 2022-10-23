import { apiSlice } from '../../apiSlice';
import { select5DaysForecasts } from './selectors';
import DayForecast from './DayForecast';

const { useGetForecastsByLocationKeyQuery } = apiSlice;

const WeatherForecast = ({ city }) => {
  const { data } = useGetForecastsByLocationKeyQuery(city, {
    skip: !city,
  });
  const forecasts = select5DaysForecasts(data);
  return (
    <div className="columns-5">
      {forecasts?.map(day => (
        <DayForecast key={day.date} forecast={day} />
      ))}
    </div>
  );
};

export default WeatherForecast;
