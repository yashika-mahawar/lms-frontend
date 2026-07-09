// src/services/courseService.js
import API from "./api";

// Sare courses lane ke liye
export const getAllCourses = () => API.get("/courses");

// Specific course ki details ke liye
export const getCourseById = (id) => API.get(`/courses/${id}`);

// SIRF /enroll par bhejo, URL mein ID mat daalo
export const enrollCourse = (courseId) => {
  return API.post("/enroll", { courseId }); // ID ko body mein bhejo
};