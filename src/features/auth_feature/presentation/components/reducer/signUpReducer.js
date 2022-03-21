import {EMAIL, NAME, PHONE, ROLE} from "../action/signUpActions";

function signUpReducer(state, action)
{

    switch (action.type)
    {
        case ROLE:
            return {...state,role: action.payload }
        case NAME:
            return {...state,name: action.payload }
        case EMAIL:
            return {...state,email: action.payload }
        case PHONE:
            return {...state,phone: action.payload }
        default:
             return state
    }
}

export default signUpReducer
