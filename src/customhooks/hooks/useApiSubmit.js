import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const useApiSubmit = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const doSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    if (data) {
      axiosParams = { ...axiosParams, data: data };
    }

    await fetchData(axiosParams);
  };

  return { response, error, isLoading, doSubmit };
};

export default useApiSubmit;
