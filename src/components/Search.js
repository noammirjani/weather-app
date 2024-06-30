import { Button, Form, Container, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
// import useDebounce from "./useDebounce";
import "../styles/Search.css";

//TODO: add autocomplete with debounce / redux https://www.freecodecamp.org/news/deboucing-in-react-autocomplete-example/
//TODO:implement list of the suggestion
function Search() {
  const [query, setQuery] = useState("");
  // const debouncedSearchResult = useDebounce(searchValue, 500);

  // useEffect(() => {
  //   console.log(debouncedSearchResult);
  // }, [debouncedSearchResult]);

  // function OnChangeSearch(e) {
  //   setSearchValue(e.target.value);
  // }

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  function handleSuggestionClick(city) {
    console.log("chosen city: ", city);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const location = e.target[0].value.trim().lowerCase();
    if (!location) return;

    //extract from the list the location key + city + country
    // set this as a state from home component
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
          {query && (
            <Dropdown.Menu show className="w-75 text-center position-absolute">
              <Dropdown.Item
                href="#/action-1"
                onClick={() => handleSuggestionClick("Tel Aviv")}
              >
                Tel Aviv
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => handleSuggestionClick("New York")}
              >
                New York
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => handleSuggestionClick("London")}
              >
                London
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-4"
                onClick={() => handleSuggestionClick("Paris")}
              >
                Paris
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-5"
                onClick={() => handleSuggestionClick("Berlin")}
              >
                Berlin
              </Dropdown.Item>
            </Dropdown.Menu>
          )}
        </Container>
      </Form.Group>
    </Form>
  );
}

export default Search;
