import { defineStore } from 'pinia';
export const carStore = defineStore('carStore', {
    state: () => {
        return {
            carItems: [],
        };
    }, getters: {
        getCarItems: (state) => {

            if (state.carItems.length == 0 || localStorage.getItem('carItems')) {
                const carItems = localStorage.getItem('carItems');
                if (carItems) {
                    return JSON.parse(carItems);
                }
                return [];
            }
            return state.carItems;

        },

    },
    actions: {
        addCarItem(item) {
            try {
                this.carItems=JSON.parse(localStorage.getItem('carItems'));
                this.carItems.push(item);
                if (localStorage.getItem('carItems')) {
                    localStorage.removeItem('carItems');
                }
                localStorage.setItem('carItems', JSON.stringify(this.carItems));
            } catch (e) {
                console.error(e);
            }
        },
        removeCarItem(item) {

            if (localStorage.getItem('carItems')) {
                let items = JSON.parse(localStorage.getItem('carItems'));
                const index = items.findIndex((i) => i.id == item.id);
                items.splice(index, 1);
                localStorage.removeItem('carItems');
                localStorage.setItem('carItems', JSON.stringify(items));
                this.carItems = items;
            } 

        }
    }
});