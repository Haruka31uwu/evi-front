import apiClient from '../api/api.service';
const config = useRuntimeConfig();
class TransactionService {
    async createOrder(body) {
        try {
            const res = await apiClient.post(`${config.public.APP_BACKEND_URL}transactions/create-order`, body);
            return res;

        } catch (e) {
            throw e;
        }
    }
    async createTransaction(body) {
        try {
            const res = await apiClient.post(`${config.public.APP_BACKEND_URL}transactions/create-transaction`, body);
            return res;
        } catch (e) {
            throw e;
        }
    }
    async sendTransactionResumeEmail(body) {
        try {
            const res = await apiClient.post(`${config.public.APP_BACKEND_URL}transactions/send-transaction-resume-email`, body);
            return res;
        } catch (e) {
            throw e;
        }
    }
    async createCharge(body) {
        try {
            const res = await apiClient.post(`${config.public.APP_BACKEND_URL}transactions/create-charge`, body);
            return res;
        } catch (e) {
            throw e;
        }
    }
    async validateCode(body) {
        try {
            const res = await apiClient.post(`${config.public.APP_BACKEND_URL}transactions/validate-code`, body);
            return res;
        } catch (e) {
            throw e;
        }
    }
    async isEviAlumno(body) {
        try {
            const res = await apiClient.post(`${config.public.APP_BACKEND_URL}transactions/is-evialumno`, body);
            return res;
        } catch (e) {
            throw e;
        }
    }
    async isValidStudent(body) {
        try {
            const res = await apiClient.post(`${config.public.APP_BACKEND_URL}transactions/is-valid-student`, body);
            return res;
        } catch (e) {
            throw e;
        }
    }
}
export default new TransactionService();