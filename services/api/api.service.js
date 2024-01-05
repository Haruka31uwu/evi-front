import axios from 'axios';
const config = useRuntimeConfig();

const apiClient = axios.create({
    baseURL:config.public.APP_BACKEND_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
    },
});

export default apiClient;