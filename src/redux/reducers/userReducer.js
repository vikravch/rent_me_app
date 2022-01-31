import {CHANGE_USER_LOGIN, CHANGE_USER_PHONE, CHANGE_USER_TOKEN, CHANGE_USER_USERNAME} from "../actions/types";

const initialState = {
    userName : '',
    emailLogin : '',
    phoneNumber: '',
    token:''
}

const userReducer = (state = initialState, action) =>{
    const user = {...state}
    switch (action.type) {
        case CHANGE_USER_USERNAME:
            return {...state, userName: action.payload || user.userName }
        case CHANGE_USER_LOGIN:
            return {...state, emailLogin: action.payload || user.emailLogin }
        case CHANGE_USER_PHONE:
            return {...state, phoneNumber: action.payload || user.phoneNumber }
        case CHANGE_USER_TOKEN:
            return {...state, token: action.payload}
        default:
            return state
    }
}

export default userReducer