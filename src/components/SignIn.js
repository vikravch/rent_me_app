import './SignIn.css';
import React from 'react';
import styled from 'styled-components';

const SignIn = () => {
    return (
        <div className="SignIn">
            <button className="ETM">&#10006;</button>
            <h1 className="Title">Good to see you here</h1>
            <div className="Inp">
                <input placeholder={'login'}/>
                <input placeholder={'password'}/>
            </div>
            <div className="btn">
                <button className="Btncnl">Cancel</button>
                <button className="BtnSI">Sign In</button>
            </div>
            <div className="footer">
                <p className="Nry">Not registered yet?</p>
                <p className="SU">Sign up</p>
            </div>
        </div>
    );
}

export default SignIn;
