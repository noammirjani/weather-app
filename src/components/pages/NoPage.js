import { Alert, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/NoPage.css";
import { searchSvg, favoriteSvg } from "../../svgPath";
import Icon from "../Icon";

function NoPage() {
  return (
    <Container className="position-absolute top-50 start-50 translate-middle">
      <Alert variant="warning">Hi there!</Alert>
      <Alert variant="info">
        Oops! We are having trouble finding your page.
      </Alert>
      <Alert variant="primary">
        Please try again... or Check out some of our favorite areas of the site.
      </Alert>

      <Row>
        <Col>
          <Link to="/weather-app">
            search weather
            <Icon
              size="16"
              svgData={searchSvg}
              style={{ marginLeft: "1rem," }}
            />
          </Link>
        </Col>
        <Col>
          <Link to="/favorites">
            see favorites
            <Icon
              size="16"
              svgData={favoriteSvg}
              style={{ marginLeft: "1rem," }}
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NoPage;
