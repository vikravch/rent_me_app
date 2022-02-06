export default class LoginResponseData{
    isBlocked;
    token;

    constructor(data) {
        this.isBlocked = data.isBlocked;
        this.token = data.token;
    }
}