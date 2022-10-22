import { apiSlice } from '../../apiSlice';
const { useGetForecastsByLocationKeyQuery } = apiSlice;
const WeatherForecast = ({ city }) => {
  const { data: forecasts } = useGetForecastsByLocationKeyQuery(city, {
    skip: !city,
  });
  return (
    <div>
      {forecasts?.forecast?.forecastday?.map(day => (
        <>
          <div>{day.date}</div>
          <div>{day.day.avgtemp_c}</div>
        </>
      ))}
    </div>
  );
};

export default WeatherForecast;
