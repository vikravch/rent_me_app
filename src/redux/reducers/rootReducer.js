import {combineReducers} from "redux";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    dialog: dialogReducer
})