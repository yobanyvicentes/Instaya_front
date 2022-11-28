import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'a'//'https://inventariosiud.azurewebsites.net/' <poner la url del servidor>
});
