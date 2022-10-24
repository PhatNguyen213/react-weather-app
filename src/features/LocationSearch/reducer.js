import { isAnyOf } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { fetchLocationsFromText } from './actions';

const initLocationState = {
  data: [],
  loading: false,
};

export default createReducer(initLocationState, builder => {
  builder.addCase(fetchLocationsFromText.pending, (state, { payload }) => {
    state.loading = true;
  });
  builder.addCase(fetchLocationsFromText.fulfilled, (state, { payload }) => {
    state.data = payload;
  });
  builder.addMatcher(
    isAnyOf(fetchLocationsFromText.fulfilled, fetchLocationsFromText.rejected),
    (state, { payload }) => {
      state.loading = false;
    }
  );
});
