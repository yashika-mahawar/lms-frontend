import Profile from "../pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCourses from "../pages/MyCourses/MyCourses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import CourseDetails from "../pages/CourseDetails/CourseDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-courses" element={<MyCourses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;