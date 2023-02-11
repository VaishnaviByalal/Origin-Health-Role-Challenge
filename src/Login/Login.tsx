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
            Login Page
            <div>
                <text>Username</text>
                <input 
                    value={loginDetails.username}
                    onChange={(e)=>setLoginDetails({...loginDetails,username: e.target.value})}
                />
            </div>
            <div>
                <text>Password</text>
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