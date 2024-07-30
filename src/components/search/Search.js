import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import useDebounce from "../../hooks/useDebounce";
import Autocomplete from "./Autocomplete";
import Icon from "../utils/Icon";
import { searchSvg } from "../../utils/svgPath";
import "../../styles/Search.css";

function Search({ setLocationData }) {
  const [query, setQuery] = useState("");
  const { searchSuggestions, isLoading, error } = useDebounce(query, 500);

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  function handleClickSuggestions(locationData) {
    setLocationData(locationData);
    setQuery("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    if (query.toLowerCase() === searchSuggestions?.[0]?.city.toLowerCase()) {
      handleClickSuggestions(searchSuggestions[0]);
    } else {
      setLocationData({ city: query });
      setQuery("");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="insertLocation" className="group">
        <InputGroup className="search-container">
          <Form.Control
            type="text"
            placeholder="Search Location"
            value={query}
            onChange={handleInputChange}
          />
          <Button className="submitButton" type="submit">
            <Icon size="20" svgData={searchSvg} />
          </Button>
          {query && searchSuggestions && (
            <Autocomplete
              searchSuggestions={searchSuggestions}
              handleClickSuggestions={handleClickSuggestions}
            />
          )}
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default Search;
