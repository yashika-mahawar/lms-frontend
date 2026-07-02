import React from 'react';
import './ManageStudents.css'; // Isse hum niche banayenge

const ManageStudents = () => {
  // Dummy data
  const students = [
    { id: 1, name: "Yashika", email: "yashika@example.com", course: "B.Tech CS" },
    { id: 2, name: "Rahul Sharma", email: "rahul@example.com", course: "MBA" },
    { id: 3, name: "Priya Verma", email: "priya@example.com", course: "BCA" },
  ];

  return (
    <div className="manage-students-container">
      <div className="header-section">
        <h2>Manage Students</h2>
        <button className="add-btn">+ Add Student</button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>#{student.id}</td>
                <td className="student-name">{student.name}</td>
                <td>{student.email}</td>
                <td><span className="badge">{student.course}</span></td>
                <td>
                  <button className="btn-action edit">Edit</button>
                  <button className="btn-action delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;