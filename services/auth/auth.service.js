import axios from 'axios';
import apiClient from '/services/api/api.service.js';
const config = useRuntimeConfig();
class AuthService {
    async register(body) {

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
            const csfr = await apiClient.get('/sanctum/csrf-cookie');
            console.log(csfr);
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/login`, body, {
                withCredentials: true,
                headers: {
                    'X-XSRF-TOKEN': csfr.data.csrf
                }
            });

            return res;
        } catch (e) {
            throw e;
        }
    }
}
export default new AuthService();