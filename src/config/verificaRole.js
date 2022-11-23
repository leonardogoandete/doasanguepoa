import jwt_decode from "jwt-decode";

export const validaRole = () => {
    const token = localStorage.getItem('u'); //pega do local storage o token
    const decoded = jwt_decode(token); //captura o id através do jwt
    const role = decoded['role']
    return role
}