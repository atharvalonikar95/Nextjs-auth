'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const allUsers  = () => {
    const [users, setUsers] = useState<{ _id: string; username: string; email: string }[]>([]);
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
    <div>
       {
           users.map((user)=>{
            return(
                <div key={user._id} >
                    <h1>{user.email}</h1>
                </div>
            )
        })
    }

    </div>
  )
}

export default allUsers