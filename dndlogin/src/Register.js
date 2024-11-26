import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';

const USER_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9-_]{3,23}$/;

const Register = () => {
    const userRef=useRef();
    const errRef=useRef();
    const [user, setUser] = useState('');
    const [userValid, setUserValid] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [errMessage, setErrMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setUserValid(result);
    }, [user])

    useEffect(() => {
        setErrMessage('');
    }, [user])
  return (
    <div>
        <p ref={errRef} className={errMessage ? "errMessage" : "offscreen"} aria-live='assertive'>{errMessage}</p>
        <h1>Register</h1>
        <form>
            <label htmlFor='user'>Username:
            <span className={userValid ? 'valid' : 'hide'}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={userValid || !user ? 'hide' : 'invalid'}>
                <FontAwesomeIcon icon={faTimes} />
            </span>  
            </label>
            <input type='text' id='user' ref={userRef} autoComplete='off' onChange={(e) => setUser(e.target.value)}  required aria-invalid={userValid ? 'false' : 'true'} aria-describedby='uidnote' onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} />
            <p id='uidnote' className={userFocus && user && !userValid ? 'instructions' : 'offscreen'}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Username must be 4-24 characters long and contain only letters, numbers, hyphens, and underscores.
            </p>

            <button disabled={!userValid} type='submit'>Sign Up</button>
        </form>
        
        {/*Login page here */}
        <p>Registered? <br /><span className='line'><a href='someLink'>Login</a></span></p>
    </div>
  )
}

export default Register