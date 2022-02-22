import './DescriptionOfPlace.css';
import React from 'react';

const DescriptionOfPlace = () => {
    return (
        <div className="DescriptionOfPlace">
            <button className="ETM">&#10006;</button>
            <h1 className="Title">Description of place</h1>
            <div className="btn1">
                <button className="Btns">Price</button>
                <button className="Btns">Type</button>
            </div>
            <div className="btn4">
                <img className="image"/>
                <img className="image"/>
                <button className="btnAdd">Add photo + </button>
            </div>
            <div className="btn2">
                <button className="Btns">Rooms</button>
                <button className="Btns">Amenities</button>
            </div>
            <textarea className="inp" placeholder={'Description of place'}/>
            <div className="btn3">
                <button className="Btncnl">Cancel</button>
                <button className="Btns">Publish</button>
            </div>
        </div>
    );
}

export default DescriptionOfPlace;
