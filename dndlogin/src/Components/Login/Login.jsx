import React from 'react'
import { Button } from 'react-bootstrap'
import './Login.css'
import user_icon from '../Assets/username.png'

export const Login = () => {
return (
    <div>
        <div className='banner'>DnD Character Companion</div>
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt='user_icon' className='icon' style={{height: '20px'}}/>
                    <input type='text'  id='user' placeholder='Username'/>
                </div>    
            </div>
            <div className="submit-container">
                <Button type='button' className='btn btn-primary'>Login</Button>
                <Button type='button' className='btn btn-link'>Sign Up</Button>
            </div>
        </div>
    </div>
)
}

export default Login