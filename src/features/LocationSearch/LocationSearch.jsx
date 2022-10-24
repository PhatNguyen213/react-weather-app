import AutoSuggestDropdown from '../shared/AutoSuggestDropdown';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
}));

const LocationSearch = ({ suggestions, searchTerm, onChange, onSelect }) => {
  return (
    <>
      <Div>Please enter city name below for suggestions</Div>
      <AutoSuggestDropdown
        onSelect={onSelect}
        suggestions={suggestions}
        inputValue={searchTerm}
        onChange={onChange}
      />
    </>
  );
};

export default LocationSearch;
