import authRepository from "../../data/repository/auth_repository";
import RegistrationRequestData from "../../data/model/RegistrationRequestData";
import RegistrationResponseData from "../../data/model/RegistrationResponseData";

export default function userRegistration(name,email,phoneNumber,observer){
    authRepository().registerRequest(
        new RegistrationRequestData(name,email,phoneNumber)
    ).then(data=>{
        observer(new RegistrationResponseData(data))
    })
}