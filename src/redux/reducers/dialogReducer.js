import {CHANGE_DIALOG_OPEN, CHANGE_DIALOG_TYPE} from "../actions/types";

const initialState = {
    dialogOpen: false,
    dialogType: ''
}

const dialogReducer = (state = initialState, action) => {
    const oldState = {...state}
    switch (action.type) {
        case CHANGE_DIALOG_OPEN:
            return {...state, dialogOpen: !oldState.dialogOpen}
        case CHANGE_DIALOG_TYPE:
            return {...state, dialogType: action.payload}
        default:
            return state
    }
}

export default dialogReducer