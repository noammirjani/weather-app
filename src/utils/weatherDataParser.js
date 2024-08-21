const iconUrlBase = "https://developer.accuweather.com/sites/default/files";

export const extractGeoPositionData = (responseData) => {
  const data = responseData;

  const correctCountry =
    data.Country.LocalizedName === "Palestine"
      ? "Israel"
      : data.Country.LocalizedName;

  return {
    key: data.Key,
    city: data.ParentCity.LocalizedName || data.LocalizedName,
    country: correctCountry,
  };
};

export const extractLocationData = (responseData) => {
  const extract = (item) => ({
    key: item.Key,
    city: item.LocalizedName,
    country: item.Country.LocalizedName,
  });

  return responseData.map(extract);
};

export const extractForecastData = (responseData) => {
  const extract = (dayData) => ({
    date: dayData.Date.split("T")[0],
    minTemp: Math.floor(dayData.Temperature.Minimum.Value),
    maxTemp: Math.floor(dayData.Temperature.Maximum.Value),
    description: dayData.Day.IconPhrase,
    unit: dayData.Temperature.Maximum.Unit,
    icon: `${iconUrlBase}/${dayData.Day.Icon < 10 ? "0" : ""}${
      dayData.Day.Icon
    }-s.png`,
  });

  if (!responseData?.DailyForecasts) {
    throw new Error("Forecast response broken, missing data!");
  }

  return responseData.DailyForecasts.map(extract);
};

export const extractCurrentWeatherData = (responseData, isMetric) => {
  const data = responseData[0];

  return {
    temp: isMetric
      ? data.Temperature.Metric.Value
      : data.Temperature.Imperial.Value,
    tempUnit: isMetric ? "C" : "F",
    description: data.WeatherText,
    icon: `${iconUrlBase}/${data.WeatherIcon < 10 ? "0" : ""}${
      data.WeatherIcon
    }-s.png`,
    feelsLike: isMetric
      ? data.RealFeelTemperature.Metric.Value
      : data.RealFeelTemperature.Imperial.Value,
    humidity: data.RelativeHumidity,
    wind: isMetric
      ? data.Wind.Speed.Metric.Value
      : data.Wind.Speed.Imperial.Value,
    windUnit: isMetric ? "km/h" : "mi/h",
    uvIndex: data.UVIndex,
    uvIndexText: data.UVIndexText,
    visibility: isMetric
      ? data.Visibility.Metric.Value
      : data.Visibility.Imperial.Value,
    visibilityUnit: isMetric ? "km" : "mi",
    pressure: isMetric
      ? data.Pressure.Metric.Value
      : data.Pressure.Imperial.Value,
    pressureUnit: isMetric ? "mb" : "inHg",
    localTime: data.LocalObservationDateTime.split("T")[0],
    isDayTime: data.IsDayTime,
  };
};
