import apiClient from "/services/api/api.service.js"
class AdminDiscountService {
    async getAllDiscounts(body) {
        try {
            const res = await apiClient.post(`/admin/discounts/get-all`, body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
    async createDiscount(body) {
        try {
            const res = await apiClient.post(`/admin/discounts/create`, body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    } async updateDiscount(body) {
        try {
            const res = await apiClient.post(`/admin/discounts/update`, body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
    async getTracking(body) {
        try {
            const res = await apiClient.post(`/admin/discounts/get-tracking`, body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
    async expireDiscountCode(body) {
        try {
            const res = await apiClient.post(`/admin/discounts/expire`, body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
    async activateDiscountCode(body) {
        try {
            const res = await apiClient.post(`/admin/discounts/activate`, body, {
                withCredentials: true,
            });
            return res;
        } catch (e) {
            throw e;
        }
    }
    async downloadDiscountReport(body) {
        try {
            const res = await apiClient.post(`/admin/discounts/download-report`, body, {
                withCredentials: true,

            });
            return res;
        } catch (e) {
            throw e;

        }
    }
}
export default new AdminDiscountService();