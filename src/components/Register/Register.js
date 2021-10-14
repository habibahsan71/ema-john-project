import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h2>Create Account</h2>
                <div onSubmit=''>
                    <input type="text" name="" placeholder='Type Your Name' id="" />
                    <br />
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='your Password' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-Enter Password' />
                    <br />
                    <input type="submit" value="Submit" />
                    <p>Already have an account? <Link to='./login'>Login</Link></p>
                    <div>-------------Or------------</div>
                    <button className='btn-regular'>Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default Register;