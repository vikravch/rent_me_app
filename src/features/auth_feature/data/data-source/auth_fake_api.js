import {fake_auth_response, fake_registration_response} from "./auth_fake_objects";

export const auth_fake_api = {
    authRequest:(loginRequestData)=>
        new Promise((resolve)=>{resolve(fake_auth_response)}),
    registerRequest:(registrationRequestData)=>
        new Promise((resolve)=>{resolve(fake_registration_response)})
}