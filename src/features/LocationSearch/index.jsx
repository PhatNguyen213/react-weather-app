import { useEffect, useState } from 'react';
import { Subject, debounceTime, filter } from 'rxjs';
import { useDispatch, useSelector } from 'react-redux';

import { selectSuggestedLocations } from './redux/selectors';
import { fetchLocationsFromText } from './redux/actions';
import ErrorBouddary from './Error/LocationSearchBoundary';
import LocationSearch from './LocationSearch';

const notEmpty = input => !!input && input.trim().length > 0;
const DEBOUNCE_TIME = 500;

const LocationSearchContainer = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSubject] = useState(new Subject());
  const suggestions = useSelector(selectSuggestedLocations);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = searchSubject
      .pipe(debounceTime(DEBOUNCE_TIME), filter(notEmpty))
      .subscribe(searchTerm => dispatch(fetchLocationsFromText(searchTerm)));

    return () => subscription.unsubscribe();
  }, [dispatch, searchSubject]);

  const onChange = value => {
    setSearchTerm(value);
    searchSubject.next(value);
  };

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
