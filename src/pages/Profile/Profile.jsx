import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-image">
            👤
          </div>

          <h2>Honey Mahawar</h2>
          <p>B.Tech Computer Science</p>
        </div>

        <div className="profile-details">

          <div className="detail">
            <span>Enrollment No.</span>
            <h4>ICFAI2026001</h4>
          </div>

          <div className="detail">
            <span>Email</span>
            <h4>honey@gmail.com</h4>
          </div>

          <div className="detail">
            <span>Phone</span>
            <h4>9876543210</h4>
          </div>

          <div className="detail">
            <span>Program</span>
            <h4>B.Tech</h4>
          </div>

          <div className="detail">
            <span>Semester</span>
            <h4>6th Semester</h4>
          </div>

          <div className="detail">
            <span>Department</span>
            <h4>Computer Science</h4>
          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;