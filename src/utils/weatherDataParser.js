const iconUrlBase = "https://developer.accuweather.com/sites/default/files";
export const extractForecastData = (dayData) => {
  return {
    date: dayData.Date.split("T")[0],
    minTemp: Math.floor(dayData.Temperature.Minimum.Value),
    maxTemp: Math.floor(dayData.Temperature.Maximum.Value),
    description: dayData.Day.IconPhrase,
    unit: dayData.Temperature.Maximum.Unit,
    icon: `${iconUrlBase}/${dayData.Day.Icon < 10 ? "0" : ""}${
      dayData.Day.Icon
    }-s.png`,
  };
};

export const extractCurrentWeatherData = (data, unit = "metric") => {
  const isMetric = unit === "metric";

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

export const extractData = (data) => {
  return data.map((item) => ({
    key: item.Key,
    city: item.LocalizedName,
    country: item.Country.LocalizedName,
  }));
};
