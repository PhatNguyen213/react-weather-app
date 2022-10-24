import { createAsyncThunk } from '@reduxjs/toolkit';
import partialRight from 'lodash/partialRight';

const createAsyncType = actionType => `ASYNC--${actionType}`;

const wrapTryCatch = (action, message) => async (arg, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await action(arg, thunkApi);
    return res;
  } catch (error) {
    return rejectWithValue(message || error.message);
  }
};

export const createAsyncActionWith = (
  type,
  asyncAction,
  customErrorMessage = ''
) =>
  createAsyncThunk(
    createAsyncType(type),
    wrapTryCatch(asyncAction, customErrorMessage)
  );

export const createAsyncActionCreator = customMessage =>
  partialRight(createAsyncActionWith, customMessage);
