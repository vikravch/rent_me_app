import {CHANGE_USER_LOGIN, CHANGE_USER_PHONE, CHANGE_USER_USERNAME} from "./types";

export const changeUserName = (userName) =>({
    type : CHANGE_USER_USERNAME,
    payload : userName
})

export const changeUserLogin = (login) =>({
    type : CHANGE_USER_LOGIN,
    payload : login
})

export const changeUserPhone = (phone) =>({
    type : CHANGE_USER_PHONE,
    payload : phone
})