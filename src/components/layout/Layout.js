import "../../styles/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import LayoutNav from "./LayoutNav";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//todo: add button to switch between C and F
//todo: add search history /favorite list
function Layout({ children }) {
  return (
    <Card>
      <Card.Img variant="top" src="assets/images/clouds.jpg" />
      <Card.Body>
        <Container className="">
          <LayoutNav />
          {children}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Layout;
