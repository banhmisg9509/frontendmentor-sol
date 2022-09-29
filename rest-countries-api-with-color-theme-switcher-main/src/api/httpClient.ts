import { setup } from "axios-cache-adapter";

const httpClient = setup({
  baseURL: "https://restcountries.com/v3.1",
  cache: {
    maxAge: 15 * 60 * 1000,
    exclude: {
      query: false,
    },
  },
});

httpClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpClient;
