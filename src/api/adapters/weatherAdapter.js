export const toForecastModel = response => {
  const { forecast, location } = response;
  const { lat, lon, localtime, localtime_epoch, ...rest } = location;
  return {
    forecasts: forecast.forecastday.map(({ date, day }) => ({
      date,
      maxTemp: day.maxtemp_c,
      minTemp: day.mintemp_c,
      avgTemp: day.avgtemp_c,
      conditionSummary: day.condition.text,
      willItRain: day.daily_will_it_rain,
    })),
    location: {
      ...rest,
      localTime: localtime,
    },
  };
};
