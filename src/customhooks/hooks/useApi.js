import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const useApi = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, isLoading };
};

export default useApi;
