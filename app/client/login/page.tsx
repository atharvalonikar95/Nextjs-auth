'use client'
import axios from 'axios';
import { NextResponse } from 'next/server';
import React, { useState } from 'react'

const userData={
    email:'',
    password:''
}

const Login = () => {

  const[user,setUser]=useState(userData);

  const onChangeHandler=(e:any)=>{
    setUser((curr)=>({...curr,[e.target.name]:e.target.value}))
  }

  const onSubmitHandler= async (e:any)=>{
    e.preventDefault();
    
    try {
      const response= await axios.post('/api/users/login',user)
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem('token', token); 
    } catch (error:any) {
      console.log(error.message);
      return NextResponse.json({message:"Login Failed ",error:error.message},
        {status:500}
      )
    }
    // console.log(user);
    setUser(userData);

  }

  return (
    <>
        <form className='border-2 rounded-md   mt-[10vh] lg:mt-[10vw]  border-amber-50 lg:w-[40%] mx-auto h-[50vh] flex flex-col justify-center items-center gap-2 '>

            <h1 className='text-xl text-white font-bold '> Login Page </h1>

            <input className='bg-amber-50 w-[50%] lg:w-[40%] mx-auto p-2 mt-2 text-black outline-none rounded-md ' 
            type="email" 
            name='email'
            placeholder='email'
            value={user.email}  
            onChange={onChangeHandler}    />

            <input className='bg-amber-50 w-[50%] lg:w-[40%] mx-auto p-2 mt-2 text-black outline-none rounded-md ' 
            type="password" 
            name='password'
            placeholder='password'
            value={user.password}  
            onChange={onChangeHandler} 
            />

            <button className=' bg-blue-700 mt-2 px-3 py-1.5 rounded-md font-bold hover:bg-blue-900'
            onClick={onSubmitHandler}
            >
                Login
            </button>

            <a className='pt-2 cursor-pointer '  >Forgot password</a>
            {/* onClick={()=>{router.push('/client/login')}}. */}
        </form>
        
    </>
  )
}

export default Login