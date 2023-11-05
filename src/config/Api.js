import axios from "axios";
require('dotenv').config();

export const Api = axios.create(
    console.log(process.env.TESTE),
    {
        baseURL: "http://localhost:8080/"
    }
);