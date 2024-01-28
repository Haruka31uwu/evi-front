import apiClient from "/services/api/api.service.js"
class AdminPaymentsService{
    async getAllTransactions(body){
        try{
            const res = await apiClient.post(`/admin/transactions/get-all`,body,{
                withCredentials: true,
            });
            return res;
        }catch(e){
            throw e;
        }
    }
    async updateTransactionCourseCode(body){
        try{
            const res = await apiClient.post(`/admin/transactions/update-course-code`,body,{
                withCredentials: true,
            });
            return res;
        }catch(e){
            throw e;
        }
    }
    async downloadExcel(body){
        try{
            const res = await apiClient.post(`/admin/transactions/download-resume`,body,{
                withCredentials: true,
            });
            return res;
        }catch(e){
            throw e;
        }
    }
}
export default new AdminPaymentsService();