import './Comlete.css';
import React from 'react';

const Complete = () => {
    return (
        <div className="Complete">
            <button className="ETM">&#10006;</button>
            <h1 className="Title">Thanks for joining!</h1>
            <h2 className="Sub">Your registration is complete</h2>
            <div className="btnD">
                <button className="btn">Go to profile</button>
            </div>
        </div>
    );
}

export default Complete;
