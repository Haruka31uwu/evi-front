import apiClient from '../api/api.service';
class AdminHomeService{
    async getAllUsers(body){
        try{
            const res = await apiClient.post(`/admin/user/get-all`,body,{
                withCredentials: true,
            });
            return res;
        }catch(e){
            throw e;
        }
    }async updateStudentValidity(body){
        try{
            const res = await apiClient.post(`/admin/user/update-student-validity`,body,{
                withCredentials: true,
            });
            return res;
        }catch(e){
            throw e;
        }
    }async downloadUserReport(body){
        try{
            const res = await apiClient.post(`/admin/user/download-user-report`,body,{
                withCredentials: true,
            });
            return res;
        }catch(e){
            throw e;
        }
    }
        
}
export default new AdminHomeService();