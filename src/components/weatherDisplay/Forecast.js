import { Container, Row, Col, Image, Alert } from "react-bootstrap";
import WeatherApiService from "../../services/weatherService";
import useFetch from "../../hooks/useFetch";
import "../../styles/Forecast.css";

function Forecast({ locationData }) {
  const handler = WeatherApiService().forecast(locationData.key);
  const { data: forecast, isPending, error } = useFetch(handler);

  if (!forecast || !locationData || !locationData.key) {
    return;
  }

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

  const createCard = (day) => (
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

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!forecast) {
    //
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
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
