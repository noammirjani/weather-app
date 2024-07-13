import { useState } from "react";
import { Row } from "react-bootstrap";
import Layout from "../layout/Layout";
import Search from "../search/Search";
import CurrentWeather from "../weatherDisplay/CurrentWeather";
import Forecast from "../weatherDisplay/Forecast";
import FavoriteButton from "../utils/FavoriteButton";
import "../../styles/HomePage.css";

function HomePage() {
  const [locationData, setLocationData] = useState(null);

  const handleLocationData = (location) => {
    if (!location || !location.key) return;
    setLocationData(location);
  };

  return (
    <>
      <Layout>
        <Row>
          <Search setLocationData={handleLocationData} />
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
