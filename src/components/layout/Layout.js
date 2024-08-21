import "../../styles/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import LayoutNav from "./LayoutNav";
import useSettings from "../../hooks/useSettings";

function Layout({ children }) {
  const { mode: darkMode } = useSettings();

  return (
    <Card>
      <Card.Img
        variant="top"
        src={
          darkMode
            ? "/assets/images/clouds-dark.jpg"
            : "/assets/images/clouds.jpg"
        }
      />
      <Card.Body className={darkMode ? "dark-mode" : ""}>
        <Container className="">
          <LayoutNav />
          {children}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Layout;
