import axios from 'axios'

let API_URL='http://localhost:9000/catalog/products';

//returns a promise
export const getProducts = ()=> axios.get(API_URL);

export const getProductById = (productId)=>{
    // http://localhost:9000/catalog/products/productId/1
    //returns a promise
    return axios.get(`${API_URL}/productId/${productId}`)
}
