<template>
  <section class="d-flex flex-column align-items-center justify-content-center">
    <div class="section-title">
      <h2>Recursos</h2>
      <div class="section-decorator" style="left: 1.5em"></div>
    </div>
    <div class="row mt-3" style="width: 70%">
      <div
        class="col col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="btn-blue my-3"
          style="width: 60%"
          :class="tabSelected == 1 ? 'btn-blue' : 'btn-gray-outline'"
          @click="tabSelected = 1"
        >
          <span>Infografias</span>
        </div>
      </div>
      <div
        class="col col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          :class="tabSelected == 2 ? 'btn-blue' : 'btn-gray-outline'"
          style="width: 60%"
          @click="tabSelected = 2"
        >
          <span>Novedades</span>
        </div>
      </div>
    </div>
    <!-- <lazy-resources-carousel style="width:100%" v-if="tabSelected==1" />
    <lazy-resources-carousel style="width:100%" v-if="tabSelected==2"/> -->
    <div class="" style="width: 95%">
      <Carousel
        :value="tabSelected == 1 ? infografias : novedades"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        class="carousel-without-pages"
        @touchstart="touchStartEvent"
        @touchmove="touchMoveEvent"

      >
        <template #item="slotProps">
          <div
            class="border-1 surface-border border-round m-4 p-carousel-container py-4 px-0"
            style="height: auto;"
          >
            <div class="mb-3 h-100" style="width:90%!important;">
              <div class="relative mx-auto p-carousel-content w-100">
                <div class="p-carousel-body text-start w-100">
                  <img
                    :src="slotProps.data.img"
                    alt="x"
                    style="width:100%; height:auto; border-radius: 1rem;background-size: cover;height: 300px;"
                    
                    class="mb-3"/>
                  <!-- <span>{{ slotProps.data.description }}</span> -->
                </div>
                <div
                  class="p-carousel-footer d-flex flex-column gap-1"
                  style="align-self: flex-start"
                >
                  <span
                    style="text-align: start !important"
                    >Medicina al Dia</span
                  >
                  <span
                    style="text-align: start !important;color: white;"
                    >{{ slotProps.data.description }}</span>
                    <span
                    style="text-align: start;"
                    >{{ slotProps.data.date }}</span>
                  <!-- <span style="text-align: start!important;">{{slotProps.data.date}}</span> -->
                </div>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const tabSelected = ref(1);
    const responsiveOptions = ref([
      {
        breakpoint: "1400px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "1199px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "850px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "575px",
        numVisible: 1,
        numScroll: 1,
      },
    ]);
    const infografias = reactive([
      {
        img: "/assets/img/resources/blog1.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog2.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog3.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog1.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog2.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog3.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog1.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog2.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog3.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
    ]);
    const novedades = reactive([
      {
        img: "/assets/img/resources/blog1.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog2.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog3.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog1.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog2.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog3.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog1.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog2.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      {
        img: "/assets/img/resources/blog3.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
    ]);
    const lastTouchY=ref(0);
    const lastTouchX=ref(0);
    const initialScrollY=ref(0);
    const initialScrollX=ref(0);
    const lastTouchMoveTime=ref(0);
    const touchStartEvent = (e) => {
      lastTouchY.value = e.touches[0].clientY;
      lastTouchX.value = e.touches[0].clientX;
      initialScrollY.value = window.scrollY;
      initialScrollX.value = window.scrollX;
      lastTouchMoveTime.value = new Date().getTime();
    };
    const touchMoveEvent = (event) => {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTouchMoveTime.value;

      if (timeDiff < 100) { // Solo ajusta si ha pasado menos de 100 ms desde el último evento de touchmove
        const deltaY = event.touches[0].clientY - lastTouchY.value;
        const deltaX = event.touches[0].clientX - lastTouchX.value;
        const velocityY = Math.abs(deltaY / timeDiff);
        const velocityX = Math.abs(deltaX / timeDiff);

        // Si la velocidad vertical es mayor que la horizontal, y el movimiento vertical es más significativo, ajusta la precisión
        if (velocityY > velocityX && Math.abs(deltaY) > Math.abs(deltaX)) {
          // Si la velocidad es baja, ajusta la precisión
          if (velocityY < 0.5) {
            event.preventDefault();
            const scrollDelta = deltaY * 100;
            window.scrollTo(0, initialScrollY.value - scrollDelta);
          }
        }
      }

      lastTouchMoveTime.value = currentTime;
      lastTouchY.value = event.touches[0].clientY;
      lastTouchX.value = event.touches[0].clientX;
    };
    return {
      tabSelected,
      responsiveOptions,
      infografias,
      novedades,
      touchStartEvent,
      touchMoveEvent,
    };
  },
});
</script>
