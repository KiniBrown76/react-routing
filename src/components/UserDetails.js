import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const [user, setUser] =useState({})

    const { id } = useParams()
    

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
         .then(user =>setUser(user))
         .catch(error => console.log(error))
        },[id])


        return (
          <>
          <h1>{user.name}</h1>
          </>
        )
        }
    

    // console.log(user)




export default UserDetails