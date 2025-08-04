'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const allUsers  = () => {
    const [users, setUsers] = useState<{ _id: string; username: string; email: string;password:string }[]>([]);
    const  loadUsers = async ()=>{

        const response= await axios.get('/api/users/getUsers')
        console.log(response.data);
        setUsers(response.data)
        console.log(users);
    }

    useEffect(()=>{
        loadUsers()
    },[])

  return (
    <div className='h-full w-auto flex flex-col items-center justify-center   p-2 '>
        <h2 className='mt-2 mb-2 text-2xl '> Users List </h2>

        <table className='w-[50%] border-2 mt-2 mb-2 border-amber-50'>
            <thead>
                <tr className='bg-gray-600'>
                    <th className='px-2 py-2 border-b'>Username</th>
                    <th className='px-2 py-2 border-b'>Email</th>
                    <th className='px-2 py-2 border-b'>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return(
                            <tr key={user._id} className='hover:bg-violet-400' >
                                <td className='px-2 py-2 border-b'>{user.username}</td>
                                <td className='px-2 py-2 border-b'>{user.email}</td>
                                <td className='px-2 py-2 border-b'>{user.password}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
 

    </div>
  )
}

export default allUsers;
      {/* {
           users.map((user)=>{
            return(
                <div key={user._id} >
                    <h1>{user.email}</h1>
                </div>
            )
        })
    } */}