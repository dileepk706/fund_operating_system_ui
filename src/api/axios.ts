import axios from "axios";
const IS_PROD = import.meta.env.PROD;

const BASE_URL = "http://localhost:3000/api";
export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const idToken = localStorage.getItem("token");
    if (idToken) {
      config.headers.accesstoken = "bearer "+idToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    if (!IS_PROD) {
    }
    return response;
  },
  async (error) => {
    console.log(error.message);
    const originalRequest = error.config;
    if (error.message === "Network Error" && !originalRequest._retry) {
      window.alert("Bad connection, retrying....");
      originalRequest._retry = true;
      return axios(originalRequest);
    }
    if (error.message === "timeout exceeded" && !originalRequest._retry) {
      window.alert("timeout exceeded....");
      originalRequest._retry = true;
      return axios(originalRequest);
    }
    console.log(error);
    return Promise.reject((error.response && error.response.data) || error);
  }
);
