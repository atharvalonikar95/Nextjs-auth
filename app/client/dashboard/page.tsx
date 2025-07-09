'use client'
import { RootState } from '../store/store'
import React from 'react'
import { useSelector } from 'react-redux'

const dashboard = () => {

    const user= useSelector((state:RootState)=>state.auth.userData)
    const status = useSelector((state:RootState)=>state.auth.status)
    console.log(user);

  return (
    <div className='text-white ' >
        <h1>Dashboard</h1>
        { status?(
          <>
            <h1>{user?.email}</h1>
            <h1>{user?.username}</h1>
          </>
        ):(
        <p>please Login</p>
        )
        }



        
        

    </div>
  )
}

export default dashboard;
