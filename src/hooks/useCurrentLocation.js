import { useEffect, useState } from "react";
import weatherApi from "../services/weatherService";
import useFetch from "./useFetch";

const useCurrentLocation = () => {
  const [handler, setHandler] = useState({});
  const {
    data: currentLocation,
    error: currentLocationError,
    isLoading: currentLocationLoading,
  } = useFetch(handler);

  const getCoords = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        (error) => reject(error)
      );
    });
  };

  useEffect(() => {
    const updateCoords = async () => {
      try {
        const coords = await getCoords();
        setHandler(weatherApi().getCityByCoords(coords));
      } catch (error) {
        // throw error;
      }
    };

    updateCoords();
  }, []);

  return {
    currentLocation,
    currentLocationError,
    currentLocationLoading,
  };
};

export default useCurrentLocation;
