import AutoSuggestDropdown from '../shared/AutoSuggestDropdown';
import { apiSlice } from '../../apiSlice';

const { useSearchCityQuery } = apiSlice;

const LocationSearch = ({ searchTerm, onChange, onSelect }) => {
  const { data: suggestions } = useSearchCityQuery(searchTerm, {
    skip: !searchTerm,
  });
  return (
    <AutoSuggestDropdown
      onSelect={onSelect}
      suggestions={suggestions}
      inputValue={searchTerm}
      onChange={onChange}
    />
  );
};

export default LocationSearch;
