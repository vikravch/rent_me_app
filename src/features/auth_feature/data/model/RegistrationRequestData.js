export default class RegistrationRequestData{
    name;
    email;
    phoneNumber;
    type;

    constructor(name,email,phoneNumber,type) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.type = type;
    }
}