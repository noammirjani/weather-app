import { debounce } from "lodash";
import WeatherApiService from "../services/weatherService";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function useDebounce(value, delay) {
  const [handler, setHandler] = useState(null);

  useEffect(() => {
    const fetchCities = debounce(() => {
      if (value) {
        const h = WeatherApiService().autoCompleteLocation(value);
        setHandler(h);
      }
    }, delay);

    fetchCities();

    return () => {
      fetchCities.cancel();
    };
  }, [value, delay]);

  const { data: searchSuggestions, isPending, error } = useFetch(handler || {});

  return { searchSuggestions, isPending, error };
}

export default useDebounce;
