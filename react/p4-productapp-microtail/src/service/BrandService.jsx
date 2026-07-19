import React from 'react'
import axios from 'axios'
import axiosInstance from './axiosConfig';

const API_URL='http://localhost:9000/catalog/brands';

// BY ADMIN ONLY
// http://localhost:9000/catalog/brands
export const addBrand = (brand)=>{
   //  console.log(brand);
   //  console.log(API_URL);
   return axiosInstance.post(API_URL, brand);
}

// http://localhost:9000/catalog/brands/brandId/1
export const deleteByBrandId = (brandId)=>{
   return axiosInstance.delete(`${API_URL}/brandId/${brandId}`);
}
//BY USER
// http://localhost:9000/catalog/brands
export const viewAllBrands = ()=>{
   return axios.get(API_URL);
}
// http://localhost:9000/catalog/brands/brandId/1
export const getByBrandId = (brandId)=>{
   return axios.get(`${API_URL}/brandId/${brandId}`);
}