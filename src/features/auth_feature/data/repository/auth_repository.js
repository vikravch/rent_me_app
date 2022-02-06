import {auth_api} from "../data-source/auth_api";
import {auth_fake_api} from "../data-source/auth_fake_api";

export default function authRepository(){
    const authServer = auth_api
    return{
        authRequest:(loginRequestData)=>authServer.authRequest(loginRequestData),
        registerRequest:(registrationRequestData)=>authServer.registerRequest(registrationRequestData)
    }
}

function authFakeRepository(){
    const authServer = auth_fake_api
    return{
        authRequest:(loginRequestData)=>authServer.authRequest(loginRequestData),
        registerRequest:(registrationRequestData)=>authServer.registerRequest(registrationRequestData)
    }
}