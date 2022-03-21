import './descriptionOfPlace.css';
import React from 'react';

const DescriptionOfPlace = () => {
    return (
        <div className="descriptionOfPlace">
            <button className="etm">&#10006;</button>
            <h1 className="title">Description of place</h1>
            <div className="btn1">
                <button className="btns">Price</button>
                <button className="btns">Type</button>
            </div>
            <div className="btn4">
                <img className="image"/>
                <img className="image"/>
                <button className="btnAdd">Add photo + </button>
            </div>
            <div className="btn2">
                <button className="btns">Rooms</button>
                <button className="btns">Amenities</button>
            </div>
            <textarea className="inp" placeholder={'Description of place'}/>
            <div className="btn3">
                <button className="btncnl">Cancel</button>
                <button className="btns">Publish</button>
            </div>
        </div>
    );
}

export default DescriptionOfPlace;
