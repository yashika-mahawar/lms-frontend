import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { FaBookReader, FaClock } from 'react-icons/fa';
import './MyCourses.css';

const MyCourses = () => {
  const [myEnrolledCourses, setMyEnrolledCourses] = useState([]);

  useEffect(() => {
    // LocalStorage se dynamically data fetch karo
    const savedCourses = JSON.parse(localStorage.getItem("myCourses")) || [];
    setMyEnrolledCourses(savedCourses);
  }, []);

  return (
    <div className="my-courses-wrapper" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <aside style={{ width: '260px', minWidth: '260px', position: 'sticky', top: 0 }}>
        <Sidebar />
      </aside>
      
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />
        
        <main style={{ padding: '32px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a' }}>My Enrolled Courses</h1>
            <p style={{ color: '#64748b' }}>Continue your academic lectures and track your module progress.</p>
          </div>

          {myEnrolledCourses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px', color: '#64748b' }}>
              <h3>No courses enrolled yet!</h3>
              <p>Go to the store and enroll in your favorite course.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {myEnrolledCourses.map((course) => (
                <div key={course.id} className="course-card" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                  {/* Dynamic Image handle karna */}
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                  
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{course.title}</h3>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.85rem', marginBottom: '15px' }}>
                      <FaClock /> <span>{course.duration || "Self Paced"}</span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ marginBottom: '15px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px' }}>
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '10px' }}>
                        <div style={{ width: `${course.progress}%`, height: '100%', background: '#4f46e5', borderRadius: '10px' }}></div>
                      </div>
                    </div>

                    <Link to={`/learning/${course.id}`} state={{ course }} style={{ textDecoration: 'none' }}>
                      <button style={{ width: '100%', padding: '10px', background: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '10px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <FaBookReader /> Continue Learning
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MyCourses;