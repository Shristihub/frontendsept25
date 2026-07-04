import axios from 'axios'

const API_URL='http://localhost:9000/catalog/products';
const ADMIN_API_URL='http://localhost:9000/catalog/admin/products';

//returns a promise
export const getProducts = ()=> axios.get(API_URL);

export const getProductById = (productId)=>{
    // http://localhost:9000/catalog/products/productId/1
    //returns a promise
    return axios.get(`${API_URL}/productId/${productId}`)
}

// http://localhost:9000/catalog/admin/products
export const addProduct = (product)=>{
    // console.log(product);
    console.log(ADMIN_API_URL);
   return axios.post(ADMIN_API_URL, product);
}

// http://localhost:9000/catalog/admin/products?productId
export const updateProduct = (product)=>{
    // console.log(product);
    console.log(ADMIN_API_URL);
   return axios.getProducts(ADMIN_API_URL, product);
}
