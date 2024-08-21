import { debounce } from "lodash";
import WeatherApiService from "../services/weatherService";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function useDebounce(value, delay) {
  const [handler, setHandler] = useState(null);

  useEffect(() => {
    const fetchCities = debounce(() => {
      if (value) {
        setHandler(WeatherApiService().autoCompleteLocation(value));
      }
    }, delay);

    fetchCities();

    return () => {
      fetchCities.cancel();
    };
  }, [value, delay]);

  const { data: searchSuggestions, isLoading, error } = useFetch(handler || {});

  return { searchSuggestions, isLoading, error };
}

export default useDebounce;
