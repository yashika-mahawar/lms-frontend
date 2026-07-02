import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaClipboardList,
  FaChartLine,
  FaUserGraduate,
  FaVideo,
  FaSignOutAlt,
  FaUsers,
  FaPlus,
  FaFileAlt,
  FaCalendarAlt
} from "react-icons/fa";

function Sidebar({ isAdmin }) {
  const location = useLocation();

  // 1. Student Menu Items
  const studentMenu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "My Courses", path: "/my-courses", icon: <FaBookOpen /> },
    { name: "Profile", path: "/profile", icon: <FaUserGraduate /> },
    { name: "Assignments", path: "/assignments", icon: <FaClipboardList /> },
    { name: "Progress", path: "/progress", icon: <FaChartLine /> },
    { name: "Live Classes", path: "/live-classes", icon: <FaVideo style={{ color: "#ef4444" }} /> },
  ];

  // 2. Admin Menu Items
  const adminMenu = [
    { name: "Dashboard", path: "/admin", icon: <FaHome /> },
    { name: "Manage Courses", path: "/admin/courses", icon: <FaBookOpen /> },
    { name: "Manage Videos", path: "/admin/videos", icon: <FaPlus /> },
    { name: "Manage Students", path: "/admin/students", icon: <FaUsers /> },
    { name: "Schedule Class", path: "/admin/classes", icon: <FaCalendarAlt /> },
    { name: "Reports", path: "/admin/reports", icon: <FaFileAlt /> },
  ];

  const menuItems = isAdmin ? adminMenu : studentMenu;

  return (
    <aside className="sidebar">
      <div className="sidebar-logo" style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
       

<img 
  src="/icfailogo.png"  // Bas shuru mein ek slash (/) lagana hai
  alt="University Logo" 
  style={{ width: '160px', height: 'auto' }} 
/>
      </div>

      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Section */}
      <div style={{ marginTop: "auto", paddingBottom: "20px" }}>
        <Link 
          to={isAdmin ? "/admin/login" : "/login"} 
          className="logout-btn" 
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            padding: '12px',
            margin: '0 20px',
            background: '#ef4444',
            color: 'white',
            borderRadius: '10px',
            fontWeight: '600',
            justifyContent: 'center'
          }}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;