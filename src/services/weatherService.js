import {
  extractCurrentWeatherData,
  extractForecastData,
  extractLocationData,
  extractGeoPositionData,
} from "../utils/weatherDataParser";

function WeatherApiService() {
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const currentWeatherUrl =
    "http://dataservice.accuweather.com/currentconditions/v1/";
  const forecastUrl =
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const locationUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
  const geoPositionUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search";

  const isValidUrl = (...args) => args.every(Boolean);

  const currentWeather = (locationKey, metric = true) => {
    const url = `${currentWeatherUrl}${locationKey}?apikey=${weatherApiKey}&details=true&metric=${metric}`;
    return {
      url: url,
      queryType: "current-weather",
      queryKey: url,
      urlValidation: isValidUrl(locationKey, weatherApiKey),
      dataHandler: extractCurrentWeatherData,
    };
  };

  const forecast = (locationKey, metric = true) => {
    const url = `${forecastUrl}${locationKey}?apikey=${weatherApiKey}&details=true&metric=${metric}`;
    return {
      url: url,
      queryType: "forecast-5days",
      queryKey: url,
      urlValidation: isValidUrl(locationKey, weatherApiKey),
      dataHandler: extractForecastData,
    };
  };

  const autoCompleteLocation = (city) => {
    return {
      url: `${locationUrl}?apikey=${weatherApiKey}&q=${city}`,
      queryType: "auto-complete-location",
      queryKey: city,
      urlValidation: isValidUrl(city, weatherApiKey),
      dataHandler: extractLocationData,
    };
  };

  const getCityByCoords = (coords) => {
    return {
      url: `${geoPositionUrl}?apikey=${weatherApiKey}&q=${coords.latitude},${coords.longitude}`,
      queryType: "geo-position-search",
      queryKey: "geo-position-search",
      urlValidation: isValidUrl(
        coords,
        coords.latitude,
        coords.longitude,
        weatherApiKey
      ),
      dataHandler: extractGeoPositionData,
    };
  };

  return {
    autoCompleteLocation,
    forecast,
    currentWeather,
    getCityByCoords,
  };
}

export default WeatherApiService;

//e
// :
// "400"
// Message
// :
// "LocationKey is invalid: 57465$"
// Reference
// :
// "/forecasts/v1/daily/5day/57465$"
