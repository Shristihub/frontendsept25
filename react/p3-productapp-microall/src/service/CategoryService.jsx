import React from 'react'
import axios from 'axios'

const API_URL='http://localhost:9000/catalog/categories';

// http://localhost:9000/catalog/categories
export const addCategory = (category)=>{
   return axios.post(API_URL, category);
}
// http://localhost:9000/catalog/categories
export const viewAllCategories = ()=>{
   return axios.get(API_URL);
}
// http://localhost:9000/catalog/categories/categoryId/1
export const getByCategoryId = (categoryId)=>{
   return axios.get(`${API_URL}/categoryId/${categoryId}`);
}

// http://localhost:9000/catalog/categories/categoryId/1
export const deleteByCategoryId = (categoryId)=>{
   return axios.delete(`${API_URL}/categoryId/${categoryId}`);
}