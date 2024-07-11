import axios from "axios";
import {
  extractCurrentWeatherData,
  extractForecastData,
  extractData,
} from "../utils/weatherDataParser";

//todo: change folder name to services
//todo: change file name to weatherApi.js
//todo: handle errors correctly
//todo: add costume hook for fetching data
function weatherApi() {
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const currentWeatherUrl =
    "http://dataservice.accuweather.com/currentconditions/v1/";
  const forecastUrl =
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const locationUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?";

  const fetchCurrentWeather = async (locationKey, metric = true) => {
    const addToUrl = `?apikey=${weatherApiKey}&details=true&metric=${metric}`;

    try {
      const response = await axios.get(
        `${currentWeatherUrl}${locationKey}${addToUrl}`
      );

      if (response?.data?.length > 0) {
        return extractCurrentWeatherData(response.data[0]);
      }

      console.error("no data");
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const fetchForecast = async (locationKey, metric = true) => {
    const addToUrl = `?apikey=${weatherApiKey}&metric=${metric}&details=false`;

    try {
      const response = await axios.get(
        `${forecastUrl}${locationKey}${addToUrl}`
      );

      if (response?.data?.DailyForecasts) {
        return response.data.DailyForecasts.map((day) =>
          extractForecastData(day)
        );
      } else {
        console.error("no data");
        return null;
      }
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const fetchAutoCompleteLocation = async (city) => {
    const url = `${locationUrl}q=${city}&apikey=${weatherApiKey}`;

    if (!city) return null;

    try {
      const response = await axios.get(url);
      if (response?.data?.length > 0) {
        return extractData(response.data);
      } else {
        return null;
      }
    } catch (e) {
      console.error(e);
      return null;
      // throw e;
    }
  };

  return {
    fetchAutoCompleteLocation,
    fetchForecast,
    fetchCurrentWeather,
  };
}

export default weatherApi;
