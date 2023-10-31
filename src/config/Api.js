import axios from "axios";

export const Api = axios.create({
    //baseURL: "https://doasanguepoa-bff.herokuapp.com/v1/api/",
    baseURL: "http://localhost:8080/"
});