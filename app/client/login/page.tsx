'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const userData={
    email:'',
    password:''
}

const Login = () => {
  const [showPassword,setShowPassword]=useState(false)
  const router=useRouter();
  const dispatch = useDispatch();
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
      console.log(response.data.tokendata);
      dispatch(login(response.data.tokendata))
      router.push('/client/dashboard')
      
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
    <div className='lg:h-[80vh] lg:flex flex-col justify-center items-center  '>
        <form className='border-2 rounded-md     border-amber-50 lg:w-[40%] mx-auto h-[50vh]  flex flex-col justify-center items-center gap-2 '>

            <h1 className='text-xl text-white font-bold '> Login Page </h1>

            <input className='bg-amber-50 w-[50%] lg:w-[40%] mx-auto p-2 mt-2 text-black outline-none rounded-md ' 
            type="email" 
            name='email'
            placeholder='email'
            value={user.email}  
            onChange={onChangeHandler}    />

            <div className='relative w-full flex flex-row items-center'>
                <input className='bg-amber-50 w-[50%] lg:w-[40%] mx-auto p-2 mt-2 text-black outline-none rounded-md ' 
                type={showPassword?`text`:`password`}
                name='password'
                placeholder='password'
                value={user.password}  
                onChange={onChangeHandler} 
                />

                <button type='button' onClick={()=>setShowPassword(!showPassword)} className='absolute top-1/3 lg:right-50 right-29 '>
                {showPassword?<EyeIcon/>:<EyeOffIcon/>}
                </button>


            </div>

            <button className='  cursor-pointer bg-blue-700 mt-2 px-3 py-1.5 rounded-md font-bold hover:bg-blue-900 '
            onClick={onSubmitHandler}
            >
                Login
            </button>

            <a onClick={()=>{router.push('/client/signup')}} className='pt-2 cursor-pointer '  >Visit Signup Page</a>
            
        </form>
        
    </div>
  )
}

export default Login