import axios from 'axios'
import axiosInstance from './axiosConfig'

const CART_API_URL = "http://localhost:9000/cart-service/v1/cart"

//BY USER
export const addToCart = (cartItem)=>{
  return axiosInstance.post(`${CART_API_URL}/add`,cartItem)
}


// http://localhost:9000/cart/view
export const viewCart = ()=>{
  return axiosInstance.get(`${CART_API_URL}/view`)
}