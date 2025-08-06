
import React, { use, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import axios from 'axios'
import { updateUser } from './store/authSlice'

type props = {
  openModal: boolean
  openModalHandler:()=> void
}

const Modal = ({ openModal, openModalHandler }: props) => {

  const user = useSelector((state: RootState) => state.auth.userData);
  const dispatch = useDispatch();
  const [formData,setFormData]=useState({
    email:user?.email ||'',
    username:user?.username ||''
  })
  
  
  
  const formChangeHandler=(e:any)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  const handleUpdateUser =async()=>{
    try{

      const url = `/api/users/updateUsers?email=${user?.email}`;
      const response = await axios.put(url,{
        newEmail: formData.email,
        newUsername: formData.username
    })
    
    console.log(response.data);
    dispatch(updateUser(response.data))


  }
  catch(err){
    console.log(err);
  }
  }


  return (
  <>

    {openModal ? (
    <div className=' fixed inset-0 bg-gray-950 opacity-[70%]  h-screen w-full transition-transform  flex flex-row items-center justify-center gap-4 border-2 border-black  z-50'>
        <div className='bg-white w-[40%] h-[45%] flex flex-col items-center justify-center gap-4 text-black'>

          <h2 className='text-xl font-bold text-black '>Edit User Details</h2>

          <input className='p-2 h-[12%] rounded-md w-[35%] border-2 border-black '
            type="text" placeholder='email' name='email' value={formData.email} onChange={formChangeHandler} />

          <input className='p-2 h-[12%] rounded-md w-[35%] border-2 border-black '
            type="text" placeholder='username' name='username' value={formData.username} onChange={formChangeHandler}  />

          <div className='w-[35%] flex flex-row gap-2 justify-between border-0 border-black  '>
            <button onClick={handleUpdateUser} className='bg-blue-400 p-2 rounded-lg hover: cursor-pointer '>save</button>
            <button onClick={ openModalHandler} className='bg-blue-400 p-2 rounded-lg hover: cursor-pointer'>close</button>
          </div>

        </div>

        </div>
            ): (
              ''
        ) 
      }
  </>
  )
}

export default Modal