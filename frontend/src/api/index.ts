import axios, { AxiosRequestConfig } from "axios";

const defaultAxiosSettings: AxiosRequestConfig = {
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "authorization": "Bearer "+ localStorage.getItem("user-token"),
  },
};

const axiosInstance = axios.create({
  baseURL: "https://backend-final-g3-qngl.onrender.com/api",
  ...defaultAxiosSettings,
});

export default axiosInstance;
