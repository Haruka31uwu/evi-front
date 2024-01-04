<template>
  <section class="experiencies-section">
    <div class="section-title">
      <div class="section-decorator"></div>
    </div>
    <div class="experiences-container">
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
          <img :src="experience.img" alt="" style="height:220px;width:100%;border-radius:1em" />
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
    </div>
  </section>
</template>
  <script setup>
let experiencesContainer = ref(null);
let scrollPosition = ref(0);
const moveToLeft = () => {
  if (scrollPosition == 0) return;
  experiencesContainer = document.querySelector(".experiences-container2");
  experiencesContainer.scrollLeft -=  (experiencesContainer.scrollWidth/experiencies.value.length);
  scrollPosition.value = experiencesContainer.scrollLeft;
};
const moveToRight = () => {
  if (scrollPosition == experiencesContainer.scrollWidth) return;
  experiencesContainer.scrollLeft += (experiencesContainer.scrollWidth/experiencies.value.length)
  scrollPosition.value = experiencesContainer.scrollLeft;
};
onMounted(() => {
  experiencesContainer = document.querySelector(".experiences-container2");
  const resizeObserver = new ResizeObserver(moveToRight);
  resizeObserver.observe(experiencesContainer);
});
const getActualScrollPosition = () => {
  experiencesContainer = document.querySelector(".experiences-container2");
  return experiencesContainer.scrollLeft;
};
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