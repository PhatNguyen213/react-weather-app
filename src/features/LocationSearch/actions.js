import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLocationsFromText } from '../../api/locationServices';

export const fetchLocationsFromText = createAsyncThunk(
  'location/fetchLocationsFromText',
  async searchText => {
    const { data } = await getLocationsFromText(searchText);
    return data;
  }
);
