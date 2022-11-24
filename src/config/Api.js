import axios from "axios";
const token = localStorage.getItem('u')
export const Api = axios.create({
    baseURL: "https://doasanguepoa-bff.herokuapp.com/v1/api/",
    headers: {'x-access-token': token}
});