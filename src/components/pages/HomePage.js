import { Card, Container } from "react-bootstrap";
import Search from "../Search";
import { useState } from "react";
import Forecast from "../Forecast";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/HomePage.css";

function HomePage() {
  const [locationData, setLocationData] = useState(null);

  return (
    <>
      <Card>
        <Card.Img variant="top" src="assets/images/clouds.jpg" />
        <Card.Body>
          <Search setLocationData={setLocationData} />
        </Card.Body>
      </Card>
      {locationData && <Forecast locationData={locationData} />}
    </>
  );
}

export default HomePage;
