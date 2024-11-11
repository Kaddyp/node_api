import React from 'react';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearToken, clearRole } from '../app/action';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/auth/logout', { withCredentials: true })
      .then(response => {
        console.log('Logged out successfully');
        dispatch(clearToken());
        dispatch(clearRole());
        // Optionally, redirect to login or home page
        navigate('/login');
      })
      .catch(error => {
        console.error('Error during Logout:', error);
      });
      
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button className='btn btn-success' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
