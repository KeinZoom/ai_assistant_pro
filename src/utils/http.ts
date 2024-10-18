import axios from "axios";

const request = axios.create({
  baseURL: "https://api.dify.ai/v1",
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

request.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

export default request;
