import axios from 'axios'
import {api_url} from '../config/constants'


// Add a request interceptor
let axiosInstance = axios.create();

axiosInstance.defaults.baseURL = api_url;
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

export default axiosInstance;
