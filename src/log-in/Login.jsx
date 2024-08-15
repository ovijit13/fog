import React from 'react'
import  { useState } from 'react'
import './login.css'
import user_icon from '../Assets/user.png'
import mail_icon from '../Assets/mail.png'
import padlock_icon from '../Assets/padlock.png'

const Login = () => {
    const [action,setAction] =useState("Log in");
    return (
      <div className='container' id='login'>
          <div className='header'>
              <div className='text'>{action}</div>
              <div className='underline'> </div>
          </div>
          <div className='inputs'>
              {action==="Log in"?<div></div>:<div className='input'>
                  <img src={user_icon}  alt=''/>
                  <input type='text' placeholder='Name'/>
              </div> }
              
  
              <div className='input'>
                  <img src={mail_icon}  alt=''/>
                  <input type='email' placeholder='Email ID'/>
              </div> 
  
              <div className='input'>
                  <img src={padlock_icon}  alt=''/>
                  <input type='password' placeholder='Password'/>
              </div> 
              {action==="Sign Up"?<div></div>: <div className='forgot-password'>Lost Password? <span>click Here</span></div>}
  
             
              <div className='submit-container'>
                  <div className={action==="Log in"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                  <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Log in")}}>Log in</div>
              </div>
          </div>
      </div>)
}

export default Login