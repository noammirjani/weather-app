import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import WeatherApi from "../../services/weatherService";
import "../../styles/CurrentWeather.css";

function CurrentWeather({ locationData }) {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!locationData.key) return;
      const data = await WeatherApi().fetchCurrentWeather(locationData.key);
      setCurrentData(data);
    };
    fetchData();
  }, [locationData.key]);

  if (!currentData) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="p-5 mt-md-5 text-center currentWeatherBody">
      <Row>
        <Col
          lg={6}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <div className="location-data">
            <p className="fs-1">{locationData.city}</p>
            <p className="fs-4">{locationData.country}</p>
            <p className="fs-4">{currentData.localTime}</p>
            {/* <p className="fs-4">{getLocalTime()}</p> */}
            <p className="fs-4">{currentData.isDayTime ? "Day" : "Night"}</p>
          </div>
        </Col>

        <Col lg={6}>
          <div className="weather-info">
            <p className="fs-4 mt-5">
              {Math.floor(currentData.temp)} °{currentData.tempUnit}
            </p>
            <p className="fs-5">{currentData.description}</p>
            <p className="fs-6 text-secondary">
              Feels like: {Math.floor(currentData.feelsLike)} °
              {currentData.tempUnit}
            </p>
            <div className="icon-container">
              <img
                src={currentData.icon}
                alt="weather icon"
                className="weather-icon rounded"
              />
            </div>
          </div>

          <div className="weather-extra-info mt-4">
            <ListGroup className="fs-4 lead mt-4">
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
        </Col>
      </Row>
    </Container>
  );
}

export default CurrentWeather;

// function getLocalTime(
//   timestamp = "2024-07-01T01:17:00+03:00",
//   timeZone = "Asia/Jerusalem"
// ) {
//   const date = new Date(timestamp);
//   return date.toLocaleTimeString("en-US", {
//     timeZone: timeZone,
//     hour: "numeric",
//     minute: "numeric",
//     hour12: true,
//   });
// }
