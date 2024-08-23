import axios, { AxiosRequestConfig } from "axios";

const defaultAxiosSettings: AxiosRequestConfig = {
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "access-token": localStorage.getItem("access-token") ?? "",
  },
};

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:4000/api',
  ...defaultAxiosSettings,
});

export default axiosInstance;
