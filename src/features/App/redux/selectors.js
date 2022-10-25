import { createSelector } from '@reduxjs/toolkit';

const appState = state => state.app;

export const selectCurrentError = createSelector(
  appState,
  state => state?.error
);
