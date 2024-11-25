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
    </div>
  )
}

export default Register