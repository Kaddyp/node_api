import React, {useState, useEffect} from "react";
import axiosInstance from '../api/axios';
import Logout from "./Logout";
import { useNavigate } from 'react-router-dom';

const Dashboard = () =>{
    const [dashData, setDashData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDashboard = async () => {
          try {
            await axiosInstance.get('/user/dashboard', { withCredentials: true })
            .then(({data}) => {
                setDashData(data.data);                
              })
              .catch(error => {
                console.error('Error:', error);
                setError(error.message);
                navigate('/');
              }); 
            
          } catch (error) {
            console.error('Error fetching profile:', error);
          }
        };
    
        fetchDashboard();
    }, [navigate]);

    if (!dashData) {
        return (
            <div>
                <p>Loading...</p>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message display */}
                <Logout />
            </div>
        );
    }
    return (
        <>          
          <section>
              <div className='py-3'>
                  <h4>Admin Profile</h4>
                  <div>
                      <p>Username: {dashData.userName}</p>
                  </div>
              </div>
              <Logout />
          </section>       
        </>
    );
}
export default Dashboard;