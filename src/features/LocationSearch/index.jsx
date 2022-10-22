import AutoSuggestDropdown from '../shared/AutoSuggestDropdown';
import { apiSlice } from '../../apiSlice';

const { useSearchCityQuery } = apiSlice;

const LocationSearch = ({ searchTerm, onChange, setCity }) => {
  const { data: result } = useSearchCityQuery(searchTerm, {
    skip: !searchTerm,
  });
  return (
    <AutoSuggestDropdown
      onSelect={setCity}
      suggestions={result}
      value={searchTerm}
      onChange={onChange}
    />
  );
};

export default LocationSearch;
