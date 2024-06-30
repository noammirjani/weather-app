import axios from "axios";

//todo: change folder name to services
//todo: change file name to weatherApi.js
//todo: handle errors correctly
//todo: add costume hook for fetching data
function weatherApi() {
  // - not working
  const weatherApiKey = "AnwT0RJSDryStGIcCstenYaAuhSxnBHO";
  const forecastUrl =
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const locationUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?";

  const fetchForecast = async (locationKey, metric = true) => {
    const addToUrl = `?apikey=${weatherApiKey}&metric=${metric}&details=false`;

    const extractForecastData = (dayData) => ({
      date: dayData.Date.split("T")[0],
      minTemp: Math.floor(dayData.Temperature.Minimum.Value),
      maxTemp: Math.floor(dayData.Temperature.Maximum.Value),
      description: dayData.Day.IconPhrase,
      unit: dayData.Temperature.Maximum.Unit,
      icon: `https://developer.accuweather.com/sites/default/files/0${dayData.Day.Icon}-s.png`,
    });

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
    const extractData = (data) => {
      return data.map((item) => {
        return {
          key: item.Key,
          city: item.LocalizedName,
          country: item.Country.LocalizedName,
        };
      });
    };

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
  };
}

export default weatherApi;
