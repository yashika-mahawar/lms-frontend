import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'; 
import { FaUserGraduate, FaBook, FaVideo, FaBell, FaSearch, FaUserCircle, FaChartLine } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-wrapper">
      <div className="sidebar-container">
        <Sidebar isAdmin={true} />
      </div>
      
      <main className="admin-main">
        {/* Professional Header */}
        <header className="top-header">
    <div className="search-bar">
        <FaSearch color="#64748b" />
        <input type="text" placeholder="Search anything..." />
    </div>
    
    <div className="header-actions">
        {/* Notification Bell with a red dot indicator */}
        <div style={{ position: 'relative' }}>
            <FaBell className="action-icon" />
            <span style={{ 
                position: 'absolute', top: '-5px', right: '-5px', 
                width: '10px', height: '10px', background: '#ef4444', 
                borderRadius: '50%', border: '2px solid white' 
            }}></span>
        </div>
        
        <div className="profile-mini">
            <FaUserCircle size={32} color="#4318ff" />
            <span>Admin</span>
        </div>
    </div>
</header>

        <h1>Dashboard Overview</h1>

        {/* Stats Grid */}
        <section className="stats-grid">
            <div className="card"><FaUserGraduate className="icon" /><h3>Total Students</h3><p className="value">1,284</p></div>
            <div className="card"><FaBook className="icon" /><h3>Active Courses</h3><p className="value">42</p></div>
            <div className="card"><FaVideo className="icon" /><h3>Live Sessions</h3><p className="value">12</p></div>
            <div className="card"><FaChartLine className="icon" /><h3>Monthly Growth</h3><p className="value">+15%</p></div>
        </section>

        {/* Tables & Notices */}
        <div className="bottom-sections">
            <section className="recent-students">
                <h3>Recent Enrollments</h3>
                <table>
                    <thead><tr><th>Student</th><th>Course</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>Yashika</td><td>Full Stack</td><td className="status-done">Active</td></tr>
                        <tr><td>Rahul</td><td>Data Science</td><td className="status-done">Active</td></tr>
                    </tbody>
                </table>
            </section>
            <section className="quick-actions">
                <h3>Notices</h3>
                <div className="notice">System update at 2 AM.</div>
            </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;