import axios from "axios";
require('dotenv').config();

export const Api = axios.create(
    {
        baseURL: process.env.REACT_APP_URL_API
    }
);