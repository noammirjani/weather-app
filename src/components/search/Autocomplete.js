import { Dropdown } from "react-bootstrap";
import "../../styles/AutocompleteSearch.css";

function Autocomplete({ searchSuggestions, handleClickSuggestions }) {
  function createList(searchSuggestions) {
    return searchSuggestions.map((suggest) => (
      <Dropdown.Item
        key={suggest.key}
        data-key={suggest.key}
        data-city={suggest.city}
        data-country={suggest.country}
        onClick={handleClickSuggestions}
      >
        <span className="city"> {suggest.city}</span>
        <span className="country"> {suggest.country}</span>
      </Dropdown.Item>
    ));
  }

  return (
    <Dropdown.Menu show className="custom-dropdown">
      {searchSuggestions ? (
        createList(searchSuggestions)
      ) : (
        <Dropdown.Item className="text-wrap">No results found</Dropdown.Item>
      )}
    </Dropdown.Menu>
  );
}

export default Autocomplete;
