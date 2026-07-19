import axios from "axios";
import axiosInstance from "./axiosConfig";

const ORDERAPI_URL = "http://localhost:9000/orders";

export const placeOrder = (orderedItems)=>{
 return axiosInstance.post(`${ORDERAPI_URL}/place-order`,orderedItems);
 
}