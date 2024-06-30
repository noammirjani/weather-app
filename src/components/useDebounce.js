import { debounce } from "lodash";
import api from "../config/api";
import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [citiesSearch, setCitiesSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api().fetchAutoCompleteLocation(value);
        setCitiesSearch(response);
      } catch (e) {
        throw e;
      }
    };

    //debounce the fetchData function
    const handler = debounce(() => {
      fetchData();
    }, delay);

    //execute
    handler();

    //clean up
    return () => {
      handler.cancel();
    };
  }, [value]);

  return citiesSearch;
}

export default useDebounce;
