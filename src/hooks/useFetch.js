import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(handler) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const setResponse = (data, error) => {
    setData(data);
    setError(error);
  };

  useEffect(() => {
    if (!handler || !handler.url) return;

    if (!handler.urlValidation) {
      setResponse(null, "Invalid URL or API key");
      return;
    }

    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(handler.url);
        if (!response?.data) {
          throw new Error("Response structure is wrong, try again");
        }
        const responseData = response.data;
        if (!responseData) {
          throw new Error("No data was found for the chosen key");
        }
        const data = handler.dataHandler(responseData);
        setResponse(data, null);
      } catch (error) {
        setResponse(null, error.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [handler.url]);

  return { data, isPending, error };
}

export default useFetch;
