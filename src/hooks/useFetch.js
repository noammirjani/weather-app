import { useQuery } from "react-query";
import axios from "axios";

function useFetch(handler) {
  const fetchData = async () => {
    if (!handler || !handler.url) {
      // throw new Error("URL is required");
      return;
    }
    if (!handler.urlValidation) {
      throw new Error("URL validation function is required");
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

  const queryKey = handler?.url || "data";
  const { data, isLoading, error } = useQuery(queryKey, fetchData);
  return { data, isLoading, error };
}

export default useFetch;
