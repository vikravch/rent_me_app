import './signUp.css';
import React from 'react';
import {useDispatch} from "react-redux";
import {emailAction, nameAction, phoneAction, roleAction} from "../../action/signUpActions";
import store from "../../store/storeConfiguration";

const SignUp = () => {
    const dispatch = useDispatch();

    async function senData() {
        const url = 'https://reqbin.com/echo/post/json';
        const data = store.getState();

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            console.log('Успех:', JSON.stringify(json));
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    return (
        <div className="signUp">
            <button className="etm">&#10006;</button>
            <h1 className="title">What about you?</h1>
            <div className="dis">
                <div className="radio">
                    <input className="custom-radio" type="radio" id="User1" name="Users" value="User"
                           onChange={e=>dispatch(roleAction(e.target.value))}/>
                    <label htmlFor="User1">User</label>
                </div>

                <div className="radio">
                    <input className="custom-radio" type="radio" id="User2" name="Users" value="Owner"
                           onChange={e=>dispatch(roleAction(e.target.value))}/>
                    <label htmlFor="User2">Owner</label>
                </div>
            </div>
            <div className="inp">
                <input placeholder={'your name'}
                       onChange={e => dispatch(nameAction(e.target.value))}
                />
                <input placeholder={'your email'}
                       onChange={e => dispatch(emailAction(e.target.value))}
                />
                <input type='number'  placeholder={'your phone number'}
                       onChange={e =>  dispatch(phoneAction(e.target.value))}
                />
            </div>
            <div className="buttons">
                <button className="btnCancel">Cancel</button>
                <button className="btnNS" onClick={()=>senData() & console.log(store.getState())}>Next step</button>
            </div>
        </div>
    );
}



export default SignUp;


