'use client'
import axios from 'axios'
import { EyeClosed, EyeClosedIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'


const userData={
    username:'',
    email:'',
    password:''
}
const SignUp= () => {
    
    const router=useRouter();
    const [user,setUser]=useState(userData)
    const [showPassword,setShowPassword]=useState(false)


    const onChangeHandler=(e:any)=>{
        setUser((curr)=>({...curr,[e.target.name]:e.target.value}));
        
    }
    
    const onSubmitHandler= async (e:any)=>{
        e.preventDefault();

        
        try {
            const response = await  axios.post("/api/users/signup",user)
            console.log("signup successful",response.data);
            // console.log(user);
            setUser(userData)

            router.push('/client/login')
            
        } catch (error:any ) {
            console.log("signup failed",error.message);
        }


    }



  return (
    <div className='lg:h-[80vh] lg:flex flex-col justify-center items-center '>
        <form className='border-2 rounded-md     border-amber-50 lg:w-[40%] mx-auto h-[50vh] flex flex-col justify-center items-center gap-2 '>

            <h1 className='text-xl text-white font-bold '> Sign Up Page </h1>
            <input className='bg-amber-50 w-[50%] lg:w-[40%] mx-auto p-2 mt-2 text-black outline-none rounded-md' 
            type="text" 
            name='username'
            placeholder='username'
            value={user.username}  
            onChange={onChangeHandler} 
            />

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

            <button className=' bg-blue-700 mt-2 px-3 py-1.5 rounded-md font-bold hover:bg-blue-900 cursor-pointer'
            onClick={onSubmitHandler}
            >
                SignUp
            </button>

            <a className='pt-2 cursor-pointer ' onClick={()=>{router.push('/client/login')}} >Visit Login page</a>

        </form>
        
    </div>

  )
}

export default SignUp
