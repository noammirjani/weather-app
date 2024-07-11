import "../../styles/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

//todo: add button to switch between C and F
//todo: add search history /favorite list
function Layout({ children }) {
  return (
    <Card>
      <Card.Img variant="top" src="assets/images/clouds.jpg" />
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default Layout;
