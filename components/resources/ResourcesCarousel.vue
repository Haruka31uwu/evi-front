<template>
  <section class="experiencies-section">
    <div class="section-title">
      <div class="section-decorator"></div>
    </div>
    <div class="" style="width: 90%;">
      <Carousel
        :value="experiencies"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="border-1 surface-border border-round m-4 p-carousel-container">
            <div class="mb-3 h-100">
              <div class="relative mx-auto p-carousel-content">
                <div class="p-carousel-body text-start">
                  <span class="p-carousel-body__title">Medicina al dia</span>
                  <span>{{ slotProps.data.description }}</span>

                </div>
                <div class="p-carousel-footer d-flex flex-row gap-1" style="align-self: flex-start;">
                  <span style="text-align: start!important;" class="p-carousel-footer__link">Leer articulo completo</span>
                  <!-- <span style="text-align: start!important;">{{slotProps.data.date}}</span> -->
                </div>
              </div>
            </div>

          </div>
        </template>
      </Carousel>
    </div>
    <!-- <div class="experiences-container">
      <svg
        @click="moveToLeft"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="39"
        viewBox="0 0 21 39"
        fill="none"
        :opacity="scrollPosition == 0 ? 0 : 1"
      >
        <path
          d="M19 2L2 19.5L19 37"
          stroke="#00A9C3"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div
        class="experiences-container2 d-flex gap-4 mx-auto"
        style="overflow-x: hidden; overflow-y: hidden; width: 80%"
      >
        <div
          v-for="(experience, index) in experiencies"
          :key="`experience-${index}`"
          class="experience-container"
          style="height:auto;padding:1em"
        >
          <img :src="experience.img" alt="experience" style="height:220px;width:100%;border-radius:1em" />
          <div class="blog-item">
            <span class="blog-title" style="color:#00A9C3"></span>
            <p style="margin:0;text-align:start">{{ experience.description }}</p>
            <span style="font-style:italic;color:#00A9C3">
              {{ experience.date }}
            </span>
          </div>
        </div>
      </div>

      <svg
        @click="moveToRight"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="39"
        viewBox="0 0 21 39"
        fill="none"
      >
        <path
          d="M2 37L19 19.5L2 2"
          stroke="#00A9C3"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div> -->
  </section>
</template>
<script setup>
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
const experiencies = ref([
  {
    img: "/assets/img/resources/blog2.jpg",
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
    img: "/assets/img/resources/blog2.jpg",
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
    img: "/assets/img/resources/blog2.jpg",
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
    img: "/assets/img/resources/blog2.jpg",
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
    img: "/assets/img/resources/blog2.jpg",
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
    img: "/assets/img/resources/blog2.jpg",
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
]);
</script>
<style lang="scss" scoped>



</style>