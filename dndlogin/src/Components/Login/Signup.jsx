import React from 'react'
import { Button } from 'react-bootstrap'
import './Signup.css'
import user_icon from '../Assets/username.png'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const navigate = useNavigate();
        const handleLoginRedirect = () => {
                navigate('/');
              };
  return (
    <div>
        <div className='banner'>DnD Character Companion</div>
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt='user_icon' className='icon' style={{height: '20px'}}/>
                    <input  className='user' type='text'  id='user' placeholder='Username'/>
                    <input className='email' type='text'  id='email' placeholder='Email'/>
                    <input className='pass' type='text'  id='password' placeholder='Password'/>
                </div>    
            </div>
            <div className="submit-container">
                <Button type='button' className='btn btn-primary' onClick={handleLoginRedirect}>Login</Button>
                <Button type='button' className='btn btn-link'>Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default Signup
