'use client'
import { useRouter } from 'next/navigation'
import { RootState } from '../store/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../Modals/Modal'

const dashboard = () => {

  const [openModal, setOpenModal] = useState(false)

  const router = useRouter()

  const user = useSelector((state: RootState) => state.auth.userData)
  const status = useSelector((state: RootState) => state.auth.status)
  console.log(user);

  const openModalHandler=()=>{
    setOpenModal((curr)=>(!curr))
  }

  useEffect(()=>{
    console.log(user);
  },[user?.email])

  return (
    <div className='text-white   ' >
      <h1>Dashboard</h1>
      {status ? (
        <>
          <h1>{user?.email}</h1>
          <h1>{user?.username}</h1>
          <h1>{user?.firstname}</h1>
          <h1>{user?.lastname}</h1>
          {/* <h1>{user?.image}</h1> */}
        </>
      ) : (
        <p onClick={() => { router.push('/client/login') }}>please Login</p>

      )
      }

      <button onClick={openModalHandler} className='bg-blue-400 p-2 rounded-lg m-2  hover: cursor-pointer  '>edit</button>
      { openModal && <Modal  openModal={openModal} openModalHandler={openModalHandler} />}
    </div>
  )
}

export default dashboard;
