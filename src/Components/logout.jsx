import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Clear user data/tokens from storage
    localStorage.removeItem('token'); 
    sessionStorage.clear();

    // 2. Alert the user (optional)
    alert('Logged out successfully');

    // 3. Redirect to login page
    navigate('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px' }}
    >
      Logout
    </button>
  );
};

export default Logout;