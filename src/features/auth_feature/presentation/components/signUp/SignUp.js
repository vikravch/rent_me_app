import './SignUp.css';
import React from 'react';

const SignUp = () => {
    return (
        <div className="SignUp">
            <button className="ETM">&#10006;</button>
            <h1 className="Title">What about you?</h1>
            <div className="SubTitle">
                <p>User</p>
                <p>Owner</p>
            </div>
            <div className="Inp">
                <input placeholder={'your name'}/>
                <input placeholder={'your email'}/>
                <input placeholder={'your phone number'}/>
            </div>
            <div className="btn">
                <button className="Btncnl">Cancel</button>
                <button className="BtnSI">Next step</button>
            </div>
        </div>
    );
}

export default SignUp;
