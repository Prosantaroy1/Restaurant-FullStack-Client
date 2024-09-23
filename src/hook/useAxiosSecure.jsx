import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create(
    {
        baseURL: 'http://localhost:5000'
    }
)
const useAxiosSecure = () => {
    const {logOutUser}=useContext(AuthContext);
    const navigation= useNavigate();

    // // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        // console.log('stop interception')
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    // // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async(error) =>{
        console.log('status error interceptor',error)
        const status=error.response.status;
        if(status===401 || status===403){
             await logOutUser();
             navigation('/login')
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger // Do something with response error
        return Promise.reject(error);
    });



    return axiosSecure;
};

export default useAxiosSecure;