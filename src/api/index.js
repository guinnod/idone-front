import axios from "axios";
import {getJwt} from "@utils/localStorageHelper.js";

export const post = ({path, data, headers, isAuth}) => {
    if (!headers) {
        headers = {}
    }
    if (isAuth) {
        headers.Authorization = getJwt();
        if (!headers.Authorization) {
            return new Promise((resolve, reject) => {
                resolve({data: {authenticated: false}});
            });
        }
    }
    return axios.post(`https://guinnodsdu.pythonanywhere.com/api/${path}/`, data, {headers})
}

export const put = ({path, data, headers, isAuth}) => {
    if (!headers) {
        headers = {}
    }
    if (isAuth) {
        headers.Authorization = getJwt();
        if (!headers.Authorization) {
            return new Promise((resolve, reject) => {
                resolve({data: {authenticated: false}});
            });
        }
    }
    return axios.put(`https://guinnodsdu.pythonanywhere.com/api/${path}/`, data, {headers})
}

export const get = ({path, headers, isAuth}) => {
    if (!headers) {
        headers = {}
    }
    if (isAuth) {
        headers.Authorization = getJwt();
        if (!headers.Authorization) {
            return new Promise((resolve, reject) => {
                resolve({data: {authenticated: false}});
            });
        }
    }
    return axios.get(`https://guinnodsdu.pythonanywhere.com/api/${path}/`, {headers})
}