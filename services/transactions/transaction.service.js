import apiClient from '../api/api.service';
const config = useRuntimeConfig();
class TransactionService {
    async createTransaction(body) {
        try {
            const res = await apiClient.post(`${config.public.APP_BACKEND_URL}transactions/create-transaction`, body);
            return res;
        } catch (e) {
            throw e;
        }
    }   
}   
export default new TransactionService();