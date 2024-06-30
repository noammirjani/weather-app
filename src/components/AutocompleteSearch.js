import { Dropdown } from "react-bootstrap";
import "../styles/AutocompleteSearch.css";

function AutocompleteSearch({ searchSuggestions, handleClickSuggestions }) {
  function createList(searchSuggestions) {
    return searchSuggestions.map((suggest) => (
      <Dropdown.Item
        key={suggest.key}
        data-key={suggest.key}
        data-city={suggest.city}
        data-country={suggest.country}
        className="fs-5"
        onClick={handleClickSuggestions}
      >
        {suggest.city}
        <span className="text-secondary fs-6"> {suggest.country}</span>
      </Dropdown.Item>
    ));
  }

  return (
    <>
      <Dropdown.Menu show className="custom-dropdown">
        {searchSuggestions ? (
          createList(searchSuggestions)
        ) : (
          <Dropdown.Item className="text-wrap fs-5">
            No results found
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </>
  );
}

export default AutocompleteSearch;
