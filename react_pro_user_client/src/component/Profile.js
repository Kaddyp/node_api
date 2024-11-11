import React, {useState, useEffect} from "react";
import axiosInstance from '../api/axios';
import Logout from "./Logout";
import { useNavigate } from 'react-router-dom';


const Profile = () =>{
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            await axiosInstance.get('/user/profile', { withCredentials: true })
            .then(({data}) => {
                setProfileData(data.data);                
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
    
        fetchProfile();
    }, [navigate]);

    if (!profileData) {
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
                    <h4>Engineer Profile</h4>
                    <div>
                        <p>Username: {profileData.userName}</p>
                    </div>
                </div>
                <Logout />
            </section>
        </>
    );
}
export default Profile;