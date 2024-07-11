import { useState } from "react";
import Layout from "../layout/Layout";
import Search from "../search/Search";
import CurrentWeather from "../weatherDisplay/CurrentWeather";
import Forecast from "../weatherDisplay/Forecast";

import "../../styles/HomePage.css";
import FavoriteButton from "../utils/FavoriteButton";
import { Row } from "react-bootstrap";

function HomePage() {
  const [locationData, setLocationData] = useState(null);

  return (
    <>
      <Layout>
        <Row>
          <Search setLocationData={setLocationData} />
        </Row>
        {locationData && (
          <Row>
            <FavoriteButton locationData={locationData} />
          </Row>
        )}
      </Layout>

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
