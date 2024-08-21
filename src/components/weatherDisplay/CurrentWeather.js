import { Container, Row, Col, ListGroup } from "react-bootstrap";
import WeatherApiService from "../../services/weatherService";
import useFetch from "../../hooks/useFetch";
import useSettings from "../../hooks/useSettings";
import { colorByWeather } from "../../utils/colorWeather";
import "../../styles/CurrentWeather.css";

function CurrentWeather({ locationData, handleFetchError }) {
  const { unit, mode: darkMode } = useSettings();
  const handler = WeatherApiService().currentWeather(locationData.key, unit);
  const { data: currentData, error } = useFetch(handler);

  if (!currentData || !locationData || !locationData.key) {
    return;
  }
  if (!currentData) {
    handleFetchError("No data found");
    return;
  }
  if (error) {
    handleFetchError(error);
    return;
  }

  return (
    <Container
      className={`${
        darkMode ? "dark-mode" : ""
      } currentWeatherBody ${colorByWeather(currentData.description)}`}
    >
      <Row>
        <Col xs={12} className="location-data">
          <p className="fs-2">{locationData.city}</p>
          <p className="fs-2 country">{locationData.country}</p>
        </Col>
        <Col>
          <Container className="info">
            <div className="weather-info">
              <p className="fs-4">
                {Math.floor(currentData.temp)}° {currentData.tempUnit}
              </p>
              <p className="fs-4">{currentData.description}</p>
              <p className="fs-4 text-secondary">
                Feels like: {Math.floor(currentData.feelsLike)} °
                {currentData.tempUnit}
              </p>
              <div className="icon-container">
                <img
                  src={currentData.icon}
                  alt="weather icon"
                  className="current-weather-icon"
                />
              </div>
            </div>
            <div className="weather-extra-info">
              <ListGroup className="fs-4 lead">
                <ListGroup.Item className="bg-transparent border-0">
                  UV Index: {currentData.uvIndex} {currentData.uvIndexText}
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0">
                  Humidity: {currentData.humidity} %
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0">
                  Wind: {currentData.wind} {currentData.windUnit}
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0">
                  Visibility: {currentData.visibility}{" "}
                  {currentData.visibilityUnit}
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0">
                  Pressure: {currentData.pressure} {currentData.pressureUnit}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default CurrentWeather;
