import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers';
import { somethingIsWrong } from './features/App/redux/actions';

const isRejectedAsyncAction = ({ type, meta }) =>
  type.includes('ASYNC') && meta.rejectedWithValue;

const errorHandlingMiddleware =
  ({ dispatch }) =>
  next =>
  action => {
    if (isRejectedAsyncAction(action)) {
      dispatch(somethingIsWrong(action.payload));
    }
    return next(action);
  };

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(errorHandlingMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
