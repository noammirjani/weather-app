function weatherApi() {
  const weatherApiKey = process.env.ACCU_WEATHER_API_KEY;
  const forecastUrl =
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const locationUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?";

  const fetchForecast = (locationKey = "", metric = false) => {
    const addToUrl = `{locationKey}?metric={metric}&details=false$apikey={weatherApiKey}`;
  };

  const fetchAutoCompleteLocation = (city = "Tel aviv") => {
    const addToUrl = `q={city}&apikey={weatherApiKey}`;
  };
}

export default weatherApi;
