// src/services/authService.js
import API from "./api";

export const loginUser = (formData) => API.post("/auth/login", formData);
export const registerUser = (formData) => API.post("/auth/signup", formData);