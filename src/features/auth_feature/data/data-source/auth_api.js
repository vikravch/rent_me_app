const url = require("../../../../../package.json").server_url;

export const auth_api = {
    authRequest:(loginRequestData)=>
        fetch(`${url}/login`,
            {method:'POST',body: JSON.stringify(loginRequestData)})
                .then(response => response.json()),

    registerRequest:(registrationRequestData)=>
        fetch(`${url}/register`,
            {method:'POST',body: JSON.stringify(registrationRequestData)})
            .then(response => response.json())
}