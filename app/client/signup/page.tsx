'use client'
import axios from 'axios'
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
    <form className='border-0 border- mt-[15vw] border-amber-50 w-[40%] mx-auto h-[30vh] flex flex-col justify-center items-center gap-2 '>

        <h1 className='text-xl text-white font-bold '> Sign Up Page </h1>
        <input className='bg-amber-50 w-[40%] mx-auto p-2 mt-2 text-black outline-none rounded-md' 
        type="text" 
        name='username'
        placeholder='username'
        value={user.username}  
        onChange={onChangeHandler} 
        />

        <input className='bg-amber-50 w-[40%] mx-auto p-2 mt-2 text-black outline-none rounded-md ' 
        type="email" 
        name='email'
        placeholder='email'
        value={user.email}  
        onChange={onChangeHandler}    />

        <input className='bg-amber-50 w-[40%] mx-auto p-2 mt-2 text-black outline-none rounded-md ' 
        type="password" 
        name='password'
        placeholder='password'
        value={user.password}  
        onChange={onChangeHandler} 
        />

        <button className=' bg-blue-700 mt-1.5 px-3 py-1.5 rounded-md font-bold hover:bg-blue-900'
        onClick={onSubmitHandler}
        >
            SignUp
        </button>
    </form>
  )
}

export default SignUp
