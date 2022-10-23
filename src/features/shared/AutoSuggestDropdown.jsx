import Autosuggest from 'react-autosuggest';

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;
const getSuggestionValue = suggestion => suggestion.name;

const AutoSuggestDropdown = ({
  suggestions = [],
  inputValue,
  onChange,
  onSelect,
}) => {
  const onSuggestionsFetchRequested = ({ value }) => Promise.resolve(value);
  const onChangeInput = (event, { newValue }) => {
    onChange(newValue);
  };
  const inputProps = {
    placeholder: 'Enter a city',
    value: inputValue,
    onChange: onChangeInput,
  };

  const onSuggestionSelected = (event, { suggestion }) =>
    onSelect(suggestion.name);
  return (
    <Autosuggest
      suggestions={suggestions}
      shouldRenderSuggestions={(value, reason) => value.trim().length > 0}
      onSuggestionSelected={onSuggestionSelected}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={() => onChangeInput(null, { newValue: '' })}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={{
        container: 'w-fit relative',
        input:
          'font-sans text-base font-light w-60 h-12 px-2.5 py-5 border-solid border border-gray-600 rounded',
        inputFocused: 'outline-none',
        suggestionsContainerOpen:
          'font-sans text-base font-light bg-white absolute top-51px w-72 block border-solid border border-gray-600 z-10',
        suggestionsList: 'list-none m-0 p-0',
        suggestion: 'px-2.5 py-5 cursor-pointer',
        suggestionHighlighted: 'bg-gray-400',
      }}
    />
  );
};

export default AutoSuggestDropdown;
