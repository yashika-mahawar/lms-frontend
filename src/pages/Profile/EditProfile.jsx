import React, { useState } from 'react';

const EditProfile = () => {
  const [formData, setFormData] = useState({ 
    name: 'Yashika', 
    email: 'yashika@icfai.edu', 
    phone: '9876543210' 
  });
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      setMsg('Error: Phone number must be 10 digits!');
      return;
    }
    setMsg('Profile Updated Successfully!');
    // Msg ko 3 seconds baad hataane ke liye
    setTimeout(() => setMsg(''), 3000);
  };

  // Common input style
  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    marginTop: '6px',
    fontSize: '0.95rem'
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3 style={{ margin: '0 0 4px 0', color: '#1e293b' }}>Edit Personal Information</h3>
        <p style={{ margin: '0', color: '#64748b', fontSize: '0.85rem' }}>Update your contact details below.</p>
      </div>
      
      <div className="input-group">
        <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>Full Name</label>
        <input 
          type="text" 
          value={formData.name} 
          onChange={e => setFormData({...formData, name: e.target.value})} 
          style={inputStyle}
        />
      </div>
      
      <div className="input-group">
        <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>Email Address</label>
        <input 
          type="email" 
          value={formData.email} 
          onChange={e => setFormData({...formData, email: e.target.value})} 
          style={inputStyle}
        />
      </div>
      
      <div className="input-group">
        <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>Phone Number</label>
        <input 
          type="text" 
          value={formData.phone} 
          onChange={e => setFormData({...formData, phone: e.target.value})} 
          style={inputStyle}
        />
      </div>
      
      {msg && (
        <p style={{ 
          margin: '0', 
          fontSize: '0.85rem', 
          color: msg.startsWith('Error') ? '#ef4444' : '#22c55e',
          fontWeight: '500'
        }}>
          {msg}
        </p>
      )}
      
      <button 
        type="submit" 
        style={{ 
          padding: '12px', 
          background: '#4f46e5', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '10px', 
          fontWeight: '600', 
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfile;