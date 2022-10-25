import { isAnyOf } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { fetchWeatherForecastForLocation } from './actions';

const initWeatherState = {
  data: [],
  loading: false,
};

export default createReducer(initWeatherState, builder => {
  builder.addCase(
    fetchWeatherForecastForLocation.pending,
    (state, { payload }) => {
      state.loading = true;
    }
  );
  builder.addCase(
    fetchWeatherForecastForLocation.fulfilled,
    (state, { payload }) => {
      state.data = payload;
    }
  );
  builder.addMatcher(
    isAnyOf(
      fetchWeatherForecastForLocation.fulfilled,
      fetchWeatherForecastForLocation.rejected
    ),
    (state, { payload }) => {
      state.loading = false;
    }
  );
});
