import React, { useState } from 'react';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setRole } from '../app/action';  

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset error state before making request
    setError(null);
    // Sending a POST request to the login endpoint
    await axiosInstance.post('/auth/login', form, { withCredentials: true })
    .then(({data}) => {
      console.log('Login successful:', data);
      dispatch(setToken(data.data.token));
      dispatch(setRole(data.data.userRole));
      // Navigate to dashboard or profile page upon successful login
      if(data.data.userRole === 'Admin'){
        navigate('/dashboard');
      }
      else{
        navigate('/profile');
      }
    })
    .catch(error => {
      console.error('Error during Login:', error);
      setError('Login failed. Please try again.');
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
                <h5 className="card-title">Login</h5>
              </div>
              <div className="card-body">                   
                  {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message display */}
                  <form onSubmit={handleSubmit}>                    

                    <div className="mb-3">
                      <span htmlFor="email" className="form-label">Email</span>
                      <input type="email" className="form-control" name='email' onChange={handleChange} required placeholder="name@example.com" autoComplete="off"/>
                    </div>

                    <div className="mb-3">
                      <span htmlFor="password" className="form-label">Password</span>
                      <input type="password" className="form-control" name='password' onChange={handleChange} required placeholder="Password" autoComplete="off"/>
                    </div>

                    <button className='btn btn-success' type="submit">Login Now</button>
                </form>
                <p className='py-2'>don't have an account? <a href="/register">register now!</a></p>

              </div>                
            </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Login;
