import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { User } from './User'
import { UserList } from './UserList'

export const Mainroute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/userregistration" element={<User/>}></Route>
            <Route path="/userlist" element={<UserList/>}></Route>
        </Routes>

    </div>
  )
}
