import { axiosInstance } from "../helpers/axios-config";


export const getOrdersById = (orderId) => {
    return axiosInstance.get(`order/${orderId}`, {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}


export const postOrders = (data) => {
    return axiosInstance.post('order', data, {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}
