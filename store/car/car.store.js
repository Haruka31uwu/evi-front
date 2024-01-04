import { defineStore } from 'pinia';
export const carStore = defineStore('carStore', {
    state: () => {
        return {
            carItems: [],
        };
    }, getters: {
        getCarItems: (state) => {

            if (!state.carItems.length == 0) {
                return state.carItems;

            }

            if (!localStorage.getItem('carItems')) {
                return [];
            }
            state.carItems = JSON.parse(localStorage.getItem('carItems'));
            return JSON.parse(localStorage.getItem('carItems'));

        },

    },
    actions: {
        addCarItem(item) {
           try{
            this.carItems.push(item);
            if (localStorage.getItem('carItems')) {
                localStorage.removeItem('carItems');
            }
            localStorage.setItem('carItems', JSON.stringify(this.carItems));
           }catch(e){
               console.log(e);
           }
        },
        removeCarItem(item) {
            const index = this.carItems.indexOf(item);
            this.carItems.splice(index, 1);
            if (localStorage.getItem('carItems')) {
                let items = JSON.parse(localStorage.getItem('carItems'));
                items.splice(index, 1);
                localStorage.removeItem('carItems');
                localStorage.setItem('carItems', JSON.stringify(items));
            }

        }
    }
});