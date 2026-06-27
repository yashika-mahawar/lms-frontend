import "./Dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
  <h2>ICFAI LMS</h2>

  <ul>
    <li>
      <Link to="/dashboard">🏠 Dashboard</Link>
    </li>

    <li>
      <Link to="/my-courses">📚 My Courses</Link>
    </li>

    <li>
      <Link to="/schedule">📅 Schedule</Link>
    </li>

    <li>
      <Link to="/assignments">📄 Assignments</Link>
    </li>

    <li>
      <Link to="/certificates">🏆 Certificates</Link>
    </li>

    <li>
      <Link to="/profile">👤 Profile</Link>
    </li>

    <li>
      <Link to="/login">🚪 Logout</Link>
    </li>
  </ul>
</aside>

      {/* Main Content */}
      <main className="main-content">

        <div className="welcome-card">
          <h1>Welcome, Student 👋</h1>
          <p>
            Continue your learning journey with ICFAI University.
          </p>
        </div>

        {/* Statistics */}
        <div className="stats">

          <div className="stat-card">
            <h2>3</h2>
            <p>My Courses</p>
          </div>

          <div className="stat-card">
            <h2>75%</h2>
            <p>Progress</p>
          </div>

          <div className="stat-card">
            <h2>2</h2>
            <p>Certificates</p>
          </div>

        </div>

        {/* My Courses */}
        <section className="dashboard-section">
          <h2>My Courses</h2>

          <div className="course-box">
            <h3>B.Tech Computer Science</h3>
            <button>Continue Learning</button>
          </div>

          <div className="course-box">
            <h3>MBA</h3>
            <button>Continue Learning</button>
          </div>

        </section>

        {/* Upcoming Classes */}
        <section className="dashboard-section">
          <h2>Upcoming Classes</h2>

          <div className="class-box">
            <p>📅 Web Development</p>
            <span>Today • 2:00 PM</span>
          </div>

          <div className="class-box">
            <p>📅 Java Programming</p>
            <span>Tomorrow • 11:00 AM</span>
          </div>

        </section>

        {/* Announcements */}
        <section className="dashboard-section">
          <h2>Announcements</h2>

          <div className="announcement">
            Assignment 1 has been uploaded.
          </div>

          <div className="announcement">
            Mid Semester Examination starts next week.
          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;