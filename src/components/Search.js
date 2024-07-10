import { Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import useDebounce from "./useDebounce";
import AutocompleteSearch from "./AutocompleteSearch";
import "../styles/Search.css";
import { searchSvg } from "../svgPath";
import Icon from "./Icon";

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
      <Form.Group controlId="insertLocation">
        <Container>
          <div className="d-flex justify-content-center position-relative">
            <Form.Control
              type="text"
              placeholder="Search Location"
              size="lg"
              value={query}
              onChange={handleInputChange}
              className="selectLocation"
            />
            <Button type="submit" className="submitButton">
              <Icon size="20" svgData={searchSvg} />
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            {query && (
              <AutocompleteSearch
                searchSuggestions={searchSuggestions}
                handleClickSuggestions={handleClickSuggestions}
              />
            )}
          </div>
        </Container>
      </Form.Group>
    </Form>
  );
}

export default Search;
