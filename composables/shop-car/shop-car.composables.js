import { carStore } from "../../store/car/car.store";
import { computed } from "vue";
export const useShopCar = () => {
    const store = carStore();

    const carItems = store.getCarItems;
    const carItemsPrice = computed(() => {
        return store.getCarItemsPrice;
    });
    const addCarItem = (item) => {
        store.addCarItem(item);
    };
    const removeCarItem = (item) => {
        store.removeCarItem(item);
    };
    return {
        carItems,
        carItemsPrice,
        addCarItem,
        removeCarItem
    };
};