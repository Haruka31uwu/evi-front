import { defineStore } from 'pinia';
export const authStore = defineStore('authStore', {
    state: () => {
        return {
            userData: [],
            token: null,
            newLogin:false
        };
    },
    getters: {
        getUserData: (state) => {
            if (state.userData.length == 0 || localStorage.getItem('userData')) {
                const userData = localStorage.getItem('userData');
                if (userData) {
                    return JSON.parse(userData)[0];
                }
                return [];
            }
            return state.userData[0];

        },
        isLogged: (state) => {

            if (!localStorage.getItem('userData')) {
                return false;
            }
            return true;
        },
        getAccessToken: (state) => {
            if (state.token == null || localStorage.getItem('token')) {
                const token = localStorage.getItem('token');
                return token;
            }
            return state.token;
        }

    },
    actions: {
        addUserData(item) {
            const updatedUserData = [item];
            this.userData = updatedUserData;  // Actualizar el estado con la nueva referencia
        
            if (localStorage.getItem('userData')) {
                localStorage.removeItem('userData');
            }
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        },
        updateUserData(item){
            this.userData = [item];
            console.log(this.userData)
            if (localStorage.getItem('userData')) {
                localStorage.removeItem('userData');
            }
            localStorage.setItem('userData', JSON.stringify([item]));
        },
        removeUserData(item) {
            const updatedUserData = [...this.userData];
            const index = updatedUserData.indexOf(item);
            updatedUserData.splice(index, 1);
        
            this.userData = [];  // Actualizar el estado con la nueva referencia
            if (localStorage.getItem('userData')) {
                localStorage.removeItem('userData');
            }
        },
        addToken(item) {
            this.token = item;
            //check if exist in localstorage
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token');
            }
            localStorage.setItem('token', item);
        },
        removeToken(item) {
            this.token = null;
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token');
            }
        },
        setNewLogin(item){
            this.newLogin = item;
        }
    }
});