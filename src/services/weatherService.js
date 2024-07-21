import {
  extractCurrentWeatherData,
  extractForecastData,
  extractLocationData,
} from "../utils/weatherDataParser";

function WeatherApiService() {
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const currentWeatherUrl =
    "http://dataservice.accuweather.com/currentconditions/v1/";
  const forecastUrl =
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const locationUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?";

  const currentWeather = (locationKey, metric = true) => {
    const addToUrl = `?apikey=${weatherApiKey}&details=true&metric=${metric}`;
    return {
      url: `${currentWeatherUrl}${locationKey}${addToUrl}`,
      queryType: "current-weather",
      urlValidation: locationKey && weatherApiKey ? true : false,
      dataHandler: extractCurrentWeatherData,
    };
  };

  const forecast = (locationKey, metric = true) => {
    const addToUrl = `?apikey=${weatherApiKey}&metric=${metric}&details=false`;
    return {
      url: `${forecastUrl}${locationKey}${addToUrl}`,
      queryType: "forecast-5days",
      urlValidation: locationKey && weatherApiKey ? true : false,
      dataHandler: extractForecastData,
    };
  };

  const autoCompleteLocation = (city) => {
    return {
      url: `${locationUrl}q=${city}&apikey=${weatherApiKey}`,
      queryType: "auto-complete-location",
      urlValidation: city && weatherApiKey ? true : false,
      dataHandler: extractLocationData,
    };
  };

  return {
    autoCompleteLocation,
    forecast,
    currentWeather,
  };
}

export default WeatherApiService;
