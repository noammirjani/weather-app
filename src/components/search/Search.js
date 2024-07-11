import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import useDebounce from "../../hooks/useDebounce";
import Autocomplete from "./Autocomplete";
import Icon from "../utils/Icon";
import { searchSvg } from "../../utils/svgPath";
import "../../styles/Search.css";

function Search({ setLocationData }) {
  const [query, setQuery] = useState("");
  const searchSuggestions = useDebounce(query, 500);

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  function handleClickSuggestions(e) {
    e.preventDefault();
    setLocationData({
      city: e.target.getAttribute("data-city"),
      country: e.target.getAttribute("data-country"),
      key: e.target.getAttribute("data-key"),
    });

    setQuery("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
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
          <Button className="submitButton">
            <Icon size="20" svgData={searchSvg} />
          </Button>
          {query && (
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
