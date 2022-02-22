import './SignUp.css';
import React from 'react';

const SignUp = () => {
    return (
        <div className="SignUp">
            <button className="ETM">&#10006;</button>
            <h1 className="Title">What about you?</h1>
            <div className="radio">
                <input type="radio" id="User" name="User" className="custom-radio"/>
                <label for="User">User</label>
                <input type="radio" id="Owner" name="Owner" className="custom-radio"/>
                <label for="Owner">Owner</label>
            </div>
            <div className="Inp">
                <input placeholder={'your name'}/>
                <input placeholder={'your email'}/>
                <input placeholder={'your phone number'}/>
            </div>
            <div className="btn">
                <button className="BtnCancel">Cancel</button>
                <button className="BtnNS">Next step</button>
            </div>
        </div>
    );
}

export default SignUp;
