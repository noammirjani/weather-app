import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import WeatherApiService from "../../services/weatherService";
import useFetch from "../../hooks/useFetch";
import FavoriteButton from "../utils/FavoriteButton";
import "../../styles/BasicWeather.css";
import useSettings from "../../hooks/useSettings";

function BasicWeather({ location }) {
  const { unit } = useSettings();
  const handler = WeatherApiService().currentWeather(location.key, unit);
  const { data: currentData, isPending, error } = useFetch(handler);
  const navigate = useNavigate();

  if (!currentData) {
    return;
  }

  return (
    <div className="favorite-card">
      <h3>{location.city}</h3>
      <p>{location.country}</p>
      <p>{currentData.localTime}</p>
      <p>{currentData.isDayTime ? "Day" : "Night"}</p>
      <p>
        {Math.floor(currentData.temp)} °{currentData.tempUnit}
      </p>
      <p>{currentData.description}</p>
      <p>
        Feels like: {Math.floor(currentData.feelsLike)}°{currentData.tempUnit}
      </p>
      <img
        src={currentData.icon}
        alt="weather icon"
        className="basic-weather-icon"
      />
      <div className="buttons-container">
        <FavoriteButton locationData={location} display={true} />
        <Button
          className="search-button"
          variant="outline-primary"
          onClick={() =>
            navigate(
              `/weather/${location.key}/${location.city}/${location.country}`
            )
          }
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default BasicWeather;
