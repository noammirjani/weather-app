import axios from "axios";

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

    const extractCurrentWeatherData = (data, unit = "metric") => ({
      temp:
        unit === "metric"
          ? data.Temperature.Metric.Value
          : data.Temperature.Imperial.Value,
      tempUnit: unit === "metric" ? "C" : "F",
      description: data.WeatherText,
      icon: `https://developer.accuweather.com/sites/default/files/${
        data.WeatherIcon < 10 ? "0" + data.WeatherIcon : data.WeatherIcon
      }-s.png`,
      feelsLike:
        unit === "metric"
          ? data.RealFeelTemperature.Metric.Value
          : data.RealFeelTemperature.Imperial.Value,
      humidity: data.RelativeHumidity,
      wind:
        unit === "metric"
          ? data.Wind.Speed.Metric.Value
          : data.Wind.Speed.Imperial.Value,
      windUnit: unit === "metric" ? "km/h" : "mi/h",
      uvIndex: data.UVIndex,
      uvIndexText: data.UVIndexText,
      visibility:
        unit === "metric"
          ? data.Visibility.Metric.Value
          : data.Visibility.Imperial.Value,
      visibilityUnit: unit === "metric" ? "km" : "mi",
      pressure:
        unit === "metric"
          ? data.Pressure.Metric.Value
          : data.Pressure.Imperial.Value,
      pressureUnit: unit === "metric" ? "mb" : "inHg",
      localTime: data.LocalObservationDateTime.split("T")[0],
      isDayTime: data.IsDayTime,
    });

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
    fetchCurrentWeather,
  };
}

export default weatherApi;
