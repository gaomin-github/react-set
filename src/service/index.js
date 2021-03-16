import axios from 'axios';
const axiosInstance=axios.create({
    baseURL:'',
    withCredentials:true,
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})

export default axiosInstance;
