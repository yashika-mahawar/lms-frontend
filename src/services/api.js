// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend URL
});

// Ye interceptor automatically token ko har request ke header mein add kar dega
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  console.log("Interceptor Token:", token); // YE LINE ADD KARO
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;