import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSuggestedLocations } from './selectors';
import { fetchLocationsFromText } from './actions';
import LocationSearch from './LocationSearch';

const LocationSearchContainer = ({ searchTerm, onChange, onSelect }) => {
  const suggestions = useSelector(selectSuggestedLocations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) dispatch(fetchLocationsFromText(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <LocationSearch
      suggestions={suggestions}
      searchTerm={searchTerm}
      onChange={onChange}
      onSelect={onSelect}
    />
  );
};

export default LocationSearchContainer;
