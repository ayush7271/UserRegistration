import React from 'react'
import'./User.css'

  import { useState } from 'react'
import axios from 'axios'

export const User = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

  


const payload={
    
    Name:Name,
    Email:Email,
    Phone:Phone,
    Password:Password,
    ConfirmPassword:ConfirmPassword
}    
    const handelsubmit=()=>{
        if(Name!==Email && Phone.length==10 && Password==ConfirmPassword && Password.length==8){

            axios.post(`http://localhost:8080/posts`,payload
            ).then((res)=>
            console.log(res))
            alert("data successfully post")
        }
        else{
            alert("Wrong credentials")
        }
    }
 
  return (
    <div className='body'>   
           
            <div className='container'>
                <div className='con-1'>
                    <div>Name</div>
                    <div><input type="text" onChange={(e)=>
                        
                        setName(e.target.value)}  /></div>

                </div>
                <div className='con-1'>
                    <div>Email</div>
                    <div>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}  />
                    </div>
                </div>
                <div className='con-1'>
                    <div>Phone</div>
                    <div>
                    <input type="Number" maxLength="10" onChange={(e)=>setPhone(e.target.value)} required />
                    </div>
                </div>
                <div className='con-1'>
                    <div>Password</div>
                    <div>
                    <input type="Password" minLength="8" onChange={(e)=>setPassword(e.target.value)}  />
                    </div>
                </div>
                <div className='con-1'>
                    <div>Confirm Password</div>
                    <div>
                    <input type="Password" onChange={(e)=>setConfirmPassword(e.target.value)}  />
                    </div>
                </div>
           <input onClick={handelsubmit} type="submit" />
            </div>
    </div>
  )
}
