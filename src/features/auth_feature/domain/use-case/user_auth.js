import LoginRequestData from "../../data/model/LoginRequestData";
import authRepository from "../../data/repository/auth_repository";
import LoginResponseData from "../../data/model/LoginResponseData";

export default function userAuth(login,password,observer){
    authRepository().authRequest(new LoginRequestData(login,password)).then(data=>{
        observer(new LoginResponseData(data))
    })
}