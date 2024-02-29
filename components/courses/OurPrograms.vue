<template>
  <section class="our-programs-section" id="programs-list" >
    <div class="section-title mt-5">
      <h2>Nuestros programas</h2>
      <div class="section-decorator" style="left:4.3em;width: 90%;"></div>
    </div>
    <h3 style="width: 90%;text-align: center;"> 
      Descubre nuestros programas exclusivos: ¡paquetes de cursos diseñados para
      potenciar tus habilidades!
    </h3>
    <div class="programs-container">
      <courses-program-item
        v-for="program in programs.programsList"
        :key="program.id"
        :program="program"
      />
    </div>
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import programsData from "/src/data/programs.json";
export default defineComponent({
  setup() {
    const programs = ref(programsData);
    return {
      programs,
    };
  },
});
</script>
