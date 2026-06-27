import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          🎓 ICFAI LMS
        </div>

        <div className="profile">
          <div className="avatar">👩‍🎓</div>
          <h3>Student Panel</h3>
          <p>Keep learning everyday 🚀</p>
        </div>

        <nav>
          <Link to="/dashboard">🏠 Dashboard</Link>
          <Link to="/my-courses">📚 My Courses</Link>
          <Link to="/schedule">📅 Schedule</Link>
          <Link to="/assignments">📄 Assignments</Link>
          <Link to="/certificates">🏆 Certificates</Link>
          <Link to="/profile">👤 Profile</Link>
          <Link to="/login">🚪 Logout</Link>
        </nav>

      </aside>

      {/* MAIN */}
      <main className="main">

        {/* HEADER */}
        <section className="header">
          <h1>Welcome Back 👋</h1>
          <p>Your learning journey continues here</p>

          <div className="actions">
            <button>📚 Continue Learning</button>
            <button>📅 Schedule</button>
            <button>📄 Assignments</button>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">

          <div className="card">
            <h2>3</h2>
            <p>Active Courses</p>
          </div>

          <div className="card">
            <h2>75%</h2>
            <p>Overall Progress</p>
          </div>

          <div className="card">
            <h2>2</h2>
            <p>Certificates</p>
          </div>

          <div className="card">
            <h2>5</h2>
            <p>Upcoming Classes</p>
          </div>

        </section>

        {/* PROGRESS */}
        <section className="section">

          <h2>🔥 Your Courses</h2>

          <div className="course">

            <div className="course-info">
              <h3>B.Tech CSE</h3>
              <p>AI • Web Dev • Data Science</p>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "80%" }}></div>
            </div>

            <span>80% completed</span>

          </div>

          <div className="course">

            <div className="course-info">
              <h3>MBA</h3>
              <p>Marketing • Finance • HR</p>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "55%" }}></div>
            </div>

            <span>55% completed</span>

          </div>

        </section>

        {/* UPCOMING */}
        <section className="section">

          <h2>📅 Upcoming Classes</h2>

          <div className="item">
            <p>Web Development</p>
            <small>Today • 2:00 PM</small>
          </div>

          <div className="item">
            <p>Java Programming</p>
            <small>Tomorrow • 11:00 AM</small>
          </div>

        </section>

        {/* NOTICE */}
        <section className="section">

          <h2>📢 Announcements</h2>

          <div className="notice">
            Assignment 1 is live now 🚀
          </div>

          <div className="notice">
            Mid Semester Exams next week ⚡
          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;