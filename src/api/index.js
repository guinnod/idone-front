import axios from "axios";
import {getJwt} from "@utils/localStorageHelper.js";

export const post = ({path, data, headers, isAuth}) => {
    if (!headers) {
        headers = {}
    }
    if (isAuth) {
        headers.Authorization = getJwt();
    }
    return axios.post(`http://127.0.0.1:8000/api/${path}/`, data, {headers})
}

export const get = ({path, headers, isAuth}) => {
    if (!headers) {
        headers = {}
    }
    if (isAuth) {
        headers.Authorization = getJwt();
    }
    return axios.get(`http://127.0.0.1:8000/api/${path}/`, {headers})
}