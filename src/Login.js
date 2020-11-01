import React from 'react';
import './Login.css';
import {Button } from '@material-ui/core';
import { auth, provider} from './firebase';

function Login() {

    const signIn= (e)=>{

    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://yt3.ggpht.com/a-/AAuE7mDBBS00E88tbJONrBTNiWDBhHSfBKSM3889QA=s900-mo-c-c0xffffffff-rj-k-no" alt="/" />
                <h1>Sign in to Slack</h1>
                <button >Sign In With Google</button>
            </div>
        </div>
    )
}

export default Login;