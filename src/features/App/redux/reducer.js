import { createReducer } from '@reduxjs/toolkit';

import { somethingIsWrong } from './actions';

const initialState = {
  error: null,
};

export default createReducer(initialState, builder => {
  builder.addCase(somethingIsWrong.type, (state, { payload }) => {
    state.error = payload;
  });
});
