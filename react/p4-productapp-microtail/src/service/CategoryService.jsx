import React from 'react'
import axios from 'axios'
import axiosInstance from './axiosConfig';
const API_URL='http://localhost:9000/catalog/categories';


// BY ADMIN ONLY
// http://localhost:9000/catalog/categories
export const addCategory = (category)=>{
   return   axiosInstance.post(API_URL, category);
}

// http://localhost:9000/catalog/categories/categoryId/1
export const deleteByCategoryId = (categoryId)=>{
   return axiosInstance.delete(`${API_URL}/categoryId/${categoryId}`);
}

//BY USER
// http://localhost:9000/catalog/categories
export const viewAllCategories = ()=>{
   return axios.get(API_URL);
}

