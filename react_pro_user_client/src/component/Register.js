import React, { useState } from 'react';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
    role: 'Engineer',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error state before making request
    setError(null);
    // Sending a POST request to the registration endpoint
    axiosInstance.post('/auth/register', form)
    .then(response => {
      console.log('Registration successful:', response.message);
      // Navigate to dashboard or login page upon successful registration
      navigate('/login');
    })
    .catch(error => {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    });
  };

  
  return (
    <>
      <section>
          <div className='py-3'>
            <h4>Customer Zone</h4>
          </div>
      </section>
      <div className="container">
        <div className="justify-content-center row text-start">
          <div className='col-lg-6'>
              <div className="card mb-3">
                <div className="card-header">
                  <h5 className="card-title">New account</h5>
                </div>
                <div className="card-body"> 
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message display */}
                
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <span htmlFor="userName" className="form-label">Username</span>
                        <input type="text" className="form-control" name='userName' onChange={handleChange} required placeholder="Username" autoComplete="off"/>
                      </div>

                      <div className="mb-3">
                        <span htmlFor="email" className="form-label">Email</span>
                        <input type="email" className="form-control" name='email' onChange={handleChange} required placeholder="name@example.com" autoComplete="off"/>
                      </div>

                      <div className="mb-3">
                        <span htmlFor="password" className="form-label">Password</span>
                        <input type="password" className="form-control" name='password' onChange={handleChange} required placeholder="Password" autoComplete="off"/>
                      </div>

                      <div className="mb-3">
                        <span htmlFor="role" className="form-label">Customer Type</span>
                        <select className="form-select" name='role' required onChange={handleChange}>
                          <option value="Engineer">Engineer</option>
                          <option value="Admin">Admin</option>
                        </select>                     
                      </div>
                      
                      <button className='btn btn-success' type="submit">Register Now</button>
                  </form>
                  <p className='py-2'>already have an account? <a href="/login">login now!</a></p>

                </div>                
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
