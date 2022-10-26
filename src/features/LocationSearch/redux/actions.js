import { getLocationsFromText } from '../../../api/services/locationServices';
import { createAsyncActionCreator } from '../../../utils';

const createAsyncAction = createAsyncActionCreator(
  'Something is wrong with Location services'
);

export const fetchLocationsFromText = createAsyncAction(
  'location/fetchLocationsFromText',
  async searchText => {
    const { data } = await getLocationsFromText(searchText);
    return data;
  }
);
