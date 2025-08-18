'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const allUsers = () => {
    const [searchParam, setSearchParam] = useState('');
    const [users, setUsers] = useState<{ _id: string;
                                         username: string; 
                                         email: string; 
                                         firstname: string;
                                         lastname: string;}[]>([]);
    const loadUsers = async (email?: string) => {
        const url = email ? `/api/users/getUsers?email=${email}` : '/api/users/getUsers'
        const response = await axios.get(url)
        console.log(response.data);
        setUsers(response.data)
        console.log(users);
    }


    useEffect(() => {
        loadUsers()
    }, [])

    useEffect(()=>{
        const delaydebounce =setTimeout(() => {
            loadUsers(searchParam)
        }, 200);

        return ()=>clearTimeout(delaydebounce)
    }
    ,[searchParam])



    return (
        <div className='h-full w-auto flex flex-col items-center justify-center border-2 border-black  p-2 '>
            <h2 className='  mt-2 mb-2 text-2xl '> Users List </h2>

            <div className='flex flex-row justify-center gap-4 border-0 border-black w-[50%]'>
                <input className=' w-[40%] p-2 outline-none text-white border-2 border-gray-950 rounded-lg ' type="text"
                    name='search' placeholder='Enter user email'
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)} />

                {/* <button onClick={handleSearch} className='bg-blue-700 p-2 rounded-lg ' > search</button> */}

            </div>


            <div className=' w-[50%]'>
                <table className='  w-full  table-fixed items-center  border-2 mt-2 mb-2 border-amber-50'>
                    <thead>
                        <tr className='bg-gray-600 justify-items-center items-center '>
                            <th className='px- py-2 border-b text-md text-center'>Username</th>
                            <th className='px-2 py-2 border-b text-md text-center'>Email</th>
                            <th className='px-2 py-2 border-b text-md text-center'>Firstname</th>
                            <th className='px-2 py-2 border-b text-md text-center'>Lastname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user._id} className='hover:bg-violet-400  ' >
                                        <td className='px-2 py-2 border-b text-md text-center '>{user.username}</td>
                                        <td className='px-2 py-2 border-b text-md text-center'>{user.email}</td>
                                        <td className='px-2 py-2 border-b text-md text-center'>{user.firstname}</td>
                                        <td className='px-2 py-2 border-b text-md text-center'>{user.lastname}</td>                                                                                
                                        {/* <td className='px-2 py-2 border-b text-md text-center truncate overflow-hidden whitespace-nowrap'>{user.password}</td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>


        </div>
    )
}

export default allUsers;
