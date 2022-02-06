import userAuth from "../use-case/user_auth";

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

export const requestLogin = () => ({
    type: REQUEST_LOGIN
})

export const receiveLogin = (responseData) => ({
    type: RECEIVE_LOGIN,
    responseData
})

const fetchLogin = (email, password) => dispatch => {
    const payload = {email:email,password:password};
    dispatch(requestLogin(payload))
    return userAuth(email,password,
            responseData => dispatch(receiveLogin(responseData)))
}
