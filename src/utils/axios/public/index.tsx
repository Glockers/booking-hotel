import axios from "axios";
 const API_URL: string = 'http://192.168.0.106:8000';
export const axiosPublic = axios.create({
    baseURL: API_URL,
    // headers: {'X-Custom-Header': 'foobar'}
    headers: {"Content-Type": "application/json"}
})

