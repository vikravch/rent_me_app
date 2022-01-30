import {CHANGE_DIALOG_OPEN, CHANGE_DIALOG_TYPE} from "./types";

export const changeDialogOpen =()=>({
    type : CHANGE_DIALOG_OPEN
})

export const changeDialogType =(dialogType)=>({
    type : CHANGE_DIALOG_TYPE,
    payload: dialogType
})