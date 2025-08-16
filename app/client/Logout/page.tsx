import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useRouter } from 'next/navigation';
import LoaderModal from '../Modals/LoaderModal';

const Logout = () => {
    const [loading,setLoading]=useState(false)
    const dispatch = useDispatch();
    const router=useRouter();
    const handleLogout= async ()=>{
      
        setLoading(true)
        try {
            const response = await axios.post('/api/users/logout');
            localStorage.removeItem('token');
            dispatch(logout());
            router.push('/client/login')

            
        
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <button className='hover:cursor-pointer' onClick={handleLogout}>Logout</button>
      {
       loading &&   
      <LoaderModal loading={loading}/>
      }
    </>
  )
}

export default Logout