export const colorByWeather = (description) => {
  if (!description) return "default";
  description = description.toLowerCase();
  if (description.includes("rain") || description.includes("thunderstorms"))
    return "rain";
  if (description.includes("cloud") || description.includes("fog"))
    return "clouds";
  if (description.includes("sun")) return "sunny";
  if (description.includes("clear")) return "clear";
  return "default";
};
