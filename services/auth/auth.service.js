import axios from 'axios';
import apiClient from '/services/api/api.service.js';
const config = useRuntimeConfig();
class AuthService {
    async register(body) {

        console.log(body, config);
        try {
            await apiClient.get('/sanctum/csrf-cookie');
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/register`, body
            )
            return res;
        } catch (e) {
            throw e;
        }
    }
    async login(body) {
        try {
            await apiClient.get('/sanctum/csrf-cookie');
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/login`, body)
            return res;
        } catch (e) {
            throw e;
        }
    }
}
export default new AuthService();