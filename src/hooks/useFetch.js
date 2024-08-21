import { useQuery } from "react-query";
import axios from "axios";

const config = (isValid) => ({
  refetchInterval: false,
  staleTime: 1800000, // 30 minutes
  cacheTime: 1800000, // 30 minutes
  enabled: isValid,
  retry: 0,
});

function useFetch(handler) {
  const fetchData = async () => {
    if (!handler?.url) {
      throw new Error("URL is required");
    }

    const response = await axios.get(handler.url);

    if (!response?.data) {
      throw new Error("Response structure is wrong, try again");
    }

    let responseData = response.data;

    if (!responseData) {
      throw new Error("No data was found for the chosen key");
    }

    return handler.dataHandler(responseData);
  };

  const key = handler?.queryKey || "data";
  const isValid = handler?.urlValidation || false;

  const { data, isLoading, error } = useQuery(key, fetchData, config(isValid));

  return { data: error ? null : data, isLoading, error };
}

export default useFetch;
