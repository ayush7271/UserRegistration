import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
export const UserList = () => {
const [data, setdata] = useState([])
    const getdata=()=>{
        axios.get("http://localhost:8080/posts").then((res)=>{
            setdata(res.data)
        })
    }
    useEffect(() => {
    
        getdata()
    }, [])
console.log(data)
  return (
    <div>
        <table>
            <tr>
                
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Password</th>
                    
                
            </tr>
            
        {
            data.map((i)=>
                // console.log(i.Name)
                <tr>
                <td>{i.Name}</td>
                <td>{i.Email}</td>
                <td>{i.Phone}</td>
                <td>{i.Password}</td>
                </tr>
                )
            }
            
   
    </table>
    </div>
  )
}
