import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000, // NOTE: timeout 논의 필요
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("token");
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const navigate = useNavigate();
    if (error.response) {
      if (error.response.status === 404) {
        navigate("/404");
      } else if (error.response.status === 401) {
        navigate("/landing");
      }
    }
    return Promise.reject(error);
  }
);

export const ax = instance;
