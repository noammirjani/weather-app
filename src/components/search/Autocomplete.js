import { Dropdown } from "react-bootstrap";
import React from "react";
import "../../styles/AutocompleteSearch.css";

function Autocomplete({ searchSuggestions, handleClickSuggestions }) {
  return (
    <Dropdown.Menu show className="custom-dropdown">
      {searchSuggestions.length > 0 ? (
        searchSuggestions.map((suggestion) => (
          <Dropdown.Item
            key={suggestion.key}
            onClick={() => handleClickSuggestions(suggestion)}
          >
            <span className="suggest-city"> {suggestion.city}</span>
            <span className="suggest-country"> {suggestion.country}</span>
          </Dropdown.Item>
        ))
      ) : (
        <Dropdown.Item className="text-wrap">No results found</Dropdown.Item>
      )}
    </Dropdown.Menu>
  );
}

export default Autocomplete;
