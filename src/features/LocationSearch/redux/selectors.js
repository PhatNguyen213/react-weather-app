import sortBy from 'lodash/sortBy';
import { createSelector } from '@reduxjs/toolkit';

const locationState = state => state.location;

export const selectSuggestedLocations = createSelector(
  locationState,
  state => state.data
);

export const selectCityWithHighestRank = createSelector(
  selectSuggestedLocations,
  state => {
    const sorted = sortBy(state, ({ Rank }) => Rank);
    return sorted[sorted.length - 1];
  }
);

export const selectIsFetching = createSelector(
  locationState,
  state => state.loading
);
