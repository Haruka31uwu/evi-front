import axios from 'axios';
import apiClient from '/services/api/api.service.js';
const config = useRuntimeConfig();
class AuthService {
    async register(body) {

        try {
            await apiClient.get('/sanctum/csrf-cookie');
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/register`, body,{
                withCredentials: true,
            }
            )
            return res;
        } catch (e) {
            throw e;
        }
    }
    async updateUserData(body) {
        try {
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/update-user-data`, body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
    async login(body) {
        try {
            await apiClient.get('/sanctum/csrf-cookie');
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/login`, body, {
                withCredentials: true,
            });

            return res;
        } catch (e) {
            throw e;
        }
    }
    async loginWithToken(body) {
        try {
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/login-with-email-token`,body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
    async verifyEmail(body) {
        try{
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/email/verify`, body, {
                withCredentials: true,
            });
            return res;
        }catch(e){
            throw e;
        }
    }
    async logout(body) {
        try {
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/logout`, body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
    async getUser(body) {
        try {
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/get-user`,body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
}
export default new AuthService();