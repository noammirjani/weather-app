import { useState, useEffect } from "react";
import { Container, Row, Toast, Spinner } from "react-bootstrap";
import Layout from "../layout/Layout";
import Search from "../search/Search";
import CurrentWeather from "../weatherDisplay/CurrentWeather";
import Forecast from "../weatherDisplay/Forecast";
import FavoriteButton from "../utils/FavoriteButton";
import MessageDisplay from "../utils/MessageDisplay";
import useCurrentLocation from "../../hooks/useCurrentLocation";

import "../../styles/HomePage.css";

function HomePage() {
  const [locationData, setLocationData] = useState(null);
  const { currentLocation, currentLocationError, isLoading } =
    useCurrentLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentLocation) {
      setLocationData(currentLocation);
    }
  }, [currentLocation]);

  const handleLocationData = (location) => {
    if (!location || !location.key) return;
    setLocationData(location);
  };

  const handleFetchError = (error) => {
    setError(error);
  };

  const weatherDisplay = locationData && locationData?.key;

  const loadingUI = (
    <Container className="loading">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="secondary" />
    </Container>
  );

  const displayWeather = (
    <>
      <CurrentWeather locationData={locationData} />
      <Forecast locationData={locationData} />
    </>
  );

  const noData = (
    <MessageDisplay variant="info" className="no-data">
      <p>
        No data to display <br /> Please search for a location
      </p>
    </MessageDisplay>
  );

  const errorMessage = (
    <MessageDisplay variant="error" className="error-message">
      <p>{error}</p>
    </MessageDisplay>
  );

  const currentLocationErrorUI = (
    <Toast className="error-toast">
      <Toast.Body>{currentLocationError}</Toast.Body>
    </Toast>
  );

  return (
    <>
      <Layout>
        <Row>
          <Search setLocationData={handleLocationData} />
        </Row>
        {weatherDisplay && (
          <Row>
            <FavoriteButton locationData={locationData} />
          </Row>
        )}
      </Layout>
      <Container fluid className="weather-display">
        {isLoading ? (
          loadingUI
        ) : (
          <>
            {weatherDisplay && displayWeather}
            {!weatherDisplay && !error && noData}
            {error && errorMessage}
            {currentLocationError && currentLocationErrorUI}
          </>
        )}
      </Container>
    </>
  );
}

export default HomePage;
