import { useSocket } from '../composables/socket-composables';
import { authStore } from "@/store/auth/auth.store";
const socket = useSocket();
export const loginSocket = () => {
    const storeAuth = authStore();
    socket.registerEventHandler('login-account-event', (data) => {
        const userData = data.data.user
        storeAuth.newLogin = ['login-account-event', userData];
        // if(userData.id==userId){
        //     storeAuth.newLogin=userData;

        // }
    })
}
export const unLoginSocket = () => {
    const storeAuth = authStore();
    console.log('unlogin-account-event')
    socket.registerEventHandler('unlogin-account-event', (data) => {
        console.log('unlogin-account-event',data)
        const userData = data.data.user
        storeAuth.newLogin = ['unlogin-account-event', userData];
    })
}