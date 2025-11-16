import axios from "axios";
// base_url = "https://itrbackend.bainancecapital.in/";
const API = axios.create({
  // baseURL: "http://localhost:5000", // your backend URL
  baseURL: "https://itrbackend.bainancecapital.in", // your backend URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
