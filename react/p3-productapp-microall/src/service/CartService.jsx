import axios from 'axios'

const CART_API_URL = "http://localhost:9000/cart"

export const addToCart = (cartItem)=>{
  return axios.post(`${CART_API_URL}/add`,cartItem)
}
// http://localhost:9000/cart/view/userId/{userId}
export const viewCart = (userId)=>{
  console.log(`${CART_API_URL}/view/userId/${userId}`);
  return axios.get(`${CART_API_URL}/view/userId/${userId}`)
}