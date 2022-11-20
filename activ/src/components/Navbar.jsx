import React from 'react'
import {Link} from "react-router-dom"
export const Navbar = () => {

  return (
    <div className='Navbar'>
        
        <Link to="userregistration">
        <div className='but-1'>User registration</div>
        </Link>
        <Link to="userlist">
        <div className='but-1'> User List</div>
        </Link>
    </div>
  )
}
