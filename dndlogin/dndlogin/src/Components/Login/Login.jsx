import React from 'react'
import { useState } from 'react'
import './Login.css'
import user_icon from '../Assets/username.png'

export const Login = () => {
    const [action, setAction] = useState('Login')
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt='user_icon' className='icon' style={{height: '20px'}}/>
                <input type='username' placeholder='Username'/>
            </div>    
        </div>
        <div className="submit-container">
            <div className={action==="Login"?"submit gold":"submit"} onClick={() => {setAction("Login")}}>Login</div>
            <div className={action==="Sign Up"?"submit gold":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
        </div>
    </div>
  )
}

export default Login