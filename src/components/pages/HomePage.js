import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Layout from "../layout/Layout";
import Search from "../search/Search";
import CurrentWeather from "../weatherDisplay/CurrentWeather";
import Forecast from "../weatherDisplay/Forecast";
import FavoriteButton from "../utils/FavoriteButton";
import MessageDisplay from "../utils/MessageDisplay";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import ToastErr from "../utils/ToastErr";
import "../../styles/HomePage.css";

const ERR_MSG = "An error occurred while fetching location data";

function HomePage() {
  const { currentLocation, currentLocationError, currentLocationLoading } =
    useCurrentLocation();
  const [locationData, setLocationData] = useState(currentLocation || null);
  const [error, setError] = useState(null);
  const { key, city, country } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (key && city && country) {
      if (locationData && locationData.key === key) {
        return;
      }
      setLocationData({ key, city, country });
    }
  }, [key, city, country]);

  useEffect(() => {
    if (currentLocation && !currentLocationError && !locationData) {
      setLocationData(currentLocation);
    }
  }, [currentLocation]);

  const handleLocationData = (location) => {
    if (!location || !location.key) return;
    navigate(`/weather/${location.key}/${location.city}/${location.country}`);
  };

  const handleFetchError = (error) => {
    setError(error);
  };

  const weatherDisplay = locationData && locationData?.key;
  console.log(weatherDisplay, locationData);

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
        {currentLocationLoading ? (
          <Container className="loading">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="secondary" />
          </Container>
        ) : (
          <>
            {weatherDisplay && (
              <Container fluid>
                <Row className="weather-display">
                  <Col xs={12} sm={12} lg={4} className="CurrentWeather">
                    <CurrentWeather
                      locationData={locationData}
                      handleFetchError={handleFetchError}
                    />
                  </Col>
                  <Col xs={12} sm={12} lg={8} className="Forecast">
                    <Forecast
                      locationData={locationData}
                      handleFetchError={handleFetchError}
                    />
                  </Col>
                </Row>
              </Container>
            )}
            {!weatherDisplay && !error && (
              <MessageDisplay variant="info" className="no-data">
                <p>
                  No data to display <br /> Please search for a location
                </p>
              </MessageDisplay>
            )}
            {(error || currentLocationError) && (
              <ToastErr
                message={
                  error?.message || currentLocationError?.message || ERR_MSG
                }
              />
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default HomePage;
