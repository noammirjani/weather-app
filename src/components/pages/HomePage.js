import { Card, Container } from "react-bootstrap";
import Search from "../Search";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/HomePage.css";

function HomePage() {
  const [locationData, setLocationData] = useState(null);

  return (
    <Container fluid className="p-0">
      <Card>
        <Card.Img variant="top" src="assets/images/clouds.jpg" />
        <Card.Body>
          <Search setLocationData={setLocationData} />
        </Card.Body>
      </Card>
      {locationData && (
        <h1 className="text-center mt-3">
          forecast for {locationData.city}, {locationData.country} - key:
          {locationData.key}
        </h1>
      )}
    </Container>
  );
}

export default HomePage;
