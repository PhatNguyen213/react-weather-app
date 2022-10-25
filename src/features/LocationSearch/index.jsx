import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSuggestedLocations } from './redux/selectors';
import { fetchLocationsFromText } from './redux/actions';
import ErrorBouddary from './Error/LocationSearchBoundary';
import LocationSearch from './LocationSearch';

const LocationSearchContainer = ({ searchTerm, onChange, onSelect }) => {
  const suggestions = useSelector(selectSuggestedLocations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) dispatch(fetchLocationsFromText(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <ErrorBouddary>
      <LocationSearch
        suggestions={suggestions}
        searchTerm={searchTerm}
        onChange={onChange}
        onSelect={onSelect}
      />
    </ErrorBouddary>
  );
};

export default LocationSearchContainer;
