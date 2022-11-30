import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8060/'//'https:<poner la url del servidor>///'
});
