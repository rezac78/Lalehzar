import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://lalehzar-api.onrender.com/api",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;