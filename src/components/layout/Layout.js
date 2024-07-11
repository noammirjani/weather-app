import "../../styles/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function Layout({ children }) {
  return (
    <Card>
      <Card.Img variant="top" src="assets/images/clouds.jpg" />
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default Layout;
