import axios from "axios";

const AUTH_URL='http://localhost:9000/user/auth';

export const registerUser = (user) => {
    return axios.post(`${AUTH_URL}/register`, user);

}
export const loginUser = (user)=>{
    return axios.post(`${AUTH_URL}/login`, user);
}