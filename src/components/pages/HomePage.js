import { useState } from "react";

import Layout from "../layout/Layout";
import Search from "../search/Search";
import CurrentWeather from "../weatherDisplay/CurrentWeather";
import Forecast from "../weatherDisplay/Forecast";
import "../../styles/HomePage.css";
import FavoriteButton from "../utils/FavoriteButton";
import { Row } from "react-bootstrap";

//todo: add button to switch between C and F
//todo: add favorite button
//todo: add search history /favorite list
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
