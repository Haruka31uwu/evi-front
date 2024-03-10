<template>
  <section class="d-flex flex-column align-items-center justify-content-center ">
    <div class="section-title mt-5">
      <h2>Recursos</h2>
      <div class="section-decorator" style="left: 1.5em"></div>
    </div>
    <div class="row mt-3" style="width: 70%">
      <div
        class="col col-12 col-lg-12 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="btn-blue my-3"
          style="width: 60%"
          :class="tabSelected == 1 ? 'btn-blue' : 'btn-gray-outline'"
          @click="tabSelected = 1"
        >
          <span>Infografías</span>
        </div>
      </div>
      <!-- <div
        class="col col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center"
      >
       <div
          :class="tabSelected == 2 ? 'btn-blue' : 'btn-gray-outline'"
          style="width: 60%"
          @click="tabSelected = 2"
        >
          <span>Novedades</span>
        </div> 
      </div> -->
    </div>
    <!-- <lazy-resources-carousel style="width:100%" v-if="tabSelected==1" />
    <lazy-resources-carousel style="width:100%" v-if="tabSelected==2"/> -->
    <div class="" style="width: 95%">
      <Carousel
        :value="tabSelected == 1 ? infografias : novedades"
        :numVisible="2"
        :numScroll="1"
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
            <div class="mb-3 " style="width:90%!important;height: 600px;">
              <div class="relative mx-auto p-carousel-content w-100">
                <div class="p-carousel-body text-start w-100" style="overflow: hidden!important;max-height:600px">
                  <img
                    @click="showImage(slotProps.data.img)"
                    :src="slotProps.data.img"
                    alt="x"
                    style="height:1400px!important; border-radius: 1rem;background-size: cover;"
                    
                    class="mb-3"/>
                  <!-- <span>{{ slotProps.data.description }}</span> -->
                </div>
                <div
                  class="p-carousel-footer d-flex flex-column gap-1 mt-5"
                  style="align-self: flex-start"
                >
                  <span
                    style="text-align: start !important"
                    >{{slotProps.data.title}}</span
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
    <CommonsImageViewer
      :imgSrc="imageSrc"
      v-if="showImageViewer"
      @closeModal="showImageViewer = false">
      <template #title>
        <h3>Infografías</h3>
        </template>
      <template #options>
        <div
          @click="downloadImage(imageSrc)"
          class="btn-blue"
          style="position: sticky;bottom: 0;"        >
        <span>Descargar</span>
        </div>
        </template> 
      </CommonsImageViewer>
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const downloadImage = (src) => {
      const link = document.createElement("a");
      link.href = src;
      link.download = "infografías";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    const showImageViewer = ref(false);
    const imageSrc = ref("");
    const showImage = (src) => {
      imageSrc.value = src;
      showImageViewer.value = true;
    };
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
        img: "/assets/img/resources/infografias/infografia1.png",
        title: "Cómo redactar un artículo científico",
        description:
          "Descubre los pasos para poder redactar adecuadamente un artículo científico",
        date: "Marzo 09, 2024",
      },
      {
        img: "/assets/img/resources/infografias/infografia2.png",
        title: "Servicios de salud mental durante la pandemia por COVID-19",
        description:
          "Te contamos cuáles fueron las características de las atenciones brindadas por servicios de salud mental durante la pandemia por COVID-19",
          date: "Marzo 09, 2024",
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
      showImageViewer,
      imageSrc,
      showImage,
      downloadImage,
    };
  },
});
</script>
