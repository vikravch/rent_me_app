import {createStore} from "redux"
import signUpReducer from "../reducer/signUpReducer";



const initialState =
    {
            role:'',
            name: '',
            email: '',
            phone: ''

    }

const store = createStore(signUpReducer, initialState)

export default store
