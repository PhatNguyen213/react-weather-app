import Autosuggest from 'react-autosuggest';

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;
const getSuggestionValue = suggestion => suggestion.name;

const AutoSuggestDropdown = ({
  suggestions = [],
  value,
  onChange,
  onSelect,
}) => {
  const onSuggestionsFetchRequested = ({ value }) => Promise.resolve(value);
  const onChangeInput = (event, { newValue }) => {
    onChange(newValue);
  };
  const inputProps = {
    placeholder: 'Enter a city',
    value,
    onChange: onChangeInput,
  };

  const onSuggestionSelected = (event, { suggestion }) =>
    onSelect(suggestion.name);
  return (
    <Autosuggest
      suggestions={suggestions || []}
      shouldRenderSuggestions={(value, reason) => value.trim().length > 0}
      onSuggestionSelected={onSuggestionSelected}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={() => onChangeInput(null, { newValue: '' })}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default AutoSuggestDropdown;
