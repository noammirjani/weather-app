import { Card, Container } from "react-bootstrap";
import Search from "../Search";
import { useState } from "react";
import Forecast from "../Forecast";
import CurrentWeather from "../CurrentWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/HomePage.css";

//todo: add button to switch between C and F
//todo: add favorite button
//todo: add search history /favorite list
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

      {locationData && (
        <>
          <CurrentWeather locationData={locationData} />
          <Forecast locationData={locationData} />
        </>
      )}
    </>
  );
}

export default HomePage;
