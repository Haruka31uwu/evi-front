<template>
  <div
    class="d-flex flex-row gap-1 align-items-center cart-div"
    @click="openCarSideBar"
  >
    <span v-if="getCarTotal > 0"> S/.{{ getCarTotal }} </span>
    <svg
      class="car-icon"
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3171 16.1636C21.7341 16.5733 21.9674 17.1071 21.9674 17.695C21.9674 18.8647 21.0186 19.818 19.8537 19.818C18.6917 19.818 17.7404 18.8625 17.7404 17.695C17.7404 17.0935 18.0079 16.5012 18.454 16.1047L11.454 15.9604C12.0154 16.3584 12.3496 17.0024 12.3496 17.695C12.3496 18.8647 11.4008 19.818 10.2359 19.818C9.07394 19.818 8.12262 18.8625 8.12262 17.695C8.12262 16.9767 8.49513 16.2976 9.08961 15.9114L5.99875 15.8477L6.91762 12.2533L3.53918 1.76093H0V0H4.80906L5.33502 1.63463H23.9017C24.9911 1.63463 25.7289 2.60736 25.5696 3.66318L24.4841 10.7651C24.3631 11.5581 23.667 12.3954 22.5702 12.414L8.72694 12.168L8.2378 14.1391L23.6753 14.4576L23.6414 16.2116L21.3171 16.1636ZM23.8379 3.39557H6.2076L8.46597 10.4086L22.5837 10.6597C22.6832 10.641 22.7419 10.5678 22.7517 10.5037L23.8372 3.40179L23.8379 3.39557ZM10.2359 17.3333C10.0344 17.3333 9.87581 17.4929 9.87581 17.695C9.87581 17.9 10.0322 18.0571 10.2359 18.0571C10.4371 18.0571 10.5964 17.8975 10.5964 17.695C10.5964 17.4955 10.4349 17.3333 10.2359 17.3333ZM19.8537 17.3333C19.6521 17.3333 19.4936 17.4929 19.4936 17.695C19.4936 17.9 19.6499 18.0571 19.8537 18.0571C20.0549 18.0571 20.2142 17.8975 20.2142 17.695C20.2142 17.4955 20.0527 17.3333 19.8537 17.3333Z"
        fill="white"
      />
    </svg>
    <span v-if="currentWindowWidth < 880">Carrito de Compras</span>
  </div>
</template>
<script>
import { carStore } from "../../store/car/car.store";
export default {
  emits: ["openCarSideBar"],

  setup(props, ctx) {
    const store = carStore();
    const cartItems = computed(() => store.getCarItems);
    let currentWindowWidth = ref(null);
    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });
    const openCarSideBar = () => {
      ctx.emit("openCarSideBar");
    };
    const getCarTotal = computed(() => {
      // Access the value of cartItems.value to calculate total
      const items = cartItems.value;
      if (!items || items.length === 0) {
        return 0;
      }
      return items.reduce((acc, item) => acc + item.pricePen, 0);
    });

    return {
      getCarTotal,
      openCarSideBar,
      currentWindowWidth,
    };
  },
};
</script>
<style lang="scss" scoped>
.cart-div {
  span{
    font-family: Axiforma;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8em;
  }
  &:hover {
    color:#0393aa;
    .car-icon {
      cursor: pointer;
        path {
          fill: #0393aa;
        }
    }
  }
}
</style>