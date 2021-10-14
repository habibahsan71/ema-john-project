import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <div>
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                    <p>New to Ema-john? <Link to='./register'>Create Account</Link></p>
                    <div>-------------Or------------</div>
                    <button onClick={handleGoogleLogin} className='btn-regular'>Google Signin</button>
                </div>
            </div>
        </div>
    );
};

export default Login;