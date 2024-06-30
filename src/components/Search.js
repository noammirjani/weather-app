import { Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import useDebounce from "./useDebounce";
import AutocompleteSearch from "./AutocompleteSearch";
import "../styles/Search.css";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
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
