'use client'
import { useRouter } from 'next/navigation'
import { RootState } from '../store/store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Modals/Modal'
import { login } from '../store/authSlice'

const dashboard = () => {

  const [openModal, setOpenModal] = useState(false)

  const router = useRouter()
  const dispatch=useDispatch();

  const user = useSelector((state: RootState) => state.auth.userData)
  const status = useSelector((state: RootState) => state.auth.status)
  console.log(user);
  console.log(status);

  const openModalHandler=()=>{
    setOpenModal((curr)=>(!curr))
  }

  useEffect(()=>{
    console.log(user);
  },[user?.email])

  return (
    <div className='text-white w-full  ' >
      <h1 className='w-full flex flex-row p-2 items-center justify-center text-xl'>Dashboard</h1>
      {status ? (
        <>
          <div className='h-[100%]  w-full flex flex-row items-center justify-center text-xl p-2 border-0 border-black'>
            <h1>User details </h1>
          </div>
          <div className=' h-[100%] w-full pb-20 border-0 border-amber-300 flex flex-row items-center justify-center '>
            <div className='h-full p-2 bg-gray-700 rounded-md w-[25%] border-0 border-amber-300 flex justify-center items-center '>
              <img className='rounded-4xl' src={user?.image} alt="img not found" height={150} width={150} /> 
            </div>

            <div className='h-full w-[50%] border-0 border-amber-300 flex flex-row gap-6 justify-center  '>
              <div className='flex flex-col gap-2 outline-0 outline-black text-black text-xl uppercase '>
                <h1>Id Number</h1>
                <h1>Email </h1>
                <h1>Username </h1>
                <h1>Firstname </h1>
                <h1>Lastname </h1>
                <button onClick={openModalHandler} 
                        className='bg-blue-400 text-lg rounded-sm hover:bg-blue-600 text-center  hover: cursor-pointer hover:text-white outline-1 outline-amber-50  '>
                        Edit
                </button>
              </div>
          
              <div className='flex flex-col gap-2 outline-0 outline-black text-xl'>
                <h1> : {user?.id}</h1>                
                <h1> : {user?.email}</h1>
                <h1> : {user?.username}</h1>
                <h1> : {user?.firstname}</h1>
                <h1> : {user?.lastname}</h1>
              </div>
   
            </div>
          </div>
          


        </>
      ) : (
        <p onClick={() => { router.push('/client/login') }}>please Login</p>

      )
      }

      { openModal && <Modal  openModal={openModal} openModalHandler={openModalHandler} />}
    </div>
  )
}

export default dashboard;
