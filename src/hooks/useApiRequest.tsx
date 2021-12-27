import { useCallback, useEffect, useRef, useState } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";

const { REACT_APP_API_URL } = process.env;

const client = axios.create({
  baseURL: REACT_APP_API_URL,
});

type UseApiRequest = {
  method?: Method;
  url: string;
};
function useApiRequest<T>({ method = "get", url }: UseApiRequest) {
  const [response, setResponse] = useState<{
    data: T | null;
    error: any;
    loading: boolean;
  }>({
    data: null,
    loading: false,
    error: null,
  });

  // we use useRef to store the cancel token instead of useState
  // because we don't want to force a render every time we update it
  const signal = useRef(axios.CancelToken.source());

  useEffect(() => {
    // when the component will unmount, we cancel the last request
    return () => {
      signal.current.cancel("Request canceled");
    };
  }, []);

  // useCallback allows us to avoid creating the fetchData function over and over every
  // time a render happens, as long as [url, method] don't change
  const fetchData = useCallback(
    (axiosConfig?: AxiosRequestConfig) => {
      // when it's time to make a request, we cancel the last one and create a new cancel token
      signal.current.cancel("Request canceled");
      signal.current = axios.CancelToken.source();

      setResponse({ data: null, error: null, loading: true });
      return client
        .request({
          url,
          method,
          cancelToken: signal.current.token,
          ...axiosConfig,
        })
        .then((response) => {
          setResponse({
            data: response.data,
            loading: false,
            error: null,
          });
          return response;
        })
        .catch((error) => {
          setResponse({
            data: null,
            loading: false,
            error: error,
          });
          throw error;
        });
    },
    [url, method]
  );
  return {
    ...response,
    fetchData,
  };
}

export default useApiRequest;
