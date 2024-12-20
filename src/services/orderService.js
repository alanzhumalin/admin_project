import api from './api';

export const getOrders = async () => {
    const response = await api.get('/Order/GetOrders');
    return response.data;
};


export const getOrderById = async (id) => {
    const response = await api.get(`/Order/GetOrderById/${id}`);
    return response.data;
};


export const getOrderByUserId = async (userId) => {
    const response = await api.get(`/Order/GetOrderByUserId/${userId}`);
    return response.data;
};

export const createOrder = async (userId) => {
    const response = await api.post(`/Order/CreateOrder/${userId}`);
    return response.data;
};

export const confirmOrder = async (orderId) => {
    const response = await api.post(`/Order/ConfirmOrder/${orderId}`);
    return response.data;
};