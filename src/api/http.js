import axios from "axios";

const API_BASE_URI = "https://jsonplaceholder.typicode.com";


const instance = axios.create({
    baseURL: API_BASE_URI,
    headers: {
        "Content-Type": "application/json",
    },
});

const get = (uri, requestConfig = {}) => {
    return instance.get(`${API_BASE_URI}/${uri}`, {
        ...requestConfig,
    });
};

const request = (requestConfig) => {
    return instance.request(requestConfig);
};

export default {
    instance,
    get,
    request
};
