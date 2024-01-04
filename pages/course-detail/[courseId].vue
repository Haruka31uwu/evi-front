<template>
  <div>
    <courses-course-hero :courseInfo="courseData" />
    <courses-courses-details-course-description :courseInfo="courseData" />
    <courses-course-metodology />
    <courses-courses-details-docentes  v-if="docenteIds.length>0" :docenteIds="docenteIds"/>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCourse } from "/composables/courses-composables.js";
export default {
  setup() {
    const courseId = ref(null);
    const courseData = reactive({});
    const route = useRoute();
    const docenteIds=ref([]);
    onMounted(() => {
      const params = route.params;

      if (params.courseId) {
        courseId.value = params.courseId;
        courseData.value = getCourse(courseId.value);
        courseData.value.docentes.forEach((docente) => {
          docenteIds.value.push(docente.id);
        });
      }
    });

    return { courseId, courseData,docenteIds };
  },
};
</script>

