import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://restcountries.com/v3.1",
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
