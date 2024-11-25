import React from 'react'
import { Button } from 'react-bootstrap'
import './Login.css'
import user_icon from '../Assets/username.png'

export const Login = () => {
return (
    <div className='container'>
            <div className='header'>
                    <div className='text'>Login</div>
                    <div className='underline'></div>
            </div>
            <div className='inputs'>
                    <div className='input'>
                            <img src={user_icon} alt='user_icon' className='icon' style={{height: '20px'}}/>
                            <input type='text' placeholder='Username'/>
                    </div>    
            </div>
            <div className="submit-container">
                    <Button type='button' class='btn btn-primary'>Login</Button>
                    <div className='text'>Don't have an account?</div>
                    <Button type='button' class='btn btn-link'>Sign Up</Button>
            </div>
    </div>
)
}

export default Login