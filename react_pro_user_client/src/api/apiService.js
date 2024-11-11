// src/apiService.js

import axiosInstance from './axios';
export const getItems = () => axiosInstance.get('/products');
export const createItem = (item) => axiosInstance.post('/products', item);
export const updateItem = (id, item) => axiosInstance.put(`/products/${id}`, item);
export const deleteItem = (id) => axiosInstance.delete(`/products/${id}`);