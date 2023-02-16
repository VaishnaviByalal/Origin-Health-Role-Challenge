import React, { useState } from "react";
import './login.module.css';
import { useDispatch } from 'react-redux';

export type LoginCreds = {
    username: string;
    password: string;
}

const initValues:LoginCreds = {
    username: '',
    password: '',
}

const Login = () => {

    const dispatch=useDispatch();

    const [loginDetails,setLoginDetails]=useState<LoginCreds>(initValues);

    const handleLogin = () => {
        dispatch({type : "ENABLE_LOGIN" , login_details : loginDetails })
    }

    return(
        <div>
            <h2>Login Page</h2>
            <div>
                <span>Username : </span>
                <input 
                    value={loginDetails.username}
                    onChange={(e)=>setLoginDetails({...loginDetails,username: e.target.value})}
                />
            </div>
            <div>
                <span>Password  : </span>
                <input 
                    value={loginDetails.password}
                    onChange={(e)=>setLoginDetails({...loginDetails,password: e.target.value})}
                    type={'password'}
                />
            </div>
            <div>
                <button onClick={handleLogin}>Submit</button>
            </div>
        </div>
    )
}

export default Login;