import { uniqueId } from 'lodash';
import { createSelector } from '@reduxjs/toolkit';

const forecastState = state => state.forecast;
const forecasts = createSelector(
  forecastState,
  state => state?.data?.forecast?.forecastday
);

const fillMissingDays = (arr, numOfMissingDays) => {
  const temp = [];
  for (let i = 1; i <= numOfMissingDays; i++) {
    temp.push({ date: uniqueId() });
  }
  return arr.concat(temp);
};

export const selectDaysForecasts = numberOfDays =>
  createSelector(forecasts, state => {
    if (!state) return [];
    if (state?.length === numberOfDays) return state;
    return fillMissingDays(state, numberOfDays - state?.length);
  });

export const selectIsFetching = createSelector(
  forecastState,
  state => state.loading
);

export const selectForecastLocationInfo = createSelector(
  forecastState,
  state => state?.data?.location
);
