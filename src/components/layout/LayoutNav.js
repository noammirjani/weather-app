import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/LayoutNav.css";
import Settings from "./Settings";

function LayoutNav() {
  return (
    <Navbar expand="sm" className="layoutNav bg-body-transparent">
      <Container fluid>
        <Navbar.Brand as={Link} to="/weather-app">
          <div className="d-flex align-items-center">
            <Image
              alt="weather.io logo"
              src="/assets/images/logo.png"
              className="navbar-logo"
            />
            <div className="d-none d-sm-block">weather.io</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-body">
            <Nav.Link as={Link} to="/weather-app">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
            <Settings />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LayoutNav;
