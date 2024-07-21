import "../../styles/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import LayoutNav from "./LayoutNav";

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
