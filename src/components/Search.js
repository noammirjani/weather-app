import { Button, Form, Container } from "react-bootstrap";
import "../styles/Search.css";

//TODO: add autocompelete with debounce / redux https://www.freecodecamp.org/news/deboucing-in-react-autocomplete-example/
//TODO:implement list of the suggestion
function Search() {
  function onSubmitSearch(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={onSubmitSearch}>
      <Form.Group controlId="insertLocation">
        <Container>
          <div className="d-flex justify-content-center">
            <Form.Control type="text" placeholder="Search Location" size="lg" />
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
        </Container>
      </Form.Group>
    </Form>
  );
}

export default Search;
