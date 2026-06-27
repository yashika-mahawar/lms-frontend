import Profile from "../pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCourses from "../pages/MyCourses/MyCourses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Payment from "../pages/Payment/Payment";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import Learning from "../pages/Learning/Learning";
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
        <Route path="/payment" element={<Payment />} />
<Route path="/payment-success" element={<PaymentSuccess />} />
<Route path="/learning" element={<Learning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;