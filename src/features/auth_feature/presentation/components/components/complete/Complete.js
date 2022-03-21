import './comlete.css';
import React from 'react';

const Complete = () => {
    return (
        <div className="complete">
            <button className="etm">&#10006;</button>
            <h1 className="title">Thanks for joining!</h1>
            <h2 className="sub">Your registration is complete</h2>
            <button className="btn">Go to profile</button>
        </div>
    );
}

export default Complete;
