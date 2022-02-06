import {RECEIVE_LOGIN, REQUEST_LOGIN} from "./actions";

export const authReducer = (state = {
    isBlocked: false,
    token: ""
}, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                token: ""
            }
        case RECEIVE_LOGIN:
            return {
                ...state,
                isBlocked: action.responseData.isBlocked,
                token: action.responseData.token
            }
        default:
            return state
    }
}