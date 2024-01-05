import axios from 'axios';
const config = useRuntimeConfig();

const apiClient = axios.create({
    baseURL:config.public.APP_BACKEND_URL,
    withCredentials: true,

});

export default apiClient;