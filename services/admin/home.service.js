import apiClient from '../api/api.service';
class AdminHomeService{
    async getAllUsers(){
        try{
            const res = await apiClient.post(`/admin/user/get-all`,{
                withCredentials: true,
            });
            return res;
        }catch(e){
            throw e;
        }
    }
}
export default new AdminHomeService();