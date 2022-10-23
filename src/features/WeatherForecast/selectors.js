import { uniqueId } from 'lodash';

const fillMissingDays = (arr, numOfMissingDays) => {
  const temp = [];
  for (let i = 1; i <= numOfMissingDays; i++) {
    temp.push({ date: uniqueId() });
  }
  return arr.concat(temp);
};

export const selectDaysForecasts = numberOfDays => response => {
  if (!response) return [];
  const forecasts = response?.forecast?.forecastday;
  if (forecasts?.length === numberOfDays) return forecasts;
  return fillMissingDays(forecasts, numberOfDays - forecasts?.length);
};

export const selectForecastLocationInfo = response => response?.location;
