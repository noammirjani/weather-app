import WeatherApiService from "../../services/weatherService";
import useFetch from "../../hooks/useFetch";
import FavoriteButton from "../utils/FavoriteButton";
import { Button } from "react-bootstrap";
import "../../styles/BasicWeather.css";

function BasicWeather({ location, extra = false }) {
  const handler = WeatherApiService().currentWeather(location.key);
  const { data: currentData, isPending, error } = useFetch(handler);

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
        Feels like: {Math.floor(currentData.feelsLike)} °{currentData.tempUnit}
      </p>
      <img src={currentData.icon} alt="weather icon" />
      <FavoriteButton locationData={location} display={true} />
      <Button
        variant="outline-primary"
        // onClick={() => searchWeather(location.data)}
      >
        Search
      </Button>
    </div>
  );
}

export default BasicWeather;
