import fetch from 'dva/fetch';
import {HTTP_SERVER, DEFAULT_OPTIONS} from '../constants/constants';

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}



export default function request(url, options) {
    return fetch(`${HTTP_SERVER}${url}`, {...DEFAULT_OPTIONS, ...options})
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => ({data}))
        .catch((err) => ({err}));
}
