import axios from "axios";

function weatherApi() {
  const weatherApiKey = process.env.ACCU_WEATHER_API_KEY;
  const forecastUrl =
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const locationUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?";

  const fetchForecast = (locationKey = "", metric = false) => {
    const addToUrl = `${locationKey}?metric=${metric}&details=false$apikey=${weatherApiKey}`;
  };

  const fetchAutoCompleteLocation = async (city) => {
    const url = `${locationUrl}q=${city}&apikey=${weatherApiKey}`;
    const extractData = (data) => {
      return data.map((item) => {
        return {
          key: item.Key,
          city: item.LocalizedName,
          country: item.Country.LocalizedName,
        };
      });
    };

    console.log("fetchAutoCompleteLocation", city);
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
  };
}

export default weatherApi;
