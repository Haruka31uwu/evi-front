import axios from 'axios';
export const getDocentes=async()=>{
    try {
        const res=await axios.get('https://61c34f6f9cfb8f0017a3ead1.mockapi.io/api/v1/doctors')
        return res
    }catch (e) {
    }
}