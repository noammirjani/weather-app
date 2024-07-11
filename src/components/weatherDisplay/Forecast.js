import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import WeatherApi from "../../services/weatherService";
import "../../styles/Forecast.css";

function Forecast({ locationData }) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!locationData.key) return;
      const data = await WeatherApi().fetchForecast(locationData.key);
      setForecast(data);
    };
    fetchData();
  }, [locationData.key]);

  const dayName = (dateString) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(dateString);
    return days[d.getDay()].substring(0, 3);
  };

  const createCard = (day) => {
    return (
      <Col key={day.date} className="weather-col">
        <div className="weather-temperature">
          {day.maxTemp} {day.unit}°
        </div>
        <div className="thermometer"></div>
        <div className="weather-temperature">
          {day.minTemp} {day.unit}°
        </div>
        <div className="weather-description">{day.description}</div>
        <Image src={day.icon} alt="Sunny" className="weather-icon" />
        <div className="weather-date-name">{dayName(day.date)}</div>
        <div className="weather-date">{day.date.split("-")[2]}</div>
      </Col>
    );
  };

  if (!forecast) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5 mb-5 p-5 forecast-body ">
      <Row className="horizontal-scroll">
        {forecast && forecast.map((day) => createCard(day))}
        {/* {!forecast && <div>No forecast data</div>} */}
      </Row>
    </Container>
  );
}

export default Forecast;
