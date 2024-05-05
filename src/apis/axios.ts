import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

//TODO: 로그인 후 interceptor 코드 추가 필요

export const ax = instance;
