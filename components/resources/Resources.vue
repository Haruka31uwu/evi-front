<template>
  <section class="d-flex flex-column align-items-center justify-content-center">
    <div class="section-title">
      <h2>Recursos</h2>
      <div class="section-decorator" style="left: 1.5em;"></div>
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
          <span >Infografias</span>
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
    <lazy-resources-carousel style="width:100%" v-if="tabSelected==1" />
    <lazy-resources-carousel style="width:100%" v-if="tabSelected==2"/>

  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const tabSelected = ref(1);
    return {
      tabSelected,
    };
  },
});
</script>
