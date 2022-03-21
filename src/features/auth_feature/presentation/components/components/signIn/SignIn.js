import './signIn.css';
import React from 'react';

const SignIn = () => {
    return (
        <div className="signIn">
            <button className="etm">&#10006;</button>
            <h1 className="title">Good to see you here</h1>
            <div className="inp">
                <input placeholder={'login'}/>
                <input placeholder={'password'}/>
            </div>
            <div className="btn">
                <button className="btncnl">Cancel</button>
                <button className="btnSI">Sign In</button>
            </div>
            <div className="footer">
                <p className="nry">Not registered yet?</p>
                <p className="su">Sign up</p>
            </div>
        </div>
    );
}

export default SignIn;
