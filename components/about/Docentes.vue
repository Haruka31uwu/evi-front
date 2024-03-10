<template>
  <section style="background: #13131A!important;">
    <div
      class="section-title d-flex flex-column justify-content-center align-items-center"
      id="docentes-title"
    >
      <div style="position: relative">
        <h3  style="z-index: 3;position: relative;">Plana Docente</h3>
        <img
          src="/assets/img/courses/docentes-item.svg"
          style="bottom: 0.5em; left:3.5rem; position: absolute;width:85%;z-index: 1;"
          alt="docentes-item"
        />
      </div>
      <input
        type="text"
        style="position: absolute; right: 2em; top: 5em;"
        :style="currentWindowWidth<768?'width:90%':''"
        v-model="inputDoctor"
        class="search-input"
        placeholder="Buscar docente"
      />
    </div>
    <div class="section-items pt-5">
      <about-docente-item
        v-for="(docente,index) in docentes.filter((docente) =>
          docente.name.toLowerCase().includes(inputDoctor.toLowerCase())
        )"
        :key="docente.id"
        :docente="docente"
        :index="index + 1"
      />
    </div>
  </section>
</template>
  <script>
import { onBeforeMount, ref } from "vue";
import { getAllDocentes } from "/composables/docentes-composables.js";

export default {
  setup() {

    let currentWindowWidth = ref(null);
    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });
    const inputDoctor = ref("");
    const docentes = ref([]);
   
    onBeforeMount(async () => {
      try {
        docentes.value = getAllDocentes();
      } catch (error) {
        console.error(error);
      }
    });

    return {
      docentes,
      inputDoctor,
      currentWindowWidth,
    };
  },
};
</script>
  
  <style scoped>
  span,h1,h2,h3,h4,p{
  font-family: Axiforma;

  }
  h3{
    font-size: 26px;
  }
section {
  background: var(--EVI-DARK-005, #1c1c24);
  box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.2);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 2em 0;
}

img {
  margin-top: -2.2em;
}
.section-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
  margin-top: 2em;
  height: auto;
}
</style>