<template>
    <div>
        <programs-program-hero :programInfo="programData"/>
        <programs-program-description :programInfo="programData"/>
        <courses-course-metodology />
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getProgram } from "/composables/courses-composables.js";
export default {
  setup() {
    const programId = ref(null);
    const programData = reactive({});
    const route = useRoute();

    onMounted(() => {
      const params = route.params;
      if (params.programId) {
        programId.value = params.programId;
        programData.value = getProgram(programId.value);
      }
    });

    return { programId, programData };
  },
};
</script>
