import { combineReducers } from 'redux'
import {authReducer} from "../features/auth_feature/domain/redux/auth_reducer";

const rootReducer = combineReducers({authReducer})

export default rootReducer