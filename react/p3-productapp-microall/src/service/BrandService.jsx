import React from 'react'
import axios from 'axios'

const API_URL='http://localhost:9000/catalog/brands';

// http://localhost:9000/catalog/brands
export const addBrand = (brand)=>{
    console.log(brand);
    console.log(API_URL);
   return axios.post(API_URL, brand);
}
// http://localhost:9000/catalog/brands
export const viewAllBrands = ()=>{
   return axios.get(API_URL);
}
// http://localhost:9000/catalog/brands/brandId/1
export const getByBrandId = (brandId)=>{
   return axios.get(`${API_URL}/brandId/${brandId}`);
}
// http://localhost:9000/catalog/brands/brandId/1
export const deleteByBrandId = (brandId)=>{
   return axios.delete(`${API_URL}/brandId/${brandId}`);
}